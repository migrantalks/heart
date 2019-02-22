$(function () {
    var $left = $('.left'),
        leftEl = $left[0],
        $code = $('#code'),
        $current = $('#current-style'),
        style = $('#style').html();

    var styles = style.split('}')
        .filter(function (style) {
            return style.trim();
        })
        .map(function (style) {
            return style + '}';
        });

    var styleIdx = 0, charIdx = 0, current = '', str, html;

    function update() {
        if (styleIdx >= styles.length) return;

        str = styles[styleIdx];
        if (charIdx >= str.length) {
            styleIdx++;
            charIdx = 0;
        }
        else {
            current += str.substr(charIdx, 5);
            charIdx += 5;

            html = hljs.highlightAuto(current).value;
            $code.html(html);
            $current.html(current);
            leftEl.scrollTop = leftEl.scrollHeight;
        }
        setTimeout(update, 200);
    }
    update();
});