const { Router } = require('express');
const { route } = require('.');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
    /* console.log(users);
    res.send('users'); */
});

module.exports = router;