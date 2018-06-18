$(function () {
    $('.button').on('click', function (e) {
        var rippleElement = document.createElement("span"); /* create a span element */
        rippleElement.classList.add('ripple'); /* adding class 'ripple' to span element*/
        this.appendChild(rippleElement); /* adding that span element with ripple class to current clicked button */
        
        // console.log(rippleElement);

        var offsetOfButton = $(this).offset();
        var xCordinate = offsetOfButton.left;
        var yCordinate = offsetOfButton.top;
        // square for ripple to reach everywhere... i.e max of weight and height
        var dimension = Math.max($(this).width(), $(this).height());

        // console.log(xCordinate + " " + yCordinate + " " + e.pageX + " " + e.pageY);
        $(".ripple").css({
            width: dimension,
            height: dimension,
            left: e.pageX - xCordinate - dimension / 2,
            top: e.pageY - yCordinate - dimension / 2
        });

        setTimeout(function () {
            rippleElement.remove();
        }, 700);
    });
});