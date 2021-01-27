var opts = {
    lines: 9, // The number of lines to draw
    length: 0, // The length of each line
    width: 10, // The line thickness
    radius: 16, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 62, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    scale: 1.35,
    color: '#808080', // #rgb or #rrggbb or array of colors
    speed: 1.5, // Rounds per second
    trail: 27, // Afterglow percentage
    shadow: true, // Whether to render a shadow
    hwaccel: true, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: '50%', // Top position relative to parent
    left: '50%' // Left position relative to parent
};

function SpinMask(stop) {

    var olay = $('div.myOverlay');

    var insideolay = $('div.insideOverlay');


    $.fn.spin = function () {
        this.each(function () {
            var $this = $(this),
                data = $this.data();

            //if (data.spinner) {
            //    data.spinner.stop();
            //    olay.fadeOut();
            //    delete data.spinner;
            //}
            if (!stop) {
                if (opts !== false) {
                    //olay.css('background-color','rgba(00, 00, 00, 0.5)');
                    $(olay).fadeIn();
                    // olay['fadeIn'](100);
                    //$this.css('color')
                    //data.spinner = new Spinner($.extend({ color: $this.css('color') }, opts)).spin(this);
                }
            }
        });
        return this;
    };

    $(function () {
        var params = {};
        var hash = /^#\?(.*)/.exec(location.hash);
        if (hash) {
            $('#share').prop('checked', true);
            $.each(hash[1].split(/&/), function (i, pair) {
                var kv = pair.split(/=/);
                params[kv[0]] = kv[kv.length - 1];
            });
        }
        $('#opts input[min], #opts select').each(function () {
            var val = params[this.name];
            if (val !== undefined) this.value = val;
            this.onchange = update;
        });
        $('#opts input:checkbox').each(function () {
            this.checked = !!params[this.name];
            this.onclick = update;
        });
        $('#share').click(function () {
            window.location.replace(this.checked ? '#?' + $('form').serialize() : '#!');
        });
        update();
    });
}

function update() {
    var opts = {};
    $('#opts input[min], #opts select').each(function () {
        $('#opt-' + this.name).text(opts[this.name] = parseFloat(this.value));
    });
    $('#opts input:checkbox').each(function () {
        opts[this.name] = this.checked;
        $('#opt-' + this.name).text(this.checked);
    });
    $('#preview').spin(opts);
    if ($('#share').is(':checked')) {
        window.location.replace('#?' + $('form').serialize());
    }
}