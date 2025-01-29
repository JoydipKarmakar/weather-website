const weatherApiKey = 'a6f647f3ddmsh5730eb6a78c8a3fp1eef2ejsn0e4ec2f84d3a';

async function searchCity() {
  const city = document.getElementById('city-input').value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  try {
    const weatherResponse = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a6f647f3ddmsh5730eb6a78c8a3fp1eef2ejsn0e4ec2f84d3a',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    });
    const weatherData = await weatherResponse.json();
    document.getElementById('city-name').textContent = weatherData.location.name;
    document.getElementById('temperature').innerHTML = `<i class="fas fa-temperature-high"></i> Temperature: ${weatherData.current.temp_c}°C`;
    document.getElementById('humidity').innerHTML = `<i class="fas fa-tint"></i> Humidity: ${weatherData.current.humidity}%`;
    document.getElementById('wind').innerHTML = `<i class="fas fa-wind"></i> Wind: ${weatherData.current.wind_kph} km/h (${weatherData.current.wind_dir})`;
  } catch (error) {
    console.error("Error", error);
    alert("Please try again later");
  }
}
