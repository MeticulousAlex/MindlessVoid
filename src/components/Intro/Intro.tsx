
import './Intro.css';
import Typewriter from 'typewriter-effect'
import { intro } from '../../plot';


interface Intro{
    setIsChatShown:  React.Dispatch<React.SetStateAction<boolean>>,
    introMessageCount: number,
    setIntroMessageCount:React.Dispatch<React.SetStateAction<number>>,
}

export default function Intro(props: Intro){

    function nextIntroMessage(){
        props.setIntroMessageCount(props.introMessageCount + 1);
    }

    return(
        <div className='intro' key={props.introMessageCount}>
            <Typewriter
                options={{wrapperClassName:'intro__message', cursor:'', delay:1}}
                onInit={(typewriter) => {
                    typewriter
                    .callFunction(() => {
                        //
                    })
                    .typeString(intro[props.introMessageCount].text)
                    .callFunction(() => {
                        if (props.introMessageCount < 4){
                            setTimeout(()=> nextIntroMessage(),1500)
                        } else {
                            setTimeout(()=> props.setIsChatShown(true),1500)
                        }
                        
                    })
                    .start()
                }}
            />
        </div>
    )
}