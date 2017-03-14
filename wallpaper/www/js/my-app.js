// Initialize your app
var myApp = new Framework7({


    material:true,
cache:false


});

// Export selectors engine
var $$ = Dom7;

 
    $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });
 
    $$('.open-right-panel').on('click', function (e) {
        // 'right' position to open Right panel
        myApp.openPanel('right');
    });
 
    $$('.panel-close').on('click', function (e) {
        myApp.closePanel();
    });  
// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
var myPhoto2 = myApp.photoBrowser({
    photos : [
        'img/dark-moon-mobile-wallpaper.png',
        'img/monsters-in-the-dark-3365.jpg',
        'img/dark-balls-5568.jpg',
       'img/dark-trail-1031.jpg',
       'img/dark3.jpg',
       'img/dark4.jpg',
    
        
    ]
});
var myPhoto3 = myApp.photoBrowser({
    photos : [
        'img/art1.jpg',
        'img/art2.jpg',
        'img/art3.jpg',
        'img/art4.jpg',
        'img/art5.jpg',
        'img/art6.jpg',
    
        
    ]
});

var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : [
        'img/love-it-1147.jpg',
        
        'img/gentle-love-5549.jpg',
        'img/love-lock-mobile-wallpaper.png ',
        'img/love-sunsets-5547.jpg',
        'img/love3.jpg',
        'img/love4.jpg',
        
    ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
});
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}


      var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-7251676025279948~2665838710',
        interstitial: 'ca-app-pub-7251676025279948/4142571918'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

function initApp() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

document.addEventListener('deviceready', initApp, false);

    // $(".ser-link").on("click",function(e){
    //     e.preventDefault();
    //     var ser_id=$(this).attr("ser_id");
    //     alert(ser_id);
    //     window.location.href("ceaser.html");
    // });

