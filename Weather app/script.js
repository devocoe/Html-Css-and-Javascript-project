fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Patna,in&APPID=ENTER_API_KEY"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let country = data.sys.country;
    let name = data.name;
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let weatherdes = data.weather[0].description;
    let ico = data.weather[0].icon;
    let windspeed = data.wind.speed;

    console.log(ico);

    let clock = new Date();
    let dayname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let ms = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    // Thu Dec 03 2020

    let date = `${dayname[`${clock.getDay()}`]} ${
      ms[`${clock.getMonth()}`]
    } ${clock.getDate()} ${clock.getFullYear()}`;

    // console.log(date);
    console.log(data);
    document.getElementById(
      "icon"
    ).src = `http://openweathermap.org/img/wn/${ico}@2x.png`;
    document.getElementById("name").innerText = `${name},${country}`;
    document.getElementById("weatherdescribe").innerText = weatherdes;
    document.getElementById("temp").innerHTML = `<p>${(temp - 273.15).toFixed(
      2
    )}&#8451;</p>`;
    document.getElementById("humidity").innerText = `humidity: ${humidity}`;
    document.getElementById("windspeed").innerText = `windspeed: ${windspeed}`;
    document.getElementById("datetime").innerText = date;
    // name,main,weather,wind
  });
