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
        alert(hash);
        window.location.href = '#'+hash;
    }
});

var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: true,
    on: {
        slideChangeTransitionEnd: function(){
            console.log('改变了，activeIndex为'+this.activeIndex);
        },
    }
})  
mySwiper.allowTouchMove = false;