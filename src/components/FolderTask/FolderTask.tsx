import './FolderTask.css';

import { folderSystemTwo } from '../../constants';
import Folder from '../Folder/Folder';

interface FolderTask{
    handleFolder(i: number, j: number): void;
    currentFolder: string;
}

export default function FolderTask(props: FolderTask){


    return(
        <ul className='folder-task'>
            {folderSystemTwo.map((folder, i)=> {

                if (props.currentFolder.length > i){
                    console.log(props.currentFolder.length, i, Number(props.currentFolder.split('')[i]) )
                    return(
                        <li className='folder-task__column'>

                            {folder.option[Number(props.currentFolder.split('')[i])].paths.map((path,j)=>{
                               return <Folder path={path} currentFolder={props.currentFolder} handleFolder={props.handleFolder} indexOfColumn={i} indexOfRow={j}/>
                            })}
                        </li>
                    )  
                }

                return(<></>)
                
            })
            }
        </ul>
    )
}

// 