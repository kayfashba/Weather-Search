const apiKey = "d5a3a047d0ce2a989e9d8706938e3e52";

   document.getElementById("searchBtn").addEventListener("click", () => {
      const city = document.getElementById("cityInput").value;
      if (city === "") return;

      fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
         .then((response) => response.json())
         .then((data) => {
            document.getElementById(
               "temperature"
            ).innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById("description").innerText =
               data.weather[0].description;
            document.getElementById(
               "weatherIcon"
            ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
         })
         .catch((error) => {
            console.error("Xatolik yuz berdi:", error);
            alert("Shahar topilmadi!");
         });
   });