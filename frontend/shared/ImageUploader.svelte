<script lang="ts">
	import { createEventDispatcher, tick } from "svelte";
	import { BlockLabel } from "@gradio/atoms";
	import { Image as ImageIcon } from "@gradio/icons";
	import type { SelectData, I18nFormatter } from "@gradio/utils";
	import { get_coordinates_of_clicked_image } from "./utils";
	import Webcam from "./Webcam.svelte";

	import { Upload } from "@gradio/upload";
	import type { FileData } from "@gradio/client";
	import ClearImage from "./ClearImage.svelte";
	import { SelectSource } from "@gradio/atoms";
	import Image from "./Image.svelte";
	import BoxDrawer from "./BoxDrawer.svelte";

	const dispatch = createEventDispatcher<{
		change?: never;
		stream?: never;
		clear?: never;
		drag: boolean;
		upload?: never;
		select: SelectData;
	}>();

	let box_drawer: BoxDrawer;

	export let value: null | FileData;
	export let points: null | number[][6];
	export let label: string | undefined = undefined;
	export let show_label: boolean;

	type source_type = "upload" | "webcam" | "clipboard" | "microphone" | null;

	export let sources: source_type[] = ["upload", "clipboard", "webcam"];
	export let streaming = false;
	export let pending = false;
	export let mirror_webcam: boolean;
	export let selectable = false;
	export let root: string;
	export let i18n: I18nFormatter;

	let upload: Upload;
	let uploading = false;
	export let active_source: source_type = null;


	function handle_image_load(event: Event) {
		const element = event.currentTarget as HTMLImageElement;
		box_drawer.width = element.width;
		box_drawer.height = element.height;
		box_drawer.natural_width = element.naturalWidth;
		box_drawer.natural_height = element.naturalHeight;
		box_drawer.resize_canvas();
	}

	function handle_points_change({ detail }: { detail: number[][6] }) {
		points = detail;
		dispatch("points_change", detail);
	}

	function handle_upload({ detail }: CustomEvent<FileData>): void {
		value = detail;
		dispatch("upload", detail);
	}

	function handle_clear(): void {
		value = null;
		dispatch("clear");
		dispatch("change", null);
	}

	async function handle_save(img_blob: Blob | any): Promise<void> {
		pending = true;
		const f = await upload.load_files([new File([img_blob], `webcam.png`)]);

		value = f?.[0] || null;

		await tick();

		dispatch(streaming ? "stream" : "change");
		pending = false;
	}

	$: active_streaming = streaming && active_source === "webcam";
	$: if (uploading && !active_streaming) value = null;

	let dragging = false;

	$: dispatch("drag", dragging);

	function handle_click(evt: MouseEvent): void {
		let coordinates = get_coordinates_of_clicked_image(evt);
		if (coordinates) {
			dispatch("select", { index: coordinates, value: null });
		}
	}

	$: if (!active_source && sources) {
		active_source = sources[0];
	}

	async function handle_select_source(
		source: (typeof sources)[number]
	): Promise<void> {
		switch (source) {
			case "clipboard":
				upload.paste_clipboard();
				break;
			default:
				break;
		}
	}
</script>

<BlockLabel {show_label} Icon={ImageIcon} label={label || "Image"} />

<div data-testid="image" class="image-container">
	{#if value?.url && !active_streaming}
		<ClearImage
			on:remove_box={() => {
				box_drawer.undo();
			}}
			on:remove_boxes={() => {
				box_drawer.clear();
			}}
			on:remove_image={() => {
				value = null;
				dispatch("clear");
			}}
		/>
	{/if}
	<div class="upload-container">
		<Upload
			hidden={value !== null || active_source === "webcam"}
			bind:this={upload}
			bind:uploading
			bind:dragging
			filetype={active_source === "clipboard" ? "clipboard" : "image/*"}
			on:load={handle_upload}
			on:error
			{root}
			disable_click={!sources.includes("upload")}
		>
			{#if value === null}
				<slot />
			{/if}
		</Upload>
		{#if active_source === "webcam" && (streaming || (!streaming && !value))}
			<Webcam
				{root}
				on:capture={(e) => handle_save(e.detail)}
				on:stream={(e) => handle_save(e.detail)}
				on:error
				on:drag
				on:upload={(e) => handle_save(e.detail)}
				{mirror_webcam}
				{streaming}
				mode="image"
				include_audio={false}
				{i18n}
			/>
		{:else if value !== null && !streaming}
			<!-- svelte-ignore a11y-click-events-have-key-events-->
			<!-- svelte-ignore a11y-no-static-element-interactions-->
			<div class:selectable class="image-frame">
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img 
				src={value.url} 
				alt={value.alt_text}
				on:click={handle_click}
				on:load={handle_image_load} 
			/>
				<BoxDrawer
					bind:this={box_drawer}
					on:change={handle_points_change}
				/>
			</div>
		{/if}
	</div>
	{#if sources.length > 1 || sources.includes("clipboard")}
		<SelectSource
			{sources}
			bind:active_source
			{handle_clear}
			handle_select={handle_select_source}
		/>
	{/if}
</div>

<style>
	.image-frame :global(img) {
		width: var(--size-full);
		height: var(--size-full);
		object-fit: cover;
	}

	.image-frame {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.upload-container {
		height: 100%;
		flex-shrink: 1;
		max-height: 100%;
	}

	.image-container {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-height: 100%;
	}

	.selectable {
		cursor: crosshair;
	}
</style>
