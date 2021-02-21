$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
    // event.preventDefault()によりｱｸｼｮﾝ後urlに#がつかなくなった
  });
});