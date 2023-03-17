//canvas

// var renderer, renderer1, renderer2, scene, camera, ww, wh, particles;

// ww = window.innerWidth,
// 	wh = window.innerHeight;

// var centerVector = new THREE.Vector3(0, 0, 0);
// var previousTime = 0
// speed = 10
// isMouseDown = false;

// var getImageData = function (image) {

// 	var canvas = document.createElement("canvas");
// 	canvas.width = image.width;
// 	canvas.height = image.height;

// 	var ctx = canvas.getContext("2d");
// 	ctx.drawImage(image, 0, 0);

// 	return ctx.getImageData(0, 0, image.width, image.height);
// }

// var drawTheMap = function () {

// 	var geometry = new THREE.Geometry();
// 	var geometry2 = new THREE.Geometry();

// 	var geometry3 = new THREE.Geometry();
// 	var geometry4 = new THREE.Geometry();
// 	var sprite = new THREE.TextureLoader().load("https://image.ibb.co/kYpXoS/circle_4.png");
// 	var material = new THREE.PointsMaterial({
// 		size: 1,
// 		color: 0xc81d42,
// 		sizeAttenuation: false,
// 		map: sprite
// 	});

// 	var material2 = new THREE.PointsMaterial({
// 		size: 2,
// 		color: 0xc81d42,
// 		sizeAttenuation: false,
// 		map: sprite
// 	});

// 	var material3 = new THREE.PointsMaterial({
// 		size: 3,
// 		color: 0xc81d42,
// 		sizeAttenuation: false,
// 		map: sprite
// 	});

// 	var material4 = new THREE.PointsMaterial({
// 		size: 4,
// 		color: 0xc81d42,
// 		sizeAttenuation: false,
// 		map: sprite
// 	});

// 	console.log(imagedata);
// 	for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
// 		for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
// 			if (imagedata.data[(x * 4 + y * 4 * imagedata.width)] < 128) {

// 				var colorDot = imagedata.data[(x * 4 + y * 4 * imagedata.width)];

// 				var vertex = new THREE.Vector3();
// 				vertex.x = x - imagedata.width / 4;
// 				vertex.y = -y + imagedata.height / 2;
// 				vertex.z = -Math.random() * 500;

// 				vertex.speed = Math.random() / speed + 0.015;

// 				var random_boolean = Math.random() >= 0.5;


// 				if (colorDot < 45) {
// 					geometry4.vertices.push(vertex);
// 				} else if (colorDot >= 45 && colorDot < 90) {
// 					geometry3.vertices.push(vertex);
// 				} else if (colorDot >= 90 && colorDot < 134) {
// 					geometry2.vertices.push(vertex);
// 				} else {
// 					geometry.vertices.push(vertex);
// 				}

// 				// if(colorDot < 85){
// 				//   geometry3.vertices.push(vertex);
// 				// }else if (colorDot >= 85 && colorDot < 170) {
// 				//   geometry2.vertices.push(vertex); 
// 				// } else {
// 				//   geometry.vertices.push(vertex); 
// 				// }


// 			} else {
// 				// console.log(imagedata.data[x]); 
// 				// console.log(imagedata.data[y]);  
// 			}
// 		}
// 	}

// 	particles = new THREE.Points(geometry, material);
// 	particles2 = new THREE.Points(geometry2, material2);

// 	particles3 = new THREE.Points(geometry3, material3);
// 	particles4 = new THREE.Points(geometry4, material4);

// 	scene.add(particles);
// 	scene.add(particles2);

// 	scene.add(particles3);
// 	scene.add(particles4);

// 	requestAnimationFrame(render);
// };

// var drawTheMap1 = function () {

// 	var geometry = new THREE.Geometry();
// 	var material = new THREE.PointsMaterial({
// 		size: 2,
// 		color: (0x000000, 0),
// 		sizeAttenuation: false
// 	});
// 	for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
// 		for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
// 			if (imagedata.data[(x * 4 + y * 4 * imagedata.width)] < 128) {

// 				var vertex = new THREE.Vector3();
// 				vertex.x = x - imagedata.width / 2;
// 				vertex.y = -y + imagedata.height / 2;
// 				vertex.z = -Math.random() * 500;

// 				vertex.speed = Math.random() / speed + 0.015;

// 				geometry.vertices.push(vertex);
// 			}
// 		}
// 	}
// 	particles = new THREE.Points(geometry, material);

// 	scene.add(particles);

// 	requestAnimationFrame(render);
// };

// var drawTheMap2 = function () {

// 	var geometry = new THREE.Geometry();
// 	var material = new THREE.PointsMaterial({
// 		size: 3,
// 		color: (0x16d8bf, 0.5),
// 		sizeAttenuation: false
// 	});
// 	for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
// 		for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
// 			if (imagedata.data[(x * 4 + y * 4 * imagedata.width)] < 128) {

// 				var vertex = new THREE.Vector3();
// 				vertex.x = x - imagedata.width / 2;
// 				vertex.y = -y + imagedata.height / 2;
// 				vertex.z = -Math.random() * 500;

// 				vertex.speed = Math.random() / speed + 0.015;

// 				geometry.vertices.push(vertex);
// 			}
// 		}
// 	}
// 	particles = new THREE.Points(geometry, material);

// 	scene.add(particles);

// 	requestAnimationFrame(render);
// };

// var init = function () {
// 	renderer = new THREE.WebGLRenderer({
// 		canvas: document.getElementById("map"),
// 		antialias: true,
// 		alpha: true
// 	});
// 	renderer.setSize(ww, wh);
// 	renderer.setClearColor(0x000000, 0);

