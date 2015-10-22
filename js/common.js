
$('document').ready(function(){

    //correct content block height
    var content_height = $('.content').height();
    var aside_height =  $('aside').height();

    if($(window).width() > 639){
        $('.content').css('min-height',aside_height);
    }

    //correct height of category preview

    correctHeightInRow();

    $(window).resize(function(){
        $('.product-category-preview').css('height','');
        correctHeightInRow();
    });


    function correctHeightInRow() {
        var rows;
        if ($(window).width() > 1099) {
            rows = splitByRows('.product-category-preview', 3);
        } else if ($(window).width() > 819) {
            rows = splitByRows('.product-category-preview', 2);
        }else{
            $('.product-category-preview').css('height','');
        }

        if (rows) {
            for (var i = 0; i < rows.length; i++) {

                var height = rows[i].reduce(function (prevHeight, current) {
                    return $(current).height() > prevHeight ? $(current).height() : prevHeight;
                }, 0);
                $(rows[i]).height(height);
            }
        }
    }

    function splitByRows(selector,num){

        var previews = $(selector);

        var rows = [];
        for(var i = 0; previews.length; i++){
            rows[i] = previews.splice(0,num);
        }
        return rows;
    }

    //close popaps when click on body and so
    $('body').click(function(event) {

        if(!$(event.target).closest('.popup').length){

            if ($(window).width() >= 530 && $(window).width() <= 767) {
                $('.popup').not('.additional-contacts').fadeOut(200);
            } else {
                $('.plus-before').removeClass('minus-before');
                $('.popup').fadeOut(200, function () {
                    $(this).css('display', '')
                });
            }
        }
    });

    //show language popup
    $('.current-language').click(function(e){
        $('.language-switch-hidden').fadeIn(200);
        e.stopPropagation();
    });

    //show more contacts block
    $('#more-contacts').click(function(e){

        var selector = $(this).data('hide-show');

        var block = $(selector);

        if (block.is(':visible')) {
            $('.plus-before').removeClass('minus-before');
            block.fadeOut(200);
        } else {
            $('.plus-before').addClass('minus-before');
            block.fadeIn(200);
        }
        e.stopPropagation();
    });

    //show minimized menu
    $('#main-menu-button').click(function(e){

        $(this).next().slideToggle();
        $('.opacity').css('z-index','20').fadeIn();
        e.stopPropagation();
    })

    //show first block of catalog menu
    $('.catalog-menu').click(function(){

        if(!$('.submenu').length) {
            var offset = $(this).offset();

            var y = offset.top + $(this).height() + 3;

            $('.opacity').fadeIn(200);

            makeSubmenu(false, offset.left, y);
            $('.submenu').fadeIn(200);
        }else{
            $('.submenu').fadeOut(function(){$(this).remove()});
            $('.opacity').fadeOut();
        }
    });

    //add submenu to catalog menu
    $('.absolute-elements').on('click','.submenu-item',function(){

        var thisHasClassActive = $(this).hasClass('active');
        var a = $(this).find('a');
        var x,y;

        if(a[0]){
            window.location = a.attr('href');
            return;
        }

        var offset = $(this).offset();
        var dp = String($(this).closest('ul').data('path'));
        var submenusDel = $('ul[data-path^='+dp+']').slice(1);

        var heightDel = 0;
        if(submenusDel[0]) {
            heightDel = $(submenusDel[0]).outerHeight();
        }



        submenusDel.fadeOut(100,function(){$(this).remove()});

        deactivateItem($(this).closest('ul').find('.active'));
        

        if($(window).width() <= 1099){

            var ul = $(this).closest('ul');
            var leftIndent = 20;
            var width = ul.width() - leftIndent;

            x = offset.left + leftIndent;
            y = offset.top + $(this).outerHeight();
            
            var siblinSpace =  $(this).prevAll('.submenu-space');

            if(siblinSpace.length){
                y -= siblinSpace.outerHeight();
            }

            $(this).next().siblings('.submenu-space').slideToggle(function(){$(this).remove()});

            var sm_height = 0;

            if(!thisHasClassActive){
                sm_height = makeSubmenu(this,x,y,width).outerHeight();
            }else{
                deactivateItem($(this));
            }

            if(!$(this).next('.submenu-space')[0]) {
                $(this).after('<li class="submenu-space" style="height:' + sm_height + 'px;display:none"></li>').next().slideToggle();
            }

            var dpLength = String(dp).length;

            $('.submenu-space').each(function(index){


                var currentPathLength = String($(this).closest('ul').data('path')).length;

                if(currentPathLength<=dpLength) {

                    if ($(this).siblings('.submenu-space')[0]) {
                        heightDel = 0;
                    }

                    var finallyHeight = $(this).outerHeight() + sm_height - heightDel;
                    $(this).animate({height: finallyHeight + 'px'}, 300, function () {

                        if(finallyHeight < 3){
                            $(this).remove();
                        }

                        $('.submenu').fadeIn(150);

                    });
                }
            });

        }else{

            x = offset.left + $(this).closest('ul').width() + 3;
            y = offset.top;

            makeSubmenu(this,x,y);
            $('.submenu').fadeIn(300);
        }
        if(sm_height != 0){
            activateItem($(this));
        }
    });

    function activateItem(item){
        item.addClass('active');
        if($(window).width() < 1100) {
            item.find('.submenu-item-arrow').removeClass('glyphicon-menu-right').addClass('glyphicon-menu-up');
        }
    }

    function deactivateItem(item){
        item.removeClass('active');
        if($(window).width() < 1100) {
            item.find('.submenu-item-arrow').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-right');
        }
    }

    //click on opacity actions
    $('.absolute-elements').on('click','.opacity',function(){
        $('.submenu').fadeOut(300,function(){$('.submenu').remove();});
        $('.main-menu-items-for-button').fadeOut(200);
        $('.opacity').fadeOut(function(){$(this).css('z-index','')});
    });

    // scroll to top
    $('.upstairs-button').click(function(){
        $('body,html').stop().animate({scrollTop:0}, '500', 'swing');
    });

    //
    $('.banner-carousel-img-wrap img').click(function(){
        $('#image-modal .modal0-dialog').width($(this).width());
        $('#image-modal .modal0-dialog .modal-content').width($(this).width());
        $(this).attr('src');
    });

    //
    $('.banner-carousel-img-wrap img').click(function(){

        var title = $(this).closest('.item').find('.banner-carousel-title a').text();

        $.colorbox({
            href:$(this).attr('src'),
            className: 'certificate',
            opacity: 0.5,
            close: '×',
            title: title,
            transition: 'fade',
            initialWidth: 50,
            initialHeight: 100,
            fixed: true,
            onComplete: function(){$('#colorbox')[0].style.setProperty( 'visibility', 'visible', 'important' );}
        });

    })

    //init preview slider

    PreviewSlider.init();

    //clear search field when focus

    $('.header-search input').focus(function(){$(this).val('')});

    //expand search field

    var headerSearchFocus = false;
    var headerSearchWidth;
    var headerSearchPaddingLeft;
    var headerSearchMarginLeft;
    
    $(window).on('resize load',function(){

        headerSearchWidth = $('.header-search').css('width');
        headerSearchPaddingLeft = $('.header-search').css('padding-left');
        headerSearchMarginLeft = $('.header-search').css('margin-left');

    });


    $('.header-search').on('click focusout',function (e) {

        var self = this;
        var maxWidth479 = $(window).width() <= 479;
        var clickButton = false;

        if(e.type == 'click' && maxWidth479) {

            if(headerSearchFocus && e.target.localName == 'button'){
                $(this).find('input').val('search');
                headerSearchFocus = false;


            }else if(!headerSearchFocus) {
                $(this).animate({
                    width: '100%',
                    'padding-left': 0,
                    'margin-left': 0
                })
                  .addClass('expanded').find('input').val('').focus();
                headerSearchFocus = true;
            }

        }else
        if(e.type == 'focusout' && maxWidth479){


            if(headerSearchFocus) {

                $(self).animate({
                    width: headerSearchWidth,
                    'padding-left': headerSearchPaddingLeft,
                    'margin-left': headerSearchMarginLeft
                }, function () {
                    $(this).css({
                        width: '',
                        'padding-left': '',
                        'margin-left': '',
                        'text-align': ''
                    }).removeClass('expanded');
                });
                setTimeout(function(){
                    headerSearchFocus = false;
                },300);
            }
        }
    });

    // vertical align modal window of bootstrap

    (function ($) {
        "use strict";
        function centerModal() {
            $(this).css('display', 'block');
            var $dialog  = $(this).find(".modal-dialog"),
                offset       = ($(window).height() - $dialog.height()) / 2,
                bottomMargin = parseInt($dialog.css('marginBottom'), 10);

            // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
            if(offset < bottomMargin) offset = bottomMargin;
            $dialog.css("margin-top", offset);
        }

        $(document).on('show.bs.modal', '.modal', centerModal);
        $(window).on("resize", function () {
            $('.modal:visible').each(centerModal);
        });
    }(jQuery));

    //sort another brands on banner

    $(".sort-button").click(function () {

        var desc;
        if($(this).hasClass('desc')){
            $(this).removeClass('desc');
            desc = false;
        }else{
            $(this).addClass('desc');
            desc = true;
        }

        var mylist = $('.banner.another-brands .banner-content .items-wrap');
        var listitems = mylist.children('div').get();
        listitems.sort(function(a,b) {

            if(desc){
                var temp = a;
                a = b;
                b = temp;
            }

            var compA = $(a).find('.brand-name').text().toUpperCase();
            var compB = $(b).find('.brand-name').text().toUpperCase();
            return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
        })
        $.each(listitems, function(idx, itm) { mylist.append(itm); });
    });

    //Show more brands
    $('.all-brands-page .manufacturers .general-button').click(function(){
        if($('.brand-previews-more:visible').is(':visible')){
            $('html, body').animate({scrollTop: $('.manufacturers-previews').offset().top - $(window).height()/6});
        }
        $('.brand-previews-more').slideToggle(function(){
            var button = $('.all-brands-page .manufacturers .general-button');
            if($(this).is(':hidden')){
                button.text(button.data('show-text'));
            }else{
                button.text(button.data('hide-text'));
            }
        });
    });

    //show articles/products in search results

    $('.found-title-wrap .look').click(function(){

        if($('.search-results-products').is(':visible')){
            $('.search-results-products').fadeOut();
            $('.found-articles-title').fadeOut(function(){
                $('.search-results-text').fadeIn();
                $('.found-products-title').fadeIn();
            });
        }else{
            $('.search-results-text').fadeOut();
            $('.found-products-title').fadeOut(function(){
                $('.search-results-products').fadeIn();
                $('.found-articles-title').fadeIn();
            });
        }
    })
});

