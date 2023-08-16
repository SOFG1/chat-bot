import React, { useState, useCallback, useId } from "react";
import s from "./MessageFormComponent.module.scss";
import sendIcon from "../../assets/images/send-icon.png";
import TextArea from "../../UI/TextArea/TextArea";

interface IProps {
    onSend: (v: string) => void
}

const MessageFormComponent = React.memo(({ onSend }: IProps) => {
    const id = useId()
    const [text, setText] = useState<string>("");

    const handleSend = useCallback(() => {
        onSend(text)
        setText("")
    }, [text])


    return (
        <div className={s.form} id={id}>
            <TextArea
                value={text}
                onChange={setText}
                onEnterPress={handleSend}
                placeholder="Start typing here..."
                className={s.textarea}
            />
            <button className={s.button} onClick={handleSend} disabled={!text}>
                <img src={sendIcon} alt="send icon" />
            </button>
        </div>
    );
});

export default MessageFormComponent;
