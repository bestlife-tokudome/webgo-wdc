$(function () {

    //ページ内スクロール
    $('a[href^="#"]').on('click', function() {
        const speed = 300;
        const href = $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top;

        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

    //ページトップへ戻る
    const $pageTop = $('.page-top');

    $(window).scroll(function () {  // 表示する境界
        if ($(this).scrollTop() > 300) {
            $pageTop.fadeIn();
        } else {
            $pageTop.fadeOut();
        }
    });

    $pageTop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

});