$(document).ready(function(){function e(e){1==e&&($(".page--l02 .line-1a").countTo({from:1,to:8,speed:1500,refreshInterval:50}),$(".page--l02 .line.line2").countTo({from:1,to:2e4,speed:1600,refreshInterval:50}))}function n(e){1==e&&$(".page__image--r02a").fadeIn(4e3),6==e&&$(".r07__image--center").css({left:$(window).width()/2-$(".r07__image--center").width()/2})}if($("#has-scroll").size()>0){if($(window).outerWidth()<768)return;$(".page-scroller").onepage_scroll({sectionContainer:".page",easing:"ease-in-out",animationTime:1e3,pagination:!0,updateURL:!1,beforeMove:function(a){$("body").hasClass("features")&&e(a),$("body").hasClass("design")&&n(a)}})}});