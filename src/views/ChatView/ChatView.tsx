import React, { useCallback, useEffect, useRef, useState } from "react";
import s from "./ChatView.module.scss";
import avatarImg from "../../assets/images/avatar.png";
import MessageComponent from "../../components/MessageComponent/MessageComponent";
import MessageFormComponent from "../../components/MessageFormComponent/MessageFormComponent";

const initial = [
    { text: "Hello! I’m BotHub, AI-based bot designed to answer all your questions.", sent: false },
    { text: "Hello. help me to solve my math test", sent: true },
    { text: "Alright. Send me tasks", sent: false },
    { text: "First task is following: Lucy has measuring cups of sizes 1 cup, 1/5 cup, 1/3 cup, and 1/4 cup. She is trying to measure out 1/6 of a cup of water and says, ''If I fill up the the 1/2 cup and then pour that into the 1/3 cup until it is full, there will be 1/6 of a cup of water left.", sent: true },
    { text: "I guess you can solve it by yourself!", sent: false },
]

const ChatView = React.memo(() => {
    const listRef = useRef<HTMLDivElement>(null)
    const [messages, setMessages] = useState<{ text: string, sent: boolean }[]>(initial)

    const handleSend = useCallback((text: string) => {
        setMessages(p => ([...p, { text, sent: true }]))
    }, [])


    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [listRef.current, messages])


    return (
        <>
            <div className={s.list} ref={listRef}>
                {messages.map((m, index) => {
                    return <MessageComponent
                        key={index}
                        avatar={avatarImg}
                        text={m.text}
                        sent={m.sent}
                    />
                })}
            </div>
            <MessageFormComponent onSend={handleSend} />
        </>
    );
});

export default ChatView;
