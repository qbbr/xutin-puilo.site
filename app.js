(function() {
    var HOLY_TEXT_MOTHERS_OF_ZOOM = '%D0%A5%D0%A3%D0%A2%D0%98%D0%9D%20%D0%9F%D0%A3%D0%99%D0%9B%D0%9E';
    var ALERT_TEXT_OD1N_PATRH_KIRILL_LOVE_IT_LOLOO = '%D0%93%D1%80%D0%B0%D0%B1%D1%8C-%D0%92%D0%BE%D1%80%D1%83%D0%B9-%D0%A3%D0%B1%D0%B8%D0%B2%D0%B0%D0%B9%20(%D0%BD%D0%B5%20%D0%B7%D0%B0%D0%B1%D1%8B%D0%B2%D0%B0%D0%B9%20%D0%BF%D1%80%D0%BE%20%D0%B3%D1%83%D1%81%D0%B5%D0%B9)%20...';

    // odin
    function textEffect(elm, animationName) {
        var text = elm.innerHTML,
            chars = text.length,
            newText = '',
            animation = animationName,
            char,
            i;

        for (i = 0; i < chars; i += 1) {
            newText += '<i>' + text.charAt(i) + '</i>';
        }

        elm.innerHTML = newText;

        var wrappedChars = document.getElementsByTagName('i'),
            wrappedCharsLen = wrappedChars.length,
            j = 0;

        function addEffect() {
            setTimeout(function () {
                wrappedChars[j].className = animation;
                j += 1;
                if (j < wrappedCharsLen) {
                    addEffect();
                }
            }, 200)
        }

        addEffect();
    };
    var trueHoleText = document.getElementsByTagName('strong')[0];
    textEffect(trueHoleText, 'fly-in-out');
    trueHoleText.onclick = function() {
        var img = document.createElement('img');
        img.src = '/ziga_by_puilo.png';
        img.className = 'ziga-by-puilo';
        document.body.appendChild(img);
        trueHoleText.onclick = null;
    };

    // dva
    function printConsoleText(text) {
        console.log(' %c!!! %c' + decodeURI(text) + ' %c!!!', 'font-size: 3em; color: #550000;', 'font-size: 3em; color: #990000;', 'font-size: 3em; color: #330000;');
    };
    var xuevoeFace = document.getElementsByTagName('img')[0];
    xuevoeFace.onmouseenter = function() {
        printConsoleText(HOLY_TEXT_MOTHERS_OF_ZOOM + ' x2');
        this.src = '/android-chrome-512x512.png';
    };
    xuevoeFace.onmouseleave = function() {
        printConsoleText(HOLY_TEXT_MOTHERS_OF_ZOOM + ' x1');
        this.src = '/android-chrome-192x192.png';
    };
    xuevoeFace.onclick = function() {
        alert(decodeURI(ALERT_TEXT_OD1N_PATRH_KIRILL_LOVE_IT_LOLOO));
    };
})();
