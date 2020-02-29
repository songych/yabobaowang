function setFontSize() {
    let fullWidth = document.body.clientWidth;
    if(fullWidth>1948) {
        fullWidth = 1948;
    }else if(fullWidth<1536) {
        fullWidth = 1536;
    }
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = fullWidth / 20 + 'px'
}
window.onresize = function() {
    setFontSize();
}
setFontSize();