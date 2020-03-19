$(document).ready(function(){

    // sticky_menu
    $('.sticky_menu').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky')
        }else{
            $('nav').removeClass('sticky')
        }
    })

    // mixitup
    var mixer = mixitup('.container');
});
