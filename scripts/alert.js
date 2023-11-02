const $div_notification = qs('#div-notification')
const $icon_notification = qs('#icon-notification')
const $close_btn = qs('.close-btn')
const $msg = qs('.msg')
const $green = qs('#green')
const $blue = qs('#blue')
const $yellow = qs('#yellow')

function deleteClass(){
    $div_notification.className = ''
    $div_notification.classList.add('notification')
    $icon_notification.className = ''
}

function removeNotification(){
    $div_notification.classList.add('hide')
    $div_notification.classList.remove('show')
    $div_notification.classList.add('d-none')
}

function addNotification(){
    $div_notification.classList.add('show')
    $div_notification.classList.add('showNotification')
}

function showNotification(text='', type='wait', time=0){
    if (text=='')return
    deleteClass()
    addNotification()
    $msg.innerText = text 
    let color = '', icon = ''
    switch(type){
        case 'success': 
            color = 'notificationGreen'
            icon = 'fa-check'
            break;
        case 'alert': 
            color = 'notificationYellow'
            icon = 'fa-triangle-exclamation'
            break;
        default: 
            color = 'notificationBlue'
            icon = 'fa-spinner'
    }
    $icon_notification.classList.add('fa-solid', icon)
    $div_notification.classList.add(color)
    if (time>0){
        setTimeout(function(){
            removeNotification()
        },time)
    }
}

$div_notification.classList.add('d-none')


$close_btn.onclick = () => removeNotification()