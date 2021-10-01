
async function getWeather(a ="cairo") {

    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=147beabdb34741f3ba7152747211309&q=${a}&days=3`);
    let finalResult = await response.json();
    today(finalResult.location , finalResult.current);
    other(finalResult.forecast.forecastday);
    console.log(finalResult);

};
getWeather();
document.getElementById("city-input").addEventListener("keyup", function()  {
    getWeather(this.value);
});

function today(loc, cur) {

    let date = new Date(cur.last_updated);
    let day = date.toLocaleString("default" , {weekday : "long"});
    let month = date.toLocaleString("default" , {month : "long"});
    document.getElementById("location").innerHTML = loc.name
    document.getElementById("num").innerHTML = cur.temp_c;
    document.getElementById("img").setAttribute('src', "https://" + cur.condition.icon);
    document.getElementById("theDay").innerHTML = day;
    document.getElementById("theDate").innerHTML = month;
    document.getElementById("case").innerHTML = cur.condition.text;
};

function other(forcast) {

    for(let i = 1 ; i < 3 ; i++)
    {
        let date = new Date(forcast[i].date);
        let day = date.toLocaleString("default" , { weekday : "long"});
        document.getElementById(`tomorrow-name${i}`).innerHTML = day;
        document.getElementById(`img${i}`).setAttribute('src' , "https://"+forcast[i].day.condition.icon);
        document.getElementById(`maxDegree${i}`).innerHTML = (forcast[i].day.maxtemp_c+"<sup>o</sup>");
        document.getElementById(`minDegree${i}`).innerHTML = (forcast[i].day.mintemp_c+"<sup>o</sup>");
        document.getElementById(`text${i}`).innerHTML = (forcast[i].day.condition.text);
    }
}




