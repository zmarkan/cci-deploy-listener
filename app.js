const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const file = require('fs').promises

const app = express()
app.use(express.json())

app.post('/pipeline/register', async (req, res) => {

    console.log(req.headers)

    let pipelineUrl = req.body['circleci-build-url']
    if(pipelineUrl){
        await file.appendFile('pipelines.txt', pipelineUrl + '\n', )
    }
    else {
        console.log("Missing pipeline!")
    }
    res.send()
})

app.post('/prize-draw', (req, res) => {
    console.log(req.headers())
    console.log(req.body())

    res.send()
})


app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})
