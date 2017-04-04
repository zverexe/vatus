/*$("#header__button").click(function() {
 $(this).toggleClass("hamburger--open");
 });*/

/*var $menu = $("#left-menu").mmenu({
        /*navbars     : [
         {
         height  : 3,
         position    : 'top',
         content     : [
         '<div id="logo" class=""><img src="img/logo.png"></div>',
         'prev',
         'title'
         ],
         }
         ]*/
        /*extensions: {
            "(max-width: 550px)": ["fullscreen"]
        },

        "navbar": {
            title: ""
        },
        "navbars": [
            {
                "height"  : 1,
                "position": "top",
                "content": [
                    "searchfield"
                ]
            },
            {

                "position": "top",
                "content": ["<img src='img/close-menu.png' id='close-menu' class='close-icon'>",
                    'close'
                ]
            }
        ]
    },
    {

        "searchfield": {
            "clear": true
        },
        clone: true

    });
var $icon = $("#header__button");
var API = $menu.data( "mmenu" );
$icon.on( "click", function() {
    API.open();
});

var $iconClose = $("#close-menu");
$iconClose.on( "click", function() {
    API.close();
});*/




$('[data-toggle="collapse"]').click(function() {
    $('.collapse.in').collapse('hide')
});


$('.collapse').on('show.bs.collapse', function(){
    var i = $(this).parent().find('.fa-chevron-down');
    i.toggleClass('fa-chevron-down fa-chevron-up');

}).on('hide.bs.collapse', function(){
    var i = $(this).parent().find('.fa-chevron-up');
    i.toggleClass('fa-chevron-up fa-chevron-down');
});


$('.left-menu-link').on('click', function () {
    var a = $(this).parent().find('.menu-link');
    a.toggleClass('menu-link-opened');
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}