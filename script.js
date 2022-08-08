// tying up the html and js

const toggle = document.getElementById('toggle');
const mute = document.getElementById('mute');
const locations = document.getElementById('locations');
const speed = document.getElementById('speed');
const audio = document.getElementById('music');
const play = document.getElementById('play');
const prev= document.getElementById('prev');
const next = document.getElementById('next');
const loading = document.getElementById('loading');

var currentCityIndex;
var currentCity;
var currentVideoIndex;
var currentVideo;
var currentAudioIndex;
var currentAudio;


const data = [
  {
    city: 'Delhi',
    videos: [
          'QZPqluJA0OY',
          '2WaqdZTPiuM',
          '_UlKnvXKUWE'    
    ],
    music:[
      
      'http://streamasiacdn.atc-labs.com/radiomaharani.aac',
      'http://uk2.internet-radio.com:8066/stream',
      'http://brahman.riggrodigital.com:8082/stream'
    ] 
  },
  {
      city: 'Mumbai',
      videos: [
          '_Wb1ASZ4rBA',
          '9Sxlstg6J3c',
          'GDLOjbG97O4'
  
      ],
      music:[
        'https://prclive4.listenon.in/Freedom?listening-from-radio-garden=1655791521',
        'http://namkeen.riggrodigital.com:8888/stream?listening-from-radio-garden=1655791593',
        'https://prclive1.listenon.in/Hindi?listening-from-radio-garden=1655791614',
        'https://prclive4.listenon.in/HipHop?listening-from-radio-garden=1655791633',
      ] 
    },
    {
      city: 'Jaipur',
      videos: [
          'jwZV8i60Sbs',
          'q-QmlVSiKWg',
          'oya79fnpX2M',
          'JhqQVr6GB9k'
  
      ],
      music:[
          'http://live.radiotaj.com:9484/;stream.mp3',
          'http://streamasiacdn.atc-labs.com/jaipurradio.aac',
          'http://node-27.zeno.fm/csw7fv7sz1zuv',
        
      ] 
    },
    {
      city: 'Guwahati',
      videos: [
          '1QxXnkOokN8',
          'Bba_hM0y8H8',
          'gt8V_cN1gw0',
          
      ],
      music:[
        'http://103.95.48.18:8080/;?listening-from-radio-garden=1655791834',
        ''
      ] 
    },
    {
      city: 'Kolkata',
      videos: [
          'usx1RGyFQCk',
          'AkutbKoYpdE',
          'QOKZYt7a0pw'
  
      ],
      music:[
          'https://stream.zeno.fm/15wnypt6by8uv',
          'https://carina.streamerr.co:8114/stream',
          'https://stream.zeno.fm/9msu0vbxezzuv',
      ] 
    },
    {
      city: 'Goa',
      videos: [
          'az7A4tJffyE',
          'MoAygX3sTxg',
          '8XJCrAa9QaE'
  
      ],
      music:[
        
      ] 
    },
    {
      city: 'Pune',
      videos: [
          'O2BR2WgBJUs',
          'D_zKaUC5U4U',
          'PO9MI8h52bY',
          'Hz_RoiwdBjg'
  
      ],
      music:[
        'http://janus.shoutca.st:8112/stream3/;',
        'https://eu10.fastcast4u.com:5045/stream',
        'http://janus.shoutca.st:8112/;'
      ] 
    },
    {
      city: 'Chandigarh',
      videos: [
        'QXwr8IKp4nk',
        'VO9K-Ve4gN4',
        '1NC8dXxuZ4g'
  
      ],
      music:[
        'http://149.56.195.94:8322/bolpunjabiradio',
        'https://eu2.fastcast4u.com/proxy/hindiradio'
      ] 
    },
    {
      city: 'Kochi',
      videos: [
        'DxJxfSnRvWU',
        'GW9ZFZwi-YU',
        '8dz9m77EJ60'
  
      ],
      music:[
        'https://stream.zeno.fm/xd6trx3e84zuv',
        'http://108.170.51.230:8010/;',
        'http://titan.shoutca.st:8647/stream'
      ] 
    },
    {
      city: 'Bhubaneshwar',
      videos: [
        'OzdOeQeiAg8',
        '6WUdVxzlSRo',
        '--cPrp97IH8'
  
      ],
      music:[
        'https://streams.radiojajabara.com/hdradio_naibedya.mp3',
        'http://178.33.135.245:4362/;',
        'http://104.243.42.94:8574/rabh8989uba'
      ] 
    },
    {
      city: 'Ahemdabad',
      videos: [
        'O2DzpNjbdMo',
        'um3jQ2I5Xqs',
        'saG6xPEelb0'
  
      ],
      music:[
        'http://s9.voscast.com:7402/;',
        'https://prclive4.listenon.in/Gujarati',
        'https://sayajifm.radioca.st/stream'
      ] 
    },
  
  {
      city: 'Manali',
      videos: [
        'MN1a5q8Qq_U',
        'zQiOpjSWFw4',
        'QaVnSb3zvRE'
  
      ],
      music:[
        'http://himachaligeet.com:8000/radio.mp3'
      ] 
    },
]

