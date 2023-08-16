import React from "react"
import s from "./MessageComponent.module.scss"


interface IProps {
    avatar: string
    text: string
    sent: boolean
}

const MessageComponent = React.memo(({ avatar, text, sent }: IProps) => {
    return <div className={`${s.message} ${sent ? s.message_sent : ""}`}>
        <img src={avatar} alt="avatar" className={s.avatar} />
        <p className={`${s.text} ${sent ? s.text_sent : ""}`}>{text}</p>
    </div>
})

export default MessageComponent