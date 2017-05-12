module.exports = {
    settings: {
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 900,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 620,
                settings: { slidesToShow: 1 }
            }
        ]
    }
};
