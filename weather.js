const apiKey = "565d5770c8eef1d0f6ef89a518afe59a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatheerIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Haze") {
      weatheerIcon.src = "images/haze.png";
    } else if (data.weather[0].main == "Clear") {
      weatheerIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatheerIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatheerIcon.src = "images/cold.png";
    } else if (data.weather[0].main == "Mist") {
      weatheerIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