function makeSubmenu(context,x,y,width){

    var width = width != undefined ? 'width:'+width+'px;' : '';

    if(context){
        var i = $(context).data('i');
        var dataPath = 'data-path="';
        var path = String($(context).closest('ul').data('path'));
    }else{
        var i = '';
        var dataPath = 'data-path="1';
        var path = '';
    }

    dataPath += path + String(i);
    dataPath += '"';

    var style = ' style="display:none;position:absolute;top:'+y+'px;left:'+x+'px;'+width+'" ';
    var submenu = '<ul class="submenu" '+ dataPath + style + '>';

    var subArr = [0,0,'',arr];
    if(context){
        path = path + String($(context).data('i'));
        for (var i = 1; i < path.length; i++) {
            subArr = subArr[3][path[i]];
        }
    }

    if(!subArr[3]) return;

    var glyphiconClass = $(window).width() < 1100 ? 'glyphicon-menu-down' : 'glyphicon-menu-right';
    subArr[3].forEach(function(item,i){

        var black = ' black', arrow = '', a1 = '', a2 = '';
        if(item[3] != undefined && arr.length){
            black = '';
            arrow = '<span class="submenu-item-arrow glyphicon '+glyphiconClass+'"></span>';
        }else{
            a1 = '<a class="link-blue-text" href="'+item[2]+'">';
            a2 = '</a>';
        }
        submenu += '<li class="submenu-item" data-i='+i+'>' +
        a1 +
        '<span class="submenu-item-title">'+item[0]+'</span>' +
        '<div class="submenu-products-number">' +
        '<span class="submenu-item-number'+black+'">'+item[1]+'</span>' +
        arrow +
        '</div>' +
        a2 +
        '</li>';
    });
    submenu += '</ul>';
    submenu = $(submenu);
    $('.absolute-elements').append(submenu);

    return submenu;
}

