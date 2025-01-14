import './Chat.css';
import MessageWindow from '../MessageWindow/MessageWindow';
import Avatar from '../Avatar/Avatar';

interface Chat {
    isShakingEffect:boolean;
    isTalkingAnimation: boolean,
    setIsTalkingAnimation:React.Dispatch<React.SetStateAction<boolean>>,
    dialogueCount: number,
    setDialogueCount: React.Dispatch<React.SetStateAction<number>>,
    currentReply: string,
    setCurrentReply: React.Dispatch<React.SetStateAction<string>>,
    isChatLifted: boolean
}

export default function Chat(props: Chat){

    return(
        <div className={props.isChatLifted ? props.isShakingEffect ? 'chat chat_lifted chat_shaking' : 'chat chat_lifted': 'chat'} >
            <Avatar isTalkingAnimation={props.isTalkingAnimation} isChatLifted={props.isChatLifted}/>
            <MessageWindow
                isTalkingAnimation={props.isTalkingAnimation}
                setIsTalkingAnimation={props.setIsTalkingAnimation}
                dialogueCount={props.dialogueCount}
                setDialogueCount={props.setDialogueCount}
                currentReply={props.currentReply}
                setCurrentReply={props.setCurrentReply}
                isChatLifted={props.isChatLifted}
            />
        </div>
    )
}