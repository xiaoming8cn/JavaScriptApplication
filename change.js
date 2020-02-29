$(function(){
  $('li').on('click', function(){
    var ids = this.id;
    $(this).append('<span class="dated">' +ids '</span>');
  });
});