arr = [
    ['Автоматика',75,'/'],
    ['Пневматика и гидравлика',34,'/',[
        ['Датчики',230,'/'],
        ['Коммутаторы Ethernet',75,'/'],
        ['Контроль, управление, питание',440,'/'],
        ['Преобразователи измерительных сигналов',5,'/'],
        ['Промышленная безопастность',75,'/'],
        ['Сигнальная арматура',34,'/',[
            ['Автоматика',75,'/'],
            ['Пневматика и гидравлика',34,'/',[
                ['Автоматика',75,'/'],
                ['Пневматика и гидравлика',34,'/'],
                ['Электроника',23,'/'],
                ['Производство ТЕНов',45,'/',[
                    ['Автоматика',75,'/'],
                    ['Пневматика и гидравлика',34,'/'],
                    ['Электроника',23,'/'],
                    ['Производство ТЕНов',45,'/'],
                    ['Наши разработки',56,'/'],
                ]],
                ['Наши разработки',56,'/'],
            ]],
            ['Электроника',23,'/'],
            ['Производство ТЕНов',45,'/',[
                ['Автоматика',75,'/'],
                ['Пневматика и гидравлика',34,'/'],
                ['Электроника',23,'/'],
                ['Производство ТЕНов',45,'/'],
                ['Наши разработки',56,'/'],
            ]],
            ['Наши разработки',56,'/'],
        ]],
        ['Система дистанционного управления',45,'/'],
        ['Электропривод',45,'/'],
        ['Энкодеры',12,'/'],
    ]],
    ['Электроника',34,'/'],
    ['Производство ТЕНов',45,'/',[
        ['Датчики',230,'/'],
        ['Коммутаторы Ethernet',75,'/'],
        ['Контроль, управление, питание',440,'/'],
        ['Преобразователи измерительных сигналов',5,'/'],
        ['Промышленная безопастность',75,'/'],
        ['Сигнальная арматура',34,'/',[
            ['Автоматика',75,'/'],
            ['Пневматика и гидравлика',34,'/'],
            ['Электроника',23,'/'],
            ['Производство ТЕНов',45,'/',[
                ['Автоматика',75,'/'],
                ['Пневматика и гидравлика',34,'/'],
                ['Электроника',23,'/'],
                ['Производство ТЕНов',45,'/'],
                ['Наши разработки',56,'/'],
            ]],
            ['Наши разработки',56,'/'],
        ]],
        ['Система дистанционного управления',45,'/'],
        ['Электропривод',45,'/'],
        ['Энкодеры',12,'/'],
    ]],
    ['Наши разработки',56,'/'],
];

