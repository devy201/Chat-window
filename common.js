$(function(){

    $('.top-bar').addClass('blinking');
    $('#sending-message-text').autosize({'callback': function(){
        console.log('fire');
    }});
})