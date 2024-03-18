import type { Preview } from "@storybook/react";
import "@/app/styles/tailwind.css";
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "dark",
			values: [
				{
					name: "dark",
					value: "#212121",
				},
			],
		},
	},
};

export default preview;