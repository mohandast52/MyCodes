
$(document).ready(function () {

    var navigationAnchorIds = []; // get all the achors href!
    $.each($.find("[data-nav-link]"), function () {
        navigationAnchorIds.push(this.getAttribute('data-nav-link'));
    });

    // making logo fixed at top.
    var navEle = document.getElementById("sticky-logo");
    var sticky = navEle.offsetTop;

    // call this function after windows loads, because user may not navigate!
    activateNavigation();

    // onScroll
    $(document).scroll(activateNavigation);


    function activateNavigation() {
        // adding and removing class 'sticky'
        if (window.pageYOffset > (window.innerHeight)) {
            navEle.classList.add("sticky");
        } else {
            navEle.classList.remove("sticky");
        }

        // check if navigation id's offset has reached in view
        var pageInMinimumDistance = "1"; // default value
        $.each(navigationAnchorIds, function () {
            var min = 999999999;
            var dis = window.pageYOffset - $("[data-nav-link = " + this + "]").offset().top + 5;
            if ((dis >= 0) && (min > dis)) {
                pageInMinimumDistance = this[0];
                min = dis;
            }
            $.each(navigationAnchorIds, function () {
                $("#navigation-" + this + " svg circle").removeClass('active-nav');
            });
        });

        // 
        $("#navigation-" + pageInMinimumDistance + " svg circle").addClass('active-nav');

    };

    // on anchar tag click : not used because scrolling takes care of it!! :)
    /*
    var clickNav = undefined;
    $("#navigation a").on('click', function () {
        var svgEle = $(this).find('svg')[0];
        console.log($(this)[0].id); // id of anchor tag

        $.each(navigationAnchorIds, function (eachVal) {
            console.log(eachVal + 1);
            eachVal = eachVal + 1;
            $("#navigation-" + eachVal + " svg circle").removeClass('active-nav');
        });
        // remove 'active-nav' class from other and then add
        $("#" + $(this)[0].id + " svg circle").addClass('active-nav');

    });

    */


    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        // console.log(this.getAttribute('href')); get id and finds it offset!
        $('html, body').animate({
            scrollTop: $(this.getAttribute('href')).offset().top
        }, 500);
    });
});
