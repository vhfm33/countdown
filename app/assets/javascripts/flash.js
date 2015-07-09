jQuery.fn.flash = function(className, timeout) {
    this.each(function() {
        var self = $(this);
        self.addClass(className);
        setTimeout(function() {
            self.removeClass(className);
        }, timeout);
    });
};