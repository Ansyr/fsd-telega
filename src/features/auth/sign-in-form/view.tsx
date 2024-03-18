import {FormEvent, ReactNode} from "react";
import {useUnit} from "effector-react";
import {$phone, $sendCodePending, $view, formSubmitted, phoneChanged, VIEW} from "./model.ts";
import {Button} from "@/shared/ui/button";
import {TextField} from "@/shared/ui/text-field";



const SignUpByPhone = () => {
    const [phone, pending] = useUnit([$phone, $sendCodePending])
    const [handlePhoneChanged, formSubmit] = useUnit([phoneChanged, formSubmitted])

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault()
        formSubmit()
    }

    return (
        <form className={"flex flex-col gap-2"}>
            <TextField inputProps={{
                type: "phone",
                name: "phone number",
                required: true,
                value: phone,
                onChange: (e) => {
                    handlePhoneChanged(e.target.value)
                },
            }} label={"phone number"}/>
            <Button loading={pending} onClick={handleFormSubmit}>Send code</Button>
        </form>
    );
}

const ConfirmationCode = () => {
    return (
        <form className={"flex flex-col gap-2"}>
            <TextField
                inputProps={{
                    type: "text",
                    name: "confirmation code",
                    required: true,
                }}
                label={"confirmation code"}
            />
        </form>
    )
}


const component: Record<VIEW, ReactNode> = {
    [VIEW.INITIAL]: <SignUpByPhone/>,
    [VIEW.CONFIRMATION]: <ConfirmationCode/>
}


export const SignInForm = () => {
    const [view] = useUnit([$view])

    return (
        component[view]
    )
};
