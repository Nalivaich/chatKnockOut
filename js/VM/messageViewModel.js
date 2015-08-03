/**
 * Created by vitali.nalivaika on 30.07.2015.
 */


define(["../jquery", "../knockout-3.3.0", "services/messageService"],function($, ko, messageService) {
        function MessagesViewModel(data) {
            'use strict';

            var self = this;

            self.idRoom = ko.observable(( data.idRoom || 0));
            self.idUser = ko.observable(( data.idUser || 0));
            self.message = ko.observable(( data.message || 0));
            self.external = ko.observable(( data.external || 0));

            self.add = function(userObject,onSuccess, onError) {
                return(messageService.add(function () {
                    onSuccess();
                }, onError , userObject))
            };


        }
        return MessagesViewModel;
    }
);




/*var promiseCount = 0;
function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Запуск (запуск синхронного кода)');

    // Создаём обещание, возвращающее 'result' (по истечении 3-х секунд)
    var p1 = new Promise(
        // Функция разрешения позволяет завершить успешно или
        // отклонить обещание
        function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Запуск обещания (запуск асинхронного кода)');
            // Это всего лишь пример асинхронности
            window.setTimeout(
                function() {
                    // Обещание выполнено!
                    resolve(thisPromiseCount)
                }, Math.random() * 2000 + 1000);
        });

    // Указываем, что сделать с выполненным обещанием
    p1.then(
        // Записываем в протокол
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Обещание выполнено (асинхронный код завершён)');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Обещание создано (синхронный код завершён)');
}*/