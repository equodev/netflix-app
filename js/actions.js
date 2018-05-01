$(document).ready(function () {
  const START_VIDEO_ATTR_ID = '[data-uia="play-button"]';
  const VOLUME = 0.2;

  // let startVideoButtonElement;
  // let currentVideo;
  // let isPaused;
  // let isPlaybackStarted = false;

  // const attachEventListeners = (video) => {
  //   video.addEventListener('pause', function () {
  //     isPaused = true;
  //     console.log('atached is paused ', isPaused);
  //   });
  //   video.addEventListener('playing', function () {
  //     isPaused = false;
  //     console.log('atached is paused ', isPaused);
  //   });
  // };

  // const addVideoClickHandlerToStartButton = (optionalStartVideoButton) => {
  //   if (optionalStartVideoButton.length) {
  //     // console.log('optionalStartVideoButton play button is ', optionalStartVideoButton);
  //     let startVideoButtonElement = optionalStartVideoButton.first();
  //     // console.log('play button is ', startVideoButtonElement);

  //     (startVideoButtonElement.first()).on('click', function () {
  //       isPlaybackStarted = true;
  //       isPaused = false;
  //       // console.log('come on');
  //       // console.log('play movie here please...find the play element');
  //       // console.log('log analytics here...');
  //       // let videos = $('video');
  //       // console.log('videos are ', videos);
  //       // console.log('video first ', videos.first());
  //       // console.log('video first [0]', videos.first()[0]);
  //       // console.log('$(videos[0]) is ', $(videos[0]));
  //       // console.log('videos dom is ', videos.get(0));
  //       // let documentVideo = document.getElementsByTagName("video")[0];
  //       // console.log('current video es ', documentVideo);
  //       // console.log('document video is ', documentVideo);
  //       // currentVideo = documentVideo;
  //       // console.log('video is ', currentVideo);
  //       // attachEventListeners(currentVideo);
  //     });
  //   }
  // };

  // const getStartVideoButton = () => {
  //   let optionalStartVideoButton = $(START_VIDEO_ATTR_ID);
  //   addVideoClickHandlerToStartButton(optionalStartVideoButton);
  // };

  // getStartVideoButton();

  equo.on('playSelectedVideo', data => {
    // if (isPlaybackStarted) {
    // if (!currentVideo) {
    //   currentVideo = document.getElementsByTagName('video')[0];
    // }
    // if (currentVideo) {
    // console.log('is paused is', isPaused);
    // console.log('videos are... ', document.getElementsByTagName('video'));
    let currentVideo = document.getElementsByTagName('video')[0];
    console.log('current video is ', currentVideo);
    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play();
      } else {
        currentVideo.pause();
      }
    }
    // if (isPaused) {
    // console.log('playing...');
    // $('.button-nfplayerPlay').trigger('click');
    // document.getElementsByTagName('video')[0].play();
    // document.getElementsByTagName('video')[0].play();
    // isPaused = false;
    // } else {
    // console.log('pasuing ');
    // console.log('pause button is ', $('.button-nfplayerPause'));
    // $('.button-nfplayerPause').trigger('click');
    // document.getElementsByTagName('video')[0].pause();
    // document.getElementsByTagName('video')[0].pause();
    // isPaused = true;
    // $('button-nfplayerPause').click();
    // currentVideo.pause();
    // }
    // }
    // }
  });

  equo.on('turnUpVolume', data => {
    let currentVideo = document.getElementsByTagName('video')[0];
    if (currentVideo) {
      console.log('turn up volumeeeee');
      console.log('pre current volume is ', currentVideo.volume);
      currentVideo.volume += VOLUME;
      console.log('post current volume is ', currentVideo.volume);
      // $('.button-volumeMuted').trigger('keyup');
      // if (isPaused) {
      //   console.log('playing...');
      //   $('.button-nfplayerPlay').trigger('click');
      //   isPaused = false;
      // } else {
      //   console.log('pasuing ');
      //   console.log('pause button is ', $('.button-nfplayerPause'));
      //   $('.button-nfplayerPause').trigger('click');
      //   isPaused = true;
      //   // $('button-nfplayerPause').click();
      //   // currentVideo.pause();
      // }
    }
  });

  equo.on('turnDownVolume', data => {
    let currentVideo = document.getElementsByTagName('video')[0];
    if (currentVideo) {
      console.log('turn down volumeeeee');
      console.log('pre current volume is ', currentVideo.volume);
      currentVideo.volume -= VOLUME;
      console.log('post current volume is ', currentVideo.volume);
      // $('.button-volumeMuted').trigger('keyup');
      // if (isPaused) {
      //   console.log('playing...');
      //   $('.button-nfplayerPlay').trigger('click');
      //   isPaused = false;
      // } else {
      //   console.log('pasuing ');
      //   console.log('pause button is ', $('.button-nfplayerPause'));
      //   $('.button-nfplayerPause').trigger('click');
      //   isPaused = true;
      //   // $('button-nfplayerPause').click();
      //   // currentVideo.pause();
      // }
    }
  });

  // equo.onNativeDomChanged((addedNode) => {
  //   let optionalStartVideoButton = addedNode.find(START_VIDEO_ATTR_ID);
  //   addVideoClickHandlerToStartButton(optionalStartVideoButton);
  // });

});
