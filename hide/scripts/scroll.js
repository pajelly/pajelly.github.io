$(function() {
  
   $(document).on('scroll resize', function() {
     
     var $d = $(document),
         $w = $(window);
     
     $('div#scroll-bar').width(
       ($d.scrollTop() / ($d.height() - $w.height()) * $d.height()) + 'px'
     );
     
   });
  
});