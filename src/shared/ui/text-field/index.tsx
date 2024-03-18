import { InputHTMLAttributes, PropsWithRef, useId } from "react";
import { cva } from "class-variance-authority";

interface TextFieldProps {
	label?: string;
	error?: string;
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
	className?: string;
}

const classNames = cva("flex flex-col gap-1 text-slate-300 group");

export const TextField = (props: TextFieldProps) => {
	const { label, error, inputProps, className, ...rest } = props;
	const id = useId();
	return (
		<div {...rest} className={classNames({ className })}>
            {label && (
                <label
                    htmlFor={id}
                    className={"block relative top-[14px] left-[20px]"}
                >
                    <span className="dark:bg-[#212121] text-xs text-slate-300 group-hover:text-violet-500 inline-block px-2 rounded">
                        {label}
                    </span>
                </label>
            )}
			<input
				{...inputProps}
				id={id}
				className={
					"border text-slate-300 border-gray-400/70 rounded px-2 h-12 hover:text-slate-300 bg-transparent transition-all group-hover:border-violet-500 focus:outline-none"
				}
			/>
			{error && <div className={"text-rose-400 text-sm"}></div>}
		</div>
	);
};
