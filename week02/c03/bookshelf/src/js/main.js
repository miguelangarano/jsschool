
var smalldevice=false;

//Displaying modal
showMod();

//Sense if the device is small
if (window.innerWidth <= 1100) {
    sDevices();
}

//Sense the device to show the books in two columns
if (window.innerWidth > 480 && window.innerWidth <= 700) {
    const ul = document.getElementById('ul');
    ul.style.gridTemplateColumns = '50% 50%';
    ul.style.gridTemplateRows = '1fr 1fr 1fr';
}

//Sense de device to show the books in three columns
if (window.innerWidth > 700 && window.innerWidth <= 1100) {
    const ul = document.getElementById('ul');
    ul.style.gridTemplateColumns = '33.33% 33.33% 33.33%';
    ul.style.gridTemplateRows = '1fr 1fr';
}

//Display the content for small devices
function sDevices() {
    smalldevice=true;
    const logo = document.querySelector('#logo');
    const left = document.querySelector('#left');
    const rigth = document.querySelector('#right');
    const center = document.querySelector('#center');

    //Defines the way to display the books on small devices,
    //and also manages the showing and hiding of the navigation bars
    const bodywrapper = document.querySelector('#bodywrapper');
    bodywrapper.style.gridTemplateAreas = '"c c c c c c"';
    rigth.style.display = 'none';
    left.style.display = 'none';
    logo.addEventListener('click', toggleNav);

    function toggleNav() {
        if (left.style.display === 'none') {
            bodywrapper.style.gridTemplateAreas = '"l c c c c r"';
            center.style.display = 'none';
            left.style.width = window.innerWidth / 2 + 'px';
            left.style.display = 'block';
            right.style.width = window.innerWidth / 2 + 'px';
            right.style.display = 'block';
        } else {
            bodywrapper.style.gridTemplateAreas = '"c c c c c c"';
            left.style.display = 'none';
            right.style.display = 'none';
            center.style.display = 'block';
        }
    }
}


function showMod() {
    // Get the modal
    var modal = document.querySelector('#modal');

    // Get the button that opens the modal
    //var btn = document.getElementById('ul').querySelectorAll('.overlay');
    var btn = document.getElementsByClassName('fa-book-open');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    for (var i = 0; i < 6; i++) {
        // When the user clicks on the button, open the modal 
        btn[i].onclick = function () {

            if(smalldevice===false){
                modal.style.transform = 'translate(' + (event.clientX + 70) + 'px,' + (event.clientY - 80) + 'px)';
            }
            modal.style.display = "block";
        }
    }

    window.onclick = e => {
        var name = e.target.className;
        if (name.includes("mdl")) {
            modal.style.display = "none";;
        }

    }
}