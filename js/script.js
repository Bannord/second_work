$(document).ready(function() {
    $('.clients_slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        autoplay:true,
        autoplaySpeed:2000,
    });

    // плавная прокрутка//
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
      });


      $('.header_burger').click(function(event) {
        $('.header_burger,.header_row').toggleClass('active');
        $('body').toggleClass('lock');
      });
});