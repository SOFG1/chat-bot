import React from "react"
import s from "./ChatPage.module.scss"
import ChatView from "../../views/ChatView/ChatView"


const ChatPage = React.memo(() => {
    return <div className={s.page}>
        <h1 className={s.title}>Bot Chat</h1>
        <p className={s.subtitle}>AI-based service</p>
        <ChatView />
    </div>
})

export default ChatPage