const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Express Js is running, and now service setup');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});