fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=d3db423c5d668725b71a3527c28df71e").then((response) => {
  return response.json()
}).then((json) => {
  document.getElementById("city").innerHTML = (json.name)
  document.getElementById("temperature").innerHTML = (json.main.temp)
  document.getElementById("description").innerHTML = (json.weather[0].description)
})
