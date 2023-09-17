$(function() {
    // リサイズヘッダー設定
    const mvHeight = $('#swiper-mv').height();

    $(window).on('scroll', function(){
        const ST = $(window).scrollTop();

        if(ST >= mvHeight) {
            $('#header').addClass('resizeHeader');
            $('.gnav__list').addClass('bgChange');
            $('.gnav__link').addClass('colorChange');
            $('.nav__btn').addClass('btnBgChange');
            $('.nav__link').addClass('btnColorChange');
        }else {
            $('#header').removeClass('resizeHeader');
            $('.gnav__list').removeClass('bgChange');
            $('.gnav__link').removeClass('colorChange');
            $('.nav__btn').removeClass('btnBgChange');
            $('.nav__link').removeClass('btnColorChange');
        }
    });
});