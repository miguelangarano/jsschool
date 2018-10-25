
const btnSearch=document.querySelector('#btnSearch');
btnSearch.addEventListener('click', toggleSearch);
const btnMenu=document.querySelector('#btnMenu');
btnMenu.addEventListener('click', toggleMenu);


const logo=document.querySelector('#logo');
const person=document.querySelector('#person');
const content=document.querySelector('#content');
const searchInput=document.querySelector('#searchInput');
searchInput.style.display='none';
logo.style.display='none';
person.style.display='none';
content.style.display='none';

function toggleSearch(){
    if(searchInput.style.display==='none'){
        searchInput.style.display='block';
    }else{
        searchInput.style.display='none';
    }
}

function toggleMenu(){
    if(logo.style.display==='none'){
        logo.style.display='block';
    }else{
        logo.style.display='none';
    }
    if(person.style.display==='none'){
        person.style.display='block';
    }else{
        person.style.display='none';
    }
    if(content.style.display==='none'){
        content.style.display='flex';
    }else{
        content.style.display='none';
    }
}


const overlay=document.querySelector('.overlay');
const overlayGen=document.querySelector('#overlayGen');
const container=document.querySelector('#container');
overlay.addEventListener('click', toggleOverlayOn);
overlayGen.addEventListener('click', toggleOverlayOff);

function toggleOverlayOn(){
    if(overlayGen.style.display==='none'){
        overlayGen.style.display='block';
        container.style.opacity="0.3";
    }else{
        overlayGen.style.display='none';
    }
}

function toggleOverlayOff(){
    overlayGen.style.display='none';
    container.style.opacity="1";
}