import {attach, createEvent, createStore, sample} from "effector";
import {api} from "@/shared/api";



export enum VIEW {
    INITIAL,
    CONFIRMATION,
}
export const $view = createStore(VIEW.INITIAL)
export const sendCodeFx = attach({effect: api.auth.SendCodeFx})
export const $hashPhoneCode = createStore("")


export const $phone = createStore("")
export const $confirmCode = createStore(false)
export const $sendCodePending = sendCodeFx.pending
export const phoneChanged = createEvent<string>()
export const formSubmitted = createEvent()


sample({
    clock: phoneChanged,
    target: $phone
})

sample({
    clock: formSubmitted,
    source: $phone,
    fn: (phone) => phone,
    target: sendCodeFx
})


sample({
    clock: sendCodeFx.doneData,
    fn: ({phoneCodeHash}) => phoneCodeHash,
    target: $hashPhoneCode
})

sample({
    clock: sendCodeFx.done,
    fn: () => VIEW.CONFIRMATION,
    target: $view
})



