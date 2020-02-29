function setFontSize() {
    const fullWidth = document.body.clientWidth;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = fullWidth / 20 + 'px'
}
window.onresize = function() {
    setFontSize();
}
setFontSize();