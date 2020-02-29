$(function(){
  $('h2').hide().slideDown();
  var $li=$('li');
  $li.on('click', function(){
    $(this).fadeOut(7000);  
  });
});
