$(document).ready(function () {
    console.log('script loaded');

    const movemax = 100; 
    const movemin = -100; 

    // Mouse position handling
    $('#intro').mousemove(function (event) {
        console.log(event.pageX, event.pageY);

        let cursorX = event.pageX / $(this).width(); // Normalize cursor X

        let settingMove = Math.floor(cursorX * (movemax - movemin)) + movemin; // Scale to -100 to 100

        $('#bigletter').css({
            "--move": settingMove
        });
    });
});