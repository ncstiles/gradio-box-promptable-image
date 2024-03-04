
import gradio as gr
from gradio_box_promptable_image import BoxPromptableImage
import cv2

YELLOW = (255, 244, 79)

examples = [{"image": "images/cat.png", "points": []}]

def get_box_inputs(prompts):
    box_inputs = []
    for prompt in prompts:
        if prompt[2] == 2.0 and prompt[5] == 3.0:
            box_inputs.append((prompt[0], prompt[1], prompt[3], prompt[4]))

    return box_inputs

def process_input(input_dict):
    img, points = input_dict['image'], input_dict['points']
    box_inputs = get_box_inputs(points)

    for box in box_inputs:
        x1, y1, x2, y2 = int(box[0]), int(box[1]), int(box[2]), int(box[3])
        cv2.rectangle(img, (x1, y1), (x2, y2), YELLOW, 2)

    return img

demo = gr.Interface(
    process_input,
    BoxPromptableImage(),
    gr.Image(),
    examples=examples,
)

if __name__ == "__main__":
    demo.launch()
