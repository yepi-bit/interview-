

var width = document.documentElement.clientWidth || document.body.clientWidth
var ratio = width / 375;
var fontSize = 100 * ratio;
document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';