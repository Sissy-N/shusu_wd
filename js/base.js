var sheader = $('.s-header').outerHeight()
$(document).scroll(function(){
    var iStop = $(document).scrollTop()
    iStop>sheader? $('html').addClass('nav-fixed'): $('html').removeClass('nav-fixed')
})

/*首页轮播①*/
var mySwiper = new Swiper ('.s-swiper', {
    loop: true, //循环播放
    // 如果需要分页器
    pagination: {
        el: '.s-swiper-pagination'
    },
    autoplay: {
        delay: 2000,    //轮播切换时间
        disableOnInteraction: false
    },
    speed: 1000
})

var teacherSwiper = new Swiper('.s-teacher-img', {
    loop: true,
    pagination: {
        el: '.s-teacher-pagination'
    },
    autoplay: {
        delay: 2000,    //轮播切换时间
        disableOnInteraction: false
    },
    speed: 1000
})

var traningSwiper = new Swiper('.s-training-swiper', {
    loop: true,
    pagination: {
        el: '.s-training-pagination'
    },
    autoplay: {
        delay: 3000,    //轮播切换时间
        disableOnInteraction: false
    },
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2
})

$('#accordion').collapse()

var screenWidth = document.documentElement.clientWidth * 0.15,
    gap = screenWidth * 0.3
var studentSwiper = new Swiper('.s-student-swiper', {
    loop: true,
    pagination: {
        el: '.s-student-pagination'
    },
    autoplay: {
        delay: 3000,    //轮播切换时间
        disableOnInteraction: false
    },
    speed: 1000,
    spaceBetween: gap,
    slidesPerGroup: 1,
    slidesOffsetBefore: screenWidth,
    slidesPerView: 'auto',
    loopFillGroupWithBlank: true
})

var casesSwiper = new Swiper('.s-cases-swiper', {
    loop: true,
    pagination: {
        el: '.s-cases-pagination'
    },
    autoplay: {
        delay: 3000,    //轮播切换时间
        disableOnInteraction: false
    },
    speed: 1000
})