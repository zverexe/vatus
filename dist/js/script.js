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
     * check all checkboxes
     */
    /*$("#check-all").on('click', function(){
        if ($(this).hasClass('allChecked')) {
            $('input[type="checkbox"]', '.todo-list').prop('checked', false);
        } else {
            $('input[type="checkbox"]', '.todo-list').prop('checked', true);
        }
        $(this).toggleClass('allChecked');
    });*/

    /*$(".check-all").on('click', function(){
        if ($(this).hasClass('allChecked')) {
            $('input[type="checkbox"]', '.todo-list-3').prop('checked', false);
        } else {
            $('input[type="checkbox"]', '.todo-list-3').prop('checked', true);
        }
        $(this).toggleClass('allChecked');
    });*/



    function modifyText(e) {
        console.log(e);
        var listElements = Array.prototype.slice.call(e.path[2].children[1].children);
        var checked= listElements.every(item => item.children[0].children[0].checked);
        listElements.forEach((item)=>{
            let t = item.children["0"].children["0"];
            t.checked = !checked;
        });
    }

    var el = document.getElementById("check-all-2");
    el.addEventListener("click", modifyText, false);



    /*$("#check-all-1").on('click', function(){
        if ($(this).hasClass('allChecked')) {
            $('input[type="checkbox"]', '.todo-list').prop('checked', false);
        } else {
            $('input[type="checkbox"]', '.todo-list-2').prop('checked', true);
        }
        $(this).toggleClass('allChecked');
    });*/



    /*
     * add note
     */

    $('.add-note').click(function() {
        $(this).prev().find('.note').toggle('slow', function() {
            // Animation complete.
        });
    });

});