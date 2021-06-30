(function() {
  // fullpage.js SET UP
  $('#fullpage').fullpage({
    menu: '#menu',
    lockAnchors: true,
    anchors: ['firstPage', 'secondPage'],
    showActiveTooltip: true,
    dragAndMove: false,
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: false,
    keyboardScrolling: false,
    loopHorizontal: false,
    horizontalCentered: false,
    scrollingSpeed: 100,
    easingcss3: 'ease 1s',
  });

  // map
  // Map
  mapboxgl.accessToken = 'pk.eyJ1IjoidG9ieWVkZ2FyIiwiYSI6ImNrcDV4c2dldTBvbmQydm93aHlyajM0bHMifQ.C0IAet5AI8eG8ZKmGN0zZQ';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [175.553949, -39.235196], // starting position [lng, lat]
    zoom: 10 // starting zoom
  });


  //  Button click Events -------------------------

  // Move page down
  $('#btnDwn').click(function() {
    $.fn.fullpage.moveSectionDown();
    hideShow();
  });

  // Move page up
  $('#btnUp').click(function() {
    $.fn.fullpage.moveSectionUp();
    hideShow();
  });

  $('#submit').click(function() {
    $.fn.fullpage.moveSlideRight();
    hideShow();
  });

  // Move page left
  $('#btnLeft, #btnLeftTwo, #btnLeftThree, #btnLeftFour').click(function() {
    $.fn.fullpage.moveSlideLeft();
    hideShow();
  });



  // home page ends

  // hiding and shoing all divs on clisk
  function hideShow() {
    allDivs = document.getElementsByTagName('div');
    $(allDivs).fadeOut(1000,
      function() {
        $(allDivs).fadeIn(2000);
      });
  }

  // Slide One Begins ******************************
  // Number of people and nights values *******************************

  var minusPeopleBtn = document.getElementById("minusPeople");
  var plusPeopleBtn = document.getElementById("plusPeople");
  var numberPlacePeople = document.getElementById("numberPlacePeople");
  var peopleNumber = 2; /// people number value
  var peopleMin = data.hostel.people.min; /// min number
  var peopleMax = data.house.people.max; /// max number


  // People number-------------------------------
  // MINUS BTN
  minusPeopleBtn.onclick = function() {
    if (peopleNumber > peopleMin) {
      peopleNumber = peopleNumber - 1; /// Minus 1 of the number
      numberPlacePeople.innerText = peopleNumber; /// Display the value in place of the number
    }
  };

  // PLUS BTN
  plusPeopleBtn.onclick = function() {
    if (peopleNumber < peopleMax) {
      peopleNumber = peopleNumber + 1;
      numberPlacePeople.innerText = peopleNumber; /// Display the value in place of the number
    }
  };


  // Nights number ----------------------------
  var minusNightsBtn = document.getElementById("minusNights");
  var plusNightsBtn = document.getElementById("plusNights");
  var numberPlaceNights = document.getElementById("numberPlaceNights");
  var nightsNumber = 4;
  var nightsMin = data.hotel.nights.min; /// min number
  var nightsMax = data.house.nights.max; /// max number;

  // MINUS BTN
  minusNightsBtn.onclick = function() {
    if (nightsNumber > nightsMin) {
      nightsNumber = nightsNumber - 1; /// Minus 1 of the number
      numberPlaceNights.innerText = nightsNumber; /// Display the value in place of the number
    }
  };

  // PLUS BTN
  plusNightsBtn.onclick = function() {
    if (nightsNumber < nightsMax) {
      nightsNumber = nightsNumber + 1;
      numberPlaceNights.innerText = nightsNumber; /// Display the value in place of the number
    }
  };

  //  No date selected


  // error if no accom options avaiable w selection
  function accomError() {
    if (peopleNumber < 2 && nightsNumber > 10) {
      alert('Max nights for 1 person is 10!');
    } else {}
  }

  function updateStartDate() {
    var date = new Date($('#datePicker').val());
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var getStartDate = document.getElementById('startDateFinal');
    console.log(peopleNumber + ' guests');
    console.log(nightsNumber + ' nights');
    console.log([day, month, year].join('/'));
    getStartDate.textContent = ([day, month, year].join('/'));

    if (isNaN(day)) {
      // $('#datePicker').css('border-color', '#E76A57')
      $('#datePicker').addClass('shake-horizontal');
    } else {
      $.fn.fullpage.moveSlideRight();
      hideShow();
    }
  }

  // submit button to work when options selected corectly
  $('#submitOne').click(function() {
    // error showing no accoms matched
    accomError();
    updateStartDate();
  });

  // End Of Slide One ******************************

  // Slide Two BEGINS ******************************
  // Location and Keywords

  // find value of location input
  var getLocation = document.getElementById('locations');


  // keywords stay green once clicked
  $('.keyword-btn').click(function() {
    $(this).toggleClass('clicked');
  });


  // continue button slides to next page
  $('#submitTwo').click(function() {
    $.fn.fullpage.moveSlideRight();
    accomOptions();
    console.log(getLocation.value);
    hideShow();
  });

  // Slide two ends ****************************




  // Slide three begins ************************
  // Accom selection, meal selection
  //
  // 1. only show accom option if slected nights and guests match the options
  var hotel = document.getElementById('hotel');
  var motel = document.getElementById('motel');
  var hostel = document.getElementById('hostel');
  var house = document.getElementById('house');


  function accomOptions() {
    // removing accom options on
    // hotel
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
    // accomOptions() ENDS
  }


  // 2. find the accomodation selected on click
  hotel.onclick = function() {
    $('#motel').removeClass('clicked');
    $('#hostel').removeClass('clicked');
    $('#house').removeClass('clicked');
    $(this).addClass('clicked');
    accomSelection = document.getElementById('hotel');
    hotel = true;
  };

  motel.onclick = function() {
    $('#hotel').removeClass('clicked');
    $('#hostel').removeClass('clicked');
    $('#house').removeClass('clicked');
    $(this).addClass('clicked');
    accomSelection = document.getElementById('motel');
    motel = true;
  };

  hostel.onclick = function() {
    $('#hotel').removeClass('clicked');
    $('#motel').removeClass('clicked');
    $('#house').removeClass('clicked');
    $(this).addClass('clicked');
    accomSelection = document.getElementById('hostel');
    hostel = true;
  };

  house.onclick = function() {
    $('#hotel').removeClass('clicked');
    $('#motel').removeClass('clicked');
    $('#hostel').removeClass('clicked');
    $(this).addClass('clicked');
    accomSelection = document.getElementById('house');
    house = true;
  };


  // turn selected meals green & find the meals selected
  var getBreakfast = document.getElementById('breakfast');
  var getLunch = document.getElementById('lunch');
  var getDinner = document.getElementById('dinner');
  var getNoMeals = document.getElementById('noMeals');

  // change meal buttons on click
  $('#breakfast').toggle(function() {
    $('#noMeals').removeClass('crossed');
    $(this).addClass('clicked');
  }, function() {
    $(this).removeClass('clicked');
  });

  $('#lunch').toggle(function() {
    $('#noMeals').removeClass('crossed');
    $(this).addClass('clicked');
  }, function() {
    $(this).removeClass('clicked');
  });

  $('#dinner').toggle(function() {
    $('#noMeals').removeClass('crossed');
    $(this).addClass('clicked');
  }, function() {
    $(this).removeClass('clicked');
  });

  getNoMeals.onclick = function() {
    $('#breakfast').removeClass('clicked');
    $('#lunch').removeClass('clicked');
    $('#dinner').removeClass('clicked');
    $(this).addClass('crossed');
  };


  function doesBreakfastExist() {
    // Dom query needed for element
    if (getBreakfast.classList.contains('clicked')) {
      getBreakfast = true;
    } else {
      getBreakfast = false;
    }
  }
  // doesBreakfastExist ends

  function doesLunchExist() {
    // Dom query needed for element
    if (getLunch.classList.contains('clicked')) {
      getLunch = true;
    } else {
      getLunch = false;
    }
  }
  // doesLunchExist ends

  function doesDinnerExist() {
    // Dom query needed for element
    if (getDinner.classList.contains('clicked')) {
      getDinner = true;
    } else {
      getDinner = false;
    }
  }
  // doesDinnerExist ends

  function doesNoMealsExist() {
    // Dom query needed for element
    if (getNoMeals.classList.contains('clicked')) {
      getNoMeals = true;
    } else {
      getNoMeals = false;
    }
  }
  // doesNoMealsExist ends


  // // no accom selected
  function noAccom() {
    if (hotel === true) {
      $.fn.fullpage.moveSlideRight();
      hideShow();
    } else if (motel === true) {
      $.fn.fullpage.moveSlideRight();
      hideShow();
    } else if (hostel === true) {
      $.fn.fullpage.moveSlideRight();
      hideShow();
    } else if (house === true) {
      $.fn.fullpage.moveSlideRight();
      hideShow();
    } else {
      $('#accomTypes').addClass('shake-horizontal');
    }
  }


  // 6. have accom type and meal optins in console log on click
  $('#submitThree').click(function() {
    noAccom();
    generatorTransitions();
    updateGenerator();
    doesBreakfastExist();
    doesLunchExist();
    doesDinnerExist();
    doesNoMealsExist();
  });

  // Slide three ENDS **************************************


  // Slide four BEGINS
  // accom generator
  function generatorTransitions() {
    $('#accomImage').fadeOut(0,
      function() {
        $('#accomImage').fadeIn(2000);
      });

    $('#accomName').fadeOut(0,
      function() {
        $('#accomName').fadeIn(4000);
      });
  }
  // generatorTransitions() ENDS


  // 1. place hotel name in document
  // 2. place accom type and location in document
  function updateGenerator() {

    var getAccomType = document.getElementById('accomType');
    var getAccomName = document.getElementById('accomName');
    var getAccomImage = document.getElementById('accomImage');

    // Hotels
    if (accomSelection.value === 'Hotel' && getLocation.value === 'Northland') {
      var fancyPalace = data.hotel.northland.fancyPalace;
      var kokohuia = data.hotel.northland.kokohuia;
      var eaglesnest = data.hotel.northland.eaglesnest;

      var hotelsNorth = ['Fancy Palace', 'Kokohuia', 'Eaglesnest'];
      var randomHotelNorth = hotelsNorth[Math.floor(Math.random() * hotelsNorth.length)];


      if (randomHotelNorth === 'Fancy Palace') {
        getAccomName.textContent = fancyPalace.name;
        getAccomImage.src = fancyPalace.img;

        // // // marker on map
        var markerA = new mapboxgl.Marker()
          .setLngLat([174.088046, -35.278908])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [
            174.088046, -35.278908
          ],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHotelNorth === 'Kokohuia') {
        getAccomName.textContent = kokohuia.name;
        getAccomImage.src = kokohuia.img;

        var markerB = new mapboxgl.Marker()
          .setLngLat([173.389481, -35.523738])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [
            173.389481, -35.523738
          ],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHotelNorth === 'Eaglesnest') {
        getAccomName.textContent = eaglesnest.name;
        getAccomImage.src = eaglesnest.img;

        var markerC = new mapboxgl.Marker()
          .setLngLat([174.116967, -35.252717])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [
            174.116967, -35.252717
          ],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);

    } else if (accomSelection.value === 'Hotel' && getLocation.value === 'Coromandel') {
      var anchor = data.hotel.coromandel.anchor;
      var drivingCreek = data.hotel.coromandel.drivingCreek;
      var admiral = data.hotel.coromandel.admiral;

      var hotelsCoro = ['Anchor', 'Driving Creek', 'Admiral'];
      var randomHotelCoro = hotelsCoro[Math.floor(Math.random() * hotelsCoro.length)];

      if (randomHotelCoro === 'Anchor') {
        getAccomName.textContent = anchor.name;
        getAccomImage.src = anchor.img;

        var markerD = new mapboxgl.Marker()
          .setLngLat([175.491986, -36.761232])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.491986, -36.761232],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHotelCoro === 'Driving Creek') {
        getAccomName.textContent = drivingCreek.name;
        getAccomImage.src = drivingCreek.img;

        var markerE = new mapboxgl.Marker()
          .setLngLat([175.501070, -36.739953])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.501070, -36.739953],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHotelCoro === 'Admiral') {
        getAccomName.textContent = admiral.name;
        getAccomImage.src = admiral.img;

        var markerF = new mapboxgl.Marker()
          .setLngLat([175.756024, -36.840391])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.756024, -36.840391],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);

    } else if (accomSelection.value === 'Hotel' && getLocation.value === 'Rotorua') {
      var princesGate = data.hotel.rotorua.princesGate;
      var lakeRotorua = data.hotel.rotorua.lakeRotorua;
      var millennium = data.hotel.rotorua.millennium;

      var hotelsRoto = ['Princes Gate', 'Lake Rotorua', 'Millenium'];
      var randomHotelRoto = hotelsRoto[Math.floor(Math.random() * hotelsRoto.length)];

      if (randomHotelRoto === 'Princes Gate') {
        getAccomName.textContent = princesGate.name;
        getAccomImage.src = princesGate.img;

        var markerG = new mapboxgl.Marker()
          .setLngLat([176.255005, -38.134766])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.255005, -38.134766],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHotelRoto === 'Lake Rotorua') {
        getAccomName.textContent = lakeRotorua.name;
        getAccomImage.src = lakeRotorua.img;

        var markerH = new mapboxgl.Marker()
          .setLngLat([176.245501, -38.105422])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.245501, -38.105422],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHotelRoto === 'Millenium') {
        getAccomName.textContent = millennium.name;
        getAccomImage.src = millennium.img;

        var markerI = new mapboxgl.Marker()
          .setLngLat([176.287321, -38.084325])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.287321, -38.084325],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);
    }

    // Motels
    if (accomSelection.value === 'Motel' && getLocation.value === 'Northland') {
      var opononi = data.motel.northland.opononi;
      var beachbox = data.motel.northland.beachbox;
      var russell = data.motel.northland.russell;

      var motelsNorth = ['Opononi', 'Beachbox', 'Russell'];
      var randomMotelNorth = motelsNorth[Math.floor(Math.random() * motelsNorth.length)];

      if (randomMotelNorth === 'Opononi') {
        getAccomName.textContent = opononi.name;
        getAccomImage.src = opononi.img;

        var markerJ = new mapboxgl.Marker()
          .setLngLat([173.390221, -35.508711])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [173.390221, -35.508711],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomMotelNorth === 'Beachbox') {
        getAccomName.textContent = beachbox.name;
        getAccomImage.src = beachbox.img;

        var markerK = new mapboxgl.Marker()
          .setLngLat([173.509870, -34.990990])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [173.509870, -34.990990],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomMotelNorth === 'Russell') {
        getAccomName.textContent = russell.name;
        getAccomImage.src = russell.img;

        var markerL = new mapboxgl.Marker()
          .setLngLat([174.124691, -35.265612])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [174.124691, -35.265612],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);

    } else if (accomSelection.value === 'Motel' && getLocation.value === 'Coromandel') {
      var tairua = data.motel.coromandel.tairua;
      var beachside = data.motel.coromandel.beachside;
      var seaviews = data.motel.coromandel.seaviews;

      var motelsCoro = ['Tairua', 'Beachside', 'Seaviews'];
      var randomMotelCoro = motelsCoro[Math.floor(Math.random() * motelsCoro.length)];

      if (randomMotelCoro === 'Tairua') {
        getAccomName.textContent = tairua.name;
        getAccomImage.src = tairua.img;

        var markerM = new mapboxgl.Marker()
          .setLngLat([175.864766, -36.998407])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.864766, -36.998407],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomMotelCoro === 'Beachside') {
        getAccomName.textContent = beachside.name;
        getAccomImage.src = beachside.img;

        var markerN = new mapboxgl.Marker()
          .setLngLat([175.756752, -36.709767])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.756752, -36.709767],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomMotelCoro === 'Seaviews') {
        getAccomName.textContent = seaviews.name;
        getAccomImage.src = seaviews.img;

        var markerO = new mapboxgl.Marker()
          .setLngLat([175.535603, -37.059679])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.535603, -37.059679],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);

    } else if (accomSelection.value === 'Motel' && getLocation.value === 'Rotorua') {
      var smelly = data.motel.rotorua.smelly;
      var rotoruaMotel = data.motel.rotorua.rotoruaMotel;
      var malones = data.motel.rotorua.malones;

      var motelsRoto = ['Smelly', 'Rotorua Motel', 'Malones'];
      var randomMotelRoto = motelsRoto[Math.floor(Math.random() * motelsRoto.length)];

      if (randomMotelRoto === 'Smelly') {
        getAccomName.textContent = smelly.name;
        getAccomImage.src = smelly.img;

        var markerP = new mapboxgl.Marker()
          .setLngLat([176.240816, -38.143100])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.240816, -38.143100],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomMotelRoto === 'Rotorua Motel') {
        getAccomName.textContent = rotoruaMotel.name;
        getAccomImage.src = rotoruaMotel.img;

        var markerQ = new mapboxgl.Marker()
          .setLngLat([176.239194, -38.124376])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.239194, -38.124376],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomMotelRoto === 'Malones') {
        getAccomName.textContent = malones.name;
        getAccomImage.src = malones.img;

        var markerR = new mapboxgl.Marker()
          .setLngLat([176.253943, -38.152610])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.253943, -38.152610],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);
    }

    // Hostels
    if (accomSelection.value === 'Hostel' && getLocation.value === 'Northland') {
      var mousetrap = data.hostel.northland.mousetrap;
      var haka = data.hostel.northland.haka;

      var hostelsNorth = ['MouseTrap', 'Haka'];
      var randomHostelNorth = hostelsNorth[Math.floor(Math.random() * hostelsNorth.length)];

      if (randomHostelNorth === 'MouseTrap') {
        getAccomName.textContent = mousetrap.name;
        getAccomImage.src = mousetrap.img;

        var markerS = new mapboxgl.Marker()
          .setLngLat([174.094250, -35.284914])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [174.094250, -35.284914],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHostelNorth === 'Haka') {
        getAccomName.textContent = haka.name;
        getAccomImage.src = haka.img;

        var markerT = new mapboxgl.Marker()
          .setLngLat([173.812327, -35.901218])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [173.812327, -35.901218],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);

    } else if (accomSelection.value === 'Hostel' && getLocation.value === 'Coromandel') {
      var onTheBeach = data.hostel.coromandel.onTheBeach;
      var tui = data.hostel.coromandel.tui;
      var surfnstay = data.hostel.coromandel.surfnstay;

      var hostelsCoro = ['On The Beach', 'Tui', 'Surf n Stay'];
      var randomHostelCoro = hostelsCoro[Math.floor(Math.random() * hostelsCoro.length)];

      if (randomHostelCoro === 'On The Beach') {
        getAccomName.textContent = onTheBeach.name;
        getAccomImage.src = onTheBeach.img;

        var markerU = new mapboxgl.Marker()
          .setLngLat([175.878226, -37.213008])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.878226, -37.213008],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHostelCoro === 'Tui') {
        getAccomName.textContent = tui.name;
        getAccomImage.src = tui.img;

        var markerV = new mapboxgl.Marker()
          .setLngLat([175.504576, -36.762730])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.504576, -36.762730],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHostelCoro === 'Surf n Stay') {
        getAccomName.textContent = surfnstay.name;
        getAccomImage.src = surfnstay.img;

        var markerW = new mapboxgl.Marker()
          .setLngLat([175.944045, -37.416681])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.944045, -37.416681],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);

    } else if (accomSelection.value === 'Hostel' && getLocation.value === 'Rotorua') {
      var cityBunkz = data.hostel.rotorua.cityBunkz;
      var central = data.hostel.rotorua.central;

      var hostelsRoto = ['CityBunkz', 'Central'];
      var randomHostelRoto = hostelsRoto[Math.floor(Math.random() * hostelsRoto.length)];

      if (randomHostelRoto === 'CityBunkz') {
        getAccomName.textContent = cityBunkz.name;
        getAccomImage.src = cityBunkz.img;

        var markerX = new mapboxgl.Marker()
          .setLngLat([176.248581, -38.137593])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.248581, -38.137593],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHostelRoto === 'Central') {
        getAccomName.textContent = central.name;
        getAccomImage.src = central.img;

        var markerY = new mapboxgl.Marker()
          .setLngLat([176.260040, -38.157690])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.260040, -38.157690],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);
    }

    // House
    if (accomSelection.value === 'House' && getLocation.value === 'Northland') {
      var lePetit = data.house.northland.lePetit;
      var kauri = data.house.northland.kauri;
      var postOffice = data.house.northland.postOffice;

      var houseNorth = ['Le Petit', 'Kauri', 'Post Office'];
      var randomHouseNorth = houseNorth[Math.floor(Math.random() * houseNorth.length)];

      if (randomHouseNorth === 'Le Petit') {
        getAccomName.textContent = lePetit.name;
        getAccomImage.src = lePetit.img;

        var markerZ = new mapboxgl.Marker()
          .setLngLat([173.186141, -35.197038])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [173.186141, -35.197038],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHouseNorth === 'Kauri') {
        getAccomName.textContent = kauri.name;
        getAccomImage.src = kauri.img;

        var markerAa = new mapboxgl.Marker()
          .setLngLat([174.455859, -35.761500])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [174.455859, -35.761500],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHouseNorth === 'Post Office') {
        getAccomName.textContent = postOffice.name;
        getAccomImage.src = postOffice.img;

        var markerBb = new mapboxgl.Marker()
          .setLngLat([174.096841, -35.289167])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [174.096841, -35.289167],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);

    } else if (accomSelection.value === 'House' && getLocation.value === 'Coromandel') {
      var views = data.house.coromandel.views;
      var aotea = data.house.coromandel.aotea;
      var mangrove = data.house.coromandel.mangrove;

      var houseCoro = ['Views', 'Aotea', 'Mangrove'];
      var randomHouseCoro = houseCoro[Math.floor(Math.random() * houseCoro.length)];

      if (randomHouseCoro === 'Views') {
        getAccomName.textContent = views.name;
        getAccomImage.src = views.img;

        var markerCc = new mapboxgl.Marker()
          .setLngLat([175.506454, -36.748680])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.506454, -36.748680],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHouseCoro === 'Aotea') {
        getAccomName.textContent = aotea.name;
        getAccomImage.src = aotea.img;

        var markerDd = new mapboxgl.Marker()
          .setLngLat([175.557365, -36.991856])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.557365, -36.991856],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHouseCoro === 'Mangrove') {
        getAccomName.textContent = mangrove.name;
        getAccomImage.src = mangrove.img;

        var markerEe = new mapboxgl.Marker()
          .setLngLat([175.497039, -36.804586])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [175.497039, -36.804586],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);

    } else if (accomSelection.value === 'House' && getLocation.value === 'Rotorua') {
      var redwoods = data.house.rotorua.redwoods;
      var geyser = data.house.rotorua.geyser;
      var bellarosa = data.house.rotorua.bellarosa;

      var houseRoto = ['Redwoods', 'Geyser', 'Bellarosa'];
      var randomHouseRoto = houseRoto[Math.floor(Math.random() * houseRoto.length)];

      if (randomHouseRoto === 'Redwoods') {
        getAccomName.textContent = redwoods.name;
        getAccomImage.src = redwoods.img;

        var markerFf = new mapboxgl.Marker()
          .setLngLat([176.273291, -38.164204])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.273291, -38.164204],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHouseRoto === 'Geyser') {
        getAccomName.textContent = geyser.name;
        getAccomImage.src = geyser.img;

        var markerGg = new mapboxgl.Marker()
          .setLngLat([176.239173, -38.170822])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.239173, -38.170822],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      } else if (randomHouseRoto === 'Bellarosa') {
        getAccomName.textContent = bellarosa.name;
        getAccomImage.src = bellarosa.img;

        var markerHh = new mapboxgl.Marker()
          .setLngLat([176.330714, -38.067740])
          .addTo(map);

        // Fly to
        map.flyTo({
          center: [176.330714, -38.067740],
          zoom: 13,
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });

      }
      getAccomType.textContent = (accomSelection.value + ', ' + getLocation.value);
    }
  }
  // updateGenerator() ENDS


  // 3. refresh button shows another same accom type
  $('#refreshBtn').click(function() {
    generatorTransitions();
    updateGenerator();
  });


  $('#submitFour').click(function() {
    // Calling function to update next slide
    updateAccomName();
    updateAccomInfo();
    updateTotalPrice();
    $.fn.fullpage.moveSlideRight();
    hideShow();
  });
  // Slide four ENDS *************************************


  // Slide five begins ***********************************
  // Final accomodation information

  //  update image, accm name and accom type
  function updateAccomName() {
    var getFinalImage = document.getElementById('accomImageFinal');
    var getFinalName = document.getElementById('accomNameFinal');
    var getFinalType = document.getElementById('accomTypeFinal');
    var getAccomType = document.getElementById('accomType');
    var getAccomName = document.getElementById('accomName');
    var getAccomImage = document.getElementById('accomImage');

    // updating image
    getFinalImage.src = getAccomImage.src;

    // updating accom name
    getFinalName.textContent = getAccomName.textContent;

    // updateing accom type
    getFinalType.textContent = getAccomType.textContent;
  }
  // updateAccomName() ENDS


  // Updating meals, nights, guests and date
  function updateAccomInfo() {
    var getFinalGuests = document.getElementById('guestsFinal');
    var getFinalNights = document.getElementById('nightsFinal');
    // var getStartDate = document.getElementById('startDateFinal');

    // update final guests and nights selection
    getFinalGuests.textContent = (peopleNumber + ' Guests');
    getFinalNights.textContent = (nightsNumber + ' Nights');

    // meals
    var getMealOne = document.getElementById('mealOne');
    var getMealTwo = document.getElementById('mealTwo');
    var getMealThree = document.getElementById('mealThree');

    if (getBreakfast === true) {
      getMealOne.textContent = 'Breakfast';
    } else {}
    if (getLunch === true) {
      getMealTwo.textContent = 'Lunch';
    } else {}
    if (getDinner === true) {
      getMealThree.textContent = 'Dinner';
    } else {}

    // update start date
    updateStartDate();
  }
  // updateAccomInfo() ENDS


  // Calculating total Price
  function updateTotalPrice() {
    // Total Price
    var hotelPrice = data.hotel.price;
    var motelPrice = data.motel.price;
    var hostelPrice = data.hostel.price;
    var housePrice = data.house.price;
    var getTotalPrice = document.getElementById('totalPriceFinal');

    // geting accomodation price due to accomSelection and nightsNumber
    if (accomSelection.value === 'Hotel') {
      accomPrice = (hotelPrice * nightsNumber);

      // price for meals within hotel
      if (getBreakfast === true) {
        breakfastPrice = data.hotel.meals.breakfast;
      } else {
        breakfastPrice = 0;
      }
      if (getLunch === true) {
        lunchPrice = data.hotel.meals.lunch;
      } else {
        lunchPrice = 0;
      }
      if (getDinner === true) {
        dinnerPrice = data.hotel.meals.dinner;
      } else {
        dinnerPrice = 0;
      }

    } else if (accomSelection.value === 'Motel') {
      accomPrice = (motelPrice * nightsNumber);

      // price for meals within motel
      if (getBreakfast === true) {
        breakfastPrice = data.motel.meals.breakfast;
      } else {
        breakfastPrice = 0;
      }
      if (getLunch === true) {
        lunchPrice = data.motel.meals.lunch;
      } else {
        lunchPrice = 0;
      }
      if (getDinner === true) {
        dinnerPrice = data.motel.meals.dinner;
      } else {
        dinnerPrice = 0;
      }

    } else if (accomSelection.value === 'Hostel') {
      accomPrice = (hostelPrice * nightsNumber);

      // price for meals within hostel
      if (getBreakfast === true) {
        breakfastPrice = data.hostel.meals.breakfast;
      } else {
        breakfastPrice = 0;
      }
      if (getLunch === true) {
        lunchPrice = data.hostel.meals.lunch;
      } else {
        lunchPrice = 0;
      }
      if (getDinner === true) {
        dinnerPrice = data.hostel.meals.dinner;
      } else {
        dinnerPrice = 0;
      }

    } else if (accomSelection.value === 'House') {
      accomPrice = (housePrice * nightsNumber);

      // price for meals within house
      if (getBreakfast === true) {
        breakfastPrice = data.house.meals.breakfast;
      } else {
        breakfastPrice = 0;
      }
      if (getLunch === true) {
        lunchPrice = data.house.meals.lunch;
      } else {
        lunchPrice = 0;
      }
      if (getDinner === true) {
        dinnerPrice = data.house.meals.dinner;
      } else {
        dinnerPrice = 0;
      }
    }


    getBreakfastPrice = ((breakfastPrice * peopleNumber) * nightsNumber);
    getLunchPrice = ((lunchPrice * peopleNumber) * (nightsNumber - 1));
    getDinnerPrice = ((dinnerPrice * peopleNumber) * nightsNumber);
    mealPrice = (getBreakfastPrice + getLunchPrice + getDinnerPrice);
    // Total
    getTotalPrice.textContent = ('$' + (accomPrice + mealPrice) + '.00');
  }
  // updateTotalPrice() ENDS

  // Reload button refresh whole application
  $('#startOverBtn').click(function() {
    reload = location.reload();
    $.fn.fullpage.moveSlideRight();
    hideShow();
  });

  // book now button
  $('#bookNowBtn').click(function() {
    alert('XD');
  });

}());
// IIFE ENDS
