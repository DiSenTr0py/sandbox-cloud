
const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m`);
    
document.getElementById("search-button").addEventListener("click", async () => {
    const city = document.getElementById("city-input").value;
    if (!city) return;

    try {
        // Пока координаты фиксированные (Берлин)
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m`);
        const data = await response.json();

        document.getElementById("city-name").textContent = "Berlin";  // Пока статично
        document.getElementById("temperature").textContent = `Temperature: ${data.current.temperature_2m}°C`;
        document.getElementById("description").textContent = `Wind Speed: ${data.current.wind_speed_10m} km/h`;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

    
   
