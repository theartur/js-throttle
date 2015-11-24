function throttle(fn, delta) {
    var timeout, last = +new Date;
    return function () {
        var diff = (+new Date) - last, self = this, args = arguments;
        if (diff >= delta) {
            clearTimeout(timeout);
            fn.apply(self, args);
            last = +new Date;
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                fn.apply(self, args);
            }, delta);
        }
    };
}