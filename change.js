$(function(){
  $('li').each(function(){
    var ids = this.id;
    $(this).append('<span class="hot">' + ids + '</span>');
  });
});
