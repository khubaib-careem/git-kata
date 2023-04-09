const express = require('express');
const app = express();  
const axios = require('axios');

const API_KEY = '49aa5fba3bea97942b90799f43efa429';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    const capitalizedCity = city.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    
    axios.get(apiUrl)
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('Error fetching weather data');
      });
  });
