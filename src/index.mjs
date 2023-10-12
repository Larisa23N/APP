let now = new Date();

let currentMinutes =now.getMinutes();
let currentHours =now.getHours();
let currentDate =now.getDate(); 
let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let currentDay = days[now.getDay()];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentMonth = months[now.getMonth()];

let h3 = document.querySelector("h3")
h3.innerHTML = `${currentDay} ${currentMonth} ${currentDate}, ${currentHours}:${currentMinutes} `;

function showWeather(response){
  console.log(response.data)
let cityElement= document.querySelector("#city");
let windElement=document.querySelector("#speed");
let humidityElement=document.querySelector("#humid");
let h1 = document.querySelector("h1");
let iconElement = document.querySelector("#icon")
let temperatureElement= document.querySelector("#temp")
let descriptionElement = document.querySelector("#description")

celsiusTemperature= Math.round(response.data.main.temp)
 celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

temperatureElement.innerHTML= Math.round(response.data.main.temp);
 descriptionElement.innerHTML = response.data.weather[0].description;
h1.innerHTML = response.data.name;
windElement.innerHTML= response.data.wind.speed;
humidityElement.innerHTML= response.data.main.humidity
cityElement= response.data.name;
iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

}
function search(city){
let api ="866a208a73eeff02182218e9441647a1";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
axios.get(`${apiUrl}&appid=${api}`).then(showWeather)
}


function handleSubmit(event){
  event.preventDefault();
  let searchInput= document.querySelector("#search-text-input");
  search(searchInput.value)
  console.log(searchInput)
}
search("Sandton")
let form = document.querySelector("#search-form")
form.addEventListener("submit",handleSubmit)

  function retrievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey="866a208a73eeff02182218e9441647a1"
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather)


}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
function displayFahrenheitTemperature(event){
event.preventDefault();
let fahrenheitTemperature =(celsiusTemperature * 9)/5+32;
let temperatureElement=document.querySelector("#temp");
temperatureElement.innerHTML=Math.round(fahrenheitTemperature);

}

function displayCelsiusTemperature(event){
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active")
  let temperatureElement=document.querySelector("#temp");
  temperatureElement.innerHTML = celsiusTemperature
  
}

let celsiusTemperature = null;

let fahrenheitLink=document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click",displayFahrenheitTemperature);
let celsiusLink =document.querySelector("#celsius-link");
celsiusLink.addEventListener("click",displayCelsiusTemperature);

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);