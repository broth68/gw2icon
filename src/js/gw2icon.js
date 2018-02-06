(function() {
    "use strict";

    const prefix = 'gw2';
    const imgPath = 'img/gw2icon/';

    function scan() {
        const elems = document.getElementsByClassName(prefix);
        for (let i = 0, l = elems.length ; i < l ; i++) {
            const el = elems[i];
            el.src = `${imgPath}${el.dataset[prefix]}.png`;
        }
    }

    window.addEventListener('load', function() { scan(); });

})();