$(document).ready(function () {
    console.log('Script loaded');

    const movemin = 0; 
    const movemax = 700;

    $('#intro').mousemove(function (event) {
        // Get the cursor's position relative to the element
        let cursorX = event.pageX - $(this).offset().left; // X position within the element
        let elementWidth = $(this).width();

        // Normalize cursorX to a 0 to 1 scale, clamping values
        let normalizedX = Math.min(Math.max(cursorX / elementWidth, 0), 1);

        // Map normalizedX to the range of movemin to movemax
        let settingMove = Math.floor(normalizedX * (movemax - movemin)) + movemin;

        console.log(`CursorX: ${cursorX}, NormalizedX: ${normalizedX}, SettingMove: ${settingMove}`);

        // Apply the calculated value to the custom CSS property
        $('#bigletter').css({
            "--move": settingMove
        });
    });
});
