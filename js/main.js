// $(document).ready(function(){
//     $('.p-topImg__list').slick({
//         autoplay: true,         //自動再生
// 	    autoplaySpeed: 5000,　  //自動再生のスピード
// 	    speed: 800,		　 //スライドするスピード
// 	    dots: true,　　　　　　//スライドしたのドット
//         infinite: true,　　　　//スライドのループ
//     });
//   });

//ヘッダー隠れ防ぐ
$('a[href^="#"]').click(function() {
    var speed = 800;
    var adjust = 100;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
});

//バーガーメニュー
$(function () {
    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('close');
        $('.p-nav__wrapper').toggleClass('slide-in');
        $('body').toggleClass('noscroll'); // 追記
    });
    $('.p-nav__listItem>a').on('click', function(event) {
        $('.burger-btn').trigger('click');
    });
});

//スライドアニメーション
$('.p-topImg__list').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    dots: true,
    arrows: false,
});

$('.p-interiorImg__list').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }]
});