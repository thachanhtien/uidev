// Define a single image target to get things started
var targets = [
    {
        type: ParticleSaga.ModelTarget,
        url: 'assets/images/chess.json',
        options: {
            color: {
                r: 0,
                g: 1,
                b: 1
            },
            scale: 120,
            size: 6,
            respondsToMouse: true,
        }
    },
    {
        type: ParticleSaga.ModelTarget,
        url: 'assets/images/blocks.json',
        options: {
            color: {
                r: 1,
                g: 1,
                b: 1
            },
            scale: 80,
            size: 3,
            respondsToMouse: true,
        }
    },
    {
        type: ParticleSaga.ModelTarget,
        url: 'assets/images/robot.json',
        options: {
            color: {
                r: 1,
                g: 1,
                b: 1
            },
            scale: 90,
            size: 5,
            respondsToMouse: true,
        }
    },
];

if($(window).width()<768){
    targets[0].options.scale = 40;
    targets[1].options.scale = 50;
    targets[2].options.scale = 50;
}

// Same scene setup routine
var saga = document.getElementById('model');
var scene = new ParticleSaga.Scene(saga, targets, {
    numParticles: 10000,
    maxMouseRotation: Math.PI / 10,
});
scene.load(function() {

});
var temp = 0;
var temp2 = 0;
var temp3 = 0;
$(window).scroll(function () {
    var Skill1 = $('.skill-strategy');
    var Skill2 = $('.skill-design');
    var Skill3 = $('.skill-development');
    var scrollTop = $(this).scrollTop();	
    var topSkill1 = $('.skill-strategy').offset().top - Skill1.height()/4;
    var topSkill2 = $('.skill-design').offset().top - Skill1.height()/4;
    var topSkill3 = $('.skill-development').offset().top - Skill1.height()/4;

    if(scrollTop > topSkill1 && scrollTop < topSkill2 && temp == 0){
        temp = 1;
        temp2 = 0;
        temp3 = 0;
        scene.setTarget(0);
        setupDemoUI();
        $('.service-bg-1').css('opacity', 1);
        $('.service-bg-2').css('opacity', 0);
        $('.service-bg-3').css('opacity', 0);
    }
    if(scrollTop > topSkill2 && scrollTop < topSkill3 && temp2 == 0){
        
        temp = 0
        temp2 = 1;
        temp3 = 0;

        scene.setTarget(1);
        setupDemoUI();
        $('.service-bg-1').css('opacity', 0);
        $('.service-bg-2').css('opacity', 1);
        $('.service-bg-3').css('opacity', 0);
    }
    if(scrollTop > topSkill3 && temp3 == 0){
        
        temp = 0
        temp2 = 0;
        temp3 = 1;

        scene.setTarget(2);
        setupDemoUI();
        $('.service-bg-1').css('opacity', 0);
        $('.service-bg-2').css('opacity', 0);
        $('.service-bg-3').css('opacity', 1);
    }
    if(scrollTop > Skill1.offset().top && scrollTop < Skill3.offset().top) {
        $('#model').css('position', 'fixed');
    }else{
        $('#model').css('position', 'absolute');
    }

    if($(window).width() >768){
        if(scrollTop > Skill3.offset().top - Skill3.height()){
            $('#model').css('top', 'unset');
            $('#model').css('bottom', '0');
        }else{
            $('#model').css('top', '0');
            $('#model').css('bottom', 'unset');
        }
    }else{
        if(scrollTop > $('.block-skill-2').offset().top - $(window).height() && scrollTop < ($('.block-banner-bot').offset().top - $(window).height()) ){
            $('#model').css('bottom', 'unset');
            $('#model').css('top', '0');
        }else{
            $('#model').css('bottom', '50vh');
            $('#model').css('top', 'unset');
        }
    }
    
    // var windowHeight = $(this).height();
    // // var topBlock = $('.block-skill-2').offset().top - windowHeight;
    // var blockAboutHeight = $('.block-skill-2').height();
    // // fixed left
    // if (scrollTop > windowHeight && scrollTop < windowHeight + blockAboutHeight) {
    //     $('#model').css('top', 0)
    // }
})




// Some methods specific to our upload UI for this example
function setupDemoUI() {
    setupDragEvents();
    // setupPagination();
}

// function setupPagination() {
//   var next = document.getElementsByClassName('next')[0];
//   var prev = document.getElementsByClassName('prev')[0];
//   next.addEventListener('click', scene.nextTarget);
//   prev.addEventListener('click', scene.prevTarget);
//   document.body.addEventListener('keydown', onKeydown);
// }

// function onKeydown(e) {
//   switch(e.keyCode) {
//     case 37:
//       scene.prevTarget();
//       break;
//     case 39:
//       scene.nextTarget();
//       break;
//   }
// }
    $('.next').click(function(){
        scene.nextTarget();
    })
function setupDragEvents() {
    saga.addEventListener('dragenter', function() {
        saga.className = 'dragover';
    });
    saga.addEventListener('dragleave', function() {
        saga.className = '';
    });
    saga.addEventListener('drop', onFileDrop);

    window.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
    window.addEventListener('drop', function(event) {
        event.preventDefault();
    });
}

function onFileDrop(event) {
    event.preventDefault();
    saga.className = '';
    var validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    var validModelTypes = ['application/json', 'text/javascript', 'application/x-javascript'];
    var files = event.dataTransfer.files;
    for (var i=0; i<files.length; i++) {
        var file = files[i];
        var type;

        if (validImageTypes.indexOf(file.type) != -1) {
            type = 'image';
        } else if (validModelTypes.indexOf(file.type) != -1) {
            type = 'model';
        } else {
            console.log(file.type);
            continue;
        }

        var reader = new FileReader();
        reader.addEventListener('loadend', function(event) {
            onFileLoad(this.result);
        });

        if (type === 'image') {
            reader.readAsDataURL(file);
        } else {
            reader.readAsText(file);
        }
    }
    return false;
}

function onFileLoad(result) {
    var target = {
        options: {
            respondsToMouse: true,
            size: 3
        }
    };

    if (result.match(/^data:image/)) {
        target.type = ParticleSaga.ImageTarget;
        var img = document.createElement("img");
        img.src = result;
        target.url = result;
    } else {
        target.type = ParticleSaga.ModelTarget;
        target.preloadedVertices = JSON.parse(result).vertices;
        target.options.color = {
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
        }
    }
    var incomingIndex = scene.targets.length;
    scene.loadTarget(target, function() {
        scene.setTarget(incomingIndex, true);
    })
}