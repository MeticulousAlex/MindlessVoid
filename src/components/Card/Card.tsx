import { useState } from 'react';
import './Card.css';
import { useGlitch } from 'react-powerglitch'
import Riddle from '../Riddle/Riddle';

interface Card{
  cardParam:{icon: string;}
  shakeInterface: ()=>void,
  droppedCardAmount: number;
  dialogueCount:number,
  areCardsBack:boolean,
  setDialogueCount: React.Dispatch<React.SetStateAction<number>>,
  setDroppedCardAmount: React.Dispatch<React.SetStateAction<number>>
}

export default function Card(props : Card){
    const glitchClick = useGlitch(
        {
            "playMode": "click",
            "createContainers": true,
            "hideOverflow": false,
            "timing": {
              "duration": 2000
            },
            "glitchTimeSpan": {
              "start": 0,
              "end": 1
            },
            "shake": {
              "velocity": 5,
              "amplitudeX": 0.05,
              "amplitudeY": 0.05
            },
            "slice": {
              "count": 7,
              "velocity": 2,
              "minHeight": 0.01,
              "maxHeight": 0.38,
              "hueRotate": true
            },
            "pulse": false
          }
    );

    const glitchAlways = useGlitch(
      {
          "playMode": "always",
          "createContainers": true,
          "hideOverflow": false,
          "timing": {
            "duration": 2000
          },
          "glitchTimeSpan": {
            "start": 0,
            "end": 1
          },
          "shake": {
            "velocity": 5,
            "amplitudeX": 0.05,
            "amplitudeY": 0.05
          },
          "slice": {
            "count": 7,
            "velocity": 2,
            "minHeight": 0.01,
            "maxHeight": 0.38,
            "hueRotate": true
          },
          "pulse": false
        }
  );

    const [isCardDropped, setIsCardDropped] = useState(false);
    const [isCardOpened, setIsCardOpened] = useState(false);

    const drop = () => {
      setIsCardDropped(true);
      props.shakeInterface();
      // console.log(props.droppedCardAmount);
      // if (props.droppedCardAmount == 4){
      //   props.manageAutoChat();
      // }
      props.setDroppedCardAmount(props.droppedCardAmount + 1);
      props.setDialogueCount(props.dialogueCount + 1)
      
      //props.startShake()
    }

    return(
      <div className={(isCardDropped && !props.areCardsBack) ? 'card card_dropped' : props.areCardsBack ? 'card card_lifted' : 'card'}>
              <div className='card_glitch' ref={props.areCardsBack ? glitchAlways.ref : glitchClick.ref} onClick={isCardDropped ? ()=>{} : drop}>
                <img className='card__image' src={props.cardParam.icon}/>
              </div>
      </div>
    )
}