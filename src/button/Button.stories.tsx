import React from "react";
import { Story, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import styles from "./Button.stories.module.css";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Component = Template.bind({});
Component.args = {
  actionStyle: "primary",
  emphasis: "bold",
  size: "medium",
  shape: "square",
  children: "Button",
};

export const ActionStyles: Story<ButtonProps> = (args) => (
  <div className={styles.docRow}>
    <Button {...args} actionStyle="primary">
      Primary
    </Button>
    <Button {...args} actionStyle="secondary">
      Secondary
    </Button>
    <Button {...args} actionStyle="info">
      Info
    </Button>
    <Button {...args} actionStyle="contrast">
      Contrast
    </Button>
    <Button {...args} actionStyle="destructive">
      Destrctive
    </Button>
  </div>
);

export const Sizes = () => (
  <div>
    <div className={styles.docRow}>
      <Button size="small" shape="square">
        Button
      </Button>
      <Button size="medium" shape="square">
        Button
      </Button>
      <Button size="large" shape="square">
        Button
      </Button>
      <Button size="x-large" shape="square">
        Button
      </Button>
    </div>

    <div className={styles.docRow}>
      <Button size="small" shape="circle">
        Button
      </Button>
      <Button size="medium" shape="circle">
        Button
      </Button>
      <Button size="large" shape="circle">
        Button
      </Button>
      <Button size="x-large" shape="circle">
        Button
      </Button>
    </div>
  </div>
);
