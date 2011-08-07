var loc = window.location,
    path = loc.protocol + '//' + loc.hostname + ':8002/vogue-client.js',
    script = document.createElement('script')
script.setAttribute('src', path)
document.body.appendChild(script)