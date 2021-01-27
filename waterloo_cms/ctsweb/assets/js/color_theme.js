////////////////////////// Get Color  /////////////////////////
$(document).ready(function () {
    olderColor = $.session.get("OldColor");
    OldSecondColor = $.session.get("OldSecondColor");
    SecondFontColor = $.session.get("SecondFontColor");
    SecondFillcolor = $.session.get("SecondFillcolor");
    BeforeAfterColor = $.session.get("BeforeAfterColor");
    OldBorderColor = $.session.get("OldBorderColor");
    // $('.paginate_button.current').addClass(OldSecondColor);
    


    if (BeforeAfterColor != null) {
        $('#profile_img, .report_div, .radio.checkmark, .form-group, .form-group-LetterPopup , .form-group-meta, .form-group-description  , #wizard-progress .step-indicator li .step, #wizard-progress .step-indicator li .caption , #wizard-progress .step-indicator li .step svg, #wizard-progress .step-indicator li.complete, #wizard-progress .step-indicator li.complete .step svg').addClass(BeforeAfterColor);
    }


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
        $('*').each(function (){
            if ($(this).hasClass('changeable_bs_s')) {
                $(this).removeClass('border_color');
                $(this).addClass(OldBorderColor);
            }
        });
    }

    
   


});