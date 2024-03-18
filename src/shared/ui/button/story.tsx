import { StoryObj } from "@storybook/react";
import { Button } from "@/shared/ui/button";

const meta = {
	title: "Shared/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		children: "Button",
	},
};
