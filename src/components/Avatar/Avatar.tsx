import './Avatar.css';
import {imageArray} from '../../image_constants';

interface Avatar {
        isTalkingAnimation: boolean,
        isChatLifted:boolean,
}

export default function Avatar(props:Avatar){

    return (
        <div className={props.isChatLifted ? 'avatar avatar_lifted' : 'avatar'}>
            <img className='avatar__image' src={imageArray.mute}/>
            {props.isTalkingAnimation 
                ? <img className='avatar__image avatar__image_second' src={imageArray.pop}/>
                : <></>
            }
            <p className='avatar__name'>{'* popcat *'}</p>
        </div>
    )
}