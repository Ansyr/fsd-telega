import {TelegramClient} from "telegram";
import {StringSession} from "telegram/sessions";
import {TELEGRAM_API_ID, TELEGRAM_API_HASH,} from "@/shared/config";


const session = new StringSession("")

export const client = new TelegramClient(session, TELEGRAM_API_ID, TELEGRAM_API_HASH,{
    connectionRetries: 5
});