// 	// renderer1 = new THREE.WebGLRenderer({
// 	// 	canvas: document.getElementById("map1"),
// 	// 	antialias: true
// 	// });
// 	// renderer1.setSize(ww, wh);
// 	// renderer1.setClear


// 	//   renderer2 = new THREE.WebGLRenderer({
// 	// 		canvas: document.getElementById("map2"),
// 	// 		antialias: true
// 	// 	});
// 	// 	renderer2.setSize(ww, wh);
// 	// 	renderer2.setClearColor(0x000000, 0 );

// 	scene = new THREE.Scene();

// 	camera = new THREE.OrthographicCamera(ww / - 2, ww / 2, wh / 2, wh / - 2, 1, 1000);
// 	camera.position.set(7, 0, 4);
// 	camera.lookAt(centerVector);
// 	scene.add(camera);
// 	camera.zoom = 4;
// 	camera.updateProjectionMatrix();

// 	//   scene1 = new THREE.Scene();

// 	// 	camera1 = new THREE.OrthographicCamera( ww / - 2, ww / 2, wh / 2, wh / - 2, 1, 1000 );
// 	// 	camera1.position.set(7, 0, 4);
// 	// 	camera1.lookAt(centerVector);
// 	// 	scene1.add(camera);
// 	// 	camera1.zoom = 4;
// 	// 	camera1.updateProjectionMatrix();

// 	imagedata = getImageData(image);
// 	drawTheMap();
// 	// drawTheMap1();
// 	// drawTheMap2();

// 	window.addEventListener('mousemove', onMousemove, false);
// 	window.addEventListener('mouseover', onMousedown, false);
// 	window.addEventListener('resize', onResize, false);

// };
// var onResize = function () {
// 	ww = window.innerWidth;
// 	wh = window.innerHeight;
// 	renderer.setSize(ww, wh);
// 	camera.left = ww / - 2;
// 	camera.right = ww / 2;
// 	camera.top = wh / 2;
// 	camera.bottom = wh / - 2;
// 	camera.updateProjectionMatrix();
// };

// var onMousedown = function (e) {
// 	isMouseDown = true;
// 	lastMousePos = { x: e.clientX, y: e.clientY };
// };

// var onMousemove = function (e) {

// 	isMouseDown = false;
// 	camera.position.x += (e.clientX - lastMousePos.x) / 2500;
// 	camera.position.y -= (e.clientY - lastMousePos.y) / 2500;
// 	camera.lookAt(centerVector);
// 	lastMousePos = { x: e.clientX, y: e.clientY };

// };

// var render = function (a) {

// 	requestAnimationFrame(render);


// 	particles.geometry.verticesNeedUpdate = true;
// 	if (!isMouseDown) {
// 		camera.position.x += (0 - camera.position.x) * 0.06;
// 		camera.position.y += (0 - camera.position.y) * 0.06;
// 		camera.lookAt(centerVector);
// 	}

// 	renderer.render(scene, camera);
// };
// var circleData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADZJREFUeNpiUXz60YmBgaEQiFmBeAIjUGAzkCEIxP+B+BMTVAbEAQEWkMBEkAwQfwPiaQABBgDHUwwMRKPVpgAAAABJRU5ErkJggg==";
// var imgData = "data:image/jpeg;base64,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";

// var image = document.createElement("img");
// image.onload = init;
// image.src = imgData;




//image
$('.gallery-slide-1').slick({
	infinite: false,
	slidesPerRow: 1,
	rows: 2,
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 8000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
$('.gallery-slide-2').slick({
	infinite: false,
	slidesPerRow: 1,
	rows: 2,
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 8000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


function setsizeFlex() {
	$('img.setSize').each(function () {
		var $this = $(this);
		var $imgWrap = $this.parents('.img-thumb');
		var parentW = $imgWrap.outerWidth();
		var parentH = $imgWrap.outerHeight();
		var imgW = $this.width();
		var imgH = $this.height();
		// console.log('parentW:' + parentW + ', parentH:' + parentH + ', imgW:' + imgW + ', imgH:' + imgH);
		$this.css({ 'overflow': 'hidden', 'display': 'block' });
		$this.parent().css({ 'overflow': 'hidden', 'display': 'block' });
		var imgRatio = imgW / imgH;
		var parentRatio = parentW / parentH;

		if (imgRatio < parentRatio) {
			$this.css({
				'width': parentW + "px",
				'height': 'auto'
			});
		} else {
			$this.css({
				'width': 'auto',
				'height': parentH + "px"
			});
		};
	});
}
$(window).resize(function () {
	setsizeFlex();
})
$(document).ready(function () {
	setsizeFlex();

	$(window).scroll(function () {
		var scrollTop = $(this).scrollTop();	
		var windowHeight = $(this).height();
		var topBlock = $('.post-wrapper').offset().top - windowHeight;
		var blockAboutHeight = $('.block-about-works').height();
		var offSetTop40 = windowHeight - windowHeight * 0.6;
		// fixed left
		if (scrollTop > windowHeight * 0.6 && scrollTop < windowHeight + blockAboutHeight) {
			$('.owp-title').css('top', function () { return offSetTop40 })
		}
		if(scrollTop > topBlock && blockAboutHeight){
			$('.line-red').css('height', scrollTop - topBlock - offSetTop40)
			// $('.line-red').css('top', scrollTop - blockAboutHeight)
		}
	});
})