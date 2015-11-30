$(document).ready(function () {
var count=0;
			var dataperc;
/* Counter */
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;
			
        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals) + '%');

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        })
    };


    if (typeof jQuery != 'undefined') {



//



//    Site loading



//



        







        var window_height = jQuery(window).height();



        var headerH = jQuery('#navbar-top').height();



//



//    Logo appear



//



        jQuery('.navbar-brand').css('top', '-90px');



        setTimeout(function () {



            jQuery('.navbar-brand').animate({



                    top: "0"



                }, 1000



            );
jQuery('#blanket').delay(500).css("opacity", '0').css("z-index", '0');


        }, 500);











//



//    Top nav scroll



//



        jQuery("#navbar-top .navbar-nav a, .footer-navigation a, .allprojects a").bind('click', function (event) {







            jQuery("#navbar-top .navbar-nav li, .footer-navigation li").removeClass('active');



            jQuery(this).parent().addClass('active');



            jQuery("html, body").animate({



                scrollTop: jQuery(jQuery(this).attr("href")).offset().top - (headerH + 15) + "px"



            }, {



                duration: 1000,



                easing: "easeInOutExpo"



            });







            return false;



            event.preventDefault();



        });







        if(window.location.hash) {



            var hash = window.location.hash.substring(1);



            $('#navbar-top .navbar-nav a[href="#' + hash + '"]').click();



            //window.location.href.split('#')[0];



        }



//



//    Scroll down



//







        jQuery(".scroll-down a").on('click', function (event) {



            event.preventDefault();



            console.log(jQuery(this).attr("href"));



            jQuery("html, body").animate({



                scrollTop: jQuery(jQuery(this).attr("href")).offset().top - (headerH + 15) + "px"



            }, {



                duration: 1200,



                easing: "easeInOutExpo"



            });







            return false;



        });











//



//    Scroll top. scroll top on click



//



        jQuery("#scroll-up").on('click', function (e) {



            e.preventDefault();



            var curPos = jQuery(document).scrollTop();



            var scrollTime = curPos / 1;



            jQuery("body,html").animate({"scrollTop": 0}, scrollTime);



            jQuery("#navbar-top .navbar-nav li").removeClass('active');



        })



//



//        Home page icon list appear



//



        if(jQuery('.icon-list-with-text').length){



            var elementPosition = jQuery('.icon-list-with-text').offset();



           // jQuery('.icon-list-with-text .icons i').css('display', 'none');



        }



        if(jQuery('#services').length){



            var servPosition = jQuery('#services').offset();



            jQuery('#services .responsive-image').css({



                position: 'relative',



                left: '-2000px'



            });
			
			

        }

if(jQuery('.slogan').length){



            var callPosition = jQuery('.slogan').offset();

            jQuery('#callaction .responsive-image').css({



                position: 'relative',



                bottom: '-2000px'



            });



        }

        if(jQuery('.skills-section').length){



            var skillPosition = jQuery('.skills-section').offset();



            jQuery('.progress-bar').css({



                position: 'relative',



                left: '-2000px'



            });



            jQuery('.easyPieChart').each(function () {



                //jQuery(this).data('easyPieChart').update(0);



            });



        }

		

		 if(jQuery('#portfolio').length){



            var portfolioPosition = jQuery('#portfolio').offset();



        }

		if(jQuery('.company-logo').length){
					var companyPosition = jQuery('.company-logo').offset();
		  }
		if(jQuery('.team-section').length){
					var teamPosition = jQuery('.team-section').offset();
		  }

        var epc_flag = false;



        if(jQuery('.home').length){



            var about_position = jQuery('#about').offset().top;



            var about_height = parseInt(jQuery('#about').height());



            var team_position = jQuery('#team').offset().top;



            var team_height = parseInt(jQuery('#team').height());



            var servise_position = jQuery('#services').offset().top;



            var servise_height = parseInt(jQuery('#services').height());
			
			
/*			var skill_position = jQuery('#skills').offset().top;



            var skill_height = parseInt(jQuery('#skills').height());*/



            var testimon_position = jQuery('#testimonialss').offset().top;



            var testimon_height = parseInt(jQuery('#testimonialss').height());



            var portfolio_position = jQuery('#portfolio').offset().top;



            var portfolio_height = parseInt(jQuery('#portfolio').height());



            var contact_position = jQuery('#contact').offset().top;



            var contact_height = parseInt(jQuery('#contact').height());



        }



        jQuery(window).on('scroll', function () {



            var windowPosition = jQuery(window).scrollTop();




            if (windowPosition < window_height) {



                jQuery("#scroll-up").fadeOut(500);



            } else {



                jQuery("#scroll-up").fadeIn(500);



            }



            if(jQuery('#about').length){

			

                if ( windowPosition >= (about_position - (headerH+15)) && windowPosition < (about_position + about_height)) {



                    jQuery('#navbar-top .navbar-nav li').removeClass('active');



                    jQuery('#navbar-top .navbar-nav a[href="#about"]').parent().addClass('active');



                }



            }



            if(jQuery('#team').length){



                if ( windowPosition >= (team_position - (headerH + 15)) && windowPosition <= (team_position + team_height)) {



                    jQuery('#navbar-top .navbar-nav li').removeClass('active');



                    jQuery('#navbar-top .navbar-nav a[href="#team"]').parent().addClass('active');



                }



            }



            if(jQuery('#services').length){



                if ( windowPosition >= (servise_position - (headerH + 15)) && windowPosition < servise_position+servise_height) {



                    jQuery('#navbar-top .navbar-nav li').removeClass('active');



                    jQuery('#navbar-top .navbar-nav a[href="#services"]').parent().addClass('active');



                }



            }



            if(jQuery('#testimonialss').length){



                if ( windowPosition >= (testimon_position - (headerH + 15)) && windowPosition < testimon_position+testimon_height) {



                    jQuery('#navbar-top .navbar-nav li').removeClass('active');



                    jQuery('#navbar-top .navbar-nav a[href="#testimonialss"]').parent().addClass('active');



                }



            }



            if(jQuery('#portfolio').length){



                if ( windowPosition >= (portfolio_position - (headerH*2 + 15)) && windowPosition < portfolio_position+portfolio_height) {



                    jQuery('#navbar-top .navbar-nav li').removeClass('active');



                    jQuery('#navbar-top .navbar-nav a[href="#portfolio"]').parent().addClass('active');



                }



            }



            if(jQuery('#contact').length){



                if ( windowPosition >= (contact_position - (headerH + 15)) && windowPosition < contact_position+contact_height) {



                    jQuery('#navbar-top .navbar-nav li').removeClass('active');



                    jQuery('#navbar-top .navbar-nav a[href="#contact"]').parent().addClass('active');



                }



            }



            if(jQuery('.home').length){



                if ( windowPosition < (window_height - (headerH*1.5))) {



                    jQuery('#navbar-top .navbar-nav li').removeClass('active');



                    jQuery('#navbar-top .navbar-nav a[href="#home"]').parent().addClass('active');



                }



            }











           /* if(jQuery('.icon-list-with-text').length){



                if ( windowPosition > (elementPosition.top - window_height/1.5)) {



                    jQuery('.icon-list-with-text .icons .icon-1').fadeIn(700, function () {



                        jQuery('.icon-list-with-text .icons .icon-2').fadeIn(700, function () {



                            jQuery('.icon-list-with-text .icons .icon-3').fadeIn(700, function () {



                                jQuery('.icon-list-with-text .icons .icon-4').fadeIn(700);



                            });



                        });



                    });



                }



            }*/

			/* changes done for loading all icons together start*/ 

			if(jQuery('.icon-list-with-text').length){

       

                if ( windowPosition > (elementPosition.top - window_height/2)) {



                /*    jQuery('.about-us-4').animate({

     "opacity": 1

    });*/
	jQuery('.about-us-4').css({"-webkit-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-3').css({"-webkit-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-2').css({"-webkit-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-1').css({"-webkit-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-4').css({"-moz-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-3').css({"-moz-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-2').css({"-moz-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-1').css({"-moz-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-4').css({"-ms-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-3').css({"-ms-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-2').css({"-ms-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-1').css({"-ms-transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-4').css({"transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-3').css({"transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-2').css({"transform":"scale(1)"}).css({opacity:1});
	jQuery('.about-us-1').css({"transform":"scale(1)"}).css({opacity:1});


                    
                }

            }

			/*if(jQuery('.icon-list-with-text').length){



                if ( windowPosition > (elementPosition.top - window_height/1.5)) {



                    jQuery('.icon-list-with-text .icons .icon-1').fadeIn(700);



                        jQuery('.icon-list-with-text .icons .icon-2').fadeIn(700);



                            jQuery('.icon-list-with-text .icons .icon-3').fadeIn(700);



                                jQuery('.icon-list-with-text .icons .icon-4').fadeIn(700);



                          

                }



            }*/

			/* changes done for loading all icons together end*/ 

			//Animated Team section
			if(jQuery('.team-section').length){
			if ( windowPosition > (teamPosition.top - window_height/2)) {
			 /*jQuery('.team-1').delay(200).animate({
		
			  "opacity": 1
		
			 });
			 jQuery('.team-2').delay(300).animate({
		
			  "opacity": 1
		
			 });
			 jQuery('.team-3').delay(400).animate({
		
			  "opacity": 1
		
			 });
			 jQuery('.team-4').delay(500).animate({
		
			  "opacity": 1
		
			 });*/
			jQuery('.team-4').css({"-webkit-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-3').css({"-webkit-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-2').css({"-webkit-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-1').css({"-webkit-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-4').css({"-moz-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-3').css({"-moz-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-2').css({"-moz-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-1').css({"-moz-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-4').css({"-ms-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-3').css({"-ms-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-2').css({"-ms-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-1').css({"-ms-transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-4').css({"transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-3').css({"transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-2').css({"transform":"scale(1)"}).css({opacity:1});
			jQuery('.team-1').css({"transform":"scale(1)"}).css({opacity:1});
			
			}
		   }


            //Animated Services image



            if(jQuery('#services').length){



                if (windowPosition > (servPosition.top - window_height/2)) {


                    jQuery('#services .responsive-image').animate({left: '0'}, 1200);
			

					



                }



            }


		if(jQuery('.slogan').length){



                if (windowPosition > (callPosition.top - window_height)) {



                    jQuery('#callaction .responsive-image').animate({bottom: '0'}, 1200);



                }



            }
		
            //Animated Progress Bars

if(jQuery('.company-logo').length){
    if ( windowPosition > (companyPosition.top - window_height/3)) {
     jQuery('.compLogo1').delay(200).animate({

      "opacity": 1

     });
     jQuery('.compLogo2').delay(300).animate({

      "opacity": 1

     });
     jQuery('.compLogo3').delay(400).animate({

      "opacity": 1

     });
     jQuery('.compLogo4').delay(500).animate({

      "opacity": 1

     });
     jQuery('.compLogo5').delay(600).animate({

      "opacity": 1

     });
     jQuery('.compLogo6').delay(700).animate({

      "opacity": 1

     });
     jQuery('.compLogo7').delay(800).animate({

      "opacity": 1

     });
    }
   }

            if(jQuery('.skills-section').length){



                if (windowPosition > (skillPosition.top - window_height/2)) {



                    var el = jQuery('.skills-section .progress:first');



                    //showProgress(el);

					jQuery('.progress-bar').each(function () {

			   				jQuery(this).animate({left: '0'}, 1200,function(){});

					});

					if (count===0) {
					// element is now visible in the viewport
						count++;
						$('.easyPieChart').each(function(){
							dataperc = $(this).attr('data-percent');
							$(this).find('span').delay(6000).countTo({
								from: 0,
								to: dataperc,
								speed: 2000,
								refreshInterval: 80
							});
						});
					} else {
					// element has gone out of viewport
					}

                    if(epc_flag == false){



                        epc_flag = true;



                        jQuery('.easyPieChart').each(function () {



                            var percent=jQuery(this).data('percent');
							
							jQuery(this).data('easyPieChart').update(0);

                            jQuery(this).data('easyPieChart').update(percent);



                        });



                    }



                }



            }

			

			if(jQuery('.portfolio-section').length){

                if ( windowPosition > (portfolioPosition.top - window_height/1.5)) { 

				jQuery('.portfolio-item-1').delay(200).animate({

					"opacity": 1

				});

		

				jQuery('.portfolio-item-2').delay(400).animate({

					"opacity": 1

				});

		

				jQuery('.portfolio-item-3').delay(600).animate({

					"opacity": 1

				});

		

				jQuery('.portfolio-item-4').delay(800).animate({

					"opacity": 1

				});

				jQuery('.portfolio-item-5').delay(1000).animate({

					"opacity": 1

				});

		

				jQuery('.portfolio-item-6').delay(1200).animate({

					"opacity": 1

				});

		

				jQuery('.portfolio-item-7').delay(1400).animate({

					"opacity": 1

				});

		

				jQuery('.portfolio-item-8').delay(1600).animate({

					"opacity": 1

				});
				jQuery('.portfolio-item-9').delay(1800).animate({

					"opacity": 1

				});
				jQuery('.portfolio-item-10').delay(2000).animate({

					"opacity": 1

				});

				

                }

            }





        });



    }



    function showProgress(element) {



        if(element.next() == 'undefined') {



            return false;



        }



        element.find('.progress-bar').animate({left: '0'}, 1200,function(){



            showProgress(element.next());



        });



    }







});



