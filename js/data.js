// data object *********************************
var data = {
  // HOtels--------------------------------------------
  hotel: {
    price: 157,
    people: {
      min: 1,
      max: 2,
    },
    nights: {
      min: 1,
      max: 5
    },
    meals: {
      breakfast: 25,
      lunch: 15,
      dinner: 30
    },
    // NOrthland data.hotel.northland
    northland: {
      fancyPalace: {
        name: 'Fancy Palace',
        img: 'img/hotel-one-sized.jpg',
      },
      kokohuia: {
        name: 'Kokohuia Lodge',
        img: 'img/kokohuia.jpg',
      },
      eaglesnest: {
        name: 'Eagles Nest',
        img: 'img/eaglesnest.jpg',
      }
    },
    // northland ENDS

    // Coromandel data.hotel.coromandel
    coromandel: {
      anchor: {
        name: 'Anchor Lodge',
        img: 'img/anchor.jpg',
      },
      drivingCreek: {
        name: 'Driving Creek Villas',
        img: 'img/driving-creek.jpg',
      },
      admiral: {
        name: 'Admiral Waters',
        img: 'img/admiral-waters.jpg',
      }
    },
    // coromandel ends

    // Rotorua data.hotel.rotorua
    rotorua: {
      princesGate: {
        name: "Prince's Gate",
        img: 'img/princes-gate.jpg',
      },
      lakeRotorua: {
        name: 'Lake Rotorua Hotel',
        img: 'img/lake-roto.jpg',
      },
      millennium: {
        name: 'Millennium Hotel',
        img: 'img/millennium.jpg',
      }
    }
  },


  // motels ------------------------------------------------
  motel: {
    price: 90,
    people: {
      min: 2,
      max: 4,
    },
    nights: {
      min: 3,
      max: 10
    },
    meals: {
      breakfast: 10,
      lunch: 5,
      dinner: 15
    },
    // Northland data.motel.northland
    northland: {
      opononi: {
        name: 'Opononi Motel',
        img: 'img/motel-one-sized.jpg',
      },
      beachbox: {
        name: 'Beachbox Boutique',
        img: 'img/beachbox.jpg',
      },
      russell: {
        name: 'Motel Russell',
        img: 'img/russell.jpg',
      }
    },

    // coromandel data.motel.coromandel
    coromandel: {
      tairua: {
        name: 'Tairua Shores Motel',
        img: 'img/motel-one-sized.jpg',
      },
      beachside: {
        name: 'Beachside Motel',
        img: 'img/beachside.jpg',
      },
      seaviews: {
        name: 'Seaviews',
        img: 'img/seaview.jpg',
      }
    },
    // rotorua data.motel.rotorua
    rotorua: {
      smelly: {
        name: 'Smelly Motel & Bar',
        img: 'img/motel-one-sized.jpg',
      },
      rotoruaMotel: {
        name: 'Rotorua Motel',
        img: 'img/roto-motel.jpg',
      },
      malones: {
        name: 'Malones Spa Motel',
        img: 'img/malones.jpg',
      }
    }
  },

  // hostels ---------------------------------------
  hostel: {
    price: 30,
    people: {
      min: 1,
      max: 1,
    },
    nights: {
      min: 1,
      max: 10
    },
    meals: {
      breakfast: 5,
      lunch: 5,
      dinner: 10
    },
    // northland data.hostel.northland
    northland: {
      mousetrap: {
        name: 'The Mousetrap',
        img: 'img/mousetrap.jpg',
      },
      haka: {
        name: 'Haka Lodge',
        img: 'img/haka-lodge.jpg',
      }
    },
    // coromandel data.hostel.coromandel
    coromandel: {
      onTheBeach: {
        name: 'Hostel On The Beach',
        img: 'img/on-the-beach.jpg',
      },
      tui: {
        name: 'Tui Lodge',
        img: 'img/tui-lodge.jpg',
      },
      surfnstay: {
        name: 'Surf N Stay',
        img: 'img/surf-n-stay.jpg',
      }
    },
    // rotorua data.hostel.rotorua
    rotorua: {
      cityBunkz: {
        name: 'CityBunkz',
        img: 'img/hostel-one-sized.jpg',
      },
      central: {
        name: 'Central Backpackers',
        img: 'img/central.jpg',
      }
    }
  },

  // house begins
  house: {
    price: 240,
    people: {
      min: 1,
      max: 4,
    },
    nights: {
      min: 2,
      max: 15
    },
    meals: {
      breakfast: 18,
      lunch: 15,
      dinner: 32
    },
    // northland data.house.northland
    northland: {
      lePetit: {
        name: 'Le Petit',
        img: 'img/house-one-sized.jpg',
      },
      kauri: {
        name: 'Kauri Villas',
        img: 'img/kauri.jpg',
      },
      postOffice: {
        name: 'Old Post Office B&B',
        img: 'img/post-office.jpg',
      }
    },
    // coromandel data.house.coromandel
    coromandel: {
      views: {
        name: 'Coromandel Views',
        img: 'img/coro-views.jpg',
      },
      aotea: {
        name: 'Aotea BnB',
        img: 'img/aotea.jpg',
      },
      mangrove: {
        name: 'Mangrove Manor',
        img: 'img/mangrove.jpg',
      }
    },
    // rotorua data.house.rotorua
    rotorua: {
      redwoods: {
        name: 'B&B at the Redwoods',
        img: 'img/redwoods.jpg',
      },
      geyser: {
        name: 'Geyser Lookout',
        img: 'img/geyser.jpg',
      },
      bellarosa: {
        name: 'Bellaroa B&B',
        img: 'img/bellarosa.jpg',
      }
    }
  }

  // data object ENDS
};
