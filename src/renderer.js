const electron = require('electron')
const ipc = electron.ipcRenderer

document.getElementById('start').addEventListener('click', () => {
	ipc.send('countdown-start')
})

ipc
  .on('countdown', (evt, count) => {
	document.getElementById('count').innerHTML = count
})
