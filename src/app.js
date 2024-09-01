const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log("Someone just made a request!");
    res.status(200).json({ msg: "Server is alive at " + new Date() });
});

app.post('/', (req, res) => {
    const { status } = req.body;
    console.log("Status :", status, "At:", new Date());

    res.status(200).json({ msg: "Status recorded as " + status });
});

app.listen(port, () => {
    console.log(`Intruder Alert Server running on ${port}`);
});