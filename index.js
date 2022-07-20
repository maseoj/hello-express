const express = require('express');
const PORT = 3000;

const app = express();

function logger(req, res, next){
    console.log(`[${Date.now()}] ${req.method} ${req.url}`);
    next();
}

app.use(logger);
//sammy

app.get('/',(req,res) => {
    res.json({ ok: true});
});

app.get('//:name',(req, res) => {
    res.json({ greeting: `Hello ${req.params.name}!` });
});

app.listen(PORT, () => console.log ('Server is now listening on port ${PORT}'));