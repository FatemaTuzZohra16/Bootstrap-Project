$('.bannar_slider').slick({
    arrows: false,
    dots: true,
});
$('.reviewslider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<i class="fa-solid fa-angle-left leftarrow"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right rightarrow"></i>`,

    centerMode: true,
    centerPadding: '0px',


    responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
