function burger() {
    var form = document.querySelector(".menu-btn");
    var nav = document.querySelector(".menu-nav");
  
    if (form.classList.contains('menu-btn_active')) {
      form.classList.remove('menu-btn_active');
      nav.classList.remove('menu-nav_active');
    } else {
      form.classList.add('menu-btn_active');
      nav.classList.add('menu-nav_active');
    }
  }
  
  let btn = document.querySelector('.menu-btn');
  btn.addEventListener('click', burger);

  // Script for MAPs
  function	 initMap() {
		var pos = {lat: 49.580270, lng: 34.583697}
		var opt = {
			center: pos,
			zoom: 17,
			styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]

		};
		var map = new google.maps.Map(document.getElementById("map"), opt);
		var marker = new google.maps.Marker({
			position: pos,
			map: map,
			title: "EMPIRE BARBERSHOP",
			icon: ""
		});
		var info = new google.maps.InfoWindow({
			content: '<h4>EMPIRE BARBERSHOP</h4><p>Працюємо з 10:00 до 21:00 <br> Пн-вихідний день <br> тел: 066-053-78-27</p>'
		});

		marker.addListener("click", function(){
			info.open(map, marker);
		})
	}