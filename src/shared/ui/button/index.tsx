import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "@/shared/ui/spinner";

type ButtonVariants = "contained" | "outlined" | "text";
type ButtonSizes = "small" | "medium";
type ButtonThemes = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	size?: ButtonSizes;
	theme?: ButtonThemes;
	className?: string;
	loading?: boolean;
	children: ReactNode;
}

const classNames = cva(
	"px-4 py-2 rounded flex gap-2 items-center justify-center",
	{
		variants: {
			variant: {
				contained: "",
				outlined: "",
				text: "",
			},
			size: {
				small: "",
				medium: "",
			},
			theme: {
				primary: "hover:bg-primary-shade/20 text-primary-primaryText transition-all",
				secondary: "",
			},
		},
	}
);
export const Button = (props: ButtonProps) => {
	const {
		children,
		variant = "outlined",
		size = "medium",
		className,
		theme = "primary",
		loading = false,
		...rest
	} = props;
	return (
		<button
			className={classNames({ variant, size, theme, className })}
			{...rest}
		>
			{loading ? <Spinner /> : children}
		</button>
	);
};
