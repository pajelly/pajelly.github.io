$('a[href*=#]').click(function (e) {
    e.preventDefault();

    var id = $(this).attr('href');
    var scrollTo = $(id).offset().top;

    $('html,body').animate({
        'scrollTop': scrollTo
    }, 500);
});

$(document).scroll(function () {
    highlightSection();
});

function highlightSection() {
    // Where's the scroll at?
    var currentPosition = $(this).scrollTop();

    // Remove highlights from all
    $('a[href*=#]').removeClass('highlighted');

    // Loop over each section
    $('#content .section').each(function () {
        // Calculate the start and end position of the section
        var sectionStart = $(this).offset().top;
        var sectionEnd = sectionStart + $(this).height();

        // If the current scroll lies between the start and the end of this section
        if (currentPosition >= sectionStart  && currentPosition < sectionEnd) {
            // Highlight the corresponding anchors
            $('a[href=#' + $(this).attr('id') + ']').addClass('highlighted');
        }
    });
};

highlightSection();

// bold text

$('.b').click(function(){
  $(this).css({'font-weight':'bold'})
})

// hide side menu

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    $('#menu').hide();
  }
  else {
    $('#menu').show();
  }
});


// document.onscroll = function() {
//         if (window.innerHeight + window.scrollY > document.body.clientHeight) {
//             document.getElementById('menu').style.display='none';
//         }
//     }