import { useState } from 'react';
import './Riddle.css';
import chessboard from '../../assets/chessboard_task.jpg';
import qrCode from '../../assets/adobe-express-qr-code.png';
import encrypted_task from '../../assets/D3cRyPT_M3.png';
import FolderTask from '../FolderTask/FolderTask';
import { taskIcons } from '../../image_constants';

interface Riddle{
    openedRiddle: number;
    setOpenedRiddle:React.Dispatch<React.SetStateAction<number>>;
}

export default function Riddle(props : Riddle){


    const riddles = [{name: 'folders'}, {name: 'chess'}, {name: 'photo'}, {name: 'database '}, {name: 'treasure'}]; //there shouldn't be name but an icon
    
    function revealRiddle(index:number){
            props.setOpenedRiddle(index);
    }

    return(
        <div className={props.openedRiddle >= 0 ? 'riddle riddle_dropped' :'riddle'}>
            {riddles.map((riddle, i) => {
                return(
                    <div className='riddle__block' onClick={() =>{revealRiddle(i)}}>
                        <img className='riddle__icon' src={taskIcons[i].img}/>
                    </div>
                )
            })}
        </div>
    )
}