
const BASE_URL="http://api.weatherapi.com/v1/"

const fetchWeatherApi=async(pathname,query=[])=>{
    let data={}
    try {
         data=await fetch(`${BASE_URL}${pathname}?key=D81315FD80604F04A6F212332231005&${query.join("&")}`,{
           next:{revalidate:1*60}
        })
        data=data.json()
        if(data.error){
            throw new Error(data.error.message)
        }
    return data
    } catch (error) {
        console.log(error)
    }
}

export const getForecastWeather=async({q,aqi="yes",days=3,alerts="yes",lang="tr"})=>{
    return fetchWeatherApi("forecast.json",[`q=${q}}`,`aqi=${aqi}`,`days=${days}`,`alerts=${alerts}`,`lang=${lang}`])
}
export const getCurrentWeather=async({q,aqi="yes",days=3,alerts="yes",lang="tr"})=>{
    return fetchWeatherApi("current.json",[`q=${q}}`,`aqi=${aqi}`,`days=${days}`,`alerts=${alerts}`,`lang=${lang}`])
}
export const getSearchLocation=async(q)=>{
    return fetchWeatherApi("search.json",[`q=${q}`])
}


