const apiKey = "YOUR_OPENWEATHER_API_KEY";  // 🔴 Вставь свой API-ключ

document.getElementById("search-button").addEventListener("click", async () => {
    const city = document.getElementById("city-input").value;
    if (!city) return;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
