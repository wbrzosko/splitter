$(document).ready(function () {
   var emails;
    function splitEmails(obj) {
        var emailsarray = obj.val().split('\n');    
        return emailsarray;
    }
    for(var i=1;i<501;i++) {
        $('#main-window').append('wojtek'+i+'@gmail.com'+(i==500 ? '' : '\n'));
    }
    $('#split-button').click(function () {  
        emails = splitEmails($('#main-window'));
        var size = parseInt($('#limit').val());
        $('.pasted').remove();
        for(var i=0; i<emails.length; i=i+size) {
            var text = (emails.slice(i,i+size));
            var element = '<div><textarea class="pasted" id="text'+i+'" rows="'+text.length+'" cols="50"></textarea></div>';
            if ($.isEmptyObject($.find('#text'+i))) {
                $('#main').append(element);
            }
            $('#text'+i).html('');
            for(var j=0;j<text.length;j++) {
                $('#text'+i).append(text[j]+ (j==text.length-1 ? '' : '\n'));    
            }      
        }     
    });
    $('#split-button').removeAttr('disabled');       
});