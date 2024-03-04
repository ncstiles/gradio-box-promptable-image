"""BoxPromptableImage() component."""

from __future__ import annotations

from typing import Optional, List, TypedDict, Union, Literal

import numpy as np
import gradio
from gradio.data_classes import FileData, GradioModel
from gradio_client.documentation import document, set_documentation_group
from PIL import Image as _Image  # using _ to minimize namespace pollution

set_documentation_group("component")

class PromptData(GradioModel):
    image: Optional[FileData]
    points: Optional[List[List[float]]]


class PromptValue(TypedDict):
    image: Optional[Union[np.ndarray, _Image.Image, str]]
    points: Optional[List[List[float]]]

class BoxPromptableImage(gradio.Image):
    """
    Creates an image component that can be used to upload images (as an input) or display images (as an output).

    Demos: image_mod, image_mod_default_image
    Guides: image-classification-in-pytorch, image-classification-in-tensorflow, image-classification-with-vision-transformers, create-your-own-friends-with-a-gan
    """

    data_model = PromptData

    def __init__(
        self,
        value: str | PIL.Image.Image | np.ndarray | None = None,
        *,
        height: int | str | None = None,
        width: int | str | None = None,
        image_mode: Literal[
            "1", "L", "P", "RGB", "RGBA", "CMYK", "YCbCr", "LAB", "HSV", "I", "F"
        ] = "RGB",
        sources: list[Literal["upload", "webcam", "clipboard"]] | None = None,
        type: Literal["numpy", "pil", "filepath"] = "numpy",
        label: str | None = None,
        every: float | None = None,
        show_label: bool | None = None,
        show_download_button: bool = True,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        interactive: bool | None = None,
        visible: bool = True,
        streaming: bool = False,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        mirror_webcam: bool = True,
        show_share_button: bool | None = None,
    ):
        """
        Parameters:
            value: A PIL BoxPromptableImage, numpy array, path or URL for the default value that BoxPromptableImage component is going to take. If callable, the function will be called whenever the app loads to set the initial value of the component.
            height: The height of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.
            width: The width of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.
            image_mode: "RGB" if color, or "L" if black and white. See https://pillow.readthedocs.io/en/stable/handbook/concepts.html for other supported image modes and their meaning.
            sources: List of sources for the image. "upload" creates a box where user can drop an image file, "webcam" allows user to take snapshot from their webcam, "clipboard" allows users to paste an image from the clipboard. If None, defaults to ["upload", "webcam", "clipboard"] if streaming is False, otherwise defaults to ["webcam"].
            type: The format the image is converted before being passed into the prediction function. "numpy" converts the image to a numpy array with shape (height, width, 3) and values from 0 to 255, "pil" converts the image to a PIL image object, "filepath" passes a str path to a temporary file containing the image. If the image is SVG, the `type` is ignored and the filepath of the SVG is returned.
            label: The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            show_label: if True, will display label.
            show_download_button: If True, will display button to download image.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            interactive: if True, will allow users to upload and edit an image; if False, can only be used to display images. If not provided, this is inferred based on whether the component is used as an input or output.
            visible: If False, component will be hidden.
            streaming: If True when used in a `live` interface, will automatically stream webcam feed. Only valid is source is 'webcam'.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            mirror_webcam: If True webcam will be mirrored. Default is True.
            show_share_button: If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.
        """
        super().__init__(
            value=value,
            height=height,
            width=width,
            image_mode=image_mode,
            sources=sources,
            type=type,
            label=label,
            every=every,
            show_label=show_label,
            show_download_button=show_download_button,
            container=container,
            scale=scale,
            min_width=min_width,
            interactive=interactive,
            visible=visible,
            streaming=streaming,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            mirror_webcam=mirror_webcam,
            show_share_button=show_share_button,
        )

    def preprocess(self, payload: PromptData) -> PromptValue | None:
        if payload is None:
            return payload
        im = super().preprocess(payload.image)
        return {"image": im, "points": payload.points}

    def postprocess(self, value: PromptValue) -> PromptData | None:
        if value is None:
            return None

        image, points = value.get("image", None), value.get("points", [])
        return PromptData(image=super().postprocess(image), points=points)

    def check_streamable(self):
        return super().check_streamable()


    def example_inputs(self) -> Any:
        return {
            "image": "https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png",
            "points": [[]]
        }

    def process_example(self, payload: PromptData) -> FileData | None:
        if payload is None:
            return None

        if payload.get("image") is None:
            return None

        return super().postprocess(payload.get("image"))
