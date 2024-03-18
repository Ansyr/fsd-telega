import {createEffect} from "effector";
import {client} from "@/shared/api/client.ts";
import {TELEGRAM_API_HASH, TELEGRAM_API_ID} from "@/shared/config";
import {Api} from "telegram";

export type PhoneNumber = string


export const SendCodeFx = createEffect<PhoneNumber, {phoneCodeHash: string}, Error>(async (phoneNumber) => {
    await client.connect()
    const res = await client.sendCode({
            apiId: TELEGRAM_API_ID,
            apiHash: TELEGRAM_API_HASH
        },
        phoneNumber
    )

    return res
})

export const SignInByPhoneNumberFx = createEffect<{
    phoneNumber: string,
    phoneCodeHash: string,
    phoneCode: string
}, void, Error>(async ({phoneNumber, phoneCodeHash, phoneCode}) => {
    await client.connect()
    const res = await client.invoke(
        new Api.auth.SignIn({
            phoneNumber,
            phoneCodeHash,
            phoneCode
        })
    )
    console.log(res)
})
