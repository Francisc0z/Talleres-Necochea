$(window).scroll(function() {
    let height = $(window).scrollTop();

    if (height > 100) {
        $('#button').fadeIn();
        
    } else {
        $('#button').fadeOut();

    }
});
$(document).ready(function() {
    $("#button").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});