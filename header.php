
<div class="container-fluid header-wrap">

    <header>

        <div class="row">
            <div class="col-md-4 left-item">
                <img class="main-logo" src="/images/main_logo.png" alt="Логотип"/>
                <h1 class="main-description">ПРОИЗВОДСТВО И ПРОДАЖА КОМПОНЕНТОВ&nbsp;ПРОМЫШЛЕННОЙ АВТОМАТИКИ</h1>
                <div class="catalog-menu pointer">
                    <span>КАТАЛОГ ПРОДУКЦИИ</span>
                    <div class="catalog-menu-point glyphicon glyphicon-menu-down"></div>
                </div>
            </div>
            <div class="language-switch-box event">
                <div class="current-language pointer">
                    <div class="flag-image ru"></div>
                    <div class="title-lang">RU</div>
                    <div class="triangle-lang"></div>
                </div>
                <div class="language-switch-hidden pointer popup display-none">
                    <a class="current-language">
                        <div class="flag-image ru"></div>
                        <div class="title-lang">Русский</div>
                    </a>
                    <a class="current-language pointer">
                        <div class="flag-image ua"></div>
                        <div class="title-lang">Українська</div>
                    </a>
                    <a class="current-language pointer">
                        <div class="flag-image en"></div>
                        <div class="title-lang">English</div>
                    </a>
                </div>
            </div>
            <nav class="main-menu">
                <button id="main-menu-button">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <ul class="main-menu-items-for-button display-none">
                    <li><a href="#">Наша компания</a></li>
                    <li><a href="http://demo.interavtomatika.com.ua/brands/brands.php">Партнеры</a></li>
                    <li><a href="http://demo.interavtomatika.com.ua/blog/blog.php">Статьи</a></li>
                    <li><a href="#">Техподдержка</a></li>
                </ul>
                <ul class="main-menu-items">
                    <li><a href="#">Наша компания</a></li>
                    <li><a href="http://demo.interavtomatika.com.ua/brands/brands.php">Партнеры</a></li>
                    <li><a href="http://demo.interavtomatika.com.ua/blog/blog.php">Статьи</a></li>
                    <li><a href="#">Техподдержка</a></li>
                </ul>
            </nav>
            <div class="header-search">
                <input type="text" name="header-search" value="11231 товаров в наличии" class="hidden-xs"/>
                <input type="text" name="header-search" value="11231 товаров" class="visible-xs"/>
                <button></button>
            </div>
            <div class="delivery-cart-wrap">
                <span>Доставка по всей Украине из Днепропетровска</span>
                <div class="header-cart"><div class="cart-image-wrap"><div class="cart-image"></div></div><a class="light-blue-text pointer">Корзина (3)</a></div>
            </div>
            <div class="contacts-header">
                <div class="contacts-item-1">
                    <span class="bold">Не дозвонились?</span><a class="float-right pointer" onclick="$('#callback-modal').modal('show');">Заказать звонок</a>
                    <br /><span>Факс: </span><span class="float-right phone-header">+38 (056) 744 97 31</span>
                    <br /><span>Тел.: </span><span class="float-right phone-header-double"><span>+38 (056) 744 97 31</span><br><span>+38 (056) 744 97 31</span></span>
                    <br /><span>E-mail: </span><a class="light-blue-text float-right underline" href="mailto:info@interautomatic.com.ua">info@interautomatic.com.ua</a>
                </div>
                <div class="contacts-item-2">
                    <span>Офис: г.Днепропетровск</span>
                        <a class="float-right pointer"
                          onclick="var modal = $('#road-map-modal');
                                modal.find('.modal-title:eq(0)').text('КАРТА ПРОЕЗДА');
                                modal.find('.modal-title:eq(1)').text('Офис - склад: г.Днепропетровск, ул. Паникахи, д. 2');
                                modal.find('.modal-body').empty().append('<?php echo htmlspecialchars('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.6932349875924!2d35.037859!3d48.40483400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb5c5770accd%3A0x6d231d507d7176f0!2z0LLRg9C7LiDQn9Cw0L3RltC60LDRhdC4LCAyLCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LosINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1442310180410" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>') ?>');
                                modal.modal('show');"
                        >Карта</a>
                    <span class="light-blue-text bold pointer plus-before" id="more-contacts" data-hide-show="header .additional-contacts">Ещё контакты</span>
                    <div class="additional-contacts display-none popup">
                        <div class="additional-contacts-wrap">
                            <span>Viber</span><span class="float-right bold">viber.interautomatic</span>
                            <br>
                            <span>Watsapp</span><span class="float-right bold">watsapp.interautomatic</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </header>

</div>