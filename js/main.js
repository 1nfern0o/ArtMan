$(function(){
    function timer() {
        setInterval(() => {
            $('#logo').animate({transform: 'rotate(-10deg)'}, 2000)
        }, 2000);
    }
    timer();

    function cowShow1 () {
        $('#cow_1').css('opacity', '1');
    }


    $('#cow_1').on('click', function () {
        $('#cow_1').css('opacity', '0');
        setTimeout(cowShow1, 3000)
    })

    function cowShow2 () {
        $('#cow_2').css('opacity', '1');
    }


    $('#cow_2').on('click', function () {
        $('#cow_2').css('opacity', '0');
        setTimeout(cowShow2, 3000)
    })

    function cowShow3 () {
        $('#cow_3').css('opacity', '1');
    }


    $('#cow_3').on('click', function () {
        $('#cow_3').css('opacity', '0');
        setTimeout(cowShow3, 3000)
    })

    function cowShow4 () {
        $('#cow_4').css('opacity', '1');
    }


    $('#cow_4').on('click', function () {
        $('#cow_4').css('opacity', '0');
        setTimeout(cowShow4, 3000)
    })

    function cowShow5 () {
        $('#cow_5').css('opacity', '1');
    }


    $('#cow_5').on('click', function () {
        $('#cow_5').css('opacity', '0');
        setTimeout(cowShow5, 3000)
    })

    function cowShow6 () {
        $('#cow_6').css('opacity', '1');
    }


    $('#cow_6').on('click', function () {
        $('#cow_6').css('opacity', '0');
        setTimeout(cowShow6, 3000)
    })

    function cowShow7 () {
        $('#cow_7').css('opacity', '1');
    }


    $('#cow_7').on('click', function () {
        $('#cow_7').css('opacity', '0');
        setTimeout(cowShow7, 3000)
    })

  
});