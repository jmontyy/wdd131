const temperature = 8;
const windSpeed = 15;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.innerHTML =
        `${calculateWindChill(temperature, windSpeed)} °C`;
}
else{
    windChill.innerHTML = "N/A";
}