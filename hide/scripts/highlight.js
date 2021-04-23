$('#navbar a').on('click', function(event) {
    $(this).parent().find('a').removeClass('highlight');
    $(this).addClass('highlight');
});
  
$(window).on('scroll', function() {
    $('.target').each(function() {
        if($(window).scrollTop() >= $(this).position().top) {
            var id = $(this).attr('id');
            $('#nabar a').removeClass('highlight');
            $('#navbar a[href=#'+ id +']').addClass('highlight');
        }
    });
});