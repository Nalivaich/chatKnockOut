/**
 * Created by vitali.nalivaika on 30.07.2015.
 */


define(["../jquery", "../knockout-3.3.0", "services/messageService"],function($, ko, messageService) {
        function MessagesViewModel(data) {
            'use strict';

            var self = this;

            data = $.extend({
                id: 0,
                idRoom: 0,
                idUser: 0,
                message: '',
                external: ''
            }, data);

            self.id = ko.observable( data.id );
            self.idRoom = ko.observable( data.idRoom );
            self.idUser = ko.observable( data.idUser );
            self.message = ko.observable( data.message );
            self.external = ko.observable( data.external );

        }
        return MessagesViewModel;
    }
);




/*var promiseCount = 0;
function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') ������ (������ ����������� ����)');

    // ������ ��������, ������������ 'result' (�� ��������� 3-� ������)
    var p1 = new Promise(
        // ������� ���������� ��������� ��������� ������� ���
        // ��������� ��������
        function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') ������ �������� (������ ������������ ����)');
            // ��� ����� ���� ������ �������������
            window.setTimeout(
                function() {
                    // �������� ���������!
                    resolve(thisPromiseCount)
                }, Math.random() * 2000 + 1000);
        });

    // ���������, ��� ������� � ����������� ���������
    p1.then(
        // ���������� � ��������
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') �������� ��������� (����������� ��� ��������)');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') �������� ������� (���������� ��� ��������)');
}*/