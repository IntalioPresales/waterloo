$(document).ready(function () {

    olderColor = $.session.get("OldColor");
    OldSecondColor = $.session.get("OldSecondColor");
    SecondFontColor = $.session.get("SecondFontColor");
    SecondFillcolor = $.session.get("SecondFillcolor");
    BeforeAfterColor = $.session.get("BeforeAfterColor");
    OldBorderColor = $.session.get("OldBorderColor");
    // $('.paginate_button.current').addClass(OldSecondColor);

    if (OldSecondColor != null) {
        $('*').each(function () {
            if ($(this).hasClass('changeable_s')) {
                $(this).removeClass('second_color');
                $(this).addClass(OldSecondColor);
            }
        });
    }
    if (olderColor != null) {
        $('*').each(function () {
            if ($(this).hasClass('changeable')) {
                $(this).removeClass('main_color');
                $(this).addClass(olderColor);
            }
        });
    }
    if (SecondFontColor != null) {
        $('*').each(function () {
            if ($(this).hasClass('changeable_s_f')) {
                $(this).removeClass('second_font_color');
                $(this).addClass(SecondFontColor);
            }
        });
    }

    if (SecondFillcolor != null) {
        $('*').each(function () {
            if ($(this).hasClass('changeable_fill_s')) {
                $(this).removeClass('second_fill_color');
                $(this).addClass(SecondFillcolor);
            }
        });
    }

    if (OldBorderColor != null) {
        $('*').each(function () {
            if ($(this).hasClass('changeable_bs_s')) {
                $(this).removeClass('border_color');
                $(this).addClass(OldBorderColor);
            }
        });
    }

    $('#li_follow_up').click(function () {
        $('#maximize_minimize').load('views/create_followup.html');
    })


    if (BeforeAfterColor != null) {
        $('.li_hover_tab').addClass(BeforeAfterColor);
    } else {
        $('.li_hover_tab').addClass('blue_hover');
    }

    $('.li_hover_tab').click(function (e) {
        e.preventDefault();
        var page = $(this).data('url');
        $('.li_hover_tab ').removeClass('active_li');
        $(this).addClass('active_li');
        //$('#loading_data').load('views/msg-details.html');
    });


    $('.dropdown-el').click(function (e) {

        var countdrop = 0;
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');

        switch ($(e.target).attr('resourcekey')) {
            case 'resources_MyTasks':
                if (countdrop != 0) {
                    myTasksPlus();
                    GenericMailListForm.RebuildGrid("PreviewCorrespondence()");
                }
                break;
            case 'resources_MyInfo':
                myInfosPlus();
                GenericMailListForm.RebuildGrid("PreviewCorrespondence()");
                break;
            case 'resources_MyFollowUp':
                myFollowupPlus();
                break;
        }

        $('#' + $(e.target).attr('for')).prop('checked', true);
        countdrop++;
    });
    $(document).click(function () {
        $('.dropdown-el').removeClass('expanded');
    });

    $('.dropdown_actions').hover(function (e) {
        e.preventDefault();
        var action_id = $(this).parent().data('id');
        // $('.dropdown_actions').show();
    }, function (e) {
        e.preventDefault();
        var action_id = $(this).parent().data('id');
        $('#datatable_tr_' + action_id).css('position', 'relative')
        $('.dropdown_actions').hide();
    });


    //$('#dropdown_action_inside').hover(function () {

    //}, function () {
    //    $(this).fadeOut();
    //})

    $('#delete_btn').click(function () {
        $('input:checked').each(function () {
            var input_id = $(this).data('id');
            $('#datatable_tr_' + input_id).fadeOut('slow');
        });
    });


    $('#complete').click(function () {
        $('input.check:checked').each(function () {
            var input_id = $(this).data('id');
            var pic = document.getElementById('complete' + input_id);
            pic.src = "images/svg/complete-green.svg";
            $('#complete' + input_id).addClass('new_img_width');
            var class_exist = document.getElementsByClassName('action_msg');
            if (class_exist.length > 0) {
                $('#action_msg' + input_id).addClass('new_margin_right');
            }
        });
    });

    //var select_all = 0
    //$('#selectall').click(function () {
    //    if (select_all == 0) {
    //        $('input.check').each(function () {
    //            this.setAttribute("checked", "checked");
    //            this.checked = true;
    //            select_all = 1;
    //        })
    //    } else {
    //        $('input.check').each(function () {
    //            this.setAttribute("checked", "");
    //            this.checked = false;
    //        })
    //        select_all = 0;
    //    }
    //});

    $('.li_more_action').click(function (e) {
        e.preventDefault();
        var action_id = $(this).data('id');
        $('#datatable_tr_' + action_id).css('position', 'inherit')
        $('.dropdown_actions').hide();
        $('#dropdown_actions' + action_id).show();
    });

    $('.li_more_action_msg').click(function (e) {
        e.preventDefault();
        var action_id = $(this).data('id');
        $('.dropdown_actions').hide();
        $('#datatable_tr_' + action_id).css('position', 'inherit');
        $('#dropdown_actions' + action_id).show();
    });

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //$('#datatable tbody tr').dblclick(function () {
    //    topFunction();
    //    $('#inside_body_content').fadeOut('slow');
    //    $('#svg_loader').fadeIn('slow');
    //    setTimeout(function () {
    //        $('#body_content').load('views/details.html');
    //    }, 2000)
    //});



    $('#Top_loading_bar').animate({
        width: '100%'
    }, 5000);
});
function SeeAllMetaData() {
    $('.meta_data_hidden').show();
    $('#see_all2').hide();
    $('.simplebar-content-wrapper').css('overflow', 'hidden scroll');
}
function SeeLessMetaData() {
    $('.meta_data_hidden').hide();
    $('#see_all2').show();
}
function ShowAddNote() {
    $('#show_hide_addnote').fadeIn();
    $('#add_note').html(resources_Add);
    $('#add_new_note').hide();

}
function AddNote() {
    $('#show_hide_addnote').hide();
    $('#add_new_note').fadeIn();
}
function EditNote() {
    $('#show_hide_addnote').fadeIn();
    var note_text = $('.my_note_text').data('text');
    $('.textarea').html(note_text);
    $('#add_note').html('Edit');
    $('#add_new_note').hide();
}

