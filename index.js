$('i').on('click', icon);

function icon(e) {
  $(this).find('.fa-circle').toggleClass('far fas');
}