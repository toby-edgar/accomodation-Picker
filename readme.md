# Accomodation Picker for Tourism New Zealand
Tourism New Zealand is the organisation responsible for marketing New Zealand to the world as a tourist destination. NZ Tourisms’ marketing activity is strategically focused on a number of key markets around the world and a select group of consumers within those key markets. This is so we get the maximum yield for the tourism industry.

Accomodation Picker is a web app that is designed to find an accomodation selection for users who may not have the knowlege to search for thier own accomodation within Aotearoa. The App takes the user through a friendly, personable and trusted questionnaire and asks them about their desired accommodation in Aotearoa and return them with a hand-picked accommodation deal.

*HTML and CSS3 has been validated with the W3S markup validation service.* <br>
*Javascript linting done through gulp.*

<hr>

### Production Tools

#### SCSS
![scss](img/scss-one.png)
![scss](img/scss-two.png)

#### Gulp

### Style guide
I have followed the principles of the [Idiomatic](https://github.com/rwaldron/idiomatic.js/) style guide to help writing consistant javascript.


``` snip
var hotel = document.getElementById('hotel');
var motel = document.getElementById('motel');
var hostel = document.getElementById('hostel');
var house = document.getElementById('house');

function accomOptions() {
  if (peopleNumber > data.hotel.people.max || nightsNumber > data.hotel.nights.max) {
    hotel.classList.add('hide');
  } else {}
  // Motel
  if (peopleNumber < data.motel.people.min || nightsNumber > data.motel.nights.max) {
    motel.classList.add('hide');
  } else {}
  // hostel
  if (peopleNumber > data.hostel.people.min || nightsNumber > data.hostel.nights.max) {
    hostel.classList.add('hide');
  } else {}
  // House
  if (nightsNumber < data.house.people.min) {
    house.classList.add('hide');
  }
  accomOptions();
```
![Home page](img/ap-homepage.png)

### Plugins & API
* jQuery
* fullpage.js
* mapbox
