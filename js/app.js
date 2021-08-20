let isScreaming = false;
let sex = '';

const scream = new Audio();
scream.volume = 1;
scream.loop = true;

function evaluateChosenSex(){
    console.log('Enter function evaluateChosenSex() ...');
    // get the selection element
    const selected = document.getElementById('sexSelect');
    // read the index of the selected and read the value and save it into the const sex
    sex = selected.options[selected.selectedIndex].value;
}

function stopScream(){
    console.log('Enter function stopScream() ...');
    isScreaming = false;
    scream.pause();
    scream.currentTime = 0;
    document.getElementById('actionButton').innerText = 'START';
    document.getElementById('actionButton').removeEventListener('click', stopScream);
    document.getElementById('actionButton').addEventListener('click', startScream);
}

function writeChosenSexToLocalStorage(){
    console.log('Enter function writeChosenSexToLocalStorage () ...');
    localStorage.setItem('sex', sex);
}

function startScream(){
    console.log('Enter scream function () ...');
    evaluateChosenSex();
    writeChosenSexToLocalStorage();
    scream.src = `./audio/${sex}.mp3`; // später: `./audio/${lang}/${sex}.mp3`;
    console.log(scream.src);

    // play Screamer
    scream.play();
    isScreaming = true;

    document.getElementById('actionButton').innerText = 'STOP';
    document.getElementById('actionButton').removeEventListener('click', startScream);
    document.getElementById('actionButton').addEventListener('click', stopScream);
};

function openSettingsModal(){
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettingsModal(){
    document.getElementById('settingsModal').style.display = 'none';
}

function openInfoModal(){
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal(){
    document.getElementById('infoModal').style.display = 'none';
}


function addHandler(){
    console.log('Enter function addHandlers() ...');

    // start- & stop-button 
    document.getElementById('actionButton').addEventListener('click', startScream);

    // modal open and close handlers:
    document.getElementById('editSettingsButton').addEventListener('click', openSettingsModal);
    document.getElementById('confirmSettingsButton').addEventListener('click', closeSettingsModal);
    document.getElementById('showInfoButton').addEventListener('click', openInfoModal);
    document.getElementById('confirmInfoButton').addEventListener('click', closeInfoModal);
    document.getElementById('confirmInfoButtonBottom').addEventListener('click', closeInfoModal);
}


function readLocalStoreIfExists(){
    console.log('Enter function readLocalStoraeIfExists ...');
    // read local storage from former sessions if exists
    if (localStorage.length == 1){
        console.log('There is local storage. Start reading ...');
        let storageSex = localStorage.getItem('sex');

        console.log('Start writing...');

        // write / insert storage value in select element:
        document.getElementById('sexSelect').value = storageSex;
        console.log('Written local storage to select element.');

    } else {
        console.log('No local sorage found.');
    }
}

function registerServiceWorker(){
    console.log('Enter function registerServiceWorker() ...');
    // Make sure service worker are supported
    if ('serviceWorker' in navigator){
        navigator.serviceWorker
            //.register('./../serviceworker.js')
            .register('/hilfe-rufer/serviceworker.js', {scope: '/hilfe-rufer/'})
            //.register('https://moritzott.github.io/hilfe-rufer/serviceworker.js')
            .then(registrationObject => console.log('ServiceWorker registered.'))
            .catch(error => console.log(`ServiceWorker Error: ${error}`))
    } else {
        console.log('ServiceWorker not supported nor registered.');
    }
}


window.addEventListener('load', addHandler);
window.addEventListener('load', readLocalStoreIfExists);
window.addEventListener('load', registerServiceWorker);

