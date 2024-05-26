function updateTime() {
  const cities = [
    { id: "lisbon", timezone: "Europe/Lisbon" },
    { id: "los-angeles", timezone: "America/Los_Angeles" },
    { id: "sydney", timezone: "Australia/Sydney" },
  ];
  cities.forEach((city) => {
    const cityElement = document.querySelector(`#${city.id}`);
    if (cityElement) {
      const dateElement = cityElement.querySelector(".date");
      const timeElement = cityElement.querySelector(".time");
      const time = moment().tz(city.timezone);

      dateElement.innerHTML = time.format("MMMM Do YYYY");
      timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
    }
  });
}

function updateCity(event) {
  let timezone = event.target.value;
  if (timezone === "current") {
    timezone = moment.tz.guess();
  }
  let cityTime = moment().tz(timezone);
  let cityName = timezone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
      
        
    </div>
    <div class="homepage">
        <a href="index.html" >Go to Homepage</a></div>`;
}

updateTime();
setInterval(updateTime, 1000);

let timezoneSelect = document.querySelector("#timezones");
timezoneSelect.addEventListener("change", updateCity);
