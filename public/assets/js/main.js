(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open, .offcanvas-overlay').click(function () {

            $('.offcanvas-area, .offcanvas-overlay').addClass('active');

        });
        $('.menu-close, .offcanvas-overlay').click(function () {

            $('.offcanvas-area, .offcanvas-overlay').removeClass('active');

        });


        //------------ Range -------------

        const employees = document.querySelector("#employees")
        var labels = {
            0: '0 kMs',
            50: '50 kMs',
            100: '100 kMs',
            150: '150 kMs',
            200: '200 kMs',
            250: '250 kMs',
        };
        noUiSlider.create(employees, {
            start: 10,
            connect: [true, false],
            tooltips: {
                to: function (value) {
                    return value > 250 ? '250' : parseInt(value)
                }
            },
            range: {
                'min': 0,
                '20%': 50,
                '40%': 100,
                '60%': 150,
                '80%': 200,
                'max': 250,
            },
            pips: {
                mode: 'steps',
                filter: function (value, type) {
                    return type === 0 ? -1 : 1;
                },
                format: {
                    to: function (value) {
                        return labels[value];
                    }
                }
            }
        });



        //------------ Hero slider -------------

        $('.hero__area_slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })




    }); //---document-ready-----





}(jQuery));