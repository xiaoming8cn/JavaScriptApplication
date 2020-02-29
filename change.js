$(function(){
 var $newButton = $('newButton");
 var $newForm = $('newForm');
 var $testInput = $('input:text');
  
  $newButton.show();
  $newForm.hide();
  
  $('#showForm').on('click', function(){
    $newButton.hide();
    $newForm.show();
  });
  
  $newForm.on('submit', function(e){
    e.preventDefault();
    var newText=$testInput.vul();
    $('li:last').after('<li>'+newText+'</li>');
    $newForm.hide();
    $newButton.show();
    $testInput.val('');
  }); 
});
