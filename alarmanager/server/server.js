const express = require('express');

const app = express();

console.log('Server is running!');

app.get('/', (request, response) => {
    return response.json({
        id_alarm: '1',
        id_object: '1',
        start: '1597312800',
        end: '1597323600'
    })
})

app.listen(3000);