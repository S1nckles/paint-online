// Nodemon Автоматично перезагружає сервер node.js під час змінення коду
// Express надає різні функції для обробки запитів, маршрутів, middleware тощо.
const express = require('express');
const app = express()
// Express-ws це бібліотека, яка дозволяє додати підтримку WebSocket до вашого Express-додатку.
const wsServer = require('express-ws')(app);
// Для оголошення, що користувач приєднався
const aWss = wsServer.getWss();

const PORT = process.env.PORT || 5000;

app.ws('/', (ws, req) => {
    console.log('COnnection');
    // Коли підключився, ми йому назад відправляємо повідомлення
    ws.send('Connected');
    // msg -- Повідомлення, яке получаємо від користувача
    ws.on('message', msg => {
        msg = JSON.parse(msg);
        switch (msg.method) {
            case 'connection':
                connectionHandler(ws, msg);
                break;
        }
    })
})

app.listen(PORT, () => console.log(`Start ${PORT}`))

const connectionHandler = (ws, msg) => {
    // id сесії в якій находиться користувач
    ws.id = msg.id
    // Робить оголошення, що користувач приєднався
    broadcastConnection(ws, msg);
}

const broadcastConnection = (ws, msg) => {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(`User ${msg.username} connected`)
        }
    })
}