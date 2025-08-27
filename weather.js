function WeatherApp() {
  const [weatherData, setWeatherData] = React.useState({
    hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
    hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
    danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
  });

  const icons = {
    Nắng: "☀️",
    "Có mây": "🌤️",
    "Mưa nhẹ": "🌧️",
    "Mưa to": "⛈️",
    Bão: "🌪️",
  };

  const [city, setCity] = React.useState("hcm");

  const setBackground = (temp) => {
    if (temp > 30) {
      return "sunny";
    } else if (temp > 20) {
      return "cloudy";
    } else {
      return "rainy";
    }
  };

  const handleRandom = () => {
    const cur = weatherData[city];
    const temp = cur.temp + Math.floor(Math.random() * 11) - 5;
    const humidity = cur.humidity + Math.floor(Math.random() * 11) - 5;

    setWeatherData({
      ...weatherData,
      [city]: { ...cur, temp, humidity },
    });
  };

  return (
    <div className="weather">
      <h1 className="title">Weather App</h1>
      <div className={`weather-card ${setBackground(weatherData[city].temp)}`}>
        <div className="header">
          Choose your location
          <select onChange={(e) => setCity(e.target.value)} className="select">
            {Object.keys(weatherData).map((key) => (
              <option key={key} value={key}>
                {weatherData[key].city}
              </option>
            ))}
          </select>
        </div>

        <div className="body">
          <div className="temp">
            {weatherData[city].temp}°C
            <div className="emoji">{icons[weatherData[city].weather]}</div>
          </div>
          <div className="weather-status">{weatherData[city].weather}</div>
          <div className="humidity">
            Humidity: {weatherData[city].humidity}%
          </div>
        </div>

        <button className="btn refresh" onClick={handleRandom}>
          Refresh
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("weather"));
root.render(<WeatherApp />);
