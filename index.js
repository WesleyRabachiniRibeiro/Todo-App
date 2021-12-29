$('#sun').click(() =>{
     if($('#sun').attr('src') == './images/icon-sun.svg'){
        $('#sun').attr('src', './images/icon-moon.svg')
        $('.bg-header').css('background', 'url(./images/bg-desktop-light.jpg) no-repeat center')
        $('.bg-header').css('background-size', 'cover')
        $('body').css('background-color', 'var(--Light-Grayish-Blue-light-theme)')
        $('.attribution').css('color', 'var(--Dark-Grayish-Blue)')
        $('.forms-container').css('background', 'var(--Very-Light-Gray)')
        $('.txtInput').css('color', 'var(--Very-Dark-Grayish-Blue-light-theme)')
        $('#menu').removeClass('interactive-menu')
        $('#menu').addClass('light-interactive-menu')
        $('.checkmark').addClass('checkmarkLight')
     }else{
        $('#sun').attr('src', './images/icon-sun.svg')
        $('.bg-header').css('background', 'url(./images/bg-desktop-dark.jpg) no-repeat center')
        $('.bg-header').css('background-size', 'cover')
        $('body').css('background-color', 'var(--Very-Dark-Blue)')
        $('.attribution').css('color', 'white')
        $('.forms-container').css('background', 'var(--Very-Dark-Desaturated-Blue)', 'color: var(--Light-Grayish-Blue)!important')
        $('.txtInput').css('color', 'var(--Light-Grayish-Blue)')
        $('#menu').removeClass('light-interactive-menu')
        $('#menu').addClass('interactive-menu')
        $('.checkmark').removeClass('checkmarkLight')
     }
})

