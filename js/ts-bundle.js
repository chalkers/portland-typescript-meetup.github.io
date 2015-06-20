function fitHeight(target, locator, minWidth) {
    if (minWidth === void 0) { minWidth = 640; }
    var locators = [];
    if (typeof locator === 'string') {
        locators = [locator];
    }
    else {
        locators = locator;
    }
    for (var i = 0; i < locators.length; i++) {
        var el = $(locators[i]), minHeight = $(target).innerHeight(), locatorHeight = el.outerHeight(), winWidth = $(window).innerWidth(), winHeight = $(window).innerHeight();
        if (minHeight < winHeight) {
            minHeight = winHeight;
        }
        if (winWidth >= minWidth) {
            if (locatorHeight <= minHeight) {
                el.css('minHeight', minHeight);
            }
            else {
                el.css('minHeight', '');
                fitHeight(target, locator, minWidth);
            }
        }
        else {
            el.css('minHeight', '');
        }
    }
}
fitHeight(document, ['.navbar', '.sidebar']);
$(window).bind('resize', function () {
    setTimeout(function () {
        fitHeight(document, ['.navbar', '.sidebar']);
    }, 500);
});
$('a').filter(function (i, element) {
    return element['hostname'] && element['hostname'] !== location.hostname;
}).attr("target", "_blank");
//# sourceMappingURL=ts-bundle.js.map