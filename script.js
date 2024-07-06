$(function(){

    if (!$('.envelope').hasClass('open')){
      $('.envelope').click(function(){
        $(this).removeClass('new').addClass('open');
      });
    }
    
  });
  onload = () => {
    document.body.classList.remove("container");
  };
  const audio = document.querySelector('audio');
  const body = document.body;

  audio.addEventListener('play', () => {
    body.classList.add('play-music');
  });

  audio.addEventListener('pause', () => {
    body.classList.remove('play-music');
  });
