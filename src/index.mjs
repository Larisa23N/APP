let now = new Date();

let currentMinutes =now.getMinutes();
let currentHours =now.getHours();
let currentDate =now.getDate(); 
let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let currentDay = days[now.getDay()];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentMonth = months[now.getMonth()];

let h3 = document.querySelector("h3")
h3.innerHTML = `${currentDay} ${currentMonth} ${currentDate} ${currentMonth}, ${currentHours}:${currentMinutes} `;
function showWeather(response){
  console.log(response.data)
let h4 = document.querySelector("h4")
let temperature = Math.round(response.data.main.temp)
h4.innerHTML = `${temperature}°C`
let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
}
function search(event){
  event.preventDefault()
  let searchInput= document.querySelector("#search-text-input");
  let h1 =document.querySelector("h1");
  let api ="866a208a73eeff02182218e9441647a1";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
axios.get(`${apiUrl}&appid=${api}`).then(showWeather)
h1.innerHTML = searchInput.value

}
let form = document.querySelector("#search-form")
form.addEventListener("submit",search)

//function convertToF(event) {
//  let currentTemp = document.querySelector("#current-temperature");
//  let temperature = currentTemp.innerHTML;
//  currentTemp.innerHTML = Math.round((temperature * 9) / 5 + 32);
//}
//function convertToC(event) {
//  let currentTemp = document.querySelector("#current-temperature");
//  let temperature = currentTemp.innerHTML;
//  currentTemp.innerHTML = Math.round(((temperature - 32) * 5) / 9);
//}
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
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);