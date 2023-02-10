async function getIp(){
    const networkInfo = await fetch('https://ipinfo.io?callback')
        .then(res => res.json())
    let global_ipv4_notification = document.getElementById('global_ipv4_notification');
    global_ipv4_notification.insertAdjacentHTML('beforeend', '<p>You are accessing from "'+networkInfo.ip+'" .</p>');
    }