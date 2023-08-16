import React from "react";
import s from "./ChatView.module.scss";
import avatarImg from "../../assets/images/avatar.png";
import MessageComponent from "../../components/MessageComponent/MessageComponent";
import MessageFormComponent from "../../components/MessageFormComponent/MessageFormComponent";

const ChatView = React.memo(() => {
    return (
        <>
            <div className={s.list}>
                <MessageComponent
                    avatar={avatarImg}
                    text="Hello! I’m BotHub, AI-based bot designed to answer all your questions."
                    sent={false}
                />
                <MessageComponent
                    avatar={avatarImg}
                    text="Hello. help me to solve my math test"
                    sent={true}
                />
                <MessageComponent
                    avatar={avatarImg}
                    text="Alright. Send me tasks"
                    sent={false}
                />
                <MessageComponent
                    avatar={avatarImg}
                    text="First task is following: Lucy has measuring cups of sizes 1 cup, 1/5 cup, 1/3 cup, and 1/4 cup. She is trying to measure out 1/6 of a cup of water and says, ''If I fill up the the 1/2 cup and then pour that into the 1/3 cup until it is full, there will be 1/6 of a cup of water left.'"
                    sent={true}
                />
                <MessageComponent
                    avatar={avatarImg}
                    text="I guess you can solve it by yourself!"
                    sent={false}
                />
            </div>
            <MessageFormComponent />
        </>
    );
});

export default ChatView;
