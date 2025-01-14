import './Message.css';
import React from 'react';
import Typewriter from 'typewriter-effect';
import {plot} from '../../plot';

interface Message{
    setIsTalkingAnimation: React.Dispatch<React.SetStateAction<boolean>>,
    dialogueCount: number,
    setAnswerButtShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Message(props: Message){

    return (
        <>  
            <div key={props.dialogueCount}>
                <Typewriter
                    options={{wrapperClassName:'message', cursor:'', delay:1}}
                    onInit={(typewriter) => {
                        typewriter
                        .callFunction(() => {
                            props.setIsTalkingAnimation(true)
                        })
                        .typeString(plot[props.dialogueCount].text)
                        .callFunction(() => {
                            props.setIsTalkingAnimation(false)
                            if (plot[props.dialogueCount].answers.length > 0){
                                props.setAnswerButtShown(true);
                            }
                        })
                        .start()
                    }}
                />
            </div>
        </>
    )
}