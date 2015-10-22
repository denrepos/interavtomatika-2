<!DOCTYPE html>
<html>

<?php include '../head.php' ?>

<body class="all-brands-page">

    <?php include '../header.php' ?>

    <div class="container-fluid middle-container-wrap">
        <div class="middle-container">

            <ul class="breadcrumbs">
                <li><a href="/" class="bc-home"></a></li>
                <li>Бренды</li>
            </ul>

            <div class="content-aside-wrap">
                <div class="content col-lg-16 col-lg-push-4">
                <div class="manufacturers">

                    <?php include 'brand-previews.php' ?>

                    <?php include 'brands-ajax.php' ?>

                    <div class="block-under-previews">
                        <div class="right-under-previews">
                            <button class="general-button" data-hide-text="Свернуть" data-show-text="Ещё 23 бренда">Ещё 23 бренда</button>
                        </div>

                        <div class="social-buttons">
                            <img src="../images/social.png" alt="">
                        </div>

                    </div>
                </div>

                <?php include '../products/viewed-products.php' ?>

            </div>

                <aside class="col-sm-4 col-sm-pull-16">
                <div class="banner brands">
                    <a href="#" class="banner-header">
                        <span class="banner-header-title">ПОСТАВЩИК</span>
                    </a>

                    <div class="banner-content align-left">
                            Дистрибьютор по Украине <br/>
                            OOO "Интеравтоматика" <br/>
                        <br/>
                            Информация о поставщике: <br/>
                        <br/>
                            <a class="show-tel-modal">Показать телефоны</a><br/>
                            <a class="send-message-modal">Отправить сообщение</a><br/>
                            <a class="brand-office-map-modal">Офис - склад на карте</a><br/>
                            <a class="schedule-of-work-modal">График работы</a><br/>
                    </div>
                </div>

            </aside>

            </div>
        </div>
    </div>

    <?php include '../footer.php' ?>

    <?php include '../absolue-elements.php' ?>
    <script>

        //custom windows
        $('.show-tel-modal').click(function(){
            var modal = $('#general-modal-window');
            modal.find('.modal-dialog').width(300);
            modal.find('.modal-title:eq(0)').text('Контактные телефоны');
            modal.find('.modal-title:eq(1)').text('');
            modal.find('.modal-body').empty().append('<br>+380123123123<br><br><br>');
            modal.modal('show');
        });
        $('.schedule-of-work-modal').click(function(){
            var modal = $('#general-modal-window');
            modal.find('.modal-dialog').width(300);
            modal.find('.modal-title:eq(0)').text('График работы');
            modal.find('.modal-title:eq(1)').text('');
            modal.find('.modal-body').empty().append('График работы');
            modal.modal('show');
        });

        //permanent windows
        $('.send-message-modal').click(function(){
            var modal = $('#send-message-modal');
            modal.find('.modal-dialog').width(270);
            modal.modal('show');
        });
        $('.brand-office-map-modal').click(function(){
            var modal = $('#road-map-modal');
            modal.find('.modal-title:eq(0)').text('Офис на карте');
            modal.find('.modal-title:eq(1)').text('Складской переулок');
            modal.find('.modal-body').empty().append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.1907524078442!2d25.955736215555252!3d48.2607035505565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473408d55311f3bd%3A0x31847a0761e43a9e!2z0KHQutC70LDQtNGB0YzQutC40Lkg0L_RgNC-0LIuLCDQp9C10YDQvdGW0LLRhtGWLCDQp9C10YDQvdGW0LLQtdGG0YzQutCwINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1444825076126" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
            modal.modal('show');
        });
    </script>

    <div class="absolute-elements">
        <div id="send-message-modal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Заголовок модального окна -->
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">ОТПРАВИТЬ СООБЩЕНИЕ</h4>
                    </div>
                    <!-- Основной текст сообщения -->
                    <div class="modal-body">
                        <form action="callback.php">
                            <span class="required-mark">* </span><input type="text" name="name" value="email"/>
                            <br/><span class="required-mark">* </span><textarea name="text" placeholder="Сообщение"></textarea>
                        </form>
                        <button class="cancel" data-dismiss="modal">Отмена</button>
                        <button class="send" >Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>