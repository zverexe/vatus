$( document ).ready(function() {
    /*
     * Mobile menu
     */
    var $menu = $("#mobile-menu").mmenu({
            extensions: {
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
            }
        });

    var $icon = $("#header__button");
    var API = $menu.data( "mmenu" );
    $icon.on( "click", function() {
        API.open();
    });

    var $iconClose = $("#close-menu");
    $iconClose.on( "click", function() {
        API.close();
    });

    $(window).on("resize", function() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            API.close();
        }
    });



    /*
     * Open only one submenu
     */

    $('[data-toggle="collapse"]').click(function() {
        $('.collapse.in').collapse('hide')
    });


    /*
     * Change left menu chevrons on collapse submenu
     */

    $('.collapse').on('show.bs.collapse', function(){
        var i = $(this).parent().find('.fa-chevron-down');
        i.toggleClass('fa-chevron-down fa-chevron-up');

    }).on('hide.bs.collapse', function(){
        var i = $(this).parent().find('.fa-chevron-up');
        i.toggleClass('fa-chevron-up fa-chevron-down');
    });

    /*
     * add note
     */

    $('.add-note').click(function(e) {
        console.log(e);
        $(this).prev().find('.note').toggle('slow', function() {
            // Animation complete.

        });
    });
});

/*
 * check all checkboxes
 */

function selectAll(event) {
    console.log(event);
    var listElements = Array.prototype.slice.call(event.path[2].children[1].children);
    var checked= listElements.every(item => item.children[0].children[0].checked);
    listElements.forEach((item)=>{
        var t = item.children["0"].children["0"];
    t.checked = !checked;
});
}
