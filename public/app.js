var $uuidBox = $('#uuid-box');
var $uuidButton = $('#uuid-button');
var $uuidErr = $('#uuid-err');

var urlBase = window.location.href;
var urlApiUUID = urlBase + 'api/uuid';
console.log('uaUUID', urlApiUUID);

$uuidButton.click(function(e) {
    e.preventDefault();


    $.get({
        url: urlApiUUID,
        success: function(data, status, jqxhr) {
            console.log('[rand] success');
            $uuidBox.val(data);
        },
        error: function(jqxhr, status, err) {
            console.error('[rand] error:', err);
            $uuidErr.text('ERROR (' + String(status) + '): ' + err);
        }
    });
});
