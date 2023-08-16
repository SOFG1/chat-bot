import React, { useState } from "react";
import s from "./MessageFormComponent.module.scss";
import sendIcon from "../../assets/images/send-icon.png";
import TextArea from "../../UI/TextArea/TextArea";

const MessageFormComponent = React.memo(() => {
    const [text, setText] = useState<string>("");
    return (
        <div className={s.form}>
            <TextArea
                value={text}
                onChange={setText}
                placeholder="Start typing here..."
                className={s.textarea}
            />
            <button className={s.button}>
                <img src={sendIcon} alt="send icon" />
            </button>
        </div>
    );
});

export default MessageFormComponent;
