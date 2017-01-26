$('li:not(".q")').hide();

$('li.q').click( function(){
  $('li:not(".q")').slideUp();
  $(this).nextUntil('.q').slideDown();
});
