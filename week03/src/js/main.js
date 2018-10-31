
var overnotes=document.getElementsByClassName("overnote");
var notes=document.getElementsByClassName("note");
var audionote=document.getElementsByClassName("audionote");
var audioovernote=document.getElementsByClassName("audioovernote");


var addOctaveButton=document.getElementById("add");
var octave=document.getElementById("octave");
var octaveCounter=0;

setAudioNotes();
setAudioOvernotes();
setKeywordAudio();

addOctaveButton.addEventListener('click', function(){
    if (octaveCounter<=1 ) {
        if(octaveCounter===0){
            octave = octave.cloneNode(true);
            document.getElementById("wrapper").appendChild(octave);
            let w7 = document.getElementsByClassName("w7");
            w7[octaveCounter].parentNode.style.gridTemplateColumns = "repeat(14, 1fr)";
            w7[octaveCounter].parentNode.style.maxWidth = "35%";
            w7[octaveCounter].parentNode.removeChild(w7[octaveCounter]);
            octaveCounter++;
        } else {
            octave = octave.cloneNode(true);
            document.getElementById("wrapper").appendChild(octave);
            let w7 = document.getElementsByClassName("w7");
            w7[octaveCounter - 1].parentNode.style.gridTemplateColumns = "repeat(14, 1fr)";
            w7[octaveCounter - 1].parentNode.style.maxWidth = "35%";
            w7[octaveCounter - 1].parentNode.removeChild(w7[octaveCounter - 1]);
            octaveCounter++;
        }
        setAudioNotes();
        setAudioOvernotes();
    }
});


function setAudioNotes(){
    for(let i=0; i<notes.length; i++){
        notes[i].addEventListener('mousedown', function(){noteEvent(i)});
    }
    
    function noteEvent (ind){
        audionote[ind].currentTime=0;
        audionote[ind].play();
    }
}

function setAudioOvernotes(){
    for(let i=0; i<overnotes.length; i++){
        overnotes[i].addEventListener('mousedown', function(){overnoteEvent(i)});
    }
    
    function overnoteEvent (ind){
        audioovernote[ind].currentTime=0;
        audioovernote[ind].play();
    }
}

function setKeywordAudio(){
    window.addEventListener('keydown', function(e){keyEvent(e)});

    function keyEvent(e) {
        
        let key = e.key.toUpperCase();
        switch (key) {
            case "CAPSLOCK": {
                audionote[0].currentTime = 0;
                audionote[0].play();
                break;
            }

            case "1": {
                audioovernote[0].currentTime=0;
                audioovernote[0].play();
                break;
            }

            case "Q": {
                audionote[1].currentTime = 0;
                audionote[1].play(); 
                break;
            }

            case "2": {
                audioovernote[1].currentTime=0;
                audioovernote[1].play();
                break;
            }

            case "W": {
                audionote[2].currentTime = 0;
                audionote[2].play();
                break;
            }

            case "E": {
                audionote[3].currentTime = 0;
                audionote[3].play();
                break;
            }

            case "4": {
                audioovernote[2].currentTime=0;
                audioovernote[2].play();
                break;
            }

            case "R": {
                audionote[4].currentTime = 0;
                audionote[4].play();
                break;
            }

            case "5": {
                audioovernote[3].currentTime=0;
                audioovernote[3].play();
                break;
            }

            case "T": {
                audionote[5].currentTime = 0;
                audionote[5].play();
                break;
            }

            case "6": {
                audioovernote[4].currentTime=0;
                audioovernote[4].play();
                break;
            }

            case "Y": {
                audionote[6].currentTime = 0;
                audionote[6].play();
                break;
            }

            case "U": {
                audionote[7].currentTime = 0;
                audionote[7].play();
                break;
            }

            case "8": {
                audioovernote[5].currentTime=0;
                audioovernote[5].play();
                break;
            }

            case "I": {
                if (octaveCounter >= 1) {
                    audionote[8].currentTime = 0;
                    audionote[8].play();
                }
                break;
            }

            case "9": {
                if(octaveCounter>=1){
                    audioovernote[6].currentTime=0;
                    audioovernote[6].play();
                }
                break;
            }

            case "O": {
                if (octaveCounter >= 1) {
                    audionote[9].currentTime = 0;
                    audionote[9].play();
                }
                break;
            }

            case "<": {
                if (octaveCounter >= 1) {
                    audionote[10].currentTime = 0;
                    audionote[10].play();
                }
                break;
            }

            case "A": {
                if(octaveCounter>=1){
                    audioovernote[7].currentTime=0;
                    audioovernote[7].play();
                }
                break;
            }

            case "Z": {
                if (octaveCounter >= 1) {
                    audionote[11].currentTime = 0;
                    audionote[11].play();
                }
                break;
            }

            case "S": {
                if(octaveCounter>=1){
                    audioovernote[8].currentTime=0;
                    audioovernote[8].play();
                }
                break;
            }

            case "X": {
                if (octaveCounter >= 1) {
                    audionote[12].currentTime = 0;
                    audionote[12].play();
                }
                break;
            }

            case "D": {
                if(octaveCounter>=1){
                    audioovernote[9].currentTime=0;
                    audioovernote[9].play();
                }
                break;
            }

            case "C": {
                if (octaveCounter >= 1) {
                    audionote[13].currentTime = 0;
                    audionote[13].play();
                }
                break;
            }

            case "V": {
                if (octaveCounter >= 1) {
                    audionote[14].currentTime = 0;
                    audionote[14].play();
                }
                break;
            }

            case "G": {
                if (octaveCounter >= 2) {
                    audioovernote[10].currentTime=0;
                    audioovernote[10].play();
                }
                break;
            }

            case "B": {
                if (octaveCounter >= 2) {
                    audionote[15].currentTime = 0;
                    audionote[15].play();
                }
                break;
            }

            case "H": {
                if (octaveCounter >= 2) {
                    audioovernote[11].currentTime=0;
                    audioovernote[11].play();
                }
                break;
            }

            case "N": {
                if (octaveCounter >= 2) {
                    audionote[16].currentTime = 0;
                    audionote[16].play();
                }
                break;
            }

            case "M": {
                if (octaveCounter >= 2) {
                    audionote[17].currentTime = 0;
                    audionote[17].play();
                }
                break;
            }

            case "K": {
                if (octaveCounter >= 2) {
                    audioovernote[12].currentTime=0;
                    audioovernote[12].play();
                }
                break;
            }

            case ",": {
                if (octaveCounter >= 2) {
                    audionote[18].currentTime = 0;
                    audionote[18].play();
                }
                break;
            }

            case "L": {
                if (octaveCounter >= 2) {
                    audioovernote[13].currentTime=0;
                    audioovernote[13].play();
                }
                break;
            }

            case ".": {
                if (octaveCounter >= 2) {
                    audionote[19].currentTime = 0;
                    audionote[19].play();
                }
                break;
            }

            case "ñ": {
                if (octaveCounter >= 2) {
                    audioovernote[14].currentTime=0;
                    audioovernote[14].play();
                }
                break;
            }

            case "-": {
                if (octaveCounter >= 2) {
                    audionote[20].currentTime = 0;
                    audionote[20].play();
                }
                break;
            }

            case "SHIFT": {
                if (octaveCounter >= 2) {
                    audionote[21].currentTime = 0;
                    audionote[21].play();
                }
                break;
            }
        }
    }
}