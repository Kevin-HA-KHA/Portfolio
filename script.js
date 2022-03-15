// CURSEUR PORTFOLIO
$('.portfolio-item-une').mouseenter(function() {
    $(this).find('.portfolio-cursor').addClass('active');
});
$('.portfolio-item').mouseenter(function() {
    $(this).find('.portfolio-cursor').addClass('active');
});
$('.portfolio-item-dark').mouseenter(function() {
    $(this).find('.portfolio-cursor').addClass('active-dark');
});
$('.portfolio-item-une').mouseleave(function() {
    $(this).find('.portfolio-cursor').removeClass('active');
});
$('.portfolio-item').mouseleave(function() {
    $(this).find('.portfolio-cursor').removeClass('active');
});
$('.portfolio-item-dark').mouseleave(function() {
    $(this).find('.portfolio-cursor').removeClass('active-dark');
});

$('.portfolio-item').mousemove(function(e) {
    var parentOffset = $(this).offset();
    $(this).find('.portfolio-cursor').css({
        left: e.pageX - parentOffset.left - 35,
        top: e.pageY - parentOffset.top - 35
    })
});
$('.portfolio-item-une').mousemove(function(e) {
    var parentOffset = $(this).offset();
    $(this).find('.portfolio-cursor').css({
        left: e.pageX - parentOffset.left - 35,
        top: e.pageY - parentOffset.top - 35
    })
});


// BURGER
const menuIcon = document.querySelector(".hamburger-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const blur = document.querySelector(".blur");
const slowslide = document.querySelector(".nav-slowslide");
const navlink = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        navbar.classList.add("close");
        blur.classList.remove("blur-open");
        slowslide.classList.remove("nav-slowslide-open");
        setTimeout(function() {
            navbar.classList.remove("close");
        }, 500);
    } else {
        navbar.classList.add("open");
        blur.classList.add("blur-open");
        slowslide.classList.add("nav-slowslide-open");
    }
});

navlink.addEventListener("click", () => {
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        navbar.classList.add("close");
        blur.classList.remove("blur-open");
        slowslide.classList.remove("nav-slowslide-open");
        setTimeout(function() {
            navbar.classList.remove("close");
        }, 500);
    } else {}
});

// SCROLL BEHAVIOR
$('.logo a, #menu-anchors a, #home a').click(function(e) {
    if (this.hash !== '' && $('body').is('#mainpage')) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 750);
    }
});


//HOME PARALLAX
var nuages = document.querySelector('.nuages');
var montagne = document.querySelector('.montagne');
var sol = document.querySelector('.sol');
var title1 = document.querySelector('.title1');
var title2 = document.querySelector('.title2');
var bird1 = document.querySelector('.bird1');
var bird2 = document.querySelector('.bird2');
var btn = document.querySelector('.btn');
var transition = document.querySelector('.transition');
var fleche = document.querySelector('.arrow');


window.addEventListener('scroll', function() {
    var value = window.scrollY;
    nuages.style.top = value * 1.5 + 'px';
    montagne.style.top = value * 0.75 + 'px';
    title1.style.marginLeft = value * 1.5 + 'px';
    title2.style.marginLeft = value * -2 + 'px';
    bird1.style.marginLeft = value * 1 + 'px';
    bird1.style.marginTop = value * -0.5 + 'px';
    bird2.style.left = value * -1.5 + 'px';
    bird2.style.marginTop = value * -0.5 + 'px';
    btn.style.marginBottom = value * -2.5 + 'px';
    sol.style.marginTop = value * 0.25 + 'px';
    fleche.style.marginTop = value * 3.5 + 'px';
});
