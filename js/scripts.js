//Tooltip

    /*$(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });*/

// CONTROL BUTTONS CAROUSEL

    $(document).ready(function () {
        $('#mycarousel').carousel({ interval: 2000 });
        $('#carouselButton').click(function () {
            if ($('#carouselButton').children('span').hasClass('fa fa-pause')) {
                $('#mycarousel').carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
            }
            else if ($('#carouselButton').children('span').hasClass('fa fa-play')) {
                $('#mycarousel').carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause');
            }
        });
    });

// CONTROLS LOGIN MODAL

    $(document).ready(function () {
        $("#loginBtn").click(function () {
            $("#loginModal").modal();
        });
    });

// CONTROLS RESERVE TABLE MODAL

    $(document).ready(function () {
        $("#reserveBtn").click(function () {
            $("#reserveModal").modal();
        });
    });
