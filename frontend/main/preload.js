const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    on: (channel, callback) => {
        ipcRenderer.on(channel, callback);
    },
    send: (channel, args) => {
        ipcRenderer.send(channel, args);
    }
});

// const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electron', {
//     fetchUsers: async () => {
//         const response = await fetch('http://localhost:3000/api/auth', {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' },
//             cache: 'force-cache'
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         return await response.json();
//     }
// });
