import './Cards.css';
import { useGlitch } from 'react-powerglitch';
import Card from '../Card/Card';

import squareIcon from '../../assets/check_box_outline_blank_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import circleIcon from '../../assets/circle_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import starIcon from '../../assets/star_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import triangleIcon from '../../assets/change_history_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import rombusIcon from '../../assets/stat_0_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

interface Cards{
    isShakingEffect: boolean,
    shakeInterface:()=>void,
    isTransitionPerformed: boolean,
    droppedCardAmount: number,
    dialogueCount: number,
    areCardsBack:boolean,
    areCardsCompressed:boolean,
    setDroppedCardAmount: React.Dispatch<React.SetStateAction<number>>,
    setDialogueCount: React.Dispatch<React.SetStateAction<number>>
}

export default function Cards(props: Cards){

    const glitch = useGlitch({"playmode": "always", 'glitchTimeSpan':{"start": 0, "end": 1}});

    let cardsParams = [{icon: squareIcon},{icon: circleIcon},{icon:triangleIcon},{icon: rombusIcon},{icon:starIcon}]

    return(
        <div className={!props.isTransitionPerformed ? 'cards cards_hidden' : props.areCardsCompressed ? 'cards cards_compressed' : 'cards'}>
            <div className={props.droppedCardAmount != 5 ? props.isShakingEffect ? 'cards__title cards__title_shaking': 'cards__title' : 'cards__title cards__title_dropped'} >
               <p ref={props.droppedCardAmount != 5 ? null : glitch.ref}>Easy-peasy tasks</p> 
            </div>
            
            <div className={props.isShakingEffect ? 'cards__container cards__container_shaking' : 'cards__container'}>
                {cardsParams.map((cardParam,i) => {
                    return(
                        <Card
                            key={i}
                            cardParam={cardParam}
                            shakeInterface={props.shakeInterface}
                            droppedCardAmount={props.droppedCardAmount}
                            setDroppedCardAmount={props.setDroppedCardAmount}
                            dialogueCount={props.dialogueCount}
                            setDialogueCount={props.setDialogueCount}
                            areCardsBack={props.areCardsBack}
                        /> 
                    )
                })}
            </div>
        </div>
        
    )
}