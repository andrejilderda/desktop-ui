import styles from "./dialog.module.css";
import buttonStyles from "./../button/button.module.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";

type DialogArgs = { size: "standard" | "min" | "max" };

const meta: Meta<DialogArgs> = {
  title: "Dialog",
  tags: ["autodocs"],
  argTypes: {
    size: { control: "inline-radio", options: ["min", "standard", "max"] },
  },
  decorators: [
    // add a min-height to the story to prevent the dialog from being cut off
    (story) => html` <div style="min-height: 300px">${story()}</div>`,
  ],
  render: ({ size = "standard" }) =>
    html`
      <div class="dialog">
        <div class="${styles.dialog__overlay}" data-state="open">
          <div
            class="${styles.dialog__content}"
            data-size="${size}"
            tabindex="-1"
            data-state="open"
          >
            <h2 class="${styles.dialog__title}">Title</h2>
            <p class="${styles.dialog__description}">
              This is body text. Windows 11 marks a visual evolution of the
              operating system. We have evolved our design language alongside
              with Fluent to create a design which is human, universal and truly
              feels like Windows. The design principles below have guided us
              throughout the journey of making Windows the best-in-class
              implementation of Fluent.
            </p>
            <div class="${styles.dialog__footer}">
              <button class="${buttonStyles.button} ${buttonStyles.accent}">
                Confirm
              </button>
              <button class="${buttonStyles.button}">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    `,
};

export default meta;
type Story = StoryObj<DialogArgs>;

export const Default: Story = {
  args: { size: "standard" },
};