function LoadView(url) {
    $('#reply_Div').show();
    $('#preview').hide();
    $('.li_hover_tab').removeClass('active_li');
    $('#reply_Div').attr("url", url);
    if (url.indexOf("?") > -1) {
        url = url.substring(0, url.indexOf("?"));
    }
    $('#reply_Div').load('views/' + url + '');
}
$(document).on('click', '.paginate_button', function () {

    OldSecondColor = $.session.get("OldSecondColor");
    SecondFontColor = $.session.get("SecondFontColor");
    // $('.paginate_button.current').addClass(OldSecondColor);

    if (OldSecondColor != null) {

        $('*').each(function () {
            if ($(this).hasClass('changeable_s')) {
                $(this).removeClass('second_color');
                $(this).addClass(OldSecondColor);
            }
            if ($(this).hasClass('changeable_s_f')) {
                $(this).removeClass('second_font_color');
                $(this).addClass(SecondFontColor);
            }
        });

    }



    $('.li_more_action').click(function (e) {
        e.preventDefault();
        var action_id = $(this).data('id');
        $('#datatable_tr_' + action_id).css('position', 'inherit')
        $('.dropdown_actions').hide();
        $('#dropdown_actions' + action_id).show();
    });

    $('.dropdown_actions').hover(function (e) {
        e.preventDefault();
        var action_id = $(this).parent().data('id');

        // $('.dropdown_actions').show();
    }, function (e) {
        e.preventDefault();
        var action_id = $(this).parent().data('id');
        $('#datatable_tr_' + action_id).css('position', 'relative')
        $('.dropdown_actions').hide();
    });

    //$('#datatable tbody tr').dblclick(function () {
    //    $('#inside_body_content').fadeOut('slow');
    //    $('#svg_loader').fadeIn('slow');
    //    setTimeout(function () {
    //        $('#body_content').load('views/details.html');
    //    }, 2000)
    //});



});

$('#config-text').keyup(function () {
    eval($(this).val());
});

$('.configurator input, .configurator select').change(function () {
    updateConfig();
});

