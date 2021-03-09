const express = require('express')
const router = express.Router()
const { exec } = require("child_process");


router.post('/', async (req, res) => {
    try {
        exec("pm2 start Main", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                res.status(500).json({ message: `ERROR` })
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                res.status(500).json({ message: `ERROR` })
                return;
            }
            console.log(`stdout: ${stdout}`);
            res.json({ message: `started` })
        });

    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router