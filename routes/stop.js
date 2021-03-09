const express = require('express')
const router = express.Router()
const { exec } = require("child_process");


router.post('/', (req, res) => {
    try {
        exec("pm2 stop Main", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                res.status(500).json({ message: `ERROR` })
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                res.json({ message: `ERROR` })
                return;
            }
            console.log(`stdout: ${stdout}`);
            res.json({ message: `stopped` })
        });

    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router