$('.demo i').click(function () {
    $(this).parent().find('input').click();
});

updateConfig();

function updateConfig() {
    var options = {};
    //                                    if ($('#singleDatePicker').is(':checked'))
    options.singleDatePicker = false;

    //                                    if ($('#showDropdowns').is(':checked'))
    options.showDropdowns = false;

    //                                    if ($('#showWeekNumbers').is(':checked'))
    options.showWeekNumbers = true;

    //                                    if ($('#showISOWeekNumbers').is(':checked'))
    options.showISOWeekNumbers = true;

    //                                    if ($('#timePicker').is(':checked'))
    options.timePicker = true;

    //                                    if ($('#timePicker24Hour').is(':checked'))
    options.timePicker24Hour = true;

    //                                    if ($('#timePickerIncrement').val().length && $('#timePickerIncrement').val() != 1)
    //                                    options.timePickerIncrement = parseInt($('#timePickerIncrement').val(), 60);

    //                                    if ($('#timePickerSeconds').is(':checked'))
    options.timePickerSeconds = true;

    //                                    if ($('#autoApply').is(':checked'))
    options.autoApply = true;

    //                                    if ($('#dateLimit').is(':checked'))
    options.dateLimit = { days: 90 };

    //                                    if ($('#ranges').is(':checked')) {
    options.ranges = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };
    //                                    }

    //                                    if ($('#locale').is(':checked')) {
    //                                    $('#rtl-wrap').show();
    options.locale = {
        direction: $('#rtl').is(':checked') ? 'rtl' : 'ltr',
        format: 'MM/DD/YYYY HH:mm',
        separator: ' - ',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        fromLabel: 'From',
        toLabel: 'To',
        customRangeLabel: 'Custom',
        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        firstDay: 1
    };
    //                                    } else {
    //                                        $('#rtl-wrap').hide();
    //                                    }

    //                                    if (!$('#linkedCalendars').is(':checked'))
    options.linkedCalendars = false;

    //                                    if (!$('#autoUpdateInput').is(':checked'))
    options.autoUpdateInput = true;

    //                                    if (!$('#showCustomRangeLabel').is(':checked'))
    options.showCustomRangeLabel = true;

    //                                    if ($('#alwaysShowCalendars').is(':checked'))
    options.alwaysShowCalendars = false;

    //          if ($('#parentEl').val().length)
    //            options.parentEl = $('#parentEl').val();
    //
    //          if ($('#startDate').val().length) 
    //            options.startDate = $('#startDate').val();

    //          if ($('#endDate').val().length)
    //            options.endDate = $('#endDate').val();
    //          
    //          if ($('#minDate').val().length)
    //            options.minDate = $('#minDate').val();

    //          if ($('#maxDate').val().length)
    //            options.maxDate = $('#maxDate').val();

    //                                    if ($('#opens').val().length && $('#opens').val() != 'right')
    //                                        options.opens = $('#opens').val();

    //                                    if ($('#drops').val().length && $('#drops').val() != 'down')
    //                                        options.drops = $('#drops').val();





    //$('#config-text').val("$('#demo').daterangepicker(" + JSON.stringify(options, null, '    ') + ", function(start, end, label) {\n  console.log(\"New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')\");\n});");


    //$('#config-demo').daterangepicker(options, function (start, end, label) {
    //    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    //}).click();

    //                                    document.getElementById(".daterangepicker").hide();
    //                                    ltr  opensright
    //                                    $('.daterangepicker').removeClass('show-calendar');
    //                                    $('.daterangepicker').removeClass('show-ranges');
    //                                    $('.daterangepicker').removeClass('opensright');
    $('.daterangepicker').hide();
}

var calendar_i = 0;
$("#img_calendar").on("click", function () {
    if (calendar_i == 0) {
        $('.inside_calendar').stop().animate({
            width: '250px'
        }, 10)
        setTimeout(function () {
            $('#config-demo').fadeIn('slow');
        }, 1000)

        calendar_i = 1;
    } else {
        $('#config-demo').stop().fadeOut();
        setTimeout(function () {
            $('.inside_calendar').animate({
                width: '45px'
            }, 10)
        }, 500)
        calendar_i = 0;
    }
});