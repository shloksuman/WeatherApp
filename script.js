const apiKey = "c3094da56de3d1a018d5bc4bd0621409";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function getWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json(); //contains all the json info
    console.log(data);

    document.querySelector(".city").innerHTML = data.name ;
    // document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C" ;
    document.querySelector(".temp").innerHTML = data.main.temp + "° C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h" ;
}


// triggers function upon CLICK
searchBtn.addEventListener("click" , ()=>{
    getWeather (searchBox.value );
});


// triggers function upon HITTING ENTER BUTTON / KEYPRESS
searchBox.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        const textInsideInput = searchBox.value;
        getWeather(textInsideInput);

        // or simply write this
        // getWeather ( this.value );
    }
})




