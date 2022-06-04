const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors)

const theBigSix = {
    "Chelsea": {
        "id": 1,
        "name":"Chelsea Fc",
        "stadium" : "stamford bridge",
        "manager" : "Thomas Tuchel"
    },
    "Man Utd": {
       "id": 2,
       "name":"Manchester United",
       "stadium" : "Old Trafford",
       "manager" : "Erik Ten Hag"
   },
   "liverpool": {
       "id": 3,
       "name":"Liverpool Fc",
       "stadium" : "Anfield",
       "manager" : "Jurgen Klopp"
   },
   "Arsenal": {
       "id": 4,
       "name":"Arsenal Fc",
       "stadium" : "Emirates",
       "manager" : "Mikel Arteta"
   },
   "Man City": {
       "id": 5,
       "name":"Manchester City",
       "stadium" : "Etihad",
       "manager" : "Pep Guardiola"
   },
   "Spurs": {
       "id": 6,
       "name":"Tottenham Hotspur",
       "stadium" : "Tottenham Hotspur Stadium",
       "manager" : "Antonio Conte"
   },

   "Unknown": {
    "id": "unknown",
    "name":"unknown",
    "stadium" : "unknown",
    "manager" : "unknown"
   }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/', (req, res) => {
    res.json(theBigSix)
  
})

app.listen(process.env.PORT || PORT, () => {
    console.log('listening on port ' + PORT )
})
.catch(error => console.error(error))