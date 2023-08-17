import React, { useEffect, useState, useCallback, useRef } from "react"
import s from "./MessageComponent.module.scss"
import { convertChunkToArray, fixChunkString, readStreamChunks } from "../../utils/chunksUtils"
import { delay } from "../../utils/delay"


interface IProps {
    avatar: string
    message: string | any
    sent: boolean
}


//This components receives message as string or as a reader Object
//If message is a reader object it renders the text slowly letter by letter
const MessageComponent = React.memo(({ avatar, message, sent }: IProps) => {
    const messageRef = useRef<HTMLParagraphElement>(null)
    const [text, setText] = useState<string>("")
    const [letters, setLetters] = useState<string[]>([])

    const handleChunks = useCallback(async (reader: any) => {
        await readStreamChunks(reader, (chunk) => {
            const str = fixChunkString(chunk)
            const arr = convertChunkToArray(str)
            const letters = arr.map(c => c.value).filter(l => l) as string[]
            setLetters(p => ([...p, ...letters]))
        })
    }, [])

    useEffect(() => {
        if (typeof message === "string") setText(message)
        if (typeof message !== "string") {
            handleChunks(message)
        }
    }, [message, handleChunks])


    const fillMessage = useCallback(async () => {
        if (!messageRef.current || typeof message === "string") return
        for (let i = 0; i < letters.length; i++) {
            const letter = letters[i]
            const currentText = messageRef.current.textContent
            if (currentText !== null && currentText[i] !== letter) {
                messageRef.current.textContent = currentText + letter
                await delay(80)
            }
        }
        setText(messageRef.current.textContent || "")
    }, [letters, messageRef.current, message])

    useEffect(() => {
        fillMessage()
    }, [fillMessage])

    console.log(text)

    return <div className={`${s.message} ${sent ? s.message_sent : ""}`}>
        <img src={avatar} alt="avatar" className={s.avatar} />
        <p className={`${s.text} ${sent ? s.text_sent : ""}`} ref={messageRef}>{text}</p>
    </div>
})

export default MessageComponent