import './MessageWindow.css';
import Typewriter from 'typewriter-effect';
import Message from '../Message/Message';
import {plot} from '../../plot';
import { useState } from 'react';

interface MessageWindow {
    isTalkingAnimation: boolean,
    setIsTalkingAnimation:React.Dispatch<React.SetStateAction<boolean>>,
    dialogueCount:number,
    setDialogueCount: React.Dispatch<React.SetStateAction<number>>,
    currentReply: string,
    setCurrentReply: React.Dispatch<React.SetStateAction<string>>,
    isChatLifted: boolean;
}

export default function MessageWindow(props: MessageWindow){

    const [answerButtShown, setAnswerButtShown] = useState(true);


    async function proposeAnswer(answer: any): Promise<void> {
        setAnswerButtShown(false);
        await setTimeout(()=>{
            props.setCurrentReply(answer.text);
        }, 500);
        if (props.dialogueCount > 27 && plot[props.dialogueCount].answers.length > 0){
            if (answer.correct){
                props.setDialogueCount(props.dialogueCount+1);
            } else {
                props.setDialogueCount(28);
            }
        }
    }

    function continueDialogue(){
        props.setDialogueCount(props.dialogueCount + 1);
    }

    return(
        <div className={props.isChatLifted ? 'message-window message-window_lifted': 'message-window'}>
            <Message setIsTalkingAnimation={props.setIsTalkingAnimation} dialogueCount={props.dialogueCount} setAnswerButtShown={setAnswerButtShown}/>
            {(props.currentReply && !props.isChatLifted) &&
                <Typewriter
                    options={{wrapperClassName:'message-window__user-reply', cursor:'', delay:1}}
                    onInit={(typewriter) => {
                        typewriter
                        .pasteString('You: ', null)
                        .typeString(props.currentReply)
                        .callFunction(() => {
                            setAnswerButtShown(true);
                            continueDialogue()

                        })
                        .start()
                    }}
                />
            }
            {(!props.isTalkingAnimation && plot[props.dialogueCount].answers.length == 0) && <p className='message-window__continue'>{"Press <space> to continue"}</p>}
            <div 
                className={plot[props.dialogueCount].answers.length > 0  && answerButtShown
                    ? (props.isChatLifted ?'message-window__answers message-window__answers_lifted': 'message-window__answers') 
                    : (props.isChatLifted ?'message-window__answers message-window__answers_lifted-hidden' : 'message-window__answers  message-window__answers_hidden')
                }
            >
              {plot[props.dialogueCount].answers.map((answer, i) => {
                return <button className='message-window__answer' key={i} onClick={() => proposeAnswer(answer)} type='button'>{answer.text}</button>
            })}  
            </div>
            
        </div>
    )
}