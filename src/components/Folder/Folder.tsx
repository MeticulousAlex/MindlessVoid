import { useGlitch } from 'react-powerglitch';
import './Folder.css';
import folderIcon from '../../assets/folder_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg';

interface Folder{
    path: {name:string, glitched:boolean, file: boolean};
    handleFolder(i: number, j: number): void;
    currentFolder: string;
    indexOfColumn: number;
    indexOfRow: number
}


export default function Folder(props: Folder){

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
              "count": 7,
              "velocity": 2,
              "minHeight": 0.01,
              "maxHeight": 0.38,
              "hueRotate": true
            },
            "pulse": false
          }
    );

    if (props.path.file && props.path.glitched){
        return(
            <div className='folder-task__path-chunk folder-task__path-chunk_file'>
                    <div className='folder-task__folder-wrapper'>
                        <div className='folder-task__glitch-folder-wrapper' ref={glitch.ref}>
                            <img className='folder-task__image' src={folderIcon} alt='folder'/>
                            <p className='folder-task__path-name folder-task__path-name_file' >{props.path.name}</p>
                        </div>
                </div>
            </div> 
        ) 
    }

    if (props.path.glitched){
       return(
            <div className='folder-task__path-chunk folder-task__path-chunk_glitched'>
                <div>
                    <div>
                        <p className='folder-task__path-name' ref={glitch.ref}>{props.path.name}</p>
                    </div>
                </div>
            </div> 
        ) 
    }

    if (props.path.file){
        return(
            <div className='folder-task__path-chunk folder-task__path-chunk_file'>
                <div className='folder-task__folder-wrapper'>
                    <img className='folder-task__image' src={folderIcon} alt='folder'/>
                    <p className='folder-task__path-name folder-task__path-name_file'>{props.path.name}</p>
                </div>
            </div> 
        ) 
    }

    return(
        <div 
            className={Number(props.currentFolder.split('')[props.indexOfColumn+1]) == props.indexOfRow ? 'folder-task__path-chunk folder-task__path-chunk_chosen' : 'folder-task__path-chunk'} 
            onClick={()=>{props.handleFolder(props.indexOfColumn, props.indexOfRow)}}>{props.path.name}
        </div> 
    )
    
}