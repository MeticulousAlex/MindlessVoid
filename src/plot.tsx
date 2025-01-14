import {imageArray} from "./image_constants";

const plot = [
    {text: 'Heyyyyy!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'My name is popcat and I am your guide for today.', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Are you ready for our little adventure?", images:[imageArray.mute, imageArray.pop], answers:[{text:'Yes!', correct: true}, {text:'What adventure?', correct: true} ]},
    {text: 'Great!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: `The rules are quite simple:<br/> 1) You complete some easy-peasy tasks<br/>2) You get rewarded in the end!!11!`, images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Do you accept the fact that you may be mentally injured during the experience?", images:[imageArray.mute, imageArray.pop], answers:[{text:'Abjagaga!', correct: true}, {text:'Yay!', correct: true} ]}, 
    {text: 'Good!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Here are the tasks!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'How do you like them?', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'oAoAAAOAoa', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Whoah!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Careful!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Ouch!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Well, that was the last one', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Uhhh... ', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "I know that I'm not supposed to and ... ugh ", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Let me fix it', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'STEP BACK!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: '...', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: '...', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Yo! It worked!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Previously there were multiple tasks', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'And now there are still multiple tasks though...', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'But!', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: 'Now they are interconnected', images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Hopefully, you would not destroy it again, right?", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Well, enjoy!", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "...", images:[imageArray.mute, imageArray.pop], answers:[]}, //27
    /// decline
    {text: "Well, nevermind...", images:[imageArray.mute, imageArray.pop], answers:[]}, //28
    /// chess
    {text: "Oh! You need a hint, right?", images:[imageArray.mute, imageArray.pop], answers:[{text:"Yes, I'm pathetic", correct: true}, {text:'No >:/', correct: false}]}, //29
    {text: "Alright, you'll get it", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "But first you must admit ur pussy lol", images:[imageArray.mute, imageArray.pop], answers:[{text:"I totally agree", correct: true}, {text:'Fuck off', correct: false}]},
    {text: "Good boy!", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Do you see these five lovely block down here?", images:[imageArray.mute, imageArray.pop], answers:[{text:"Yes", correct: true}, {text:"No, I'm blind", correct: false}]},
    {text: "Good!", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Each of them represents coords of figure move", images:[imageArray.mute, imageArray.pop], answers:[{text:"* nod *", correct: true}, {text:"* eat boogers *", correct: false}]},
    {text: "And finally...", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Every 'X' is a symbol in five-symbol code", images:[imageArray.mute, imageArray.pop], answers:[{text:"Got it", correct: true}, {text:"Uhm, ok", correct: true}]},
    {text: "Nice, ur good to go!", images:[imageArray.mute, imageArray.pop], answers:[]},
    // folders
    {text: "What time is it?", images:[imageArray.mute, imageArray.pop], answers:[{text:"Hint time!", correct: true}, {text:'Huh?', correct: false}]}, //39
    {text: "* proudly smiles *", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Alright, fella", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Big papa will show you how!", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "There're five non-damaged files in this task", images:[imageArray.mute, imageArray.pop], answers:[{text:"Ok", correct: true}, {text:"There are 6", correct: false}]},
    {text: "Find these files on your flash-drive", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "And recollect the order for the chess task", images:[imageArray.mute, imageArray.pop], answers:[{text:"Yes, captain!", correct: true}, {text:"Sure", correct: true}]},
    {text: "Keep going! :3", images:[imageArray.mute, imageArray.pop], answers:[]},
    // chest
    {text: "Are you ready kids?", images:[imageArray.mute, imageArray.pop], answers:[{text:"Aye-aye, captain", correct: true}, {text:"You see them too?", correct: false}]},//47
    {text: "Ohhhhhhhhh!", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Already desperate to open the chest?", images:[imageArray.mute, imageArray.pop], answers:[{text:"Aye-aye, captain", correct: true}, {text:"Not yet", correct: false}]},
    {text: "Ok, the chest wants to hear a password", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "And the strange image will help you", images:[imageArray.mute, imageArray.pop], answers:[{text:"Aye-aye, captain", correct: true}, {text:"Sheeesh", correct: true}]},
    {text: "And let the sea bless you!", images:[imageArray.mute, imageArray.pop], answers:[]},
    //table
    {text: "What's wrong?", images:[imageArray.mute, imageArray.pop], answers:[{text:"* sob *", correct: true}, {text:"Nothing...", correct: false}]},//53
    {text: "Oh, don't fear kiddo", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "It's just an over 300k cells table", images:[imageArray.mute, imageArray.pop], answers:[{text:"* Break crying *", correct: true}, {text:"* Calm down *", correct: false}]},
    {text: "Alright, alright", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "There is only one cell which interests you", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Its coordinates are in the chessboard task", images:[imageArray.mute, imageArray.pop], answers:[{text:"Thanks, master", correct: true}, {text:"* gratefully nod*", correct: true}]},
    {text: "You are welcome!", images:[imageArray.mute, imageArray.pop], answers:[]},
    //image
    {text: "Are you tired of white noize?", images:[imageArray.mute, imageArray.pop], answers:[{text:"* hiss *", correct: true}, {text:"* stare into the corner *", correct: false}]},//60
    {text: "Yuh, you go feral, dude", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Have you tried to save the image?", images:[imageArray.mute, imageArray.pop], answers:[{text:"Yes (lie)", correct: true}, {text:"No", correct: false}]},
    {text: "Then you must've seen it's name", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "But now you struggle with encoding key?", images:[imageArray.mute, imageArray.pop], answers:[{text:"Right", correct: true}, {text:"Left", correct: false}]},
    {text: "You can find it in the 300k+ cell table", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Enjoy!", images:[imageArray.mute, imageArray.pop], answers:[]},

    {text: "Wow! You did it!", images:[imageArray.mute, imageArray.pop], answers:[]}, //67
    {text: "Obviously, it was the final challenge", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "And you solved it successfully", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "And I...", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Am very proud of you", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Even if you used hints ", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "You made the whole way through it", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Thank you...", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "It's time to say farewell...", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Here's your reward...", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Bye...", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "Friend...", images:[imageArray.mute, imageArray.pop], answers:[]},
    {text: "...", images:[imageArray.mute, imageArray.pop], answers:[]},
]

const intro = [
    {text: "* You wake up in the darkness *"},
    {text: "* Your feet are freezed and you try to call anyone *"},
    {text: "* But nobody is around *"},
    {text: "* You start feeling that the void consumes you *"},
    {text: "* When the high-pitched voice calls you from behind *"},
]

export {plot, intro}