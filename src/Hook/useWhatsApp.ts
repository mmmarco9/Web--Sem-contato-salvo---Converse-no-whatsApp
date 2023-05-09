import { useEffect, useState } from "react";
import { singletonHook } from 'react-singleton-hook';
import { Chat } from "@/Types/Chat";
import { useWapiService } from "./useWapiService";

const init = {
    activeChat: undefined as Chat | undefined,
}

function useWhatsAppImpl() {
    const [activeChat, setActiveChat] = useState<Chat | undefined>(init.activeChat);
    const { wapiService } = useWapiService()

    useEffect(() => {
        if (!wapiService) return

        const interval = setInterval(() => {
            wapiService.getActiveChat()
                .then((chat) => {
                    setActiveChat((prev) => {
                        if (prev?.id === chat?.id) return prev
                        return chat
                    })

                })
                .catch((err) => {
                    if (activeChat) setActiveChat(undefined);
                });

        }, 1500);

        return () => clearInterval(interval);
    }, [wapiService]);

    return { activeChat }
}

export const useWhatsApp = singletonHook(init, useWhatsAppImpl);