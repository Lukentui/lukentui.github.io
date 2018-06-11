var app = new Vue({
	el: '#app',
	data: {
		url: null,
		canDownload: false,
		correctUrl: false,

		isInstagram: false,
		isYoutube: false,
		isTwitter: false,

		youtube: {
			request: [],
			preview: {
				default: 'none.jpg',
				current: false,
			},
			options: {
				quality: 0,
			},
		}
	},
	methods: {
		checkPayload: function() {
			axios.get(`http://josemicoronil.hol.es/youtube_get_video_url.php?url=${app.url}`)
				.then(function (response) {
					var response = response.data;

					if(response[0].error) {
						toastr["error"]("Зыс видосик не найден((")
						app.youtube.preview.current = false;
						app.youtube.options.quality = 0;

						app.canDownload = false;
					} else {
						var id = (app.url.split("v=").pop()).split("&")[0];
						app.youtube.preview.current = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
						app.youtube.request = response;
						app.canDownload = true;

						console.log(response);
					}
				})
				.catch(function (error) {
				console.log(error);
				});
		},
		parseYoutube: function(url) {
		    var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
		  
		    if(url.match(p)){
		        return url.match(p)[1];
		    }
		  
		    return false;
		},
		parseInstagram: function(url) {
		    var p = /^\s*(http\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i;
		  
		    if(url.match(p)){
		        return url.match(p)[1];
		    }
		  
		    return false;
		},
		parseService: function() {
			// app.youtube.preview = 'https://img.youtube.com/vi/wpfpey_0G5A/maxresdefault.jpg';
			var url = app.url;
			var err = true;

			app.isInstagram = false;
			app.isYoutube = false;
			app.isTwitter = false;
			app.correctUrl = false;
			app.canDownload = false;
			app.youtube.preview.current = false;
			app.youtube.options.quality = 0;

			if(app.parseYoutube(url)) {
				app.isYoutube = true;
				app.correctUrl = true;

				err = false;
			}

			if(url.includes('instagram.com/p/')) {
				app.isInstagram = true;
				app.correctUrl = true;

				err = false;
			}

			if(err) {
				app.youtube.preview.current = false;
			}
		}
	}
});