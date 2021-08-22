const axios = require('axios')
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// const APIkey = 'ebde9dbb5a4407d87582c7edbb768f3f'
class Swapi{
    static swapi(req,res,next){
        const cityName = req.body
    axios({
        method: 'GET',
        url:`https://swapi.dev/api/people`
        })
        .then((response)=>{
            res.status(200).json(response.data)
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err)
        })
    }
}

module.exports = Swapi