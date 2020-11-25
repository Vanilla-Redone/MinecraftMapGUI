var sidebar = document.getElementsByClassName("sidebar")[0];
const { ipcRenderer } = require('electron');

function populate() {
    let genreResponse = ipcRenderer.sendSync('synchronous-message', 'ping');
    for(let i = 0; i < genreResponse.length; i++) {
        sidebar.innerHTML += buildGenreButton();
    }
}