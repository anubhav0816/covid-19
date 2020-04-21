const request = require('request')
const stateCase = (states,callback)=>{
    const Url = 'https://api.covid19india.org/data.json'
    request({url:Url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect with server',undefined)
        }
        else{
            l=body.statewise.length;
            for(var i=0;i<l;i++){
                if(states==body.statewise[i].state){
                    callback(undefined,{
                        confirmed:body.statewise[i].confirmed,
                        active:body.statewise[i].active,
                        deaths:body.statewise[i].deaths,
                        recovered:body.statewise[i].recovered
                    })
                }
            }
        }
    })
}
// stateCase('Himachal Pradesh',(error,data)=>{
//     console.log(data)
// })
module.exports= stateCase