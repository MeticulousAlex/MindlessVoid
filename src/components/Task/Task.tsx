import './Task.css';

import FolderTask from '../FolderTask/FolderTask';

import chessboard from '../../assets/chessboard_task.jpg';
import qrCode from '../../assets/adobe-express-qr-code.png';
import encrypted_task from '../../assets/D3cRyPT_M3.png';
import openedChestLower from '../../assets/chest-opened_lower-part.png';
import openedChestTop from '../../assets/chest-opened_top-part.png';
import closedChest from '../../assets/chest-closed_alpha.png';


import arrowBackIcon from '../../assets/arrow_back_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg';
import hintIcon from '../../assets/mystery_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg';
import { useState, useEffect } from 'react';
import { useGlitch } from 'react-powerglitch';

interface Task{
    openedRiddle: number;
    currentFolderAddress: string;
    setOpenedRiddle:React.Dispatch<React.SetStateAction<number>>;
    setCurrentFolderAddress: React.Dispatch<React.SetStateAction<string>>,
    dialogueCount:number;
    setDialogueCount: React.Dispatch<React.SetStateAction<number>>
    currentReply:string | null
    setCurrentReply:  React.Dispatch<React.SetStateAction<string>>

}

export default function Task(props : Task){

    const [isKeyCorrect, setIsKeyCorrect] = useState(false);
    const [isChestOpened, setIsChestOpened] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isTaskDropped,setIsTaskDropped] = useState(false);

    const glitch = useGlitch(
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
              "count": 16,
              "velocity": 2,
              "minHeight": 0.01,
              "maxHeight": 0.38,
              "hueRotate": true
            },
            "pulse": true
          }
    );


    function handleFolder(indexOfColumn:number, indexOfRow:number){
        if (indexOfColumn < props.currentFolderAddress.length-1 && Number(props.currentFolderAddress.split('')[indexOfColumn + 1]) == indexOfRow){
            props.setCurrentFolderAddress(props.currentFolderAddress.slice(0,indexOfColumn + 1))
        }else if(indexOfColumn < props.currentFolderAddress.length-1 && Number(props.currentFolderAddress.split('')[indexOfColumn + 1]) != indexOfRow){
            props.setCurrentFolderAddress(props.currentFolderAddress.slice(0,indexOfColumn + 1) + indexOfRow)
        }else{
            props.setCurrentFolderAddress(props.currentFolderAddress + indexOfRow.toString());
        }
    }

    async function dropTask(){
        setIsTaskDropped(true);
        props.setDialogueCount(27);
        await setTimeout(()=> {
            props.setOpenedRiddle(-1)
            setIsTaskDropped(false);
        }, 500)
    }

    function showHint(){
        switch(props.openedRiddle){
            case 0:
                props.setDialogueCount(29);
                props.setCurrentReply('');
                return
            case 1:
                props.setDialogueCount(39);
                props.setCurrentReply('');
                return
            case 2:
                props.setDialogueCount(47);
                props.setCurrentReply('');
                return
            case 3:
                props.setDialogueCount(53);
                props.setCurrentReply('');
                return
            case 4:
                props.setDialogueCount(60);
                props.setCurrentReply('');
                return
            default:
                return
        }
        
    }


    function validatePassword(e: { key: any; }){
        if (e.key == 'Enter' && props.openedRiddle == 2){
            setInputValue('');
            if (inputValue.toLowerCase().includes('splendid')){
                setIsKeyCorrect(true);
            }
        }
    }

    useEffect(() => {
        if(isKeyCorrect){
            setTimeout(()=>setIsChestOpened(true),2000);
            props.setDialogueCount(67);
        } else{
            setIsChestOpened(false);
        }
    },[isKeyCorrect]);

    useEffect(() => {
          document.body.addEventListener('keyup', validatePassword);
    
          return function cleanup() {
            document.body.removeEventListener('keyup', validatePassword );
          }
      });


    return(
        <div className={props.openedRiddle == -2 ? 'task task_hidden' : (props.openedRiddle == -1 || isTaskDropped) ? 'task task_dropped' : 'task'}>
            <div className='task__wrapper'>
                <div className={isKeyCorrect ? 'task__options-menu task__options-menu_hidden' : 'task__options-menu'}>
                    <div className='task__option task__option_back' onClick={()=> dropTask()}>
                        <img className='task__option-image' src={arrowBackIcon}/>
                    </div>
                    <div className='task__option task__option_hint' onClick={()=> showHint()}>
                        <img className='task__option-image' src={hintIcon}/>
                    </div>
                </div>
                
                {props.openedRiddle == 0 &&
                    <div className='task__content-block'>
                        <img className='task__image' src={chessboard} alt='chessboard lol'/>
                        <div className='task__text-hints'>
                            <p className='task__text-hint'> X _ _ _ </p>
                            <p className='task__text-hint'> _ _ X _ </p>
                            <p className='task__text-hint'> _ X _ _ </p>
                            <p className='task__text-hint'> _ X _ X </p>
                            <p className='task__text-hint'> _ _ _ X </p>
                        </div>
                    </div>
                }
                {props.openedRiddle == 1 &&
                    <FolderTask currentFolder={props.currentFolderAddress} handleFolder={handleFolder}/>
                }
                {props.openedRiddle == 2 &&
                    <div className='task__content-block'>
                        {isChestOpened
                            ? <>
                                 <img className='task__image task__image_chest' src={openedChestTop} alt='chest lid'/>
                                 <img className='task__image task__image_additional task__image_chest' src={openedChestLower} alt='chest body'/>
                                 <div>
                                    <a ref={glitch.ref} className='task__reward' href='https://t.me/specialty_cellar'></a>
                                 </div>
                                 
                              </>
                            : <img className='task__image task__image_chest' src={closedChest} alt='closed chest'/>
                                
                        }
                        <input className={isKeyCorrect ? 'task__input task__input_hidden' : 'task__input'} onKeyUp={validatePassword} maxLength={8} value={inputValue} placeholder='Word of wisdom' onChange={(e)=> setInputValue(e.target.value)}/>
                    </div>
                }
                {props.openedRiddle == 3 &&
                       <img className='task__image' src={qrCode} alt='qr lol'/>
                    
                }
                {props.openedRiddle == 4 &&
                    <img className='task__image' src={encrypted_task} alt='noize lol'/>
                }
                
            </div>
        </div>
    )
}