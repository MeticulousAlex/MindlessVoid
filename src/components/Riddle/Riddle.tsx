import './Riddle.css';
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
                    <>
                        <p style={{'display':'none'}}>{riddle.name}</p>
                        <div className='riddle__block' onClick={() =>{revealRiddle(i)}}>
                            <img className='riddle__icon' src={taskIcons[i].img}/>
                        </div>
                    </>
                    
                )
            })}
        </div>
    )
}