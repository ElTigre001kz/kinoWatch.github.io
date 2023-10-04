let getUrl = document.location.search
     if (getUrl.includes('VMbxNZKU6nyu')) {
        let params = (new URL(document.location)).searchParams; 
	    let video_url = params.get("video");
	      if (video_url) {
		     window.addEventListener('load', function() {
			  let video = document.createElement('iframe');
			  video.id = 'videoiframe';
			  video.src = 'https://' + video_url;
			  video.width = '100%';
			  video.height = '100%';
			  // video.setAttribute('allowFullScreen', '');
			     // video.setAttribute('allow', 'fullscreen');
			     // Получаем ссылку на iframe и элемент с id "play"
let iframe = document.querySelector('iframe');
let playButton = document.getElementById('play');

// Функция для запроса полноэкранного режима
function requestFullscreen() {
  // Проверяем поддержку Fullscreen API в текущем браузере
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) { // Firefox
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari и Opera
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { // Internet Explorer
    iframe.msRequestFullscreen();
  }
}

// Добавляем обработчики событий для iframe и кнопки "play"
iframe.addEventListener('click', requestFullscreen);
playButton.addEventListener('click', requestFullscreen);
			     
			  document.querySelector('#play').appendChild(video);
			
	  let name = params.get("name");
      let year = params.get("year");
        if (name) {
          let substr = '';
        if (year) {
          substr = ' (' + year + ')';
        }
          document.title = name + substr + ' - смотреть онлайн';
          document.getElementById('name').appendChild(document.createTextNode(name));
      }
});
		      
		window.addEventListener("message", function (event) {
			if (event.data.event === 'init') {
				// document.getElementById('videoiframe').contentWindow.postMessage({"api": "fullscreen"}, "*");
	
			}
 		});
	}	  
}
else{
console.log('Всем хуй за мой счёт')
	window.addEventListener('load', function() {
			let video = document.createElement('iframe');
			video.id = 'videoiframe';
			video.src = 'https://www.youtube.com/embed/EKnhQ_PiZQQ';
			video.width = '100%';
			video.height = '100%';
		    video.setAttribute('allowFullScreen', '');
			document.querySelector('#play').appendChild(video);
});
}
