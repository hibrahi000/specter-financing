//++  Java Script for Smooth Scrolling and Google Maps
initMap = () => {
	// your location
	const loc = { lat: 40.738133, lng: -73.998643 };
	//centered on map
	const map = new google.maps.Map(document.querySelector('.map'), {
		zoom: 14,
		center: loc
	});
	//Position of the marker
	const marker = new google.maps.Marker({ position: loc, map: map });
};

//!!Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
	if (this.hash != '') {
		event.preventDefault();
		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 150
			},
			1500
		);
	}
});

//navbar fade
window.addEventListener('scroll', function() {
	if (this.window.scrollY > 150) {
		this.document.querySelector('#navbar').style.opacity = 0.85;
	} else {
		this.document.querySelector('#navbar').style.opacity = 1;
	}
});
