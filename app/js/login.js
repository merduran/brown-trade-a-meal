$(document).ready(() => {
    $('#panel-login').click(() => {
        $('#form-register').css('display', 'none')
        $('#form-login').css('display', 'block')
        $('#panel-login').attr('class', 'panel-active')
        $('#panel-register').attr('class', '')
    })
    $('#panel-register').click(() => {
        $('#form-register').css('display', 'block')
        $('#form-login').css('display', 'none')
        $('#panel-register').attr('class', 'panel-active')
        $('#panel-login').attr('class', '')

    })
})
