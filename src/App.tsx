import './App.css'
import './fonts/fonts.css'
import { useState, useEffect } from 'react'
import Chat from './components/Chat/Chat'
import {plot} from './plot'
import Cards from './components/Cards/Cards'
import Riddle from './components/Riddle/Riddle';
import Task from './components/Task/Task';

import handLeft from './assets/hand__left.png';
import handRight from './assets/hand__right.png';
import fistLeft from './assets/fist_left.png';
import fistRight from './assets/fist_right.png';
import Intro from './components/Intro/Intro'

function App() {

  const [isTalkingAnimation, setIsTalkingAnimation] = useState(false);
  const [dialogueCount, setDialogueCount] = useState(0);
  const [currentReply, setCurrentReply] = useState('');
  const [isChatLifted, setIsChatLifted] = useState(false);
  const [isTransitionPerformed, setIsTransitionPerformed] = useState(false);
  const [droppedCardAmount, setDroppedCardAmount] = useState(0);
  const [areCardsBack, setAreCardsBack] = useState(false);
  const [areCardsCompressed, setAreCardsCompressed] = useState(false);
  const [isRiddleShown, setIsRiddleShown] = useState(false);
  const [openedRiddle, setOpenedRiddle] = useState(-2);
  const [currentFolderAddress, setCurrentFolderAddress] = useState('0');
  const [isShakingEffect, setIsShakingEffect] = useState(false);
  const [isChatShown, setIsChatShown] = useState(false);
  const [introMessageCount, setIntroMessageCount] = useState(0);

  async function liftChat(){
    setIsChatLifted(true);
    await setTimeout(() => {
      setIsTransitionPerformed(true);
      setDialogueCount(dialogueCount+1);
    }, 1000)
  }

  function nextStep(e: { key: any; }){
    if (e.key == ' '){
      if(dialogueCount == 7 && isTransitionPerformed){
        setDialogueCount(dialogueCount + 1);
      } else if (dialogueCount != 7){                 
        setDialogueCount(dialogueCount + 1);
        setCurrentReply('')
      } else {
        liftChat()
      }
    }
  }

  async function addDelayedDialogue(seconds:number){
    let time = seconds * 1000
    setCurrentReply('');
    setTimeout(() => {
      setDialogueCount(dialogueCount+1)
    }, time)
  }

  function shakeInterface(){
    setIsShakingEffect(true);
    setTimeout(()=> setIsShakingEffect(false), 300);
  }
  //START
  useEffect(()=>{
    if (dialogueCount >= 13 && dialogueCount< 16){
      addDelayedDialogue(2)
    }
    if (dialogueCount == 16){
      setAreCardsBack(true);
      addDelayedDialogue(4)
    }
    if (dialogueCount == 17){
      addDelayedDialogue(2)
      setTimeout(()=>{
        setAreCardsCompressed(true);
      }, 2000)
    }
    if (dialogueCount == 18){
      setTimeout(()=>{
        setIsRiddleShown(true);
      },2000)
      addDelayedDialogue(2)
    }
    if (dialogueCount >= 19 && dialogueCount < 27){
      addDelayedDialogue(2)
    }
    if( dialogueCount == 30 ||
        dialogueCount == 32 ||
        dialogueCount == 34 ||
        dialogueCount == 36 ||
        (dialogueCount>=40 && dialogueCount <=42) ||
        dialogueCount == 44 ||
        dialogueCount == 48 ||
        dialogueCount == 50 ||
        dialogueCount == 54 ||
        dialogueCount == 56 ||
        dialogueCount == 57 ||
        dialogueCount == 61 ||
        dialogueCount == 63 ||
        dialogueCount == 65 ||
        (dialogueCount>=67 && dialogueCount <=78)
      ){
      addDelayedDialogue(2)
      setCurrentReply('');
    }
  },[dialogueCount])


  useEffect(() => {
    if (plot[dialogueCount].answers.length == 0 && dialogueCount < 8 && isChatShown){
      document.body.addEventListener('keyup', nextStep);

      return function cleanup() {
        document.body.removeEventListener('keyup', nextStep );
      } 
    } 
  });
  
  return (
    <div className='app' tabIndex={-1}>
        {!isChatShown &&
          <Intro introMessageCount={introMessageCount} setIntroMessageCount={setIntroMessageCount} setIsChatShown={setIsChatShown}/>
        }
        {isChatShown &&
          <Chat
            isShakingEffect={isShakingEffect}
            isTalkingAnimation={isTalkingAnimation}
            setIsTalkingAnimation={setIsTalkingAnimation}
            dialogueCount={dialogueCount}
            setDialogueCount={setDialogueCount}
            currentReply={currentReply}
            setCurrentReply={setCurrentReply}
            isChatLifted={isChatLifted}
          />
        }
        
        <Cards
          shakeInterface={shakeInterface}
          isShakingEffect={isShakingEffect}
          isTransitionPerformed={isTransitionPerformed}
          droppedCardAmount={droppedCardAmount} 
          setDroppedCardAmount={setDroppedCardAmount} 
          dialogueCount={dialogueCount} setDialogueCount={setDialogueCount}
          areCardsBack={areCardsBack}
          areCardsCompressed={areCardsCompressed}
        />
        {isRiddleShown &&
          <Riddle
            openedRiddle={openedRiddle}
            setOpenedRiddle={setOpenedRiddle}
          />
        }
        <Task
          openedRiddle={openedRiddle}
          setOpenedRiddle={setOpenedRiddle}
          currentFolderAddress={currentFolderAddress}
          setCurrentFolderAddress={setCurrentFolderAddress}
          dialogueCount={dialogueCount}
          setDialogueCount={setDialogueCount}
          currentReply={currentReply}
          setCurrentReply={setCurrentReply}
        />
        {areCardsBack &&
          <>
          <img className='hand hand_left' src={handLeft}/>
          <img className='hand hand_right' src={handRight}/>
          <img className='fist fist_left' src={fistLeft}/>
          <img className='fist fist_right' src={fistRight}/>
          </>
        }
        
    </div >
  )
}

export default App


//chess code is a key for an excel riddle  B1C3-E7E6-E2E3-D8H4-F1B5 == B***-**E*-*2**-*8*4-***5

// create intro == inner voice



