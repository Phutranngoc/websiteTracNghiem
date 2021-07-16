// function initMap(){
//       map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 11.026374987285177, lng: 106.39168407793248},
//           zoom: 12,
//           mapId: '90e7c8d7eb1e2057'
//         });
//   } 

      const api_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=11.026374987285177&lon=106.39168407793248&exclude=daily&appid=3f53fa98ed6063b2341ef6b43468bb27&units=metric';
      
      async function getWeather(){
            const resp = await fetch(api_url);
            const data = await resp.json();
            console.log(data);
            document.getElementById('temp').textContent = data.current.temp + '°C';
            console.log(data.current.weather[0].icon);
            document.getElementById('temp-icon').src ='../images/'+data.current.weather[0].icon+'@2x.png';
      }

  
      getWeather();