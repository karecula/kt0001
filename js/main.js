
(function(window) {
    $('.list-item .content').on('mouseover',function(e){
        // $(this).find('.description').show('slow');
        $(this).find('.description').animate({opacity: 1}, 200);
    }).on('mouseout',function(e){
        // $(this).find('.description').hide('slow');
        $(this).find('.description').animate({opacity: 0}, 200);
    })
})(window);