function PreviewSlider(slider,windowPadding) {

    var self = this;

    this.windowPadding = 0;

    if($(window).width() <= 639){
        this.windowPadding = 600;
    }else
    if ($(window).width() <= 1099){
        this.windowPadding = 85;
    }

    this.window = $(slider);
    this.windowWidth = this.window.width();
    this.scrollStep = this.window.data('scroll-step');
    this.container = this.window.find('.slider-container');
    this.left = this.container.position().left;
    this.containerChildrens = this.container.children();
    this.previewWidth = this.containerChildrens.first().outerWidth(true);
    this.containerWidth = this.previewWidth * this.containerChildrens.length;
    this.numSections = Math.floor((this.windowWidth - this.windowPadding) / this.previewWidth);
    this.scrollStep = this.scrollStep != undefined ? this.scrollStep : this.numSections;
    this.scrollStep = this.scrollStep ? this.scrollStep : 1;
    this.offset = this.previewWidth * this.scrollStep;
    this.previosPositionX = 0;
    this.previosPositionY = 0;
    this.swipeOffset = 0;
    this.srollWindowOffset = $('body,html').scrollTop() || $('body').scrollTop();
    this.animateDone = true;
    this.startScrollOffset = 0;

    this.nextBlock = function(speed,loop){

        loop = 'wheel';

        var speed = speed || 'slow';
        var loop = loop !== undefined ? loop : false;
        var offsetEnd = this.containerWidth + this.left;
        var left = this.left - this.offset;

        if(offsetEnd - this.offset  < this.windowWidth ){

            if(loop){

                if(loop == 'line') {

                    left = 0;

                }else if(loop == 'wheel'){

                    this.container.append(this.container.children().slice(0,this.scrollStep));
                    this.container.css('left',this.left + this.offset);
                    left += this.offset;

                }else {

                    left = this.offset - this.containerWidth;
                }
            }
        }

        this.container.animate({left:left+'px'},speed).queue(function(){
            $(this).clearQueue();
            $(this).dequeue();
        });
    }

    this.prevBlock = function(speed,loop){

        loop = 'wheel';

        var speed = speed || 'slow';
        var loop = loop !== undefined ? loop : false;
        var left = this.left + this.offset;

        if(this.left >= 0){

            if(loop){

                if(loop == 'line'){

                    left = 0 - this.containerWidth + this.offset;

                }else if(loop == 'wheel') {

                    this.container.prepend(this.container.children().slice( - this.scrollStep));
                    this.container.css('left',this.left - this.offset);
                    left -= this.offset;

                }else{

                    left = 0;
                }
            }
        }

        this.container.animate({left:left+'px'},speed).queue(function(){
            $(this).clearQueue();
            $(this).dequeue();
        });
    }

    this.changePosition = function(e) {

        if (this.previosPositionX){

            this.swipeOffset += e.changedTouches[0].clientX - this.previosPositionX;

            this.container.css({left:this.left + this.swipeOffset});
        }

        this.previosPositionX = e.changedTouches[0].clientX;

    }

    this.moveToTouchstartOffset = function(){
        this.animateDone = false;

        this.container.animate({'left':this.left},function(){
            self.animateDone = true;
        });
    }

    this.scrollWindow = function(e){

        var offset = this.startScrollOffset - e.changedTouches[0].clientY;

        if (this.startScrollOffset){

            $('body,html').scrollTop(this.srollWindowOffset + offset - 10);

        }else{
            this.startScrollOffset = e.changedTouches[0].clientY;
        }

    }

}
PreviewSlider.init = function(){

    $('.slider-window').each(function(){

        var v_window = $(this);
        var windowWidth = v_window.width();
        var container = v_window.find('.slider-container');
        var containerChildrens = container.children();
        var previewWidth = containerChildrens.first().outerWidth(true);
        var containerWidth = previewWidth * containerChildrens.length;
        var numSections = Math.floor(windowWidth / previewWidth);
        var offset = previewWidth * numSections;

        if(containerWidth < windowWidth){
            v_window.nextAll('.right-rewind-blue, .right-rewind-grey, .left-rewind-blue, .left-rewind-grey').hide();
        }

        if(offset * 2 > containerWidth){
console.log('containerWidth');
            container.append(container.children().clone());
            container.width(containerWidth * 2);
        }
    });

    $('.left-rewind-blue').click(function(){

        var slider = $(this).parent().find('.slider-window');

        var sp = new PreviewSlider(slider);
        sp.prevBlock();
    });

    $('.right-rewind-blue').click(function(){

        var slider = $(this).parent().find('.slider-window');

        var sp = new PreviewSlider(slider);
        sp.nextBlock();
    });

    //for touchscreen

    var swipe;
    var previewSlider;

    $(".slider-window").on("touchstart swiperight swipeleft touchmove touchend",function(e){
        
        if(previewSlider && !previewSlider.animateDone){
            return;
        }

        if(e.type == 'touchstart'){

            previewSlider = new PreviewSlider(e.delegateTarget);

            previewSlider.previosPositionX = e.changedTouches[0].clientX;
            previewSlider.previosPositionY = e.changedTouches[0].clientY

            swipe = false;
        }else
        if(e.type == 'touchend'){
            setTimeout(function(){
                if(!swipe){
                    previewSlider.moveToTouchstartOffset();
                }
            },100);
        }
        if(e.type == 'touchmove'){

            if(Math.abs(previewSlider.previosPositionY - e.changedTouches[0].clientY) < Math.abs(previewSlider.previosPositionX - e.changedTouches[0].clientX)){

                previewSlider.changePosition(e);
            }else{

                previewSlider.scrollWindow(e);
            }

            e.preventDefault();

        }else
        if(e.type == 'swiperight'){

            previewSlider.prevBlock('fast',false);
            swipe = true;
        }else
        if(e.type == 'swipeleft'){

            previewSlider.nextBlock('fast',false);
            swipe = true;
        }
    });

}

function decodeEntities(encodedString) {
    return encodedString;
}