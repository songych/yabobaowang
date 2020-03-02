const nav = document.querySelector('#nav-outer');
const navLogo = document.querySelector('#nav-logo');
let scrollTopBefore = 0;
window.onscroll = function(e) {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTopBefore===0) {
        scrollTopBefore = scrollTop;
        return;
    }
    // 向下拉
    if(scrollTop - scrollTopBefore>0) {
        if(scrollTop>0 && scrollTop<=400) {
            fixNav();
        }else {
            unFixNav();
        }
    }else {
        if(scrollTop === 0) {
            unFixNav();
        }else {
            fixNav();
        }
    }
    scrollTopBefore = scrollTop;
}
function fixNav() {
    if(!nav.className.includes('fixed')) {
        nav.className += ' fixed';
        navLogo.setAttribute('src', './images/bw_logo_gold.svg');
    }
}
function unFixNav() {
    nav.className = nav.className.replace('fixed', '');
    navLogo.setAttribute('src', './images/bw_logo_white.svg');
}

// document.querySelector('#nav-outer .nav').addEventListener;
$('#nav-outer .nav').on('click', (e)=>{
    const $target = $(e.target);
    if(e.target.nodeName=='SPAN') {
        if($target.hasClass('active')) {
            return;
        }
        $('#nav-outer .nav span').removeClass('active');
        $target.addClass('active');
        const hash = $target.data('hash');
        window.location.href = '#'+hash;
    }
});

$('#collapseIcon').click((e)=>{
    const $target = $(e.currentTarget);
    $target.toggleClass('active');
    if($target.hasClass('active')) {
        $('#audio')[0].play();
    }else {
        $('#audio')[0].pause();
    }
});

const $navs = $('.selected .nav').children();
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // autoplay: true,
    on: {
        slideChangeTransitionEnd: function(){
            console.log('改变了，realIndex为'+this.realIndex);
            $navs.removeClass('active');
            $navs.eq(this.realIndex).addClass('active');
        },
    }
})  
mySwiper.allowTouchMove = false;
$navs.click((e)=>{
    // mySwiper.slideNext();
    const index = $navs.index(e.target);
    console.log(index);
    mySwiper.slideToLoop(index);
    mySwiper.autoplay.start();
});
