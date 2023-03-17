(function() {
	/* In animations (to close icon) */

	var beginAC = 80,
	    endAC = 320,
	    beginB = 80,
	    endB = 320;


		// 560, 480, 80
	function inAC(s) {
	    s.draw('80% - 240', '80%', 0.3, {
	        delay: 0.1,
	        callback: function() {
	            inAC2(s)
	        }
	    });
	}

	function inAC2(s) {
	    s.draw('100% - 545', '100% - 305', 0.6, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function inB(s) {
	    s.draw(beginB - 60, endB + 60, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}

	function inB2(s) {
	    s.draw(beginB + 120, endB - 120, 0.3, {
	        easing: ease.ease('bounce-out', 1, 0.3)
	    });
	}

	/* Out animations (to burger icon) */

	function outAC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}

	function outAC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}

	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}


	function outC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outC2(s)
	        }
	    });
	}

	function outC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outC3(s)
	        }
	    });
	}

	function outC3(s) {
	    s.draw(beginAC, endAC - 100, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function outB(s) {
	    s.draw(beginB + 150, endB, 0.7, {
	        delay: 0.1,
	        easing: ease.ease('elastic-out', 2, 0.4)
	    });
	}

	/* Awesome burger default */

	var pathA = document.getElementById('pathA'),
		pathB = document.getElementById('pathB'),
		pathC = document.getElementById('pathC'),
		segmentA = new Segment(pathA, beginAC, endAC),
		segmentB = new Segment(pathB, beginB, endB),
		segmentC = new Segment(pathC, beginAC, endAC),
		trigger = document.getElementById('menu-icon-trigger'),
		toCloseIcon = true,
		dummy = document.getElementById('dummy'),
		wrapper = document.getElementById('menu-icon-wrapper');
	// console.log(segmentB);a
	wrapper.style.visibility = 'visible';

	trigger.onclick = function() {
		if (toCloseIcon) {
			inAC(segmentA);
			inB(segmentB);
			inAC(segmentC);

			dummy.className = 'dummy dummy--active';
			// $('.dummy').css('position','unset');
			$('.dummy__item').addClass('opacity1');
			$('.dummy').css('pointer-events', 'unset');
			$("#popup-menu").addClass("open-menu");
			$('body').css('overflow-y','hidden');
			$('.menu-res').css('pointer-events','all');
			$('.social').addClass('show');
			$('.bot-base.fade-out').css("opacity","1");
			$(".m-logo-sm").css("display","none");
			$(".m-touch").css("z-index","-1");
			$(".m-share").css("display","none");
			$('#pathB').css('transform','translateY(0px)');
			$('#pathC').css('transform','translateY(0px)');
			
		} else {
			outAC(segmentA);
			outB(segmentB);
			outC(segmentC);

			dummy.className = 'dummy';
			// $('.dummy').css('position','absolute');
			$('.dummy__item').removeClass('opacity1');
			$('.dummy').css('pointer-events', 'none');
			$("#popup-menu").removeClass("open-menu");
			$('body').css('overflow-y','unset');
			$('.menu-res').css('pointer-events','none');
			$('.social').removeClass('show');
			$('.bot-base.fade-out').css("opacity","0");
			$(".m-logo-sm").css("display","block");
			$(".m-touch").css("z-index","1");
			$(".m-share").css("display","block");
			$('#pathB').css('transform','translateY(-25px)');
			$('#pathC').css('transform','translateY(-50px)');
			
		}
		toCloseIcon = !toCloseIcon;
	};
})();
