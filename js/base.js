var sheader = $('.s-header').outerHeight()
$(document).scroll(function(){
    var iStop = $(document).scrollTop()
    iStop>sheader? $('html').addClass('nav-fixed'): $('html').removeClass('nav-fixed')
})

var mySwiper = new Swiper ('.swiper-container', {
    loop: true, //循环播放
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination'
    },
    autoplay: {
        delay: 2000,    //轮播切换时间
        disableOnInteraction: false
    },
    speed: 1000
})