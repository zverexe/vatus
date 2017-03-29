/*$("#header__button").click(function() {
 $(this).toggleClass("hamburger--open");
 });*/

var $menu = $("#mobile-menu").mmenu({
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
        "navbar": {
            title: ""
        },
        "navbars": [
            {
                "position": "top",
                "content": [
                    "searchfield"
                ]
            }
        ]
    },
    {
        "searchfield": {
            "clear": true
        }
    });
var $icon = $("#header__button");
var API = $menu.data( "mmenu" );
$icon.on( "click", function() {
    API.open();
});