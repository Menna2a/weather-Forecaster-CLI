const request = require("request")
const forecast = require("./data1/forecast")
const geocode = require("./data1/geocode")

geocode(process.argv[2], (error, data) => {
    console.log("ERROR:", error)
    console.log("DATA:", data)
    forecast(data.latitude, data.longitude, (error, data) => {
        console.log("error:", error)
        console.log("data: ", data)
    })
})