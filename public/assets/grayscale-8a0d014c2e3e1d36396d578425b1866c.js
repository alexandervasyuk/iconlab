$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$("a.page-scroll").bind("click",function(n){var e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},1500,"easeInOutExpo"),n.preventDefault()})}),$(document).ready(function(){var n=(window.innerWidth,window.innerHeight);$(".banner,.carousel .item").height(n),$(window).resize(function(){var n=(window.innerWidth,window.innerHeight);$(".banner,.carousel .item").height(n)})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});