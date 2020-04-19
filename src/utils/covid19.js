const request = require('request')


const cases = (callback)=>{
    const url ='https://api.covid19india.org/data.json'
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect with server',undefined)
        }
        else{
            console.log(body.cases_time_series[0].totalconfirmed)
            k=body.cases_time_series.length,
            m=k-1,
            callback(undefined,{
                totalConfirmed: body.cases_time_series[m].totalconfirmed,
                totalrecovered: body.cases_time_series[m].totalrecovered,
                todayconfirmed: body.cases_time_series[m].dailyconfirmed,
                todayrecovered: body.cases_time_series[m].dailydeceased,

            })
        }
    })
}

module.exports=cases