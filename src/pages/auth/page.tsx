import {SignInForm} from "@/features/auth/sign-in-form";


export const SignInPage = () => {

    return (
        <div className={"min-h-screen grow flex flex-col justify-center"}>
            <div className={"max-w-[300px] self-center w-full "}>
                <SignInForm/>
            </div>
        </div>
    );
};

