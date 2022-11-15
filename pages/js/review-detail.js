imgClick = false;
$('ul.imgs').click(function(){
  if(!imgClick) {
    imgClick = true;
    $(this).css('flex-direction', 'column');
    $('ul.imgs li').css('overflow', 'visible');
    $('ul.imgs > li img').css('width', '600px');
    $('ul.imgs > li img').css('height', '400px');
  } else {
    imgClick = false;
    $(this).css('flex-direction', 'row');
    $('ul.imgs li').css('overflow', 'hidden');
    $('ul.imgs > li img').css('width', '250px');
    $('ul.imgs > li img').css('height', '250px');
  }
})