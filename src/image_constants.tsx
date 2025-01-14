import popcatMute from './assets/popcat_mute.jpg';
import popcatPop from './assets/popcat_pop.jpg';

import chessIcon from './assets/chess_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg';
import folderIcon from './assets/folder_open_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg';
import lockIcon from './assets/lock_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg';
import tableIcon from './assets/table_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg';
import imageIcon from './assets/image_24dp_00000_FILL0_wght400_GRAD0_opsz24.svg';

const imageArray = {
    pop: popcatPop,
    mute: popcatMute,
}

const taskIcons =[{name:'Chess', img: chessIcon}, {name:'Folder', img: folderIcon}, {name:'Lock', img:lockIcon}, {name:'Table', img:tableIcon}, {name:'image', img:imageIcon}];

export {imageArray, taskIcons }
