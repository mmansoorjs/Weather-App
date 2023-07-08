let hr = document.querySelectorAll('.hours')[0];
let min = document.querySelectorAll('.minutes')[0];
let amPm = document.querySelectorAll('.ap-pm')[0];
let userInput = document.querySelectorAll('.user-search')[0];
let city = document.querySelectorAll('.city-name')[0];
let country = document.querySelectorAll('.country-name')[0];
let dateShow = document.querySelectorAll('.date')[0];
let imageType = document.querySelectorAll('.day-image')[0];
let temprature = document.querySelectorAll('.tem-font-size')[0];
let dayType = document.querySelectorAll('.day-type')[0];
let Humidity = document.querySelectorAll('.Humidity')[0];
let Clouds = document.querySelectorAll('.Clouds')[0];
let feelLike = document.querySelectorAll('.feel-like')[0];
let windSpeed = document.querySelectorAll('.wind-speed')[0];


// ===========date-time work===============
setInterval(() => {

    // let getHour = moment().format('hh');
    // hr.innerHTML = getHour;

    // let getMinute = moment().format('mm');
    // min.innerHTML = getMinute;

    // let getAmPm = moment().format('A');
    // amPm.innerHTML = getAmPm;

    dateShow.innerHTML = moment().format('MMM, Do YYYY');
}, 1000);




navigator.geolocation.getCurrentPosition(data => {

    let longi = data.coords.longitude;
    let lati = data.coords.latitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=80895bc87c5c7bacec464a8006b2b51f&units=metric`)

        .then(res => res.json())
            
        .then(res => {

            let { wind, main, clouds, name, weather, sys } = res;

            city.innerHTML = `${name},`;
            country.innerHTML = sys.country;
            temprature.innerHTML = `${Math.round(main.temp)}<sup>°C</sup>`;
            Humidity.innerHTML = `${main.humidity}%`;
            Clouds.innerHTML = `${clouds.all}%`;
            feelLike.innerHTML = `${Math.round(main.feels_like)}°`;
            dayType.innerHTML = `${weather[0].main}`;
            windSpeed.innerHTML = `${wind.speed} km/h`;

            if (weather[0].main === 'Haze') {
                imageType.src = 'images/haze.svg'
            }
            else if (weather[0].main === 'Smoke') {
                imageType.src = 'images/smoke.svg'
            }

            else if(weather[0].main ==='Clouds'){
                imageType.src = 'images/Cloudy.svg'

            } 

            else if (weather[0].main === 'Rain') {
                imageType.src = 'images/rain.svg'
            }


            else if (weather[0].main === 'Snow') {
                imageType.src = 'images/snow.svg'
            }


            else if (weather[0].main === 'Drizzle') {
                imageType.src = 'images/drizzle.svg'
            }

            else if (weather[0].main === 'Dust') {
                imageType.src = 'images/dust.svg'
            }


            else if (weather[0].main === 'Fog') {
                imageType.src = 'images/fog.svg'
            }

            else if (weather[0].main === 'Clear') {
                imageType.src = 'images/clear-day.svg'
            }
            else if (weather[0].main === 'Thunderstorms') {
                imageType.src = 'images/thunderstorms.svg'
            }

            else if (weather[0].main === 'Mist') {
                imageType.src = 'images/mist.svg'
            }

            else if (weather[0].main === 'Tornado') {
                imageType.src = 'images/tornado.svg'
            }

            else {
                imageType.src = 'images/clear-day.svg'
            }
        })

        .catch((err) => {
            console.log(err)
        })
})






let userLocation = () => {
    if (userInput.value.trim()) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=80895bc87c5c7bacec464a8006b2b51f&units=metric`)

            .then(res => res.json())

            .then(res => {
     
                
                if(res.cod ==='404'){
                
                    Swal.fire({
               icon: 'error',
               tittle: 'Error',
               text: 'Enter correct city name'
           })
               }

               else{

                let { wind, main, clouds, name, weather, sys } = res;

                city.innerHTML = `${name},`;
                country.innerHTML = sys.country;
                temprature.innerHTML = `${Math.round(main.temp)}<sup>°C</sup>`;
                Humidity.innerHTML = `${main.humidity}%`;
                Clouds.innerHTML = `${clouds.all}%`;
                feelLike.innerHTML = `${Math.round(main.feels_like)}°`;
                dayType.innerHTML = `${weather[0].main}`;
                windSpeed.innerHTML = `${wind.speed} km/h`;

                if (weather[0].main === 'Haze') {
                    imageType.src = 'images/haze.svg'
                }
                else if (weather[0].main === 'Smoke') {
                    imageType.src = 'images/smoke.svg'
                }

                else if (weather[0].main === 'Rain') {
                    imageType.src = 'images/rain.svg'
                }

                else if (weather[0].main === 'Snow') {
                    imageType.src = 'images/snow.svg'
                }

                else if (weather[0].main === 'Drizzle') {
                    imageType.src = 'images/drizzle.svg'
                }

                else if(weather[0].main ==='Clouds'){
                    imageType.src = 'images/Cloudy.svg'
    
                } 

                else if (weather[0].main === 'Dust') {
                    imageType.src = 'images/dust.svg'
                }

                else if (weather[0].main === 'Fog') {
                    imageType.src = 'images/fog.svg'
                }

                else if (weather[0].main === 'Clear') {
                    imageType.src = 'images/clear-day.svg'
                }

                else if (weather[0].main === 'Thunderstorm') {
                    imageType.src = 'images/thunderstorms.svg'
                }

                else if (weather[0].main === 'Mist') {
                    imageType.src = 'images/mist.svg'
                }

                else if (weather[0].main === 'Tornado') {
                    imageType.src = 'images/tornado.svg'
                }

                else {
                    imageType.src = 'images/clear-day.svg'
                }

                

            }

               
            })


            .catch(err => {
                console.log(err)
                
            })
            
         
        }
        


        else {
            Swal.fire({
                icon: 'error',
                tittle: 'Error',
                text: 'Enter City Name'
            })
          
        }

        
    
        userInput.value = '';
    
    }
