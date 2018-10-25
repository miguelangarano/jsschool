const menuBtn=document.querySelector('#title');
const sectionB=document.querySelector('#section-b');
const jBtn=document.querySelector('#jsity');

let showMenu=false;

menuBtn.addEventListener('click', toggleMenu);
jBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        sectionB.classList.add('show');
        showMenu=true;
        console.log('abierto');
    }else{
        menuBtn.classList.remove('close');
        sectionB.classList.remove('show');
        showMenu=false;
        console.log('cerrado');
    }
}