const availableSpeeds = [0.5, 1, 1.5, 2];


onload()

function onload() {
  //city
  currentCityIndex = randomNumber(data.length);
  currentCity = data[currentCityIndex];

  //video
  currentVideoIndex = randomNumber(currentCity.videos.length);
  currentVideo = currentCity.videos[currentVideoIndex];

  //audio of that particular city
  currentAudioIndex = randomNumber(currentCity.music.length);
  currentAudio = currentCity.music[currentAudioIndex];

  //we need to send the all of these to the DOM
  // console.log(currentCity);
  console.log(currentAudio);
  // console.log(currentVideo);
  audio.src = currentAudio;
  audio.volume = 0.5;
  play.classList.remove('fa-play');
  play.classList.add('fa-pause');

  data.forEach((el, idx) => {
    var locationElement = document.createElement('li');
    locationElement.innerText = el.city;
    locationElement.id = idx;
    locationElement.addEventListener('click', ()=>{
      currentCityIndex = Number(e.target.id);
      currentCity = data[currentCityIndex];
      currentVideoIndex = randomNum(currentCity.videos.length);
      currentVideo = currentCity.videos[currentVideoIndex];
      currentAudioIndex = randomNum(currentCity.music.length);
      currentAudio = currentCity.music[currentAudioIndex];

      audio.src = currentAudio;
      audio.volume = 0.5;
      play.classList.remove('fa-play');
      play.classList.add('fa-pause');

    })

    locations.append(locationElement)
    // highlight()
  })
  

  availableSpeeds.forEach((el,idx)=> {
    var speedEl = document.createElement('p');
    speedEl.id = el;
    speedEl.innerText = el + 'x';
    speedEl.addEventListener('click', (e)=> {
      player.setPlaybackRate(Number(e.target.id))
    })
    speed.append(speedEl)
  })
  highlight()
}

function highlight(){
  console.log(locations.childNodes)
  locations.childNodes.forEach((el, idx) => {
    el.classList.remove('active');
    if(idx == currentCityIndex){
      el.classList.add('active');
    }  
  })

}

function randomNumber(max){
  return Math.floor(Math.random() *(max))
}

//for the play button
play.addEventListener('click', ()=> {
  if(audio.paused){
    audio.play()
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }else{
    audio.pause()
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  }
})

//for the next button 
next.addEventListener('click', ()=>{
  if(currentAudioIndex < ((currentCity.music.length) - 1)){
    currentAudioIndex++
  }else {
    currentAudioIndex = 0
  }

  currentAudio = currentCity.music[currentAudioIndex];
  audio.src = currentAudio;
  // audio.play()
})

//for the prev button
prev.addEventListener('click', ()=>{
  if(currentAudioIndex > 0){
    currentAudioIndex--
  }
  else{
    currentAudioIndex = ((currentCity.music.length) - 1);
  }

  currentAudio = currentCity.music[currentAudioIndex];
  audio.src = currentAudio;
  // audio.play()
})

mute.addEventListener('click', ()=>{
  if(player.isMuted()){
    player.unMute();
    mute.innerText = 'On'
  } else{
    player.mute();
    mute.innerText = 'Off'
  }
})

toggle.addEventListener('click', () =>{
  document.querySelector('.sidebar').classList.toggle('hide');

})



// copy pasted this code snippet from youtube IFRAME API documentation!
// 2. This code loads the IFrame Player API code asynchronously.

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: window.innerHeight * 1.2,
    width: window.innerHeight * 1.2 * (16/9),
    videoId: currentVideo,
    playerVars: {
      'playsinline': 1,
      'controls' : 0,
      'mute': 1,
      'showinfo' :0,
      'enablejsapi' :1,
      'disablekb' : 1, //disable the keyboard shortcuts
      'modestbranding':1, //reduces the branding
      'origin':window.location.origin, 
      'widget_referrer': window.location.href
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if(event.data == YT.PlayerState.ENDED){
    if(currentVideoIndex < currentCity.videos.length){
      currentVideoIndex++
    }else{
      currentVideoIndex = 0
    }
    currentVideo = currentCity.videos[currentVideoIndex];
    player.loadVideoById({videoId : currentVideo});
    highlight()
  }

  if(event.data == YT.PlayerState.BUFFERING){
    loading.style.display = 'flex'
  }
  if (event.data == YT.PlayerState.PLAYING) {
    // setTimeout(stopVideo, 6000);
    // done = true;
    loading.style.display = 'flex';
    setTimeout(() =>{
      loading.style.display = 'none'
    }, 3000);
  }
}

function changeVolume(e){
  audio.volume = parseFloat(e.value / 100);
}
