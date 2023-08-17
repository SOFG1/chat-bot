import React, { useCallback, useEffect, useRef, useState } from "react";
import s from "./ChatView.module.scss";
import avatarImg from "../../assets/images/avatar.png";
import MessageComponent from "../../components/MessageComponent/MessageComponent";
import MessageFormComponent from "../../components/MessageFormComponent/MessageFormComponent";
import { Chat } from "../../api/chat";
import { IMessage } from "../../types";





const initial = {
    1: { text: "Hello! I’m BotHub, AI-based bot designed to answer all your questions.", sent: false },
}





const ChatView = React.memo(() => {
    const listRef = useRef<HTMLDivElement>(null)
    const [messages, setMessages] = useState<{ [key: string]: IMessage }>(initial)



    const handleSend = useCallback(async (text: string) => {
        const formated = text.replace(/(?:\r\n|\r|\n)/g, "")
        if(!formated) return
        //Add sent message
        const sentMessageOrder = Object.keys(messages).length + 1
        setMessages(p => ({ ...p, [sentMessageOrder]: { text, sent: true } }))
        const res = await Chat.sendMessageStream(formated)
        if (res.body) {
            const reader = res.body.getReader()
            const receivedMessageOrder = sentMessageOrder + 1
            setMessages(p => ({ ...p, [receivedMessageOrder]: { text: reader, sent: false } }))
        }
    }, [messages])


    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [listRef.current, messages])


    return (
        <>
            <div className={s.list} ref={listRef}>
                {Object.keys(messages).map((key, index) => {
                    return <MessageComponent
                        key={index}
                        avatar={avatarImg}
                        message={messages[key].text}
                        sent={messages[key].sent}
                    />
                })}
            </div>
            <MessageFormComponent onSend={handleSend} />
        </>
    );
});

export default ChatView;
