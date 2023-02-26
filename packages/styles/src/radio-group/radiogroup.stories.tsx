import styles from "./radio-group.module.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";

// TODO: document class names
type RadioGroupArgs = { disabled: boolean };

const meta: Meta<RadioGroupArgs> = {
  title: "Radio group",
  tags: ["autodocs"],
  render: ({ disabled }) =>
    html`<div role="radiogroup" dir="ltr" tabindex="0" style="outline: none">
      <div class="${styles["radio-group"]}">
        <div class="${styles["radio-group__item"]}">
          <button
            class="${styles["radio-group__button"]}"
            type="button"
            data-state="checked"
            role="radio"
            value="foo"
            id="foo"
            tabindex="0"
            ?disabled=${disabled}
          >
            <span class="${styles["radio-group__indicator"]}"></span>
          </button>
          <label class="${styles["radio-group__label"]}" for="foo" role="label">
            Foo
          </label>
        </div>
        <div class="${styles["radio-group__item"]}">
          <button
            class="${styles["radio-group__button"]}"
            type="button"
            data-state="unchecked"
            role="radio"
            value="bar"
            id="bar"
            tabindex="0"
            ?disabled=${disabled}
          ></button>
          <label class="${styles["radio-group__label"]}" for="bar" role="label">
            Bar
          </label>
        </div>
        <div class="${styles["radio-group__item"]}">
          <button
            class="${styles["radio-group__button"]}"
            type="button"
            data-state="unchecked"
            role="radio"
            value="baz"
            id="baz"
            tabindex="0"
            ?disabled=${disabled}
          ></button>
          <label class="${styles["radio-group__label"]}" for="baz" role="label">
            Baz
          </label>
        </div>
      </div>
    </div>`,
};

export default meta;
type Story = StoryObj<RadioGroupArgs>;

export const Default: Story = {
  args: { disabled: false },
};

export const Disabled: Story = {
  args: { disabled: true },
};
