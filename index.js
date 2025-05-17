//Weather Api
        const apiKey = "3ea0e61915e0169e54e85ab9a9bafcc2";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBoxx = document.querySelector(".search input");
        const searchButton = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";

            }
            else {
                var data = await response.json();
                // console.log(data);

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";


                //   weather Icon
                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "./images/clouds.png";
                }
                else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "./images/clear.png";
                }
                else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "./images/rain.png";
                }
                else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "./images/drizzle.png";
                }
                else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "./images/mist.png";
                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
                document.querySelector(".heading").style.display ="none";
            }
        }

        searchButton.addEventListener("click", () => {
            checkWeather(searchBoxx.value);
        })




        // Create background particles
        const particlesContainer = document.getElementById('particles');
        const numberOfParticles = 20;

        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random size between 5px and 15px
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Random position
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;

            // Random animation duration between 15s and 30s
            const duration = Math.random() * 15 + 15;
            particle.style.animationDuration = `${duration}s`;

            // Random delay
            const delay = Math.random() * 5;
            particle.style.animationDelay = `${delay}s`;

            particlesContainer.appendChild(particle);
        }

        // Add functionality to dynamically update weather information
        // You would typically connect this to a weather API
        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');

        searchBtn.addEventListener('click', () => {
            // Animation for button click
            searchBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                searchBtn.style.transform = 'scale(1)';
            }, 100);

            // Example function to simulate updating the weather
            // In a real app, this would fetch data from an API
            if (searchBox.value.trim() !== '') {
                updateWeatherDisplay(searchBox.value);
            }
        });

        function updateWeatherDisplay(city) {
            // Example function - would be replaced with actual API data
            document.querySelector('.city').textContent = city;
            document.querySelector('.weather').style.opacity = '0';

            setTimeout(() => {
                document.querySelector('.weather').style.opacity = '1';
            }, 300);
        }

        // Handle key press (Enter)
        searchBox.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                searchBtn.click();
            }
        });
    