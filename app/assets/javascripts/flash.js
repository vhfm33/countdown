jQuery.fn.flash = function(className, timeout) {
    this.each(function() {
        var self = $(this);
        self.addClass(className);
        setTimeout(function() {
            self.removeClass(className);
            var className = $('#container-gif').prop('class');
            var indexGf = className.substr(2,1);
            
            console.log('index: ' + parseInt(indexGf) );
            
            switch(parseInt(indexGf)) {
                case 0:
                    $('#container-gif').removeClass('bg0').addClass('bg1');
                    break;
                case 1:
                    $('#container-gif').removeClass('bg1').addClass('bg2');
                    break;
                case 2:
                    $('#container-gif').removeClass('bg2').addClass('bg3');
                    break;
                case 3:
                    $('#container-gif').removeClass('bg3').addClass('bg0');
                    break;
                default:
                    $('#container-gif').attr('class', '').addClass('bg0');
            }
        }, timeout);
    });
};