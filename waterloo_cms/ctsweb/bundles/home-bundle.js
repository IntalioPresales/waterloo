var ScreenWidth = $(window).width();
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/////////////////////////// Draggable Popup ////////////////////////////

$(".draggable").draggable({});

///////////////////////////  responsive Search ////////////////////////////

$(".arrow_search_left").click(function(){
    $('#search_corres_div').addClass('fade_search');
})
$("#search_icon_div_resp").click(function () {
    $('#search_corres_div').removeClass('fade_search');
})


////////////////////////////// Create Correspondence ///////////////////
$('#create_corres').click(function () {
    $('#inside_body_content').fadeOut('slow');
    $('#svg_loader').fadeIn('slow');
    setTimeout(function () {
        topFunction();
        $('#body_content').load('views/createCorrespondance.html');
    }, 2000)
});

///////////////////// Color Palette ////////////////////////////

//var j_color = 0;
//$('#color_icon').click(function() {
//    if (j_color == 0) {
//        $('#color_palette').animate({
//            bottom: 0
//        })
//        j_color = 1;
//    } else {
//        $('#color_palette').animate({
//            bottom: '-255px'
//        })
//        j_color = 0;
//    }
//});

//$('#cancel').click(function () {
//    j_color = 0;
//    $('#color_palette').animate({
//        bottom: '-255px'
//    })
//});



olderColor = $.session.get("OldColor");
OldSecondColor = $.session.get("OldSecondColor");
OldBorderSecondColor = $.session.get("OldBorderSecondColor");
OldBorderLeftSecondColor = $.session.get("OldBorderLeftSecondColor");
OldBorderColor = $.session.get("OldBorderColor");
BeforeAfterColor = $.session.get("BeforeAfterColor");
MainFillcolor = $.session.get("MainFillcolor");
SecondFillcolor = $.session.get("SecondFillcolor");
SecondFontColor = $.session.get("SecondFontColor");

$('.changeable').addClass(olderColor); // (.changeable) is to change the background of main color //
$('.changeable_s').addClass(OldSecondColor);// (.changeable_s) is to change the background of second color //
$('.changeable_b_s').addClass(OldBorderSecondColor);// (.changeable_b_s) is to set the second color for border top //
$('.changeable_b_l_s').addClass(OldBorderLeftSecondColor);// (.changeable_b_l_s) is to set the second color for border left //
$('.changeable_bs_s').addClass(OldBorderColor);// (.changeable_bs_s) is to set the second color for borders //
$('#profile_img, .report_div').addClass(BeforeAfterColor);// for before and after color //
$('.changeable_fill').addClass(MainFillcolor);// for svg fill color //
$('.changeable_fill_s').addClass(SecondFillcolor);// for svg fill color //
$('.changeable_s_f').addClass(SecondFontColor);// for font color //

$('#navigation a, #search a').hover(function (e) {
    e.preventDefault;
    var hover_i = $(this).data('hover');
    $('#nav_hover' + hover_i).animate({
        width: '85%',
        height: '40px',
        marginTop: '-8px'
    }, 50);
}, function (e) {
    e.preventDefault;
    var hover_i = $(this).data('hover');
    $('#nav_hover' + hover_i).animate({
        width: '0',
        height: '0',
        marginTop: '10px'
    }, 50);
});






/////////////////////////// menu //////////////////////////
//var screen_width = $(window).width();
//if (screen_width <= 768) {
//    alert('ipad');
//} else {
//    alert('big screen');
//}


$('#menu_icon_1').click(function () {
    $('#main_menu').addClass('resp_open_menu');
});
$('.resp_close_icon').click(function () {
    $('#main_menu').removeClass('resp_open_menu');
});













var i = 0;
$('#menu_icon').click(function () {
    if (i == 0) {
        animateHideOtherInbox(0);
        $('.line').animate({
            width: '100%'
        }, 1);


        if (ScreenWidth > 1201) {
            $('#main_menu').animate({
                width: '3%'
            })
            $('#main_body').animate({
                width: '97%'
            })

        } else {
            $('#main_menu').animate({
                width: '3.5%'
            })
            $('#main_body').animate({
                width: '96.5%'
            })


            // alert(ScreenWidth)

        }


        var offsetWidth = document.getElementById('color_icon').offsetWidth;
        var offsetHeight = document.getElementById('color_icon').offsetHeight;
        var NewMargin = offsetHeight / 4;
        $('#color_icon').animate({
            width: offsetWidth / 2,
            height: offsetHeight / 2,
            marginTop: '-' + NewMargin + 'px'
        }, 100)

        $('.color').animate({
            width: '15px',
            height: '15px',


        }, 100)
        $('.color').css({
            marginBottom: '5px',

        })
        $('.color:nth-child(1)').css({
            float: 'none',
            margin: '0 auto',
            marginBottom: '5px'
        })
        $('.color:nth-child(2)').css({
            float: 'none',
            margin: '0 auto',
            marginBottom: '5px',
        })
        $('.color:nth-child(3)').css({
            marginTop: '0px',
        })
        $('#colors_display section').css({
            marginTop: '0px'
        })
        $('.cancel_reset').hide();
        $('#profile_photo').animate({
            width: '33px',
            height: '33px'
        }, 100)
        $('.spin').animate({
            width: '25px',
            height: '25px'
        }, 100)
        if (loggedInUser.Token.Language.toLowerCase() == 'ar') {
            $('#profile_img').animate({
                top: '4px',
                right: '4px',
            }, 100)
        } else {
            $('#profile_img').animate({
                top: '4px',
                left: '4px',
            }, 100)
        }
        $('#profile').animate({
            minHeight: '76px'
        }, 500)

        $('#profile_name, .nav_hide, #search_menu, #inbox_menu').hide();
        $('#search a').animate({
            width: '33px',
            height: '33px',
            padding: '0px 0px',
            textIndent: '0',
        }, 100);
        $('#navigation a, .delegationNav a').animate({
            width: '33px',
            height: '33px',
            padding: '0px 0px'
        }, 100)

        $('.nav_img').animate({
            width: '18px',
            float: 'none',
            marginTop: '0',
            padding: '7px'
        }, 100)

        $('#navigation a, #search a, .delegationNav a').unbind('mouseenter mouseleave')
        $('#navigation a, #search a, .delegationNav a').hover(function (e) {
            e.preventDefault;
            var hover_i = $(this).data('hover');
            $('#nav_hover' + hover_i).animate({
                width: '33px',
                height: '33px',
                marginTop: '0px'
            }, 0);
        }, function (e) {
            e.preventDefault;
            var hover_i = $(this).data('hover');
            $('#nav_hover' + hover_i).animate({
                width: '0',
                height: '0',
                marginTop: '10px'
            }, 0);
        });
        $('#body_head').addClass('body_head_open')

        i = 1;



    } else {

        $('.line:nth-child(2)').animate({
            width: '80%'
        }, 1);
        $('.line:nth-child(3)').animate({
            width: '50%'
        }, 1);
        $('#main_menu').animate({
            width: '13.5%'
        })
        $('#main_body').animate({
            width: '86.5%'
        })
        var offsetWidth = document.getElementById('color_icon').offsetWidth;
        var offsetHeight = document.getElementById('color_icon').offsetHeight;
        var NewMargin = offsetHeight;
        $('#color_icon').stop().animate({
            width: offsetWidth * 2,
            height: offsetHeight * 2,
            marginTop: '-' + NewMargin + 'px'
        }, 100)

        $('.color').animate({
            width: '35px',
            height: '35px',
        }, 100)

        $('#colors_display section').css({
            marginTop: '25px'
        })
        $('.color').css({
            marginBottom: '0px',
        })
        $('#color_icon img').css({
            width: '82%',
            height: ''
        })

        $('.color:nth-child(1)').css({
            float: 'left',
            marginBottom: '0px'
        })
        $('.color:nth-child(2)').css({
            float: 'right',
            marginBottom: '0px',
        })
        $('.color:nth-child(3)').css({
            marginTop: '10px',
        })
        $('.cancel_reset').show();

        $('#profile_photo').animate({
            width: '120px',
            height: '120px'
        }, 100)
        $('.spin').animate({
            width: '100px',
            height: '100px'
        }, 100)

        if (loggedInUser.Token.Language.toLowerCase() == 'ar') {
            $('#profile_img').animate({
                top: '10px',
                right: '10px',
            }, 100)
        } else {
            $('#profile_img').animate({
                top: '10px',
                left: '10px',
            }, 100)
        }
        $('#profile').animate({
            minHeight: '200px'
        }, 100)

        $('#profile_name, .nav_hide ,#search_menu,#inbox_menu').show();

        $('#navigation a').animate({
            width: '85%',
            height: '40px',
            padding: '8px 20px'
        }, 100)

        $('.delegationNav a').animate({
            width: '85%',
            height: '40px',
            padding: '8px 20px'
        }, 100)

        $('#search a').animate({
            width: '100%',
            height: '40px',
            padding: '8px 0px',
            textIndent: '20',
        }, 100)

        if (ScreenWidth > 1200) {
            $('.nav_img').animate({
                width: '24px',
                float: 'left',
                marginTop: '2px',
                padding: '0px'
            }, 100)
        } else {
            $('.nav_img').animate({
                width: '20px',
                float: 'left',
                marginTop: '2px',
                padding: '0px'
            }, 100)
        }

        $('#navigation a, #search a, .delegationNav a').unbind('mouseenter mouseleave')
        $('#navigation a, #search a, .delegationNav a').hover(function (e) {
            e.preventDefault;
            var hover_i = $(this).data('hover');
            $('#nav_hover' + hover_i).animate({
                width: '85%',
                height: '40px',
                marginTop: '-8px'
            }, 50);
        }, function (e) {
            e.preventDefault;
            var hover_i = $(this).data('hover');
            $('#nav_hover' + hover_i).animate({
                width: '0',
                height: '0',
                marginTop: '10px'
            }, 50);
        });

        $('#body_head').removeClass('body_head_open')
        i = 0;
    }

});
$('#search,#navigation').click(function () {
    if (i == 1) {
        $('#menu_icon').trigger('click');
    }
});
/////////////////////////////  Profile  ////////////////////////////
//var i_profile = 0;
//$('#profile_menu').click(function () {
//    $('#search_menu').animate({
//        minHeight: '0px'
//    }, 200);
//    $('#search_ul_menu li').hide();
//    i_search = 0;
//    $('.menu_arrow').removeClass('active');
//    if (i_profile == 0) {
//        $('#profile_open').animate({
//            minHeight: '175px',
//            marginBottom: '20px'
//        }, 200);
//        $('#profile_ul_menu li').fadeIn('slow');
//        i_profile = 1;
//    } else {
//        $('#profile_open').animate({
//            minHeight: '0px',
//            marginBottom: '0px'
//        }, 200);
//        $('#profile_ul_menu li').hide();
//        i_profile = 0;
//    }
//});

/////////////////////////////  Search Inside Menu ////////////////////////////
//var i_search = 0;
//$('#menu_arrow').click(function () {
//    $('#profile_open').animate({
//        minHeight: '0px'
//    }, 200);
//    $('#profile_ul_menu li').hide();
//    i_profile = 0;
//    $('.pro_arrow').removeClass('active');

//    if (i_search == 0) {
//        $('#search_menu').animate({
//            minHeight: '120px'
//        }, 200);
//        $('#search_ul_menu li').fadeIn('slow');
//        i_search = 1;
//    } else {

//        $('#search_menu').animate({
//            minHeight: '0px'
//        }, 200);
//        $('#search_ul_menu li').hide();
//        i_search = 0;
//    }
//})

/////////////////////////// Create correspondence button  ////////////////////////////

$('#create_corres').hover(function () {

    $('#create_corr_color').stop().animate({
        width: '240px'
    })
}, function () {
    $('#create_corr_color').stop().animate({
        width: '0px'
    })
});






/////////////////////////// Autocomplete Search  ////////////////////////////

$("#autocomplete").autocomplete({
    minLength: 1,
    source: function (request, response) {

        if (request.term.trim().length > 2) {
            CallWebMethod(document.getElementById("ActionsUrlHidden").value + "GetAvailableSearchKeywords", JSON.stringify({
                term: request.term,
                language: loggedInUser.Token.Language.toLowerCase()
            }), function (retVal) {
                response(retVal.GetAvailableSearchKeywordsResult);
            }, function (fail) {
            });
        }
    }
}).keyup(function (e) {
    if (e.which === 13) {
        $(".ui-z .ui-menu-item").hide();
    }
}).autocomplete("instance")._renderItem = function (ul, item) {
    return $("<li>")
        .append('<a>' + (item.value) + '</a>')
        .appendTo(ul);
};
//// Initialize ajax autocomplete:
//var aCountries = [],
//    cache = {};
//$('#autocomplete').autocomplete({

//    // serviceUrl: '/autosuggest/service/url',
//    delay: 500,
//    minLength: 3,
//    create: function(event, ui) {
//        $.ajax({
//            url: "https://codepen.io/blackjacques/pen/gvJVYo.html",
//            dataType: "text",
//            success: function(data) {
//                aCountries = data.split('\n').map(function(currentValue, index, arr) {
//                    var labelValuePair = currentValue.split(':');
//                    return {
//                        label: labelValuePair[1],
//                        value: labelValuePair[0]
//                    };
//                });
//                console.log('countries');
//            }
//        });
//    },
//    source: function(request, response) {
//        var term = request.term.toLowerCase();
//        if (!(term in cache)) {
//            console.log('Storing in cache...');
//            var matcher = new RegExp("\\b" + $.ui.autocomplete.escapeRegex(term), "i");
//            cache[term] = aCountries.filter(function(country) {
//                return matcher.test(country.label);
//            });
//            console.log(cache[term]);
//        }
//        response(cache[term]);
//    },
//    select: function(event, ui) {
//        event.preventDefault();
//        $(event.target).val(ui.item.label);
//        // $('#selection-ajax').html( 'You selected: ' 
//        //                          + ui.item.value + ', ' + ui.item.label);// $('#selection-ajax').html( 'You selected: ' 
//        //                          + ui.item.value + ', ' + ui.item.label);
//    },
//    focus: function(event, ui) {
//        event.preventDefault();
//        $(event.target).val(ui.item.label);
//    }
//}).on('keyup', function(event) {
//    if ($(event.target).val().length == 0) $('#selection-ajax').html('');
//}).data('ui-autocomplete')._renderItem = function(ul, item) {
//    //thanks to Salman Arshad  
//    //http://salman-w.blogspot.ca/2013/12/jquery-ui-autocomplete-examples.html#example-4
//    var $div = $("<div></div>").text(item.label),
//        searchText = $.trim(this.term).toLowerCase(),
//        currentNode = $div.get(0).firstChild,
//        matchIndex, newTextNode, newSpanNode;
//    while ((matchIndex = currentNode.data.toLowerCase().indexOf(searchText)) >= 0) {
//        newTextNode = currentNode.splitText(matchIndex);
//        currentNode = newTextNode.splitText(searchText.length);
//        newSpanNode = document.createElement("span");
//        newSpanNode.className = "highlight";
//        currentNode.parentNode.insertBefore(newSpanNode, currentNode);
//        newSpanNode.appendChild(newTextNode);
//    }

//    return $("<li></li>").append($div).appendTo(ul);
//};

$('.ui-menu').hover(function () {
    $(this).show();
}, function () {
    $(this).hide();
});

$('#autocomplete').focusin(function () {
    $('#search_corres').removeClass('tab_border_left')
    $('#search_corres').removeClass('search_corres')
    $('#search_corres').addClass('open_search_corres')
    // var SearchWidth = document.getElementById('search_corres').offsetWidth;
    // var NewSearchWidth = SearchWidth - 100
    // $(this).animate({
    //     width: NewSearchWidth+'px'
    // },100)
    $('#autocomplete').addClass('open_autocomplete')
    //$('.advanced_span').show();
    //$('#search_icon_div').hide();
    $('#search_icon_div').width = 0;
});



$('#autocomplete').focusout(function (e) {
    e.preventDefault();
    setTimeout(function () {
        $('#autocomplete').removeClass('open_autocomplete');
        $('#search_corres').removeClass('open_search_corres');
        $('#search_corres').addClass('search_corres');
        $('#search_corres').addClass('tab_border_left');

        //$('.advanced_span').hide();
        //$('#search_icon_div').show();
        $('#search_icon_div').width = 50;


    }, 100);

   
   

});

/////////////////////////// Notifications  ////////////////////////////
var notification_i = 0;
$('#notification_icon').click(function () {
    if (notification_i == 0) {

        if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            $('#notifications').stop().animate({
                left: '0px'
            });
        } else {
            $('#notifications').stop().animate({
                right: '0px'
            });
        }
        $('#notification_nbr').stop().fadeOut();
        notification_i = 1;
    } else {
        closeNotification()
    }
})

function closeNotification() {
    
    if (loggedInUser.Token.Language.toLowerCase() == "ar") {
        
        $('#notifications').stop().animate({
            left: '-400px'
        });
    } else {
        $('#notifications').stop().animate({
            right: '-400px'
        });
    }
    $('#notification_nbr').stop().fadeIn('slow');
    notification_i = 0;
}

$('.img_notification').click(function (e) {
    e.preventDefault;
    var id = $(this).data('id');
    $('#li_notification' + id).animate({
        marginLeft: '350px'
    }, 100)
    $('#li_notification' + id).fadeOut('slow');
    var howMany = $('#notifications ul li:visible').length - 1;
    // alert(howMany);

    $('.notification_number').html(howMany);

})

$('.sound').click(function () {
    $(this).toggleClass('sound-mute');
});


/////////////////////////// Table Tabs  ////////////////////////////

$('.ch_tabs, .ch_tabs1').hover(function (e) {
    e.preventDefault;
    var id = $(this).data('id')
    $('#tab_line' + id).animate({
        width: '100%'
    }, 100)

}, function (e) {
    e.preventDefault;
    var id = $(this).data('id')
    $('#tab_line' + id).animate({
        width: '0%'
    }, 100)
})
var tab_i = 0;
$('.ch_tabs').click(function (e) {
    e.preventDefault;
    var id = $(this).data('id')
    $('.active_tab').removeClass('active_on')
    $('#tab_line_active' + id).addClass('active_on')

    if (tab_i == 0 && id == 2) {
        if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            $('#inside_table_content_holder').animate({
                margin: '0 -100% 0 0',
            }, 200);
        } else {
            $('#inside_table_content_holder').animate({
                marginLeft: '-100%',
            }, 200);
        }

        tab_i = 1;
        $('#taskCount').removeClass($.session.get("SecondFontColor")+' changeable_s_f');
        $('#myInfosCount').addClass($.session.get("SecondFontColor")+' changeable_s_f');
        $('#tab_line_span1').removeClass($.session.get("SecondFontColor")+' changeable_s_f');
        $('#tab_line_span2').addClass($.session.get("SecondFontColor")+' changeable_s_f');

        $('#tasks').hide();
        $('#Infos').show();
        $('.plus_more').removeAttr('onClick');
        $('.plus_more').attr('onClick', 'myInfosPlus()');
        //$('.show_more').removeAttr('onClick');
        //$('.show_more').attr('onClick', 'LoadMoreMyInfos()');
        $('#statusFilter').removeAttr('onClick');
        $('#statusFilter').attr('onClick', 'statusFilter(\'DocumentInboxNewForInfo\')');

    } else {
        if (id == 1) {
            if (loggedInUser.Token.Language.toLowerCase() == "ar") {
                $('#inside_table_content_holder').animate({
                    margin: '0 0% 0 0'
                }, 200);
            } else {
                $('#inside_table_content_holder').animate({
                    marginLeft: '0%'
                }, 200);
            }
            tab_i = 0;
            $('#taskCount').addClass($.session.get("SecondFontColor")+' changeable_s_f');
            $('#myInfosCount').removeClass($.session.get("SecondFontColor")+' changeable_s_f');

            $('#tab_line_span1').addClass($.session.get("SecondFontColor")+' changeable_s_f');
            $('#tab_line_span2').removeClass($.session.get("SecondFontColor")+' changeable_s_f');

            $('#tasks').show();
            $('#Infos').hide();
            $('.plus_more').removeAttr('onClick');
            $('.plus_more').attr('onClick', 'myTasksPlus()');
            //$('.show_more').removeAttr('onClick');
            //$('.show_more').attr('onClick', 'LoadMoreMyTasks()');
            $('#statusFilter').removeAttr('onClick');
            $('#statusFilter').attr('onClick', 'statusFilter(\'DocumentInboxNew\')');
        }
    }
});


var tab_i1 = 0;
$('.ch_tabs1').click(function (e) {
    e.preventDefault;
    var id = $(this).data('id')
    $('.active_tab1').removeClass('active_on1')
    $('#tab_line_active' + id).addClass('active_on1')

    if (tab_i1 == 0 && id == 4) {

        if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            $('#inside_table_content_holder2').animate({
                margin: '0 -100% 0 0',
            }, 200);
        } else {
            $('#inside_table_content_holder2').animate({
                marginLeft: '-100%',
            }, 200);
        }
        if (id == 4) {
            $('.corr_nbr').stop().fadeOut();
        }
        tab_i1 = 1;

    } else {
        if (id == 3) {
            if (loggedInUser.Token.Language.toLowerCase() == "ar") {
                $('#inside_table_content_holder2').animate({
                    margin: '0 0% 0 0',
                }, 200);
            } else {
                $('#inside_table_content_holder2').animate({
                    marginLeft: '0%',
                }, 200);
            }
            $('.corr_nbr').stop().fadeIn();

            tab_i1 = 0;
        }
    }
});

/////////////////////////// Filter ////////////////////////////
var filter_i = 0;
$('.icon_filter').click(function (e) {
    e.preventDefault;
    var id = $(this).data('id');
    if (filter_i == 0) {
        $('#filter_open1').css({ zIndex: '999' })
        $('.svg').addClass(SecondFillcolor);
        $('#filter_open1').stop().animate({
            opacity: '1',
            marginTop: '0px'
        });

        filter_i = 1;
    } else {
        closeFilter()
    }
})

function closeFilter() {
    $('#filter_open1').stop().animate({
        opacity: '0',
        marginTop: '0px'
    });
    $('#filter_open1').css({ zIndex: '-1' })
    filter_i = 0;
}

//$('.filter_open ul li.filter_animation').hover(function(e) {
//    e.preventDefault();
//    var id = $(this).data('id');
//    SecondFontColor = $.session.get("SecondFontColor");
//    SecondFillcolor = $.session.get("SecondFillcolor");
//    // $(this).removeClass('main_hover_li');
//    // $('#svg_path'+id).removeClass('main_fill_li');
//    $(this).addClass(SecondFontColor)
//    $('#svg_path' + id).addClass(SecondFillcolor);
//},
//    function(e) {
//        e.preventDefault();
//        var id = $(this).data('id');
//        SecondFontColor = $.session.get("SecondFontColor");
//        SecondFillcolor = $.session.get("SecondFillcolor");
//        $(this).removeClass(SecondFontColor)
//        $('#svg_path' + id).removeClass(SecondFillcolor);
//    })
$('.filter_open ul li.filter_animation').click(function (e) {
    var id = $(this).parent().data('id');
    $('#filter_open' + id).stop().animate({
        opacity: '0',
        marginTop: '0px'
    });
    $('#filter_open' + id).css({ zIndex: '-1' })

    filter_i = 0;
});



/////////////////////////////  Bar Chart  //////////////////////////////



setTimeout(function () {
    //generateBarGraph('#dashboard-stats');

    //function generateBarGraph(wrapper) {
    //    // Set Up Values Array
    //    var values = [];

    //    var chart_i = 1;
    //    // Get Values and save to Array
    //    //   $(wrapper + ' .bar').each(function(index, el) {
    //    //     values.push($('#li'+chart_i).data('value'));

    //    //   });

    //    //   $.each(values, function( index, value ) {
    //    //     // alert( index + ": " + value );
    //    //     });

    //    // Get Max Value From Array

    //    // Set width of bar to percent of max value
    //    $(wrapper + ' .bar').each(function (index, el) {
    //        var max_value = $('#li' + chart_i).data('value');
    //        var bar = $(this),
    //            value = bar.data('value'),
    //            percent = Math.ceil((value / max_value) * 100);
    //        // alert(percent+','+value+','+max_value);

    //        // Set Width & Add Class
    //        bar.width(percent + '%');
    //        bar.addClass('in');
    //        chart_i++;

    //    });
    //}

    // Generate the bar graph on window load...

}, 3000);


var Constants =
{
    AdminUrl: "AdminUrl",
    EnterpriseProject: "EnterpriseProject",
    CTSWEBURL: "CTSWEBURL",
    InboxActionsUrl: "InboxActionsUrl",
    ShowStructureCode: "ShowStructureCode",
    DocIconsXMLPath: "DocIconsXMLPath",
    GenericForms: "GenericForms",
    ShowRecallNotification: "ShowRecallNotification",
    ActionsUrl: "ActionsUrl",
    CMMSUrl: "CMMSUrl",
    ReportsActionsUrl: "ReportsActionsUrl",
    DMSUrl: "DMSUrl",
    BAMReportsUrl: "BAMReportsUrl",
    AuthenticationUrl: "AuthenticationUrl",
    BAMUrl: "BAMUrl",
    JsonLength: "JsonLength",
    TempPath: "TempPath",
    token: "token",
    documentId: "documentId",
    attachementId: "attachementId",
    loadContent: "loadContent",
    LocalRootPath: "LocalRootPath",
    ViewerUrl: "ViewerUrl",
    id: "id",
    BarcodeFolderName: "BarcodeFolderName",
    fileId: "fileId",
    AsposeLicenseFile: "AsposeLicenseFile",
    gctId: "gctId",
    ReportsFolder: "ReportsFolder",
    ReportsServerUrl: "ReportsServerUrl",
    CallMyFunction: "CallMyFunction",
    FollowupUrl: "FollowupUrl",
    AR: "AR",
    FR: "FR",
    EN: "EN",
    TempFolder: "TempFolder",
    LogoImageName: "LogoImageName",
    LogoText: "LogoText",
    LogoType: "LogoType",
    EverSuiteCoreUrl: "EverSuiteCoreUrl",
    StyleFolderName: "StyleFolderName",
    LoginLogo: "LoginLogo",
    LoginImage: "LoginImage",
    AddressBookUrl: "AddressBookUrl",
    VIPUrl: "VIPUrl",
    OldLoginPage: "OldLoginPage",
    transferId: "transferId",
    loadDocument: "loadDocument",
    NewBAMServiceUrl: "BAMServiceUrl",
    NewBAMUrl: "BAMRootPath",
    OldBam: "OldBam",
    delegateduserGctId: "delegateduserGctId",
    DefaultThemeName: "EverteamTheme",
    Gregorian: "gregorian",
    ReportUrl: "ReportUrl",
    ReportChartUrl: "ReportChartUrl"
};
var Sessions=
{
    VIPUserInfo : "VIPUserInfo",
    UserInfo : "UserInfo",
    UserLanguage : "UserLanguage",
    ReportVersion : "ReportVersion"
};

var Languages=
{
    AR : "AR",
    EN : "EN"
};

var QueryStrings=
{
    TemplateFolderEntryName : "TemplateFolderEntryName",
    token : "token",
    CaptionBelowText : "CaptionBelowText",
    CaptionAboveText : "CaptionAboveText",
    BarcodeSetting : "BarcodeSetting",
    BarcodeText : "BarcodeText",
    NodeId : "NodeId",
    AttachementId : "AttachementId",
    DocumentCategoryId : "DocumentCategoryId",
    DocumentId : "DocumentId",
    ViewMode : "ViewMode",
    StatusId : "StatusId",
    RefreshTree : "RefreshTree",
    TransferId : "TransferId",
    folderId : "folderId",
    fileId : "fileId",
    delegationGctId : "delegationGctId",
    ReportName : "ReportName",
    Params : "Params",
    ShowParameter : "ShowParameter",
    FilePath : "FilePath",
    ThemeName : "ThemeName",
    UserLanguage : "UserLanguage",
    UserToken : "UserToken",
    CalendarType : "calendarType",
    Device: "Device",
    StatusId:"StatusId",
};

var JsonResult=
{
    GetTasksByVipMethodNameResult : "GetTasksByVipMethodNameResult",
    CreateDocumentWithFileResult : "CreateDocumentWithFileResult",
    CreateDocumentWithFileWithDelegationResult : "CreateDocumentWithFileWithDelegationResult",
    ExportCorrespondenceToPdfResult : "ExportCorrespondenceToPdfResult",
    GetInboxResult : "GetInboxResult",
    AdvancedSearchGlobalResult : "AdvancedSearchGlobalResult",
    ListModeDataSourceResult : "ListModeDataSourceResult",
    InboxNodeAsJsonResult : "InboxNodeAsJsonResult",
    SimpleSearchProcessingResult : "SimpleSearchProcessingResult",
    GetListsBySPQueryResult : "GetListsBySPQueryLazyResult",
    GetListsByListSPQueryLazyResult : "GetListsByListSPQueryLazyResult"
};

var GetRequest=
{
    ContactStructures : "ContactStructures",
    Method : "GET",
    ContentType : "text/json",
    GetOrginalMail : "GetOrginalMail",
    GetDocumentCategoryById : "GetDocumentCategoryById",
    AttachmentContent : "AttachmentContent",
    GetUserSignatures : "GetUserSignatures",
    GetAnnotations : "GetAnnotations",
    GetUserToken : "GetUserToken",
    BarcodeConfiguration : "BarcodeConfiguration",
    GetTransferById : "GetTransferById",
    GetTransferByIdWithDelegation : "GetTransferByIdWithDelegation"
};

var PostRequest=
{
    UploadStreamTemplate : "UploadStreamTemplate",
    Method : "POST",
    ContentType : "text/json",
    CreateDocumentWithFile : "CreateDocumentWithFile",
    CreateDocumentWithFileWithDelegation : "CreateDocumentWithFileWithDelegation",
    AddAttachment : "AddAttachment",
    ReplaceAttachment : "ReplaceAttachment",
    SaveSignatures : "SaveSignatures",
    ExportCorrespondenceToPdf : "ExportCorrespondenceToPdf",
    GetInbox : "GetInbox",
    AdvancedSearchGlobal : "AdvancedSearchGlobal",
    ListModeDataSource : "ListModeDataSource",
    InboxNodeAsJson : "InboxNodeAsJson",
    GetTasksByVipMethodName : "GetTasksByVipMethodName",
    GetUserSettings : "UserSettings",
    AddVisualTrackingAuditLog : "AddVisualTrackingAuditLog",
    AddVisualTrackingAuditLogByGcId : "AddVisualTrackingAuditLogByGcId",
    SimpleSearchProcessing : "SimpleSearchProcessing",
    GetListsBySPQuery : "GetListsBySPQueryLazy",
    GetListsByListSPQueryLazy : "GetListsByListSPQueryLazy"
};
var Pages =
{
        DocumentMainPage: "DocumentMainPage.html",
        DocumentMainPage: "DocumentMainPage.html",
    BarcodeImage: "BarcodeImage.aspx",
    Home: "Home.html",
    //ContactStructuresForm: "ContactStructuresForm.aspx",
    Login_Form: "Login.html",
    Main: "Main.html",
    Login: "Login.html",
};
// THIS FILE IS GENERATED - DO NOT EDIT!
/*global module:false*/

(function (exports, undefined) {
    'use strict';

    var mobileDetectRules = {
    "phones": {
        "iPhone": "\\biPhone.*Mobile|\\biPod",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile",
        "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|\\bDroid\\b.*Build|DROIDX|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",
        "Samsung": "Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999)",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
    },
    "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "^.*Android.*Nexus(((?:(?!Mobile))|(?:(\\s(7|10).+))).)*$",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|SM-T311|SM-T310|SM-T210|SM-T211|SM-P900",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFTT|KFOTE|WFJWAE)\\b",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;",
        "HPTablet": "HP Slate 7|HP ElitePad 900|hp-tablet|EliteBook.*Touch",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810)\\b|W3-810",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V900|LG-V909\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D",
        "LenovoTablet": "IdeaTab|S2110|S6000|K3011|A3000|A1000|A2107|A2109|A1107",
        "YarvikTablet": "Android.*(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468)",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|ZTE V9",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT211|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "bq.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant)|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "GalapadTablet": "Android.*\\bG1\\b",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|ViewPad7|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|SmartTabII10"
    },
    "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
    },
    "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile",
        "Tizen": "Tizen",
        "UCBrowser": "UC.*Browser|UCWEB",
        "DiigoBrowser": "DiigoBrowser",
        "Puffin": "Puffin",
        "Mercury": "\\bMercury\\b",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
    },
    "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": [
            "Chrome\/[VER]",
            "CriOS\/[VER]",
            "CrMo\/[VER]"
        ],
        "Coast": [
            "Coast\/[VER]"
        ],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": "Firefox\/[VER]",
        "Fennec": "Fennec\/[VER]",
        "IE": [
            "IEMobile\/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];"
        ],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [
            " OPR\/[VER]",
            "Opera Mini\/[VER]",
            "Version\/[VER]"
        ],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UC Browser": "UC Browser[VER]",
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "Safari": [
            "Version\/[VER]",
            "Safari\/[VER]"
        ],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "iOS": " \\bOS\\b [VER] ",
        "Android": "Android [VER]",
        "BlackBerry": [
            "BlackBerry[\\w]+\/[VER]",
            "BlackBerry.*Version\/[VER]",
            "Version\/[VER]"
        ],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": [
            "Windows Phone OS [VER]",
            "Windows Phone [VER]"
        ],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": [
            "SymbianOS\/[VER]",
            "Symbian\/[VER]"
        ],
        "webOS": [
            "webOS\/[VER]",
            "hpwOS\/[VER];"
        ]
    },
    "utils": {
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Bot": "Googlebot|DoCoMo|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|facebookexternalhit",
        "MobileBot": "Googlebot-Mobile|DoCoMo|YahooSeeker\/M1A1-R2D2",
        "Console": "\\b(Nintendo|Nintendo WiiU|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
    }
};

    // following patterns come from http://detectmobilebrowsers.com/
    var detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
    };

    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray,
        FALLBACK_PHONE = 'UnknownPhone',
        FALLBACK_TABLET = 'UnknownTablet',
        FALLBACK_MOBILE = 'UnknownMobile';

    isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

    (function init() {
        var key, values, value, i, len, verPos;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);
    }());

    function convertPropsToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }

    /**
     * Test userAgent string against a set of rules and find the matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    function findMatch(rules, userAgent) {
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    }

    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    function getVersionStr(propertyName, userAgent) {
        var props = mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    }

    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    function getVersion(propertyName, userAgent) {
        var version = getVersionStr(propertyName, userAgent);
        return version ? prepareVersionNo(version) : NaN;
    }

    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    function prepareVersionNo(version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    }

    function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function isMobileFallback(userAgent) {
        return detectMobileBrowsers.fullPattern.test(userAgent) ||
            detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
    }

    function prepareDetectionCache(cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
            return;
        }
        var phone, tablet, phoneSized;

        phone = findMatch(mobileDetectRules.phones, userAgent);
        if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
        }

        tablet = findMatch(mobileDetectRules.tablets, userAgent);
        if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
        }

        // our rules haven't found a match -> try more general fallback rules
        if (isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined) {
                cache.mobile = cache.tablet = cache.phone = FALLBACK_MOBILE;
            } else if (phoneSized) {
                cache.mobile = cache.phone = FALLBACK_PHONE;
                cache.tablet = null;
            } else {
                cache.mobile = cache.tablet = FALLBACK_TABLET;
                cache.phone = null;
            }
        } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
        }
    }

    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=650] <strong>only for browsers</strong> specify a value for the maximum
     *        width (in logical "CSS" pixels) until a device detected as mobile will be handled as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://www.html5rocks.com/en/mobile/cross-device/">A non-responsive approach to
     *        building cross-device webapps</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = userAgent;
        this._cache = {};
        this.maxPhoneWidth = maxPhoneWidth || 650;
    }

    MobileDetect.prototype = {
        constructor: MobileDetect,

        /**
         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
         * <br>
         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
         * <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width</code>.<br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownPhone</code>
         * and <code>UnknownTablet</code>, so you will only get <code>UnknownMobile</code>.<br>
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
         * @function MobileDetect#mobile
         */
        mobile: function () {
            prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
        },

        /**
         * Returns the detected phone type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
         * Micromax, Palm, Vertu, Pantech, Fly, SimValley, GenericPhone</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width</code>.<br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownPhone</code>
         * and <code>UnknownMobile</code>, so you will only get <code>UnknownMobile</code>.<br>
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
         * @function MobileDetect#phone
         */
        phone: function () {
            prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
        },

        /**
         * Returns the detected tablet type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
         * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
         * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
         * YarvikTablet, MedionTablet, ArnovaTablet, IRUTablet, MegafonTablet,
         * EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet, SonyTablet, CubeTablet,
         * CobyTablet, MIDTablet, SMiTTablet, RockChipTablet, FlyTablet, bqTablet,
         * HuaweiTablet, NecTablet, PantechTablet, BronchoTablet, VersusTablet,
         * ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet, TexetTablet,
         * PlaystationTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
         * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
         * OvermaxTablet, HCLTablet, DPSTablet, TelstraTablet, GenericTablet</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width</code>.<br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will only get <code>UnknownMobile</code>.<br>
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
         * @function MobileDetect#tablet
         */
        tablet: function () {
            prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
        },

        /**
         * Returns the detected user-agent string or <tt>null</tt>.
         * <br>
         * The returned user-agent is one of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, IE, Firefox, Bolt, TeaShark, Blazer, Safari,
         * Tizen, UCBrowser, DiigoBrowser, Puffin, Mercury, GenericBrowser</tt><br>
         *
         * @returns {String} the key for the detected user-agent or <tt>null</tt>
         * @function MobileDetect#userAgent
         */
        userAgent: function () {
            if (this._cache.userAgent === undefined) {
                this._cache.userAgent = findMatch(mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
        },

        /**
         * Returns the detected operating system string or <tt>null</tt>.
         * <br>
         * The operating system is one of following keys:<br>
         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
         * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
         *
         * @returns {String} the key for the detected operating system.
         * @function MobileDetect#os
         */
        os: function () {
            if (this._cache.os === undefined) {
                this._cache.os = findMatch(mobileDetectRules.oss, this.ua);
            }
            return this._cache.os;
        },

        /**
         * Get the version (as Number) of the given property in the User-Agent.
         * <br>
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, IE, NetFront, NokiaBrowser, Opera, Opera Mini, Opera
         * Mobi, UC Browser, MQQBrowser, MicroMessenger, Safari, Skyfire, Tizen, Webkit,
         * Gecko, Trident, Presto, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS,
         * Windows Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
         *          Be careful when comparing this value w/ '==' operator!
         * @function MobileDetect#version
         */
        version: function (key) {
            return getVersion(key, this.ua);
        },

        /**
         * Get the version (as String) of the given property in the User-Agent.
         * <br>
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, IE, NetFront, NokiaBrowser, Opera, Opera Mini, Opera
         * Mobi, UC Browser, MQQBrowser, MicroMessenger, Safari, Skyfire, Tizen, Webkit,
         * Gecko, Trident, Presto, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS,
         * Windows Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
         *
         * @function MobileDetect#versionStr
         */
        versionStr: function (key) {
            return getVersionStr(key, this.ua);
        },

        /**
         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
         *
         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
         *        tablet family.<br>
         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
         *        Additionally you have following keys:<br>
         * <br><tt>DesktopMode, TV, WebKit, Bot, MobileBot, Console, Watch</tt><br>
         *
         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
         * @function MobileDetect#is
         */
        is: function(key) {
            return equalIC(key, this.userAgent()) ||
                   equalIC(key, this.os()) ||
                   equalIC(key, this.phone()) ||
                   equalIC(key, this.tablet()) ||
                   equalIC(key, findMatch(mobileDetectRules.utils, this.ua));
        },

        /**
         * Do a quick test against navigator::userAgent.
         *
         * @param {String|RegExp} pattern the pattern, either as String or RegExp
         *                        (a string will be converted to a case-insensitive RegExp).
         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
         * @function MobileDetect#match
         */
        match: function (pattern) {
            if (!(pattern instanceof RegExp)) {
                pattern = new RegExp(pattern, 'i');
            }
            return pattern.test(this.ua);
        },

        /**
         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
         * <br>
         * Obviously this method makes sense in browser environments only (not for Node.js)!
         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
         *          Will always return <code>undefined</code> server-side.
         */
        isPhoneSized: function (maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },

        /**
         * Returns the mobile grade ('A', 'B', 'C').
         *
         * @returns {String} one of the mobile grades ('A', 'B', 'C').
         * @function MobileDetect#mobileGrade
         */
        mobileGrade: function () {
            // impl note:
            // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
            // When changes are made in Mobile_Detect.php, copy this method and replace:
            //     $this-> / t.
            //     self::MOBILE_GRADE_(.) / '$1'
            //     , self::VERSION_TYPE_FLOAT / (nothing)
            var t = this,
                $isMobile = this.mobile() !== null;

            if (
                // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
                t.version('iPad') >= 4.3 ||
                t.version('iPhone') >= 3.1 ||
                t.version('iPod') >= 3.1 ||

                // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
                // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
                // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
                // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
                ( t.version('Android') > 2.1 && t.is('Webkit') ) ||

                // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
                t.version('Windows Phone OS') >= 7.0 ||

                // Blackberry 7 - Tested on BlackBerry® Torch 9810
                // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
                t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 ||
                // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
                t.match('Playbook.*Tablet') ||

                // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
                ( t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi') ) ||
                // Palm WebOS 3.0  - Tested on HP TouchPad
                t.match('hp.*TouchPad') ||

                // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
                ( t.is('Firefox') && t.version('Firefox') >= 12 ) ||

                // Chrome for Android - Tested on Android 4.0, 4.1 device
                ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0 ) ||

                // Skyfire 4.1 - Tested on Android 2.3 device
                ( t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3 ) ||

                // Opera Mobile 11.5-12: Tested on Android 2.3
                ( t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS') ) ||

                // Meego 1.2 - Tested on Nokia 950 and N9
                t.is('MeeGoOS') ||

                // Tizen (pre-release) - Tested on early hardware
                t.is('Tizen') ||

                // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
                // @todo: more tests here!
                t.is('Dolfin') && t.version('Bada') >= 2.0 ||

                // UC Browser - Tested on Android 2.3 device
                ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3 ) ||

                // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
                ( t.match('Kindle Fire') ||
                    t.is('Kindle') && t.version('Kindle') >= 3.0 ) ||

                // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
                t.is('AndroidOS') && t.is('NookTablet') ||

                // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
                t.version('Chrome') >= 11 && !$isMobile ||

                // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
                t.version('Safari') >= 5.0 && !$isMobile ||

                // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
                t.version('Firefox') >= 4.0 && !$isMobile ||

                // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
                t.version('MSIE') >= 7.0 && !$isMobile ||

                // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
                // @reference: http://my.opera.com/community/openweb/idopera/
                t.version('Opera') >= 10 && !$isMobile
                ) {
                return 'A';
            }

            if (
                t.version('iPad') < 4.3 ||
                t.version('iPhone') < 3.1 ||
                t.version('iPod') < 3.1 ||

                // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
                t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 ||

                //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
                ( t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 &&
                    (t.version('Android') >= 2.3 || t.is('iOS')) ) ||

                // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
                t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

                // @todo: report this (tested on Nokia N71)
                t.version('Opera Mobi') >= 11 && t.is('SymbianOS')
                ) {
                return 'B';
            }

            if (
                // Blackberry 4.x - Tested on the Curve 8330
                t.version('BlackBerry') < 5.0 ||
                // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
                t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2
            ) {
                return 'C';
            }

            return 'C';
        }
    };

    exports(MobileDetect);

})(function (data, undefined) {
    if (typeof module !== 'undefined' && module.exports) {

        data.isPhoneSized = function () {};
        module.exports = data;

    } else if (typeof window !== 'undefined') {

        data.isPhoneSized = function (maxPhoneWidth) {
            if (maxPhoneWidth < 0) {
                return undefined;
            }
            var physicalPixelWidth = window.screen.width,
                pixelRatio = window.devicePixelRatio || 1,
                cssPixelWidth = physicalPixelWidth / pixelRatio;

            return cssPixelWidth <= maxPhoneWidth;
        };

        window.MobileDetect = data;
    } else {
        throw new Error('unknown environment'); // please file a bug if you get this error!
    }
});

var calendarType;
var styleFolderName = AppSettings.StyleFolderName;
var notSupportedCharacters;
var calendarLanguage;
var currentUserName;
var currentUserStructure;
var currentUserLoginName;
var siteUrl;
var isAdUser;
var imagePath;
var productVersion;
var url = window.location.href;
var urlArr = url.split("/");
window.location.href.split("/")[2].split(":")[1]
var scheme = urlArr[0].split(":")[0];
var host = urlArr[2].split(":")[0];
var port = urlArr[2].split(":")[1];
var segments = urlArr[3];
var Version = sessionStorage.getItem("CTSCurrentVersion");
var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
var NotSupportedCharacteres = ["#", "%", "&", "*", ":", "<", ">", "?", "/", "{", "|", "}", "\\", "~"];
var delegatedUser;
var delegatedUsers = [];
var theTransfer;

function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}
var currentVersion = sessionStorage.getItem("CTSCurrentVersion");
var LocalRootPath = AppSettings.LocalRootPath;
var DocumentId = getQuerystring(QueryStrings.DocumentId, 0);
var CategoryId = getQuerystring(QueryStrings.DocumentCategoryId, 0);
var TransferId = getQuerystring(QueryStrings.TransferId, 0);
var ViewMode = getQuerystring(QueryStrings.ViewMode, "");
var StatusId = getQuerystring(QueryStrings.StatusId, 0);
var delegationGctId = getQuerystring(QueryStrings.delegationGctId, 0);
$(document).ready(function () {
    if ((loggedInUser == null || loggedInUser.Token == null) && getQuerystring("Token", "") != null && getQuerystring("Token", "") != "") {
        var url = "GetUserInfoByToken?token=" + getQuerystring("Token", "");
        $.ajax({
            url: AppSettings.AuthenticationUrl + url,
            async: false
        }).then(function (data) {
            loggedInUser = data;
            sessionStorage.setItem(loggedInUser, data);
        });

    }
    if (loggedInUser == null || loggedInUser.Token == null || loggedInUser.Token.GroupId == 6) {
        window.location.href = window.location.href.replace(window.location.href.substring(window.location.href.lastIndexOf("/") + 1), Pages.Login_Form + "?");
    }
    else {
        if (loggedInUser.Token.VIPView != null && loggedInUser.Token.VIPView.Value) {
            window.location.href = window.location.href.replace(window.location.href.substring(window.location.href.lastIndexOf("/") + 1), AppSettings.VIPUrl + "?");
        }
        var url = window.location.href;
        var urlArr = url.split("/");
        window.location.href.split("/")[2].split(":")[1]
        var scheme = urlArr[0].split(":")[0];
        var host = urlArr[2].split(":")[0];
        var port = urlArr[2].split(":")[1];
        port = typeof port != "undefined" ? port : "80";
        var segments = urlArr[3];
        if ($("head") != null) {
            $("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/select2.css" + "\" />");
            $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/LoadingMask.js" + "\" />");
            $("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars.picker.css\" />");
            $("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/" + styleFolderName + "/jquery-ui.css" + "\" />");
            var md = new MobileDetect(window.navigator.userAgent);
            $("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/SweetAlert.css" + "\" />");
            $("head").append("<script src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/sweetalert-dev.js" + "\" />");
            $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/jquery.autocomplete.min.js" + "\" />");

        }
        if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Dictionary/DictionaryAr.js" + "\" />");

        } else if (loggedInUser.Token.Language.toLowerCase() == "en") {
            $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Dictionary/Dictionary.js" + "\" />");
        }
        else {
            $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Dictionary/DictionaryFr.js" + "\" />");
        }

        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/IconResources.js" + "\" />");

        //jQuery
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/jquery.placeholder.min.js" + "\" />");

        ////jQueryUI
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/jquery-ui.min.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/jquey-dialogextend.js" + "\" />");
        ////calendar
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.plugin.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars.all.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars-ar.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars-fr.js" + "\" />");
        if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars.picker-ar.js" + "\" />");
        } else if (loggedInUser.Token.Language.toLowerCase() == "fr") {
            $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars.picker-fr.js" + "\" />");
        }
        else {
            $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars.picker.js" + "\" />");
        }
        $("#form1").append("<script src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/select2.js" + "\" />");
        $("#form1").append("<script src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/jstree.js" + "\" />");
        $("#form1").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/select2.css" + "\" />");
        $("#form1").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Tree.css\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars.islamic.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Calendar/jquery.calendars.islamic-ar.js" + "\" />");
        //commonScripts
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Common.js" + "\" />");
        if (loggedInUser.Token.ShowHijriCalendar) {
            calendarType = 'islamic';
        }
        else {
            calendarType = 'gregorian';
        }
        calendarLanguage = loggedInUser.Token.Language.toLowerCase();
        notSupportedCharacters = NotSupportedCharacteres;
        if (loggedInUser.Token.Language.toLowerCase() == Constants.AR.toLowerCase()) {
            currentUserName = loggedInUser.FirstNameAr + " " + loggedInUser.LastNameAr;
            currentUserStructure = loggedInUser.Token.StructureNameAr;
        } else if (loggedInUser.Token.Language.toLowerCase() == Constants.FR.toLowerCase()) {
            currentUserName = loggedInUser.FirstNameFr + " " + loggedInUser.LastNameFr;
            currentUserStructure = loggedInUser.Token.StructureNameFr;
        } else {
            currentUserName = loggedInUser.FirstName + " " + loggedInUser.LastName;
            currentUserStructure = loggedInUser.Token.StructureName;
        }
        currentUserLoginName = loggedInUser.Token.LoginName;
        siteUrl = scheme + "://" + host + ":" + port + "/" + segments + "/";
        isAdUser = loggedInUser.Token.AdUser.toString().toLowerCase();
        imagePath = styleFolderName;
        productVersion = Version;
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Configuration/CategoriesConfiguration.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Configuration/CustomizationFile.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/Configuration/Configuration.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"http://ctsbdemo.intalio.com/CTSWEB/Scripts/5.4.1/bowser.js" + "\" />");
        $("head").append("<script type=\"text/javascript\" src=\"" + scheme + "://" + host + ":" + port + "/" + segments + "/assets/simplebar/simplebar.min.js" + "\" />");
        if (delegationGctId != 0) {
            $.ajax({
                url: AppSettings.ActionsUrl + "GetUserToken?token=" + loggedInUser.Token.Token + "&gctId=" + delegationGctId,
                async: false
            }).then(function (DelegatedUser) {
                delegatedUser = DelegatedUser;
            }).fail(function (error) {
            });
        }

    }

    if (loggedInUser.Token.Language.toLowerCase() == "ar") {
        $("body").attr("lang", "ar");
        $("body").attr("dir", "rtl");

    } else {
        $("body").attr("lang", "en");
        $("body").attr("dir", "ltr");
    }
});

function GetTransferById(tokenValue, transferId, loadDocument, PurposeIdHidden) {
    var delegation = delegatedUser != null ? delegatedUser.GctId : 0;
    $.ajax({
        url: AppSettings.ActionsUrl + "GetTransferById?token=" + tokenValue + "&transferId=" + transferId + "&loadDocument=" + loadDocument + '&delegatedUserGctId=' + delegation,
        async: false
    }).then(function (theTransfer) {
        if (theTransfer != null) {
            document.getElementById(PurposeIdHidden).value = theTransfer.Purpose.Value.toString();
        }
    });
}
function GetQueryString(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];

}
function ExportCorrespondenceToPdfImage(filePath, openWindow) {

    var params = {};
    params.token = loggedInUser.Token.Token;
    // params.documentId = getQuerystring(QueryStrings.DocumentId, 0);
    params.documentId = getQuerystring(openWindow, 'documentsId', '') != '' ? parseInt(getQuerystring(openWindow, 'documentsId', '').split(',')) : 0;
    // params.documentCategory = getQuerystring(QueryStrings.DocumentCategoryId, 0);
    params.documentCategory = getQuerystring(openWindow, 'documentCategory', '') != '' ? parseInt(getQuerystring(openWindow, 'documentCategory', '').split(',')) : 0;;
    params.filePath = filePath;
    var postedData = JSON.stringify(params);
    $.ajax({
        url: AppSettings.ActionsUrl + "ExportCorrespondenceToPdfImage",
        type: "POST",
        data: postedData,
        contentType: "application/json; charset=utf-8"
    }).then(function (data) {
        var objectData = data.ExportCorrespondenceToPdfImageResult;
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE workaround
            var byteData = objectData[0].Value;
            var byteDatasub = byteData.substring(0, byteData.length - 1); // remove the "" from your base64 string 
            var byteCharacters = atob(byteData.replace(/\s/g, ""));
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            var blob = new Blob([byteArray], { type: objectData[2].Value });
            window.navigator.msSaveOrOpenBlob(blob, objectData[1].Value);
            //var url = URL.createObjectURL(blob);
            //window.open(url, '_blank')
            //window.URL.createObjectURL(blob);
            //window.open(AppSettings.ActionsUrl + "PreviewFile?filePath="+filePath.replace("\\","/"), '_blank');
        }
        else { // much easier if not IE
            var byteData = objectData[0].Value;
            var blob = b64toBlob(byteData, objectData[2].Value);
            var blobUrl = URL.createObjectURL(blob);
            var link = document.createElement("a"); // Or maybe get it from the current document
            link.href = blobUrl;
            link.download = objectData[1].Value;
            link.innerHTML = "Click here to download the file";
            document.body.appendChild(link);
            link.click();
            setTimeout(function () {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }, 0);
        }

    });


}
function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}




var AvailableCategories = [];
var EditableMetaAndViewer;
var AllEntities = [];
var selectedNodeId = '';
var MainTreeObject = [];
var currentVersion = sessionStorage.getItem("CTSCurrentVersion");
var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
var Version = sessionStorage.getItem("CTSCurrentVersion");
var init = true;
var objectfields = [];
var NodeFollowup;
var NodeNew;
var NodeForInfo;
var UserNodes = [];
var delegationInboxes = {};
var assignedToDelegation = [];
var prioritiesObjects = [];
var delegatedContacts = [];
$(document).ready(function () {
    setVisible('.page', true);
    setVisible('#loading', false);
    showLoader('performance');
    showLoader('Infos');
    showLoader('tasks');
    showLoader('follow_up');

    HideMask();
    // PageLoad();
    SetColorSession();
    var methodName = document.getElementById("ActionsUrlHidden").value + "AddressBookAvailableContactsToDelegate";
    var data = JSON.stringify({
        token: $("#TokenHidden").val()
    });
    CallWebMethod(methodName, data, function (retVal) {
        delegatedContacts = retVal.AddressBookAvailableContactsToDelegateResult;
    }, function (fail) {
        //GetHomeParentWindow(window).Alert('fail');
    });
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'getStorageURL?token=' + document.getElementById("TokenHidden").value,
        cache: false
    }).then(function (data) {
        sessionStorage.setItem('StrorageUrl', data[0].Value);
    }
    ).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });

    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'GetNotificationTimout?token=' + document.getElementById("TokenHidden").value,
        cache: false
    }).then(function (data) {
        sessionStorage.setItem('NotificationTimout', data[0].Value);
        LoadNotification();
    }
    ).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
    GetUserNodes();
    FillGridFollowUp();
    CheckEditableBeforeSign();
    FillMenuCoress();
    FillUserProfileMenu();
    LoadCategories();
    FillMyTaskFilter();
    FillMyInfoFilter();
    GetSavedQueries();
    if (loggedInUser.ProfilePicture !== null) {
        var profilePictureBase64 = "data:image/jpeg;base64," + (loggedInUser.ProfilePicture !== null ? _arrayBufferToBase64(loggedInUser.ProfilePicture) : '');
        $("#profile_img").html("<img id='pro_img' src='" + profilePictureBase64 + "' />");
    }
    else {
        $("#profile_img").html("<span style='color:white;'>" + loggedInUser.FirstName.charAt(0).toUpperCase() + loggedInUser.LastName.charAt(0).toUpperCase() + "</span>");
    }

    var userSpan = "<span>";
    if (loggedInUser.Token.Language.toLowerCase() === Constants.AR.toLowerCase()) {
        userSpan += loggedInUser.FirstNameAr.charAt(0).toUpperCase() + loggedInUser.FirstNameAr.slice(1);
        userSpan += " <label class='to_hide'>";
        userSpan += loggedInUser.LastNameAr.charAt(0).toUpperCase() + loggedInUser.LastNameAr.slice(1);
        userSpan += "</label></span>";
    } else if (loggedInUser.Token.Language.toLowerCase() === Constants.EN.toLowerCase()) {
        userSpan += loggedInUser.FirstName.charAt(0).toUpperCase() + loggedInUser.FirstName.slice(1);
        userSpan += " <label class='to_hide'>";
        userSpan += loggedInUser.LastName.charAt(0).toUpperCase() + loggedInUser.LastName.slice(1);
        userSpan += "</label></span>";
    } else {
        userSpan += loggedInUser.FirstNameFr.charAt(0).toUpperCase() + loggedInUser.FirstNameFr.slice(1);
        userSpan += " <label class='to_hide'>";
        userSpan += loggedInUser.LastNameFr.charAt(0).toUpperCase() + loggedInUser.LastNameFr.slice(1);
        userSpan += "</label></span>";

    }
    $("#profile_name").prepend(userSpan);
    var purposAction = "For Info";
    $.ajax({
        url: AppSettings.ActionsUrl + "GetPurposeByAction?token=" + loggedInUser.Token.Token + "&purposeAction=" + purposAction,
        async: true
    }).then(function (retVal) {
        sessionStorage.setItem("purposeId", retVal);
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });

    var inboxView = "DocumentInboxNewHome";
    $.ajax({
        url: AppSettings.ActionsUrl + "GetviewByName?token=" + loggedInUser.Token.Token + "&view=" + inboxView,
        async: true
    }).then(function (retVal) {
        sessionStorage.setItem("DocumentInboxNewHome", retVal);
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });

    var inboxViewHome = "DocumentInboxForInfoHome";
    $.ajax({
        url: AppSettings.ActionsUrl + "GetviewByName?token=" + loggedInUser.Token.Token + "&view=" + inboxViewHome,
        async: true
    }).then(function (retVal) {
        sessionStorage.setItem("DocumentInboxForInfoHome", retVal);
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });

    $('#gridDocumentInbox').find("div").first().removeAttr('onClick');
    $('#gridDocumentInbox').find("div").first().attr('onClick', 'myTasksPlus()');
    $('#statusFilter').removeAttr('onClick');
    $('#statusFilter').attr('onClick', 'statusFilter(\'DocumentInboxNew\')');
    $('#autocomplete').keypress(function (e) {
        var key = e.which;
        if (key === 13)  // the enter key code
        {
            $('.UserNodeSelected').removeClass('UserNodeSelected');

            var divId = $(this)[0].id;
            OpenSimpleSearch(divId);
            return false;
        }
    });
    getThemeColor();
    $('#body_content').attr('url', '');
    $('body').addClass('showhideBodyscroll');
    CreateDelegationTrees();
    $('#autocomplete').keyup(function () {
        if ($(this).val().length == 0) {
            $('#clearSearch').hide();
        }
        else {
            $('#clearSearch').show();
        }
    }).keyup();
    $("#clearSearch").on("click", function (e) {
        $('#autocomplete').val('');
        $(this).hide();
    });
    var faviconUrl = AppSettings.LocalRootPath + "/Style/" + sessionStorage.getItem("CTSCurrentVersion") + "/" + AppSettings.StyleFolderName + "/Resources/Images/favicon.png";
    $("#FavoriteIcon").attr("href", faviconUrl);
    if (AppSettings.LogoType == "image")
    {
        $("#LogoText").hide();
        $("#LogoImage").attr("Src", AppSettings.LogoImageName == "" ? AppSettings.LocalRootPath + "Style/" + currentVersion + "/Default/Resources/Images/Logo.png" : AppSettings.LocalRootPath + "Style/" + currentVersion + "/" + AppSettings.StyleFolderName + "/Resources/Images/" + AppSettings.LogoImageName);
    }
    else {
        $("#LogoText").text(AppSettings.LogoText == "" ? (loggedInUser.Token.Language.toLowerCase() == Constants.AR.toLowerCase() ? "إفيرتيم.مراسلات" : "everteam.correspondences") : AppSettings.LogoText);
    }
    $('#main_menu').click(function (e) {
        var target = $(e.target).parents('li')
        if ($('#main_menu').hasClass('resp_open_menu')) {
            if (target.is('li') || target.parents('li').length == 1) {
                $('#main_menu').removeClass('resp_open_menu');
            }
        }
        if (target.is('li') && !target.is('#li_logout')) {
            $('.UserNodeSelected').removeClass('UserNodeSelected');
            if ($(target)[0].className == "SavedQueryLiClick") {
                $(target).children().first().addClass('UserNodeSelected');
            } else
                $(target).addClass('UserNodeSelected');
        }
        else if (target.parents('li').length == 1 && target.parents('#li_logout').length == 0) {
            $('.UserNodeSelected').removeClass('UserNodeSelected');
            $(target).addClass('UserNodeSelected');
        }
    });
    if (IsPlatformIOS() || isMobile.any()) {
        $('#table_content_holder').on('touchstart', '#ul_table li', { passive: true }, function () {
            sessionStorage.setItem("TSF_Home", $(this).attr('id'));
            if ($('#tab_line_active1').hasClass('active_on')) {
                ShowMask(true);
                myTasksPlus();

            }
            if ($('#tab_line_active2').hasClass('active_on')) {
                ShowMask(true);
                myInfosPlus();
            }
        });
    } else {
        $('#table_content_holder').on('dblclick', '#ul_table li', function () {
            sessionStorage.setItem("TSF_Home", $(this).attr('id'));
            if ($('#tab_line_active1').hasClass('active_on')) {
                ShowMask(true);
                myTasksPlus();

            }
            if ($('#tab_line_active2').hasClass('active_on')) {
                ShowMask(true);
                myInfosPlus();
            }
        });
    }
    if (IsPlatformIOS() || isMobile.any()) {
        $('#table_content_holder1').on('touchstart', '#ul_table li', { passive: true }, function () {
            var countMyFollowup = $.grep(UserNodes, function (e) {
                return e.NodeId == NodeFollowup;
            });
            if (countMyFollowup.length > 0) {
                sessionStorage.setItem("FU_Home", $(this).attr('id'));
                ShowMask(true);
                myFollowupPlus();
            }
        });
    } else {
        $('#table_content_holder1').on('dblclick', '#ul_table li', function () {
            var countMyFollowup = $.grep(UserNodes, function (e) {
                return e.NodeId == NodeFollowup;
            });
            if (countMyFollowup.length > 0) {
                sessionStorage.setItem("FU_Home", $(this).attr('id'));
                ShowMask(true);
                myFollowupPlus();
            }
        });
    }
    if (IsPlatformIOS() || isMobile.any()) {
        if (loggedInUser.Token.Language.toLowerCase() == 'ar') {
            $('#main_body').attr('data-simplebar-direction', 'rtl');
            new SimpleBar($('#main_body')[0]);
        } else {
            new SimpleBar($('#main_body')[0]);
        }
    }
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'DelegationList?token=' + document.getElementById("TokenHidden").value,
        cache: false
    }).then(function (dataResult) {
        assignedToDelegation = dataResult;
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'GetPriorties?token=' + loggedInUser.Token.Token,
        cache: false
    }).then(function (retVal) {
        prioritiesObjects = retVal;
    });
    $(".search_icon_divtooltip").attr("title", resources_Advanced);
    $("#inboxMenu").attr("title", resources_Inbox);
});
function updateUserThemeColor(color, fromAction) {
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.themeColor = color;
    var postedData = JSON.stringify(params);
    $.ajax({
        url: AppSettings.ActionsUrl + "UpdateUserThemeColor",
        type: "POST",
        data: postedData,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        async: true,
        cache: false,
    }).then(function (data) {
        if (fromAction == 'reset') {
            var user = loggedInUser;
            var url = "GetUserInfoByToken?token=" + loggedInUser.Token.Token;
            $.ajax({
                url: AppSettings.AuthenticationUrl + url,
                async: false
            }).then(function (data) {

                user.ThemeColor = data.ThemeColor;
                loggedInUser = user;
                sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                $('.cancel_reset:nth-child(2)').addClass('opacityDisabled');
                $('.disabledSave').show();
                SetColorSession();
                Alert(resources_ColorRestSuccessfully);
            }).fail(function (fail) {
                HandleUnAuthotizedException(fail);
            });
        } else {
            var user = loggedInUser;
            var url = "GetUserInfoByToken?token=" + loggedInUser.Token.Token;
            $.ajax({
                url: AppSettings.AuthenticationUrl + url,
                async: false
            }).then(function (data) {

                user.ThemeColor = data.ThemeColor;
                loggedInUser = user;
                sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                $('.cancel_reset:nth-child(2)').addClass('opacityDisabled');
                $('.disabledSave').show();
                SetColorSession();
                Alert(resources_ColorSuccessfullySaved);

            }).fail(function (fail) {
                HandleUnAuthotizedException(fail);
            });
        }
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
$('#Reset').click(function () {
    updateUserThemeColor('blue', 'reset');
    $('.changeable').removeClass($.session.get("OldColor"));
    $('.changeable_s').removeClass($.session.get("OldSecondColor"));
    $('.changeable_b_s').removeClass($.session.get("OldBorderSecondColor"));
    $('.changeable_b_l_s').removeClass($.session.get("OldBorderLeftSecondColor"));
    $('#profile_img, .report_div').removeClass($.session.get("BeforeAfterColor"));
    $('.changeable_fill').removeClass($.session.get("MainFillcolor"));
    $('.changeable_fill_s').removeClass($.session.get("SecondFillcolor"));
    $('.changeable_s_f').removeClass($.session.get("SecondFontColor"));
    $('.changeable').addClass('main_color');
    $('.changeable_s').addClass('second_color');
    $('.changeable_b_s').addClass('border_second_color');
    $('.changeable_b_l_s').addClass('border_left_second_color');
    $('.changeable_bs_s').addClass('border_color');
    $('.changeable_fill').addClass('main_fill_color');
    $('.changeable_fill_s').addClass('second_fill_color');
    $('.changeable_s_f').addClass('second_font_color');

    $.session.set("OldColor", "main_color");
    $.session.set("OldSecondColor", "second_color");
    $.session.set("OldBorderSecondColor", "border_second_color");
    $.session.set("OldBorderLeftSecondColor", "border_left_second_color");
    $.session.set("OldBorderColor", "border_color");
    $.session.set("BeforeAfterColor", "");
    $.session.set("MainFillcolor", "main_fill_color");
    $.session.set("SecondFillcolor", "second_fill_color");
    $.session.set("SecondFontColor", "second_font_color");

});
$('#Save').click(function () {
    var new_color = $('.active_color').data('color');
    updateUserThemeColor(new_color, 'save');
});
var colorC = 1;
$('.color').click(function (e) {

    e.preventDefault();
    if (colorC == 1) {
        $.session.set("BeforeAfterColor", loggedInUser.ThemeColor + '_hover');
    } else {
        $.session.set("BeforeAfterColor", $('.active_color').data('color') + '_hover');

    }
    colorC++;
    $('.cancel_reset:nth-child(2)').removeClass('opacityDisabled');
    $('.disabledSave').hide();
    var new_color = $(this).data('color');
    $('.color').removeClass('active_color');
    $(this).addClass('active_color');
    /////// Remove some classes for hover effect /////
    $('.filter_animation').removeClass('main_hover_li');
    /////// main color ///////
    $('.changeable').removeClass($.session.get("OldColor"));
    $('.changeable').addClass(new_color);
    /////// Second Color ///////
    $('.changeable_s').removeClass($.session.get("OldSecondColor"));
    $('.changeable_s').addClass('second_' + new_color);
    //////Border top second color//////
    $('.changeable_b_s').removeClass($.session.get("OldBorderSecondColor"));
    $('.changeable_b_s').addClass('border_second_' + new_color);
    //////Border left second color//////
    $('.changeable_b_l_s').removeClass($.session.get("OldBorderLeftSecondColor"));
    $('.changeable_b_l_s').addClass('border_left_second_' + new_color);
    //////Borders second color//////
    $('.changeable_bs_s').removeClass($.session.get("OldBorderColor"));
    $('.changeable_bs_s').addClass('border_' + new_color);
    ///// before after /////
    $('#profile_img, .report_div ').removeClass($.session.get("BeforeAfterColor"));
    $('#profile_img, .report_div').addClass(new_color + '_hover');
    ///// fill svg /////
    $('.changeable_fill').removeClass($.session.get("MainFillcolor"));
    $('.changeable_fill').addClass(new_color + '_fill');
    ///// fill second color svg /////
    $('.changeable_fill_s').removeClass($.session.get("SecondFillcolor"));
    $('.changeable_fill_s').addClass(new_color + '_fill_s');
    ///// second font color  /////
    $('.changeable_s_f').removeClass($.session.get("SecondFontColor"));
    $('.changeable_s_f').addClass(new_color + '_f_s');
    $.session.set("OldColor", new_color);
    $.session.set("OldSecondColor", 'second_' + new_color);
    $.session.set("OldBorderSecondColor", 'border_second_' + new_color);
    $.session.set("OldBorderLeftSecondColor", 'border_left_second_' + new_color);
    $.session.set("OldBorderColor", 'border_' + new_color);
    $.session.set("MainFillcolor", new_color + '_fill');
    $.session.set("SecondFillcolor", new_color + '_fill_s');
    $.session.set("SecondFontColor", new_color + '_f_s');
    olderColor = $.session.get("OldColor");
    OldSecondColor = $.session.get("OldSecondColor");
    SecondFontColor = $.session.get("SecondFontColor");
    SecondFillcolor = $.session.get("SecondFillcolor");
    BeforeAfterColor = $.session.get("BeforeAfterColor");
    OldBorderColor = $.session.get("OldBorderColor");
    if (BeforeAfterColor != null) {
        //$('.step').attr('class', '').addClass('step');
        //$('.svg_wizard_fill').attr('class', '').addClass('svg_wizard_fill svg_wizard ');
        //$('.caption').attr('class', '').addClass('caption hidden-xs hidden-sm');
        //$('.radio').attr('class', '').addClass('radio checkmark');
        $('#profile_img, .checkmark, .report_div, .li_hover_tab, .radio.checkmark, .group_after, #wizard-progress .step-indicator li .step, #wizard-progress .step-indicator li .caption, #wizard-progress .step-indicator li.complete, #wizard-progress .step-indicator li .step svg ').removeClass(BeforeAfterColor);
        $('#profile_img, .checkmark, .report_div, .li_hover_tab, .radio.checkmark, .group_after, #wizard-progress .step-indicator li .step, #wizard-progress .step-indicator li .caption , #wizard-progress .step-indicator li .step svg, #wizard-progress .step-indicator li.complete, #wizard-progress .step-indicator li.complete .step svg').addClass(new_color + '_hover');
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
        $('*').each(function () {
            if ($(this).hasClass('changeable_bs_s')) {
                $(this).removeClass('border_color');
                $(this).addClass(OldBorderColor);
            }
        });
    }

});
function SetColorSession() {
    var new_color = loggedInUser.ThemeColor;
    /////// Remove some classes for hover effect /////
    $('.filter_animation').removeClass('main_hover_li');
    /////// main color ///////
    $('.changeable').removeClass($.session.get("OldColor"));
    $('.changeable').addClass(new_color);
    /////// Second Color ///////
    $('.changeable_s').removeClass($.session.get("OldSecondColor"));
    $('.changeable_s').addClass('second_' + new_color);
    //////Border top second color//////
    $('.changeable_b_s').removeClass($.session.get("OldBorderSecondColor"));
    $('.changeable_b_s').addClass('border_second_' + new_color);
    //////Border left second color//////
    $('.changeable_b_l_s').removeClass($.session.get("OldBorderLeftSecondColor"));
    $('.changeable_b_l_s').addClass('border_left_second_' + new_color);
    //////Borders second color//////
    $('.changeable_bs_s').removeClass($.session.get("OldBorderColor"));
    $('.changeable_bs_s').addClass('border_' + new_color);
    ///// before after /////
    $('#profile_img, .report_div ').removeClass($.session.get("BeforeAfterColor"));
    $('#profile_img, .report_div').addClass(new_color + '_hover');
    ///// fill svg /////
    $('.changeable_fill').removeClass($.session.get("MainFillcolor"));
    $('.changeable_fill').addClass(new_color + '_fill');
    ///// fill second color svg /////
    $('.changeable_fill_s').removeClass($.session.get("SecondFillcolor"));
    $('.changeable_fill_s').addClass(new_color + '_fill_s');
    ///// second font color  /////
    $('.changeable_s_f').removeClass($.session.get("SecondFontColor"));
    $('.changeable_s_f').addClass(new_color + '_f_s');
    $.session.set("OldColor", new_color);
    $.session.set("OldSecondColor", 'second_' + new_color);
    $.session.set("OldBorderSecondColor", 'border_second_' + new_color);
    $.session.set("OldBorderLeftSecondColor", 'border_left_second_' + new_color);
    $.session.set("OldBorderColor", 'border_' + new_color);
    $.session.set("BeforeAfterColor", new_color + '_hover');
    $.session.set("MainFillcolor", new_color + '_fill');
    $.session.set("SecondFillcolor", new_color + '_fill_s');
    $.session.set("SecondFontColor", new_color + '_f_s');

    olderColor = $.session.get("OldColor");
    OldSecondColor = $.session.get("OldSecondColor");
    SecondFontColor = $.session.get("SecondFontColor");
    SecondFillcolor = $.session.get("SecondFillcolor");
    BeforeAfterColor = $.session.get("BeforeAfterColor");
    OldBorderColor = $.session.get("OldBorderColor");
    if (BeforeAfterColor != null) {
        $('#profile_img, .report_div, .checkmark, .li_hover_tab, .radio.checkmark, .group_after, #wizard-progress .step-indicator li .step, #wizard-progress .step-indicator li .caption , #wizard-progress .step-indicator li .step svg, #wizard-progress .step-indicator li.complete, #wizard-progress .step-indicator li.complete .step svg').addClass(BeforeAfterColor);

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
        $('*').each(function () {
            if ($(this).hasClass('changeable_bs_s')) {
                $(this).removeClass('border_color');
                $(this).addClass(OldBorderColor);
            }
        });
    }



}
function FillMenuAdministration(Administration_Menu) {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'MenuItemsList?token=' + document.getElementById("TokenHidden").value,
        cache: false
    }).then(function (data) {
        var site_Administration_Menu = [];
        var Administration_parentId = 0;
        var childern_Administration = [];

        Administration_parentId = Administration_Menu.Id;
        site_Administration_Menu.push(Administration_Menu);

        SiteMenuChildren(site_Administration_Menu, Administration_parentId, data);
        GetChildren(childern_Administration, site_Administration_Menu, data);
        sessionStorage.setItem('siteAdminhMenu', JSON.stringify(site_Administration_Menu));
        sessionStorage.setItem('siteAdminMenuChildren', JSON.stringify(childern_Administration));
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function OpenAdministration(item) {
    profileMenuSelect(item.id);
    var url = 'views/AdministrationForm.html?ParentId=' + $(item).attr("id");
    LoadViewToDiv(url, 'body_content');
    HideMask()
}
function FillMenuCoress() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'MenuItemsList?token=' + document.getElementById("TokenHidden").value,
        cache: false
    }).then(function (data) {
        var siteMenu = [];
        var siteSearchMenu = [];
        var parentSearchId = 0;
        var parentId = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].Text.trim() == 'New' || data[i].Text.trim() == "جديدة" || data[i].Text.trim() == "Nouveau") {
                parentId = data[i].Id;
                siteMenu.push(data[i]);
                var html = '';
                html += '<div id="divNew" class="body_head_tab tab_border_right create">';
                html += '<div id="create_corres" data-id="' + data[i].Id + '" class="' + $.session.get("OldColor") + ' changeable" onclick="' + data[i].Function + '">';
                html += '<div id="create_corr_color" class="changeable_s ' + $.session.get("OldSecondColor") + '" style="width: 0px;"></div>';
                html += '<span class="create_corr_text">' + resources_CreateCorrespondence + '</span></div></div>';

                $('#body_head').append(html);
            }
            if (data[i].Text.trim() == 'Search' || data[i].Text.trim() == 'بحث' || data[i].Text.trim() == 'Chercher') {
                parentSearchId = data[i].Id;
                sessionStorage.setItem('parentSearchId', parentSearchId);
                siteSearchMenu.push(data[i]);
                $('#search_icon_div').attr('data-id', data[i].Id);
            }
        }
        $('#create_corres').hover(function () {

            $('#create_corr_color').stop().animate({
                width: '240px'
            });
        }, function () {
            $('#create_corr_color').stop().animate({
                width: '0px'
            });
        });
        SiteMenuChildren(siteMenu, parentId, data);
        var children = [];
        GetChildren(children, siteMenu, data);
        sessionStorage.setItem('siteMenu', JSON.stringify(siteMenu));
        sessionStorage.setItem('siteMenuChildren', JSON.stringify(children));
        var childernSearch = [];
        SiteMenuChildren(siteSearchMenu, parentSearchId, data);
        GetChildren(childernSearch, siteSearchMenu, data);
        sessionStorage.setItem('siteSearchMenu', JSON.stringify(siteSearchMenu));
        sessionStorage.setItem('siteSearchMenuChildren', JSON.stringify(childernSearch));


    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });

}
function SiteMenuChildren(siteMenu, parentId, data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].ParentId == parentId) {
            siteMenu.push(data[i]);
        }
    }

}
function GetChildren(children, siteMenu, data) {
    for (var i = 0; i < siteMenu.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (siteMenu[i].Text != 'New') {
                if (data[j].ParentId == siteMenu[i].Id) {
                    children.push(data[j]);
                }
            }
        }
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function NewCorrespondence(item, fromReply) {
    if (fromReply == "true") {
        $('.UserNodeSelected').removeClass('UserNodeSelected');
        topFunction();
        var tr = gridtable.row(".selected");
        var row = gridtable.row(tr);
        var data = row.data();
        LoadViewCorres('createCorrespondance.html?ParentId=' + $(item).attr("id") + '&fromReply=' + fromReply + '&DocumentId=' + data.DOC_ID);
    }
    else {
        $('#divNew').remove();
        FillMenuCoress();
        $('.UserNodeSelected').removeClass('UserNodeSelected');

        topFunction();
        LoadViewCorres('createCorrespondance.html?ParentId=' + $(item).attr("data-id") + '&fromReply=' + fromReply);
    }
}
function LoadViewCorres(url) {
    $('#body_content').attr("url", url);
    if (url.indexOf("?") > -1) {
        url = url.substring(0, url.indexOf("?"));
    }
    $('#body_content').empty();
    $('#body_content').load('views/' + url + '');
}
function FillGridTasksControlParam(dataReturned, gridName, viewId, defaultGrid) {
    $.ajax({
        url: AppSettings.ActionsUrl + "GetInboxTasksParamControl?token=" + loggedInUser.Token.Token + "&viewEscount=" + viewId,
        async: true
    }).then(function (retVal) {

        var xmlFields = "";
        for (var i = 0; i < retVal.length; i++) {
            if (retVal[i].Name == "Correspondence") {
                for (var j = 0; j < retVal[i].Parameters.length; j++) {
                    if (retVal[i].Parameters[j].Key == "listfields") {
                        xmlFields = retVal[i].Parameters[j].Value;
                    }
                }
            }
        }
        if (window.DOMParser) {
            var parser = new DOMParser(),
                xml = parser.parseFromString(xmlFields, "text/xml");
        } else { // Internet Explorer
            var xml = new ActiveXObject("Microsoft.XMLDOM");
            xml.async = false;
            xml.loadXML(xmlFields);
        }

        objectfields = [];
        var fields = xml.getElementsByTagName('field');
        for (var i = 0; i < fields.length; i++) {
            var sep = fields[i].getElementsByTagName('sep')[0];
            var name = fields[i].getElementsByTagName('name')[0];
            var objectfield = [];
            objectfield.sep = sep.textContent;
            objectfield.name = name.textContent;
            objectfields.push(objectfield);
        }
        if (defaultGrid) {
            gridHtmlDefault(gridName);
        } else {

            GetGridHtml(dataReturned, gridName, objectfields);
        }
        //retVal.length > 0 ? GetGridHtml(retVal, "#tasks") : null;
        //$("#taskCount").prepend("[ " + (retVal.length > 0 ? retVal.length : 0) + " ]");
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function FillGridTasks() {
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = NodeNew;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = '';
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {
        var viewId = sessionStorage.getItem('DocumentInboxNewHome');
        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#tasks", viewId, false) : FillGridTasksControlParam(data, "#tasks", viewId, true);
        $("#taskCount").prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");

        FillGridMyInfos();
    });

    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasks?token=" + loggedInUser.Token.Token + "&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (retVal) {
    //    retVal.length > 0 ? FillGridTasksControlParam(retVal, "#tasks") : null;
    //    $("#taskCount").prepend("[ " + (retVal.length > 0 ? retVal.length : 0) + " ]");
    //}).fail(function (error) {
    //});
}
function FillGridMyInfos() {
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = NodeForInfo;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = '';
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {
        var viewId = sessionStorage.getItem('DocumentInboxForInfoHome');
        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#Infos", viewId, false) : FillGridTasksControlParam(data, "#Infos", viewId, true);
        $("#myInfosCount").prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");

    });
    //var filter = sessionStorage.getItem("purposeId");
    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasksWithFilter?token=" + loggedInUser.Token.Token + "&searchFilter='" + filter + "'&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (retVal) {
    //    retVal.length > 0 ? FillGridTasksControlParam(retVal, "#Infos") : null;
    //    $("#myInfosCount").prepend("[ " + (retVal.length > 0 ? retVal.length : 0) + " ]");
    //}).fail(function (error) {
    //});
}
function gridHtmlDefault(gridName) {
    $(gridName + ' #ul_table').remove();
    $(gridName + ' .alignCenterText').remove();
    var html =
        '<div class="alignCenterText">' + resources_NoMatchingRecordsFound + '</div>';
    $(gridName).append(html);
    hideLoader(gridName);
}
function GetGridHtml(retVal, gridName, fieldsFromControl) {
    $(gridName + ' #ul_table').remove();
    $(gridName + ' .alignCenterText').remove();
    var html = '';
    html += '<ul id="ul_table">';
    for (var i = 0; i < retVal.length; i++) {

        var countRemainingDays = retVal[i].TSF_DUE_DATE == null ? 0 : getDaysDifference(retVal[i].TSF_DUE_DATE);
        var profilePictureBase64 = "data:image/jpeg;base64," + (retVal[i].SENDER_PROFILE_PICTURE != null ? _arrayBufferToBase64(retVal[i].SENDER_PROFILE_PICTURE) : '');
        var fadeLine = retVal[i].TSF_ISREAD == false ? '' : 'fade_line';
        var firstName = retVal[i].FROMUSER.split(' ').slice(0, -1).join(' ');
        var lastName = retVal[i].FROMUSER.split(' ').slice(-1).join(' ');
        var spanSenderProfile = '<span id="grid_profilePicture" class="changeable_s ' + $.session.get("OldSecondColor") + '">' + firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase() + '</span>';
        var imgSenderProfile = '<img src= "' + profilePictureBase64 + '" />';
        var imgtaskdiv = retVal[i].SENDER_PROFILE_PICTURE == null ? spanSenderProfile : imgSenderProfile;
        html += '<li id="' + retVal[i].TSF_ID + '">';
        html += '<div class="color_line float_left ' + $.session.get("OldSecondColor") + ' changeable_s ' + fadeLine + '"></div>';
        html += '<div class="img_table float_left">' + imgtaskdiv + '</div>';
        html += '<div class="text_table float_left">';
        var transferReceivedByUser = '';
        if (retVal[i].CONTACTID != null && retVal[i].CONTACTID !== undefined) {
            transferReceivedByUser = retVal[i].CONTACTID;
        }
        var receiverName = '';
        if (retVal[i].CONTACTID != null) {
            receiverName = retVal[i].TSF_TO_FULL_NAME;
        }
        var locked = (retVal[i].TSF_TOCONTACT !== true && transferReceivedByUser != '');
        var registerDate;
        var parmeter;
        var varhtml = '';
        var subvarhtml = '';
        for (var index = 0; index < fieldsFromControl.length; index++) {
            if (index == 0) {
                html += '<span class="span_table dark_grey_color">' + getLock(locked, retVal[i].TSF_LOCKDATE, receiverName, retVal[i].TSF_LOCKEDBY)
                    + getImportanceLevel(retVal[i].PRIORITY_ID) + (retVal[i][fieldsFromControl[index].name] != null ? encodeHTML(retVal[i][fieldsFromControl[index].name]) : '') + '</span>';
            }
            else if (index == 1) {
                if (fieldsFromControl[index].name == 'SYSREGDATE') {
                    if (loggedInUser.Token.ShowHijriCalendar) {
                        parmeter = dateRenderer(retVal[i].SYSREGDATE);
                    }
                    else {
                        registerDate = new Date(parseInt(retVal[i].SYSREGDATE.slice(6, 19)));
                        parmeter = convertTodateFormat(registerDate);
                    }
                } else {
                    parmeter = retVal[i][fieldsFromControl[index].name];
                }
                subvarhtml += parmeter + ' - ';
            } else if (index == 2) {
                if (fieldsFromControl[index].name == 'SYSREGDATE') {
                    if (loggedInUser.Token.ShowHijriCalendar) {
                        parmeter = dateRenderer(retVal[i].SYSREGDATE);
                    }
                    else {
                        registerDate = new Date(parseInt(retVal[i].SYSREGDATE.slice(6, 19)));
                        parmeter = convertTodateFormat(registerDate);
                    }
                } else {
                    parmeter = retVal[i][fieldsFromControl[index].name];
                }
                subvarhtml += parmeter;
            } else if (index == fieldsFromControl.length - 1) {
                if (fieldsFromControl[index].name == 'SYSREGDATE') {
                    if (loggedInUser.Token.ShowHijriCalendar) {
                        parmeter = dateRenderer(retVal[i].SYSREGDATE);
                    }
                    else {
                        registerDate = new Date(parseInt(retVal[i].SYSREGDATE.slice(6, 19)));
                        parmeter = convertTodateFormat(registerDate);
                    }
                } else {
                    parmeter = retVal[i][fieldsFromControl[index].name];
                }
                varhtml += parmeter + ' ';
            } else {
                if (fieldsFromControl[index].name == 'SYSREGDATE') {
                    if (loggedInUser.Token.ShowHijriCalendar) {
                        parmeter = dateRenderer(retVal[i][fieldsFromControl[index].name]);
                    }
                    else {
                        registerDate = new Date(parseInt(retVal[i][fieldsFromControl[index].name].slice(6, 19)));
                        parmeter = convertTodateFormat(registerDate);
                    }
                } else {
                    parmeter = retVal[i][fieldsFromControl[index].name];
                }
                varhtml += parmeter + ' ' + fieldsFromControl[index].sep + ' ';
            }
        }
        html += '<span class="span_table" ' + (subvarhtml.length > 52 ? 'title="' + subvarhtml + '"' : '') + '>' + subvarhtml + '</span>';
        html += '<span class="span_table light_grey_color">' + varhtml + '</span>';
        html += '</div>';
        html += '<div class="filter float_right"></div>';
        html += '<div class="remaining float_right ">';
        html += '<div class="percent">' + countRemainingDays + '</div>';
        html += '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="54" height="54" xmlns="http://www.w3.org/2000/svg">';
        html += '<circle class="circle-chart__background " stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />';
        html += '<circle class="circle-chart__circle ' + getCircleColor(countRemainingDays)
            + '" stroke="#00acc1" stroke-width="2" stroke-dasharray="' + (countRemainingDays >= 0 ? countRemainingDays : 100) + ' , 100" stroke-linecap="round"  fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />';
        html += '</svg>';
        html += '</div>';
        html += '</li>';

    }
    html += '</ul>';
    $(gridName).append(html);
    hideLoader(gridName);
    if (loggedInUser.Token.Language.toLowerCase() == 'ar') {
        typeof $('#table_content_holder')[0] != 'undefined' ? $('#table_content_holder').attr('data-simplebar-direction', 'rtl') : null;
        typeof $('#table_content_holder')[0] != 'undefined' ? new SimpleBar($('#table_content_holder')[0]) : null;
    } else {
        typeof $('#table_content_holder')[0] != 'undefined' ? new SimpleBar($('#table_content_holder')[0]) : null;
    }
}
function getImportanceLevel(priority) {
    var html = '';
    if (priority == 3) {
        html += '<b title="' + resources_Urgent + '"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" x="0px" y="0px"'
            + ' viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve" class="svg_privacy">'
            + '<path fill="#ffa500" d="M26.129,638.241h361.736c58.174,0,94.203-63.251,64.497-113.291L271.497,192.474c-29.059-48.921-99.896-48.986-128.994,0'
            + ' L-38.353,524.95C-68.059,574.939-32.094,638.241,26.129,638.241z M177,308.241c0-16.538,13.462-30,30-30s30,13.462,30,30v150'
            + ' c0,16.538-13.462,30-30,30s-30-13.462-30-30V308.241z M207,518.241c16.538,0,30,13.462,30,30c0,16.538-13.462,30-30,30'
            + ' s-30-13.462-30-30C177,531.703,190.462,518.241,207,518.241z"/></svg></b>';
    } else if (priority == 4) {
        html += '<b title="' + resources_TopUrgent + '"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" x="0px" y="0px"'
            + ' viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve" class="svg_privacy">'
            + '<path fill="#f00" d="M26.129,638.241h361.736c58.174,0,94.203-63.251,64.497-113.291L271.497,192.474c-29.059-48.921-99.896-48.986-128.994,0'
            + ' L-38.353,524.95C-68.059,574.939-32.094,638.241,26.129,638.241z M177,308.241c0-16.538,13.462-30,30-30s30,13.462,30,30v150'
            + ' c0,16.538-13.462,30-30,30s-30-13.462-30-30V308.241z M207,518.241c16.538,0,30,13.462,30,30c0,16.538-13.462,30-30,30'
            + ' s-30-13.462-30-30C177,531.703,190.462,518.241,207,518.241z"/></svg></b>';
    }

    return html;
}
function getCircleColor(colorCounter) {
    if (colorCounter <= 0) {
        return "fill_in_red";
    } else if (colorCounter > 0 && colorCounter <= 2) {
        return "fill_in_orange";
    } else {
        return "fill_in_green";
    }
}
function getDaysDifference(firstdateNb) {
    var firstDateExtract = parseInt(firstdateNb.slice(6, 19));
    var firstdate = new Date(firstDateExtract);
    var seconddate = new Date();
    var timeDiff = firstdate.getTime() - seconddate.getTime();
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var sign = timeDiff ? timeDiff < 0 ? -1 : 1 : 0
    if (diffDays == 0) {
        return parseInt(diffDays);
    }
    if (sign == -1) {
        timeDiff = Math.abs(timeDiff);
        diffDays = -Math.ceil(timeDiff / (1000 * 3600 * 24));
    } else if (sign = -1) {
        return parseInt(diffDays) - 1;
    }

    return parseInt(diffDays);
}
function convertTodateFormat(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2),
        hours = ("0" + date.getHours()).slice(-2),
        minutes = ("0" + date.getMinutes()).slice(-2);

    if (loggedInUser.Token.Language.toLowerCase() == Constants.AR.toLowerCase()) {
        ampm = hours >= 12 ? "م" : "ص";
    } else {
        ampm = hours >= 12 ? 'PM' : 'AM';
    }
    return [day, mnth, date.getFullYear()].join("/") + " " + [hours, minutes].join(":") + " " + ampm;
}
function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
function urltoFile(url, filename, mimeType) {
    return (fetch(url)
        .then(function (res) { return res.arrayBuffer(); })
        .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
    );
}
function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}
function PageLoad() {
    alert("fail")
    // FillHiddenFields();
    //GetCTSReports()
    //UserPerformanceCount();
}
function FillUserProfileMenu() {
   
    for (var userMenu = 0; userMenu < data.length; userMenu++) {
        if (data[userMenu].Text == resources_Administration) {
            FillMenuAdministration(data[userMenu]);
        }
        var menuFunction = data[userMenu].Function;
        var menuFunctionType = data[userMenu].FunctionType;
        if (menuFunction != '') {
            var mainLi = document.createElement("li");
            mainLi.setAttribute("id", data[userMenu].Id);
            var mainAnchor = document.createElement('a');
            //mainAnchor.setAttribute("href", "");
            mainAnchor.setAttribute("class", "CursorDesign");
            mainAnchor.setAttribute("id", "Anchor_" + data[userMenu].Id);
            //if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            //    $(mainAnchor).html(data[userMenu].Text + "<div class='li_circle " + $.session.get("OldSecondColor") + " changeable_s'></div>");
            //} else {
            $(mainAnchor).html("<div class='li_circle " + $.session.get("OldSecondColor") + " changeable_s'></div>" + data[userMenu].Text + "");
            //}

            $(mainLi).append($(mainAnchor));
            if (menuFunctionType == 'URL') {
                var closeImage = 'Style/' + productVersion + '/' + imagePath + '/Resources/Images/CloseTab.svg';
                if (IsPlatformIOS() || isMobile.any()) {
                    closeImage = 'Style/' + productVersion + '/' + imagePath + '/Resources/Images/CircleCloseGrey.svg';
                }
                $(mainLi)[0].setAttribute("onclick", "CreateTab('" + data[userMenu].Text + "', 'GenericTab" + $(mainLi)[0].id + "','" + menuFunction + "', false, '" + closeImage + "','body_content');");
            }
            else if (menuFunctionType == 'Javascript') {
                $(mainLi)[0].setAttribute("onclick", menuFunction + ";return false;");
            }
            $(mainLi).insertAfter("#CustomFolderUrlLi");
        }
    }
    

    
}
function LogOut() {

    GetHomeParentWindow(window).ShowConfirmation(resources_Title, resources_LogoutConfirmation, function () { LogoutConfirmation(); }, null, true);
    //LogoutConfirmation();
}
function LogoutConfirmation() {
    sessionStorage.setItem("loggedInUser", '');
    //ShowMask();
    $.ajax({
        url: document.getElementById("AutheticationUrlHidden").value + 'Logout?userToken=' + document.getElementById("TokenHidden").value
    }).then(function () {
        HideMask();
        // window.location = "Login.html?signOut=1";
    }).fail(function (fail) {
        HideMask();
        HandleUnAuthotizedException(fail);
    });

}
function FillHiddenFields() {
    document.getElementById("InboxActionsUrlHidden").value = AppSettings.InboxActionsUrl;
    document.getElementById("ContactGcIdHidden").value = loggedInUser.Token.GctId.toString();
    document.getElementById("StructureGcIdHidden").value = loggedInUser.Token.StructureGctId.toString();
    document.getElementById("StructureStcIdHidden").value = loggedInUser.Token.StructureSTCId.toString();
    document.getElementById("TokenHidden").value = loggedInUser.Token.Token;
    document.getElementById("AutheticationUrlHidden").value = AppSettings.AuthenticationUrl;
    document.getElementById("ActionsUrlHidden").value = AppSettings.ActionsUrl;
    document.getElementById("AddressBookUrlHidden").value = AppSettings.AddressBookUrl;
    document.getElementById("DMSUrlHidden").value = AppSettings.DMSUrl;
    document.getElementById("BAMReportsUrl").value = AppSettings.BAMReportsUrl;
    document.getElementById("LanguageHidden").value = loggedInUser.Token.Language;
    document.getElementById("RootUrlHidden").value = AppSettings.LocalRootPath;
    document.getElementById("GenericFormsHidden").value = AppSettings.GenericForms;
    document.getElementById("SearchDisplay").value = loggedInUser.Token.DefaultDisplaySearch == null ? "false" : loggedInUser.Token.DefaultDisplaySearch.toString();
    document.getElementById("NewDisplay").value = loggedInUser.Token.DefaultDisplayList == null ? "false" : loggedInUser.Token.DefaultDisplayList.toString();
    document.getElementById("ReportUrl").value = AppSettings.ReportUrl;
}
function profileMenuSelect(nodeId) {
    //$('#profile_ul_menu li').removeClass('UserNodeSelected');
    //$('#' + nodeId).addClass('UserNodeSelected');
    //$('#' + nodeId).removeAttr('UserNodeSelected');
}
function OpenUserProfile(liNode) {
    //OpenWindow('DialogIframe', 'DialogDiv', 'Templates/UserProfile.html', $(window).width() * 0.7, $(window).height() * 0.8, resources_UserProfile, false, false);
    // OpenPopupDialog('UserProfile.html', 'popup', resources_UserProfile, $(window).width() * 0.7, $(window).height() * 0.8);
    profileMenuSelect(liNode.id);
    CreateTab(resources_UserProfile, 'GenericTabProfile', 'Templates/UserProfile.html', false, 'Style/5.3.1/EverteamTheme/Resources/Images/CloseTab.svg', 'body_content');
    HideMask();
}
function CreateCustomFolder(liNode, inPopup) {

    ShowMask();
    if (!inPopup) {
        CreateTab(resources_CustomFolder, 'GenericTabCustomRule', 'Templates/CustomFolder.html', false, 'Style/5.3.1/EverteamTheme/Resources/Images/CloseTab.svg', 'body_content');
    } else {
        CreateTab(resources_CustomFolder, 'GenericTabCustomRule', 'Templates/CustomFolder.html?NodeId=' + liNode, false, 'Style/5.3.1/EverteamTheme/Resources/Images/CloseTab.svg', 'body_content');
    }

}
/////////////////////////////////NOTIFICATIONS////////////////////////
function BuildNotifiationList(notifData) {
    $('#notification_content').text('');
    var htmlli = '<ul id="NotificatioUl">';
    for (var i = 0; i < notifData.length; i++) {
        var date = '';
        if (notifData[i].CreateDate != null) {
            date = dateRenderer(notifData[i].CreateDate);
        }
        var firstName = "";
        var lastName = "";
        if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            firstName = notifData[i].SenderAr != null ? notifData[i].SenderAr.split(' ').slice(0, -1).join(' ') : '';
            lastName = notifData[i].SenderAr != null ? notifData[i].SenderAr.split(' ').slice(-1).join(' ') : '';
        } else {
            firstName = notifData[i].Sender != null ? notifData[i].Sender.split(' ').slice(0, -1).join(' ') : '';
            lastName = notifData[i].Sender != null ? notifData[i].Sender.split(' ').slice(-1).join(' ') : '';
        }
        var NotifierProfilePicture = "data:image/jpeg;base64," + (notifData[i].NotifierProfilePicture != null ? _arrayBufferToBase64(notifData[i].NotifierProfilePicture) : '');

        var spanNotifierrProfile = '<span id="picture_profile" class="changeable_s ' + $.session.get("OldSecondColor") + '">' + firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase() + '</span>';
        //'<span>' + firstName.charAt(0).toUpperCase() + '<label>' + lastName.charAt(0).toUpperCase() + '</label></span>';
        var imgNotifierProfile = '<img src= "' + NotifierProfilePicture + '" />';
        var imgtaskdiv = notifData[i].NotifierProfilePicture == null ? spanNotifierrProfile : imgNotifierProfile;
        notifData[i].Note = notifData[i].Note.replace("[Reference]", "[ ]");
        var senderName = '';
        if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            senderName = notifData[i].SenderAr;
        } else if (loggedInUser.Token.Language.toLowerCase() == "fr") {
            senderName = notifData[i].SenderFr;
        } else {
            senderName = notifData[i].Sender;
        }
        htmlli += '<li id="li_notification' + notifData[i].Id + '" ><div class="photo_notification"> ';
        htmlli += imgtaskdiv;
        htmlli += '</div><div class="notification_text">';
        htmlli += '<span class="dark_grey_color nameFrmNotif">' + senderName + '</span>';
        htmlli += '<span class="notificationBody" class="notificationBody" onclick= "OpenNotification(' + notifData[i].TransferId + ', ' + notifData[i].Id + ')">' + notifData[i].Note + '</span>';
        htmlli += '<span class="notificationDateTime">' + dateRenderer(notifData[i].CreateDate) + '</span></div>';
        htmlli += '<div class="notification_delete">';
        htmlli += '<img id="img_delete" class="img_notification" data-id="1" src= "images/svg/clear_x.svg" onclick = "DeleteNotification(' + notifData[i].Id + ')" /></div></li>';

    }
    htmlli += '</ul>';
    $('#notification_content').append(htmlli);
    if (loggedInUser.Token.Language.toLowerCase() == 'ar') {
        $('#NotificatioUl').attr('data-simplebar-direction', 'rtl');
        new SimpleBar($('#NotificatioUl')[0]);
    } else {
        new SimpleBar($('#NotificatioUl')[0]);
    }

}
function OpenNotification(transferID, notificationID) {

    sessionStorage.setItem("TSF_Home", transferID);
    DeleteNotification(notificationID);
    ShowMask();
    myTasksPlus();
}
function LoadNotification() {
    var notifTimeout = sessionStorage.getItem('NotificationTimout') * 60 * 1000;
    UserPerformanceCount();
    if (sessionStorage.getItem('NotificationTimout') > 0) {
        OpenNotifMenu();
        FillNotifications();
        setInterval(function () {
            OpenNotifMenu();
            FillNotifications();
        }, notifTimeout);
    } else {
        $('#notification').hide();
    }

}
function FillNotifications() {

    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'UserNotificationsCount?token=' + loggedInUser.Token.Token
    }).then(function (data) {
        FillCount(data);
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function FillCount(count) {
    if (count > 0) {
        $('#CounterSpan1').text(' [ ' + kMFormatter(count) + ' ]');
        $('#CounterSpan').text(kMFormatter(count));
        $('#CounterSpan').attr('data-id', count);
    } else {
        $('#CounterSpan1').text(' [ 0 ]');
        $('#CounterSpan').text('0');
        $('#CounterSpan').attr('data-id', 0);

    }
}
function OpenNotifMenu() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'UserNotifications?token=' + document.getElementById("TokenHidden").value
    }).then(function (notifData) {
        BuildNotifiationList(notifData);
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function DeleteNotification(id) {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'DeleteNotifications?token=' + document.getElementById("TokenHidden").value + '&id=' + id,
    }).then(function (data) {
        if (loggedInUser.Token.Language.toLowerCase() == "ar") {
            $('#li_notification' + id).animate({
                "margin-right": "-350px"
            }, 100);
        } else {
            $('#li_notification' + id).animate({
                marginLeft: '350px'
            }, 100);
        }

        $('#li_notification' + id).fadeOut('slow');
        var howMany = $('#CounterSpan').attr('data-id') - 1;
        $('#CounterSpan').attr('data-id', howMany);
        $('#CounterSpan').text(kMFormatter(howMany));
        $('#CounterSpan1').text(' [ ' + kMFormatter(howMany) + ' ]');

    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
/////////////////////////////////REPORTS////////////////////////
function UserPerformanceCount() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'UserPerformanceCount?token=' + document.getElementById("TokenHidden").value
    }).then(function (data) {
        FillPerformanceCount(data);
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function FillPerformanceCount(count) {

    $('#nbr_corres').text('');
    $('#dashboard-stats').text('');
    var htmlli2 = '<ul>';
    for (var i = 0; i < count.length; i++) {
        var htmlli1 = '';
        htmlli1 += '<div class="row"><span class="label">' + count[i].Title
            + '</span> <div class="bar-wrap"><div class="bar ' + $.session.get("OldSecondColor") + ' changeable_s" data-value="' + count[i].Count + '"></div></div><span class="number">' + count[i].Count + '</span> </div>';

        htmlli2 += '<li id="li' + parseInt(i + 1) + '" data-value="' + count[i].CountAll + '">' + count[i].CountAll + '</li>';

        $('#dashboard-stats').append(htmlli1);
    }
    htmlli2 += '</ul>';
    $('#nbr_corres').append(htmlli2);
    hideLoader('#performance');
    generateBarGraph('#dashboard-stats');
}
function generateBarGraph(wrapper) {
    // Set Up Values Array
    var values = [];

    var chart_i = 1;
    // Get Values and save to Array
    //   $(wrapper + ' .bar').each(function(index, el) {
    //     values.push($('#li'+chart_i).data('value'));

    //   });

    //   $.each(values, function( index, value ) {
    //     // alert( index + ": " + value );
    //     });

    // Get Max Value From Array

    // Set width of bar to percent of max value
    $(wrapper + ' .bar').each(function (index, el) {
        var max_value = $('#li' + chart_i).data('value');
        var bar = $(this),
            value = bar.data('value'),
            percent = Math.ceil((value / max_value) * 100);
        // alert(percent+','+value+','+max_value);

        // Set Width & Add Class
        bar.width(percent + '%');
        bar.addClass('in');
        chart_i++;

    });
}
function GetCTSReports() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'GetCTSReports?token=' + document.getElementById("TokenHidden").value,
    }).then(function (data) {
        fillReports(data)
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function fillReports(data) {
    $('#report_inside').text('');
    for (var i = 0; i < 7; i++) {
        var htmlli1 = '';
        htmlli1 += '<div class="report_div"><img class="report_img" src="images/svg/report.svg" />'
            + '<span class="span_report_txt">' + data[i].Text + '</span>';

        $('#report_inside').append(htmlli1);
    }
    htmlli1 = '<div class="report_div no_border"><div class="plus_more report_more ' + $.session.get("OldSecondColor") + ' changeable_s" onclick="GetAllReports()"><img src="images/svg/plus.svg" /></div></div>';
    $('#report_inside').append(htmlli1);
}
function GetAllReports() {
    $('#inside_body_content').fadeOut('slow');
    $('#svg_loader').fadeIn('slow');
    //setTimeout(function () {
    //    //$('#body_content').load('views/inside_reports.html');
    //}, 2000);
}
/////////////////////////////////SAVED QUERIES////////////////////////
function GetSavedQueries(fromAdvanced) {
    $('#savedQueries').attr('title', resources_SavedQuery);
    var params = {};
    params.token = document.getElementById("TokenHidden").value;
    var postedData = JSON.stringify(params);
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'SavedQueries',
        type: "POST",
        data: postedData,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
    }).then(function (data) {
        var displayItem = '';
        if (fromAdvanced) {
            displayItem = 'display: list-item;'
            if (!$('#menu_arrow').hasClass('active')) {

                $('#menu_arrow').addClass('active');
            }
        }
        $('#search_menu').text('');
        var htmlli1 = '';
        htmlli1 += '<ul id="search_ul_menu" class="' + $.session.get("OldBorderLeftSecondColor") + ' changeable_b_l_s" >';
        for (var i = 0; i < data.SavedQueriesResult.length; i++) {
            htmlli1 += '<li id="' + data.SavedQueriesResult[i].Id + '" class="SavedQueryLiClick" style="' + displayItem + '" name="' + data.SavedQueriesResult[i].Name + '"> '
                + (loggedInUser.Token.Language.toLowerCase() == "ar" ? '<div class="sqClass"><a class="cursor" title="' + data.SavedQueriesResult[i].Name + '">' + data.SavedQueriesResult[i].Name + ' <div class="li_circle ' + $.session.get("OldSecondColor") + ' changeable_s" ></div></a></div>' : '<div class="sqClass"><a class="cursor" title="' + data.SavedQueriesResult[i].Name + '"> <div class="li_circle ' + $.session.get("OldSecondColor") + ' changeable_s" ></div>' + data.SavedQueriesResult[i].Name + '</a></div>')
                + '<div class="svgClass2"><svg id="deleteQuery" class="deleteQueryClass" version="1.1" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" fill="#fff" y="0px" width="300px" height="300px" viewBox="0 0 300 300" '
                + ' xml: space = "preserve" ><g>'
                + '<rect x="44.243" y="91.865" width="43.063" height="208.135"></rect>'
                + '<path d="M151.899,179.893V91.865h-43.063V300h31.701c-10.664-15.118-16.938-33.548-16.938-53.418 '
                + 'C123.601,220.439,134.461,196.791,151.899,179.893L151.899,179.893z M151.899,179.893"></path>'
                + '<path d="M216.493,153.69V91.865h-43.063v72.43C186.31,157.527,200.961,153.69,216.493,153.69L216.493,153.69z M216.493,153.69"></path>'
                + '<path d="M230.847,27.271h-59.845V0H89.734v27.271H29.889v43.063h200.958V27.271z M111.266,21.531h38.205v5.74h-38.205V21.531z '
                + 'M111.266,21.531"></path>'
                + '<path d="M211.005,181.787c-32.591,0-59.105,26.516-59.105,59.106S178.414,300,211.005,300s59.106-26.513,59.106-59.106 '
                + 'C270.111,208.303,243.596,181.787,211.005,181.787L211.005,181.787z M243.21,260.489l-12.609,12.609l-19.596-19.593l-19.595,19.593 '
                + 'l-12.609-12.609l19.595-19.596l-19.595-19.595l12.609-12.609l19.595,19.595l19.596-19.595l12.609,12.609l-19.597,19.595 '
                + 'L243.21,260.489z M243.21,260.489"></path></g></svg></div>'
                + '</li > ';
        }
        htmlli1 += '</ul >';

        $('#search_menu').append(htmlli1);
        $(".SavedQueryLiClick a").on("click", function (e) {
            var url = 'views/searchCorrespondance.html?ParentId=' + sessionStorage.getItem('parentSearchId') + '&nodeId=' + $(this).parent().parent().attr('id');
            LoadViewToDiv(url, 'body_content');
            HideMask()
        });
        $(document).delegate("#deleteQuery", "click", function (e) {
            DeleteSavedCriteria($(this).parent().parent('li').attr('id'), $(this).parent().parent('li').attr('name'));
        });
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
/////////////////////////////////USER NODES////////////////////////
function stopNodeAnimate(node) {
    $('.UserNodeSelected').removeClass('UserNodeSelected');

    $('#' + node.id).addClass('UserNodeSelected');
}
function RebuildUserNode(node) {
    node = node.replace(/ /g, '');
    if (typeof node != "undefined") {
        $('#' + node).addClass('UserNodeSelected');
        $('#inbox_ul_menu #' + node).trigger('click');
    }

}
function GetUserNodes() {
    var params = {};
    params.token = document.getElementById("TokenHidden").value;
    var postedData = JSON.stringify(params);
    $('#inbox_ul_menu').empty();
    var htmlli = '';
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'UserNodes',
        type: "POST",
        data: postedData,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
    }).then(function (data) {
        sessionStorage.setItem('UserNodes', data.UserNodesResult);
        UserNodes = data.UserNodesResult;
        for (var i = 0; i < data.UserNodesResult.length; i++) {

            if (data.UserNodesResult[i].NodeText.toLowerCase() == resources_CaseForInfo) {
                NodeForInfo = data.UserNodesResult[i].NodeId;
                if (loggedInUser.Token.Language.toLowerCase() == "ar") {
                    sessionStorage.setItem(data.UserNodesResult[i].NodeId, data.UserNodesResult[i].AdditionalQueryStringAr);
                } else {
                    sessionStorage.setItem(data.UserNodesResult[i].NodeId, data.UserNodesResult[i].AdditionalQueryString);
                }
                continue;
            }

            if (data.UserNodesResult[i].IsCustom == true) {
                htmlli += '<li class="customRule" ' + ($('#inbox_menu').css('min-height') == '32px' ? 'style="display:block"' : '') + ' data-id="' + data.UserNodesResult[i].NodeId + '" id="' + data.UserNodesResult[i].NodeText.replace(/\s/g, "") + '" onclick="stopNodeAnimate(this);getNodeComponents(\'' + data.UserNodesResult[i].NodeText + '\', ' + data.UserNodesResult[i].NodeId + ',' + undefined + ',' + data.UserNodesResult[i].Count + ')"> <a><div class="li_circle ' + $.session.get("OldSecondColor") + ' changeable_s"></div><div class="nodeText"><div class="customRuleOverflow" title="' + data.UserNodesResult[i].NodeText + '">'
                    + data.UserNodesResult[i].NodeText + '</div><div class="inbox_count"> [ ' + data.UserNodesResult[i].Count + ' ]</div></div></a></li>';
            }

            else {
                htmlli += '<li ' + ($('#inbox_menu').css('min-height') == '32px' ? 'style="display:block"' : '') + ' data-id="' + data.UserNodesResult[i].NodeId + '" id="' + data.UserNodesResult[i].NodeText.replace(/\s/g, "") + '" onclick="stopNodeAnimate(this);getNodeComponents(\'' + data.UserNodesResult[i].NodeText + '\', ' + data.UserNodesResult[i].NodeId + ',' + undefined + ',' + data.UserNodesResult[i].Count + ')"> <a><div class="li_circle ' + $.session.get("OldSecondColor") + ' changeable_s"></div><div class="nodeText">'
                    + data.UserNodesResult[i].NodeText + '<span class="inbox_count"> [ ' + data.UserNodesResult[i].Count + ' ]</span></div></a></li>';
            }
            if (loggedInUser.Token.Language.toLowerCase() == "ar") {
                sessionStorage.setItem(data.UserNodesResult[i].NodeId, data.UserNodesResult[i].AdditionalQueryStringAr);
            } else {
                sessionStorage.setItem(data.UserNodesResult[i].NodeId, data.UserNodesResult[i].AdditionalQueryString);
            }
            if (data.UserNodesResult[i].NodeText.toLowerCase() == resources_CaseFollowup) {
                NodeFollowup = data.UserNodesResult[i].NodeId;
            }
            if (data.UserNodesResult[i].NodeText.toLowerCase() == resources_CaseNew) {
                NodeNew = data.UserNodesResult[i].NodeId;
            }

        }
        $('#inbox_ul_menu').append(htmlli);
        FillGridTasks();
        $('.customRule').mousedown(function (e) {
            var nodeList = {};
            nodeList.text = $($(this).find(".customRuleOverflow")).attr('title');
            nodeList.id = $(this).data('id');
            $('.customRule').contextmenu({
                delegate: this,
                menu: customMenu(nodeList),
                select: function (event, ui) {
                    eval(ui.action);
                },
                beforeOpen: function (event, ui) {
                    var $menu = ui.menu,
                        $target = ui.target,
                        extraData = ui.extraData;
                    ui.menu.addClass('contextmenu-customwidth');
                },
            });
            return false;

        });
        hideLoader('#leftSideCustom');

    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function customMenu(node) {

    var item1 = {
        title: resources_Delete,
        action: function () {
            window.parent.ShowConfirmation(resources_Delete, resources_DeleteConfirmation + node.text + resources_QuestionMark, function () {
                $.ajax({
                    url: document.getElementById("InboxActionsUrlHidden").value + 'RemoveCustomFolder?token=' + document.getElementById("TokenHidden").value + '&folderId=' + node.id,
                    cache: false
                }).then(function () {
                    Alert(resources_SuccessfullyDeleted);
                    GetUserNodes();
                    if ($("#body_content").attr('url').contains('Templates/CustomFolder.html')) {
                        CreateCustomFolder('#CustomFolderUrlLi', false);
                    }
                }).fail(function (fail) {
                    HandleUnAuthotizedException(fail);
                });

            });
        },
    }
    var item2 = {
        title: resources_Edit,
        action: function () {
            CreateCustomFolder(node.id, true);

        },
    }
    var items = [item1, item2];
    return items;
}
function getNodeComponents(nodeTitle, nodeId, delegatedUserGctId, nodeCount) {
    // $('#inside_body_content').fadeOut('slow');
    var name = nodeTitle.toLowerCase();
    var isCustom = false;
    switch (name) {
        case resources_CaseDraft:
            $('#body_content').addClass('draft');
            CreateMailTab(resources_Draft, nodeId, "IsCustom=false&Count=" + nodeCount + "&" + sessionStorage.getItem(nodeId), delegatedUserGctId);
            break;
        case resources_CaseNew:
            $('#body_content').removeClass('draft');
            CreateMailTab(resources_MyTasks, nodeId, "IsCustom=false&Count=" + nodeCount + "&" + sessionStorage.getItem(nodeId), delegatedUserGctId);
            break;
        case resources_CaseSent:
            $('#body_content').removeClass('draft');
            CreateMailTab(resources_Sent, nodeId, "IsCustom=false&Count=" + nodeCount + "&" + sessionStorage.getItem(nodeId), delegatedUserGctId);
            break;
        case resources_CaseFollowup:
            $('#body_content').removeClass('draft');
            CreateMailTab(resources_MyFollowUp, nodeId, "IsCustom=false&Count=" + nodeCount + "&" + sessionStorage.getItem(nodeId), delegatedUserGctId);
            break;
        case resources_CaseForInfo:
            $('#body_content').removeClass('draft');
            CreateMailTab(resources_MyInfo, nodeId, "IsCustom=false&Count=" + nodeCount + "&" + sessionStorage.getItem(nodeId), delegatedUserGctId);
            break;
        case resources_CaseDeliveryNote:
            $('#body_content').removeClass('draft');
            CreateMailTab(resources_DeliveryNote, nodeId, "IsCustom=false&Count=" + nodeCount + "&" + sessionStorage.getItem(nodeId), delegatedUserGctId);
            break;
        case resources_CaseMyfavorites:
            $('#body_content').removeClass('draft');
            CreateMailTab(resources_MyFavorites, nodeId, "IsCustom=false&Count=" + nodeCount + "&" + sessionStorage.getItem(nodeId), delegatedUserGctId);
            break;
        default:
            isCustom = true;
            CreateMailTab(nodeTitle, nodeId, "IsCustom=false&Count=" + nodeCount + "&" + sessionStorage.getItem(nodeId), delegatedUserGctId);

    }

    if (typeof nodeId != "undefined") {
        var inboxArrow = "inbox_menu_arrow";
        var node;
        if (isCustom) {
            node = nodeTitle;
            node = node.replace(/ /g, '');
        }
        else {
            node = titleUpperCase(nodeTitle);
            node = node.replace(/ /g, '').charAt(0).toUpperCase() + node.slice(1);
        }
        if (typeof delegatedUserGctId != "undefined") {
            var inboxIndex = delegationInboxes[delegatedUserGctId];
            inboxArrow = inboxArrow + inboxIndex;
            node = node + inboxIndex;
        }
        if (typeof node != "undefined") {
            if (!$('#' + node).hasClass('UserNodeSelected')) {
                $('.UserNodeSelected').removeClass('UserNodeSelected');
                $('#' + node).addClass('UserNodeSelected');
                //$('#' + node).trigger('click');
            }
        }

        if (!$('#' + inboxArrow).hasClass('active')) {
            $('#' + inboxArrow).trigger('click');
        }
    }
    //$('.UserNodeSelected').removeClass('UserNodeSelected');

    //var node = titleUpperCase(nodeTitle);
    //node = node.replace(/ /g, '').charAt(0).toUpperCase() + node.slice(1);
    //if (typeof node != "undefined") {
    //    $('#' + node).addClass('UserNodeSelected');
    //}
    //if (typeof delegatedUserGctId === 'undefined' || delegatedUserGctId === 0) {
    //    if (!$("#inbox_menu_arrow").hasClass("active")) {
    //        //$("#inbox_menu_arrow").addClass("active");
    //        $("#inbox_menu_arrow").trigger("click");
    //    }
    //}
    //else {
    //    //delegation to be done
    //}
}
function CreateDelegationTrees() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'ContactsThoseDelegateYou?token=' + document.getElementById("TokenHidden").value,
        cache: false
    }).then(function (contacts) {

        for (var contactsIndex = 0; contactsIndex < contacts.length; contactsIndex++) {
            var gctId = contacts[contactsIndex].GctId;
            var inboxIndex = contactsIndex + 3; // plus 3 to skip the zero and the home and the main user inbox
            delegationInboxes[gctId] = inboxIndex;
            var delegationNav = document.createElement("nav");
            $(delegationNav).addClass("delegationNav ");

            var delegationA = document.createElement("a");
            $(delegationA).attr('data-hover', inboxIndex)
            $(delegationA).attr('onClick', 'animateToggleInbox(' + inboxIndex + ')');

            var name = '';
            if ($('#LanguageHidden').val() == 'AR') { name = contacts[contactsIndex].FullNameAr; } else if ($('#LanguageHidden').val() == 'FR') { name = contacts[contactsIndex].FullNameFr; } else { name = contacts[contactsIndex].FullName; }
            var name_retVal = '';
            if (name.length > 3) {
                name_retVal = name.substring(0, 3).trim() + resources_ThreePoints;
            } else {
                name_retVal = name;
            }
            $(delegationA).html(
                '<div id="nav_hover' + inboxIndex + '" class="nav_hover changeable_s ' + $.session.get("OldSecondColor") + '"></div><span class="nav_img"><img src="images/svg/inbox.svg" /></span>' +
                '<span class="nav_hide">' +
                '<div id="inbox_menu_arrow' + inboxIndex + '" class="inboxNode_arrow_down inboxNode_menu_arrow" onclick="this.classList.toggle(\'active\')">' +
                '</div> <div class="delegateMenu" title="' + resources_InboxOf + ' ' + name + '"><span class="delegateSpanTrunc"><span class="tooltiptext">' + resources_InboxOf + ' ' + name + '</span></span>');

            //Responsive Code
            //if (IsPlatformIOS() || isMobile.any()) {
            //	$('#respInboxTree').append(delegationDiv);
            //} else {
            //	$('#delegationTrees').append(delegationDiv);
            //}
            $(delegationNav).append(delegationA);
            $('#inbox_menu').after(delegationNav);

            drawNodes(gctId, delegationNav, inboxIndex);

            $.ajax({
                url: AppSettings.ActionsUrl + "GetUserToken?token=" + loggedInUser.Token.Token + "&gctId=" + gctId,
                async: true
            }).then(function (DelegatedUser) {
                //delegatedUser = DelegatedUser;
                //sessionStorage.setItem("delegatedUser-" + gctId, delegatedUser)
                if (typeof delegatedUsers == "undefined")
                    delegatedUsers = [];

                delegatedUsers.push(DelegatedUser);
            }).fail(function (fail) {
                HandleUnAuthotizedException(fail);
            });
            applyAnimations();
        }
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function drawNodes(gctId, delegationNav, inboxIndex) {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'DelegatedUserNodes?token=' + document.getElementById("TokenHidden").value + '&delegatedGctId=' + gctId,
        cache: false,
        async: true
    }).then(function (nodes) {
        $('#delegateInboxMenu' + inboxIndex).empty();
        var delegationInboxNodesMenu = document.createElement("div");
        delegationInboxNodesMenu.id = 'delegateInboxMenu' + inboxIndex;
        $(delegationInboxNodesMenu).addClass("inboxNodes_menu changeable_b_r_s");


        var htmlli = '';
        htmlli += '<ul id="inboxNodes_ul_menu' + inboxIndex + '" class="' + $.session.get("OldBorderLeftSecondColor") + ' changeable_b_l_s inboxNodes_ul_menu" >';
        for (var i = 0; i < nodes.length; i++) {
            htmlli += '<li id="' + nodes[i].NodeText.replace(/\s/g, "") + inboxIndex + '" onclick="stopNodeAnimate(this);getNodeComponents(\'' + nodes[i].NodeText + '\', ' + nodes[i].NodeId + ',' + gctId + ',' + nodes[i].Count + ')">' +
                '<a><div class="li_circle changeable_s ' + $.session.get("OldSecondColor") + '"></div><div class="nodeText"><div class="customRuleOverflow" title="' + nodes[i].NodeText + '">' +
                nodes[i].NodeText + '</div><div class="inbox_count"> [ ' + nodes[i].Count + ' ]</div></div></a></li>';

        }
        htmlli += '</ul >';

        $(delegationInboxNodesMenu).append(htmlli);
        $(delegationNav).after(delegationInboxNodesMenu);
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function FillGridFollowUp() {
    var params = {};
    params.token = document.getElementById("TokenHidden").value;
    params.nodeId = 0;
    params.recordNumber = 0;
    params.pageSize = 9;
    params.delegationGctId = loggedInUser.Token.GctId;
    var postedData = JSON.stringify(params);
    $.ajax({
        url: AppSettings.FollowupUrl + 'FollowupList',
        type: "POST",
        data: postedData,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
    }).then(function (data) {
        var followUpCount = 0;
        if (data.FollowupListResult.length > 0) {
            var html = '';
            var creator = '';
            html += '<ul id="ul_table">';
            for (var i = 0; i < data.FollowupListResult.length; i++) {
                followUpCount++;
                if (data.FollowupListResult[i].FU_Delegation != null && (data.FollowupListResult[i].CreatedUser != data.FollowupListResult[i].CreatorName)) {
                    creator = data.FollowupListResult[i].CreatedUser + ' ' + resources_OnBehalfOf + ' ' + data.FollowupListResult[i].CreatorName;
                } else {
                    creator = data.FollowupListResult[i].CreatorName;
                }
                var dueDate = new Date(parseInt(data.FollowupListResult[i].EndDate.slice(6, 19)));
                var parameter = "";
                if (loggedInUser.Token.ShowHijriCalendar) {
                    parameter = dateRenderer(data.FollowupListResult[i].EndDate);
                }
                else {
                    parameter = convertTodateFormat(dueDate);
                }
                html += '<li id="' + data.FollowupListResult[i].Id + '"><div class="text_table1 float_left">';
                html += '<span class="span_table dark_grey_color"><span title="' + data.FollowupListResult[i].PrivacyText + '" id="' + GetPrivacyIcon(data.FollowupListResult[i].PrivacyText)
                    + '"></span>&nbsp;&nbsp;' + encodeHTML(data.FollowupListResult[i].Subject) + '</span>';
                html += '<span class="span_table">' + data.FollowupListResult[i].DocumentReference + '</span>';
                html += '<span class="span_table light_grey_color"> ' + resources_CreatedBy + ' : <span title="' + creator + '">' + creator + '</span></span>';
                html += '</div><div class="followup_tabs float_right padding_top">' +
                    '<span title="' + data.FollowupListResult[i].Status + '">' + GetStatusIcon(data.FollowupListResult[i].Status) + '</span></div>';
                html += '<div class="followup_tabs float_right padding_top light_grey_color">' + parameter + '</div>';
                html += '<div class="followup_tabs float_right padding_top light_grey_color">' + data.FollowupListResult[i].PriorityText
                    + '</div>';
                html += '</li>';
            }
            html += '</ul>';
            $('#follow_up').append(html);
            $("#followUpCount").prepend("[ " + followUpCount + " ]");
            hideLoader('#follow_up');
            if (loggedInUser.Token.Language.toLowerCase() == 'ar') {
                $('#table_content_holder1').attr('data-simplebar-direction', 'rtl');
                new SimpleBar($('#table_content_holder1')[0]);
            } else {
                new SimpleBar($('#table_content_holder1')[0]);
            }
        } else {
            gridHtmlDefault("#follow_up");
            hideLoader('#follow_up');
            $("#followUpCount").prepend("[ " + followUpCount + " ]");
        }
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });

}
function GetPrivacyIcon(privacy) {

    if (privacy == resources_HighConfidential) {
        return 'prioritySpanRed';
    } else if (privacy == resources_Normal) {
        return 'prioritySpanGreen';
    } else if (privacy == resources_Confidential) {
        return 'prioritySpanOrange';
    }
}
function GetStatusIcon(status) {
    if (status == resources_Completed) {
        return '<img src="assets/icons/completed.svg" class="imageStatus"/>';
    } else if (status == resources_InProcess) {
        return '<img src="assets/icons/progress.svg" class="imageStatus"/>';
    } else if (status == resources_PostPoned) {
        return '<img src="assets/icons/postponed.svg" class="imageStatus"/>';
    } else if (status == resources_Delayed) {
        return '<img src="assets/icons/delayed.svg" class="imageStatus"/>';
    }
}
function CreateMailTab(title, id, additionalQueryString, delegatedUserGctId) {
    if (typeof delegatedUserGctId == "undefined") {
        delegatedUser = undefined;
    } else {
        delegatedUser = $.grep(delegatedUsers, function (item) {
            return item.GctId.toString() == delegatedUserGctId.toString();
        })[0];
    }
    CreateTab(title, id, "GenericMailListForm.html?NodeId=" + id + "&nodeText=" + encodeURI(title) + "&" + encodeURI(additionalQueryString), false, "Style/" + productVersion + "/" + imagePath + "/Resources/Images/CloseTab.svg", "body_content");
}
$('#plus_followup').click(function () {
    $('.UserNodeSelected').removeClass('UserNodeSelected');

    myFollowupPlus();
});
$('#search_icon_div').off().click(function () {
    if (typeof $(this).attr('data-id') != "undefined") {
        $('.UserNodeSelected').removeClass('UserNodeSelected');
        var url = 'views/searchCorrespondance.html?ParentId=' + $(this).attr('data-id');
        LoadViewToDiv(url, 'body_content');
        HideMask();
    }
});
$('#iconSearch').click(function () {
    $("#datatable_filter").css("display", "block");
});
function openAdvanced(id, url) {
    var closeImage = 'Style/' + productVersion + '/' + imagePath + '/Resources/Images/CloseTab.svg';
    if (IsPlatformIOS() || isMobile.any()) {
        closeImage = 'Style/' + productVersion + '/' + imagePath + '/Resources/Images/CircleCloseGrey.svg';
    }
    showLoader('inside_body_content')
    //ShowMask();
    $("#content_tab_holder").show();
    $('#attachments_wrapper').empty();
    $('#top_view_actions').css("display", "none");
    CreateTab(resources_AdvancedSearch, 'GenericTab' + id, url, false, closeImage, "attachments_wrapper");

}
function myTasksPlus() {
    var countMyTasks = $.grep(UserNodes, function (e) {
        return e.NodeId == NodeNew;
    });
    if (countMyTasks.length > 0) {
        CreateMailTab(resources_MyTasks, NodeNew, "IsCustom=false&Count=" + countMyTasks[0].Count + "&" + sessionStorage.getItem(NodeNew));
        if (!$("#inbox_menu_arrow").hasClass("active")) {
            $("#inbox_menu_arrow").trigger("click");
        }
        var node = titleUpperCase(resources_CaseNew);
        if (typeof node != "undefined") {
            $('.UserNodeSelected').removeClass('UserNodeSelected');
            $('#' + node).addClass('UserNodeSelected');
        }
    }
}
function myInfosPlus() {
    var countMyInfos = $.grep(UserNodes, function (e) {
        return e.NodeId == NodeForInfo;
    });
    if (countMyInfos.length > 0) {
        CreateMailTab(resources_MyInfo, NodeForInfo, "IsCustom=false&Count=" + countMyInfos[0].Count + "&" + sessionStorage.getItem(NodeForInfo));
        if (!$("#inbox_menu_arrow").hasClass("active")) {
            $("#inbox_menu_arrow").trigger("click");
        }
        var node = titleUpperCase(resources_CaseNew);
        if (typeof node != "undefined") {
            $('.UserNodeSelected').removeClass('UserNodeSelected');
            $('#' + node).addClass('UserNodeSelected');
        }
    }
}
function myFollowupPlus() {
    var countMyFollowup = $.grep(UserNodes, function (e) {
        return e.NodeId == NodeFollowup;
    });
    if (countMyFollowup.length > 0) {
        CreateMailTab("", NodeFollowup, "IsCustom=false&Count=" + countMyFollowup[0].Count + "&" + sessionStorage.getItem(NodeFollowup));
        //RebuildUserNode(resources_CaseFollowup);
        if (!$("#inbox_menu_arrow").hasClass("active")) {
            //$("#inbox_menu_arrow").addClass("active");
            $("#inbox_menu_arrow").trigger("click");
        }
        var node = titleUpperCase(resources_CaseFollowup);
        node = node.replace(/ /g, '').charAt(0).toUpperCase() + node.slice(1);
        if (typeof node != "undefined") {
            $('#' + node).addClass('UserNodeSelected');
        }
    }
}
function selectNode(nodeResource, inboxIndex) {
    var node = titleUpperCase(nodeResource);
    node = node.replace(/ /g, '').charAt(0).toUpperCase() + node.slice(1);
    if (typeof inboxIndex != "undefined") {
        node = node + inboxIndex;
    }
    if (typeof node != "undefined") {
        $('#' + node).addClass('UserNodeSelected');
    }
}
function stopAnimate(idFilter) {
    //should be changed  
    $('#filter_open1 ul li span').removeClass('active_li_corres ' + $.session.get("SecondFontColor"));
    $('#filter_open1 ul li path').removeClass('changeable_fill_s ' + $.session.get("MainFillcolor"));
    $('#MyTasksFilter_Submenu ul li span').removeClass('active_li_corres ' + $.session.get("SecondFontColor"));
    $('#span' + idFilter).addClass('active_li_corres ' + $.session.get("SecondFontColor"));
    $('#svg_path' + idFilter).addClass('changeable_fill_s ' + $.session.get("MainFillcolor"));
}
var i_subm = 0;
function submenuHome(ParentDiv, id) {
    if ($('#' + ParentDiv + ' #id' + id).attr('class').contains("withSubMenu")) {
        if (i_subm == 0) {
            $('#MyTasksFilter_Submenu').css('display', 'block').animate(200);
            $('#MyInfoFilter_Submenu').css('display', 'block').animate(200);
            $('.withSubMenu').addClass('active');
            i_subm = 1;
        } else {
            $('#MyTasksFilter_Submenu').css('display', 'none').animate(200);
            $('#MyInfoFilter_Submenu').css('display', 'none').animate(200);
            $('.withSubMenu').removeClass('active');
            i_subm = 0;
        }
    }
    else {
        $('#MyTasksFilter_Submenu').css('display', 'none').animate(200);
        $('#MyInfoFilter_Submenu').css('display', 'none').animate(200);
        $('.withSubMenu').removeClass('active');
        i_subm = 0;
    }
}
function createFilterGrid(data, ParentDiv) {
    $('#' + ParentDiv).text('');
    var result = '';
    var idField;
    var idFilter;
    result += '<ul data-id="1"><li>' + resources_FilterBy + '</li>';
    for (var i = 0; i < data.length; i++) {
        if (data[i].Name == "StatusFilter")
            idFilter = data[i].Id;
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i].ParentId == idFilter) {
            idField = data[i].Id;
            var sm = ''; sm = CreateContextSubMenu(idField, data);
            result += '<li id="id' + idField + '"';
            if (sm != '') {
                result += ' onclick = "submenuHome(\'' + ParentDiv + '\',' + idField + ')" class="filter_animation main_hover_li withSubMenu navigation"';
            }
            else {
                result += 'class="filter_animation main_hover_li" onclick="' + data[i].Function + ';changeColor(\'' + ParentDiv + '\',' + data[i].Id + ');" ';
            }
            result += '>'
                //+ ' <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 28.829 28.112" style="enable-background:new 0 0 28.829 28.112;" xml:space="preserve">'
                //+ ' <g>'
                //+ '  <path id="svg_path' + idField + '" class="grey_fill_color" d="M10.196,20.115c0.103-0.112,0.185-0.194,0.26-0.284c4.952-5.971,9.9-11.943,14.857-17.91'
                //+ ' c0.413-0.497,0.862-0.966,1.325-1.418c0.179-0.175,0.43-0.295,0.668-0.386c1.071-0.406,1.613,0.302,1.512,1.235'
                //+ ' c-0.077,0.708-0.393,1.326-0.773,1.917c-3.983,6.193-7.964,12.387-11.946,18.581c-1.021,1.588-2.041,3.177-3.063,4.764'
                //+ ' c-1.166,1.811-3.537,2.024-4.949,0.4c-2.455-2.825-4.89-5.667-7.305-8.526c-1.429-1.692-0.823-4.066,1.201-4.875'
                //+ ' c1.177-0.471,2.535-0.092,3.468,0.989c1.466,1.698,2.921,3.405,4.382,5.107C9.946,19.84,10.064,19.968,10.196,20.115z" />'
                //+ '  </g>'
                //+ '   </svg>'
                + '<span id="' + ParentDiv + idField + '"' + (sm != '' ? 'class="withsubspan"' : '') + '> ' + data[i].Text + '</span ></li > ';

            if (sm != '') {
                var SubMenu = '';
                if (ParentDiv == "tasksFilter") {
                    SubMenu = '<div id="MyTasksFilter_Submenu"><ul>' + sm + '</ul></div>';
                }
                else if (ParentDiv == "infosFilter") {
                    SubMenu = '<div id="MyInfoFilter_Submenu"><ul>' + sm + '</ul></div>';
                }
                result += SubMenu

            }
        }
    }
    result += '</ul>';
    $('#' + ParentDiv).append(result);
}
function FillMyTaskFilter() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'ViewActions?token=' + document.getElementById('TokenHidden').value + '&viewName=DocumentInboxNew&categoryId=5&statusId=1',
        async: true
    }).then(function (datatask) {
        createFilterGrid(datatask, "tasksFilter");
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function FillMyInfoFilter() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'ViewActions?token=' + document.getElementById('TokenHidden').value + '&viewName=DocumentInboxNewForInfo&categoryId=5&statusId=1',
        async: true
    }).then(function (datainfo) {
        createFilterGrid(datainfo, "infosFilter");
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function statusFilter(ViewName) {


    if (ViewName == "DocumentInboxNew") {
        $("#tasksFilter").css("display", "block");
        $("#infosFilter").css("display", "none");
    }
    else {
        $("#tasksFilter").css("display", "none");
        $("#infosFilter").css("display", "block");
    }

}
function CreateContextSubMenu(parentId, data) {
    var res = '';
    for (var i = 0; i < data.length; i++) {
        if (data[i].ParentId == parentId) {
            res += '<li class="filter_animation main_hover_li" onclick="' + data[i].Function + ';stopAnimate(' + data[i].Id + '); " >'
                + '<img class="subimg" src="Style/' + currentVersion + '/EverteamTheme/Resources/Images/right-arrow-2.svg"/><span class="margin_15px" id="span' + data[i].Id + '">' + data[i].Text + '</span>'
                + '</li>';
        }
    }
    return res;
}
var filter = '';
var grid = '';
var countSpan = '';
function ShowAll() {

    if ($('#tab_line_active1').hasClass("active_tab active_on")) {
        filter = '';
        grid = "tasks";
        currnode = NodeNew;
        countSpan = "taskCount";

        var viewId = sessionStorage.getItem('DocumentInboxNewHome');
    }
    else {
        filter = "TSF_PURPOSE_ID= '" + sessionStorage.getItem("purposeId") + "'";
        grid = "Infos";
        currnode = NodeForInfo;
        countSpan = "myInfosCount";
        var viewId = sessionStorage.getItem('DocumentInboxForInfoHome');
    }

    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = currnode;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = filter;
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {
        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#" + grid, viewId) : gridHtmlDefault("#" + grid);
        $("#" + countSpan).empty();
        $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
        closeFilter();
    });
    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasksFiltered?token=" + loggedInUser.Token.Token + "&searchFilter=" + filter + "&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (data) {
    //    FillGridTasksControlParam(data, "#" + grid)
    //    //GetGridHtml(data, "#" + grid, objectfields);
    //    $("#" + countSpan).empty();
    //    $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
    //    closeFilter();
    //}).fail(function (fail) {
    //    HandleUnAuthotizedException(fail);
    //});
}
function ShowRead() {

    if ($('#tab_line_active1').hasClass("active_tab active_on")) {
        filter = 'TSF_ISREAD = 1';
        grid = "tasks";
        countSpan = "taskCount";
        currnode = NodeNew;
        var viewId = sessionStorage.getItem('DocumentInboxNewHome');
    }
    else {
        filter = "TSF_ISREAD = 1 and TSF_PURPOSE_ID= '" + sessionStorage.getItem("purposeId") + "'";
        grid = "Infos";
        countSpan = "myInfosCount";
        currnode = NodeForInfo;
        var viewId = sessionStorage.getItem('DocumentInboxForInfoHome');
    }
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = currnode;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = filter;
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {

        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#" + grid, viewId) : gridHtmlDefault("#" + grid);
        $("#" + countSpan).empty();
        $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
        closeFilter();
    });
    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasksFiltered?token=" + loggedInUser.Token.Token + "&searchFilter=" + filter + "&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (data) {
    //    FillGridTasksControlParam(data, "#" + grid)
    //    //GetGridHtml(data, "#" + grid, objectfields);
    //    $("#" + countSpan).empty();
    //    $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
    //    closeFilter();

    //}).fail(function (fail) {
    //    HandleUnAuthotizedException(fail);
    //});

}
function ShowNew() {
    if ($('#tab_line_active1').hasClass("active_tab active_on")) {
        filter = 'TSF_ISREAD = 0';
        grid = "tasks";
        countSpan = "taskCount";
        currnode = NodeNew;
        var viewId = sessionStorage.getItem('DocumentInboxNewHome');
    }
    else {
        filter = "TSF_ISREAD = 0 and TSF_PURPOSE_ID= '" + sessionStorage.getItem("purposeId") + "'";
        grid = "Infos";
        countSpan = "myInfosCount";
        currnode = NodeForInfo;
        var viewId = sessionStorage.getItem('DocumentInboxForInfoHome');
    }
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = currnode;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = filter;
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {

        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#" + grid, viewId) : gridHtmlDefault("#" + grid);
        $("#" + countSpan).empty();
        $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
        closeFilter();
    });
    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasksFiltered?token=" + loggedInUser.Token.Token + "&searchFilter=" + filter + "&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (data) {
    //    FillGridTasksControlParam(data, "#" + grid)
    //    //GetGridHtml(data, "#" + grid, objectfields);
    //    $("#" + countSpan).empty();
    //    $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
    //    closeFilter();
    //}).fail(function (fail) {
    //    HandleUnAuthotizedException(fail);
    //});
}
function ShowCced() {
    var filter = 'TSF_PURPOSE_ID = 29';
    var viewId = sessionStorage.getItem('DocumentInboxNewHome');
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = NodeNew;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = filter;
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {

        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#" + grid, viewId) : gridHtmlDefault("#" + grid);
        $("#taskCount").empty();
        $("#taskCount").prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
        closeFilter();
    });
    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasksFiltered?token=" + loggedInUser.Token.Token + "&searchFilter=" + filter + "&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (data) {

    //    FillGridTasksControlParam(data, "#" + grid)
    //    //GetGridHtml(data, "#" + grid, objectfields);
    //    $("#taskCount").empty();
    //    $("#taskCount").prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
    //    closeFilter();
    //}).fail(function (fail) {
    //    HandleUnAuthotizedException(fail);
    //});
}
function ShowOverdue() {

    if ($('#tab_line_active1').hasClass("active_tab active_on")) {
        filter = 'overdue = 1';
        grid = "tasks";
        countSpan = "taskCount";
        currnode = NodeNew;
        var viewId = sessionStorage.getItem('DocumentInboxNewHome');
    }
    else {
        filter = "overdue = 1 and TSF_PURPOSE_ID= '" + sessionStorage.getItem("purposeId") + "'";
        grid = "Infos";
        countSpan = "myInfosCount";
        currnode = NodeForInfo;
        var viewId = sessionStorage.getItem('DocumentInboxForInfoHome');
    }
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = currnode;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = filter;
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {

        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#" + grid, viewId) : gridHtmlDefault("#" + grid);
        $("#" + countSpan).empty();
        $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
        closeFilter();
    });

    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasksFiltered?token=" + loggedInUser.Token.Token + "&searchFilter=" + filter + "&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (data) {
    //    FillGridTasksControlParam(data, "#" + grid)
    //    //GetGridHtml(data, "#" + grid, objectfields);
    //    $("#" + countSpan).empty();
    //    $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
    //    closeFilter();
    //}).fail(function (fail) {
    //    HandleUnAuthotizedException(fail);
    //});
}
function SignedByMeStatus() {
    var url = document.getElementById("ActionsUrlHidden").value + 'GetSignedFileByMe';
    var postedData = JSON.stringify({
        token: document.getElementById("TokenHidden").value,
    });
    CallWebMethod(url, postedData, function (retVal) {
        joinedDocIds = "";
        for (var i = 0; i < retVal.GetSignedFileByMeResult.length; i++) {
            if (i == retVal.GetSignedFileByMeResult.length - 1) {
                joinedDocIds += retVal.GetSignedFileByMeResult[i].split("=")[1];
            } else {
                joinedDocIds += retVal.GetSignedFileByMeResult[i].split("=")[1] + ",";
            }
        }
        if (joinedDocIds === "") {
            joinedDocIds = "0";
        }
        if ($('#tab_line_active1').hasClass("active_tab active_on")) {
            filter = "DOC_ID IN (" + joinedDocIds + ")";
            grid = "tasks";
            countSpan = "taskCount";
            currnode = NodeNew;
            var viewId = sessionStorage.getItem('DocumentInboxNewHome');
        }
        else {
            filter = "DOC_ID IN (" + joinedDocIds + ") and TSF_PURPOSE_ID= '" + sessionStorage.getItem("purposeId") + "'";
            grid = "Infos";
            countSpan = "myInfosCount";
            currnode = NodeForInfo;
            var viewId = sessionStorage.getItem('DocumentInboxForInfoHome');
        }
        var params = {};
        params.token = loggedInUser.Token.Token;
        params.delegatedGctId = 0;
        params.nodeId = currnode;
        params.recordNumber = 0;
        params.pageSize = 10;
        params.search = filter;
        params.orderBy = '';
        CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {
            data = JSON.parse(result.InboxNodeAsJsonResult);
            data.length > 0 ? FillGridTasksControlParam(data, "#" + grid, viewId) : gridHtmlDefault("#" + grid);
            $("#" + countSpan).empty();
            $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
            closeFilter();
        });
        //$.ajax({
        //    url: AppSettings.ActionsUrl + "GetInboxTasksFiltered?token=" + loggedInUser.Token.Token + "&searchFilter=" + filter + "&recordNumber=0&pageSize=10",
        //    async: false
        //}).then(function (data) {
        //    FillGridTasksControlParam(data, "#" + grid)
        //    //GetGridHtml(data, "#" + grid, objectfields);
        //    $("#" + countSpan).empty();
        //    $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
        //    closeFilter();
        //}).fail(function (fail) {
        //    HandleUnAuthotizedException(fail);
        //});

    }, function (fail) {
        window.parent.HideMask();
    });

}
function ShowMyLetters() {
    var filter = 'TSF_PURPOSE_ID <> 29';
    var viewId = sessionStorage.getItem('DocumentInboxNewHome');
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = NodeNew;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = filter;
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {
        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#tasks", viewId) : gridHtmlDefault("#" + grid);
        $("#taskCount").empty();
        $("#taskCount").prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
        closeFilter();
    });
    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasksFiltered?token=" + loggedInUser.Token.Token + "&searchFilter=" + filter + "&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (data) {
    //    FillGridTasksControlParam(data, "#" + grid)
    //    //GetGridHtml(data, "#" + grid, objectfields);
    //    $("#" + countSpan).empty();
    //    $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
    //    closeFilter();
    //}).fail(function (fail) {
    //    HandleUnAuthotizedException(fail);
    //});
}
function FilterByCategory(category) {
    if ($('#tab_line_active1').hasClass("active_tab active_on")) {
        filter = "DOC_CATEGORY =" + category;
        grid = "tasks";
        countSpan = "taskCount";
        currnode = NodeNew;
        var viewId = sessionStorage.getItem('DocumentInboxNewHome');
    }
    else {
        currnode = NodeForInfo;
        filter = "DOC_CATEGORY =" + category + " and TSF_PURPOSE_ID= '" + sessionStorage.getItem("purposeId") + "'";
        grid = "Infos";
        countSpan = "myInfosCount";
        var viewId = sessionStorage.getItem('DocumentInboxForInfoHome');
    }
    var params = {};
    params.token = loggedInUser.Token.Token;
    params.delegatedGctId = 0;
    params.nodeId = currnode;
    params.recordNumber = 0;
    params.pageSize = 10;
    params.search = filter;
    params.orderBy = '';
    CallWebMethod(AppSettings.ActionsUrl + "InboxNodeAsJson", JSON.stringify(params), function (result) {

        data = JSON.parse(result.InboxNodeAsJsonResult);
        data.length > 0 ? FillGridTasksControlParam(data, "#" + grid, viewId) : gridHtmlDefault("#" + grid);
        $("#" + countSpan).empty();
        $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");

        closeFilter();
    });

    //$.ajax({
    //    url: AppSettings.ActionsUrl + "GetInboxTasksFiltered?token=" + loggedInUser.Token.Token + "&searchFilter=" + filter + "&recordNumber=0&pageSize=10",
    //    async: false
    //}).then(function (data) {
    //    FillGridTasksControlParam(data, "#" + grid)
    //    //GetGridHtml(data, "#" + grid, objectfields);
    //    $("#" + countSpan).empty();
    //    $("#" + countSpan).prepend("[ " + (data.length > 0 ? data.length : 0) + " ]");
    //    closeFilter();
    //}).fail(function (fail) {
    //    HandleUnAuthotizedException(fail);
    //});
}
function changeColor(ParentDiv, id) {
    SecondFontColor = $.session.get("SecondFontColor");
    SecondFillcolor = $.session.get("SecondFillcolor");
    SecondOldcolor = $.session.get("OldColor");
    $('#' + ParentDiv + ' span').removeClass('changeable_s_f ' + SecondFontColor);
    $('#' + ParentDiv + id).addClass('changeable_s_f ' + SecondFontColor);
    //$('#svg_path' + id).addClass(SecondFillcolor);
}
function removeColor(ParentDiv, id) {
    SecondFontColor = $.session.get("SecondFontColor");
    SecondFillcolor = $.session.get("SecondFillcolor");
    $('#' + ParentDiv + id).removeClass(SecondFontColor)
    //$('#svg_path' + id).removeClass(SecondFillcolor);

}
///////////////////////////////////////////////////Color Palette 
var j_color = 0;
$('#color_icon').click(function () {
    // hide other
    animateHideProfile();
    animateHideUserInbox();
    animateHideOtherInbox(0);
    animateHideSearchQueries();

    //show color palette
    if (j_color == 0) {
        animateShowColorPalette();
    } else {
        animateHideColorPalette();
    }
});
function animateShowColorPalette() {
    $('#color_palette').animate({
        bottom: 0
    })
    j_color = 1;
}
function animateHideColorPalette() {
    $('#color_palette').animate({
        bottom: '-255px'
    })
    j_color = 0;
}
///////////////////////////  Profile  ////////////////////////////
var i_profile = 0;
$('#profile_menu').click(function () {
    //hide other
    animateHideSearchQueries();
    animateHideUserInbox();
    animateHideOtherInbox(0);
    animateHideColorPalette();

    // show profile
    if (i_profile == 0) {
        animateShowProfile();
    } else {
        animateHideProfile();
    }
});
function animateShowProfile() {
    if (i_profile == 0) {
        $('#profile_open').animate({
            minHeight: '175px',
            marginBottom: '20px'
        }, 200);
        $('#profile_ul_menu li').fadeIn();
        i_profile = 1;
    }
}
function animateHideProfile() {
    if (i_profile == 1) {
        $('#profile_open').animate({
            minHeight: '0px',
            marginBottom: '0px'
        }, 200);
        $('#profile_ul_menu li').hide();
        i_profile = 0;
        $('.pro_arrow').removeClass('active');
    }
}
///////////////////////////  Search Inside Menu ////////////////////////////
var i_search = 0;
$('#menu_arrow').click(function () {
    // hide other
    animateHideProfile();
    animateHideUserInbox();
    animateHideOtherInbox(0);
    animateHideColorPalette();

    //show search queries
    if (i_search == 0) {
        animateShowSearchQueries();
    } else {
        animateHideSearchQueries();
    }
})
function animateHideSearchQueries() {
    if (i_search == 1) {
        $('#search_menu').animate({
            minHeight: '0px'
        }, 200);
        $('#search_ul_menu li').hide();
        $('.menu_arrow').removeClass('active');
        i_search = 0;
    }
}
function animateShowSearchQueries() {
    if (i_search == 0) {
        $('#search_menu').animate({
            minHeight: '32px'
        }, 200);
        $('#search_ul_menu li').fadeIn();
        $('.menu_arrow').addClass('active');
        i_search = 1;
    }
}
///////////////////////////  inbox Inside Menu ////////////////////////////
var i_inbox = 0;
$('#inbox_menu_arrow').click(function () {
    //hide other
    animateHideProfile();
    animateHideSearchQueries();
    animateHideColorPalette();
    animateHideOtherInbox(2);

    //toggle inbox
    animateToggleUserInbox();
});
function animateHideUserInbox() {
    if (i_inbox == 1) {
        $('#inbox_menu_arrow').removeClass('active');
        $('#inbox_menu').animate({
            minHeight: '0px'
        }, 200);
        $('#inbox_ul_menu li').hide();
        i_inbox = 0;
    }
}
function animateShowUserInbox() {
    //hide other

    //animateHideOtherInbox(2)
    //animateHideProfile();
    //animateHideSearchQueries();
    //show inbox
    if (i_inbox == 0) {
        $('#inbox_menu_arrow').addClass('active');
        $('#inbox_menu').animate({
            minHeight: '32px'
        }, 200);
        $('#inbox_ul_menu li').fadeIn('slow');;
        i_inbox = 1;
    }
}
function animateToggleUserInbox() {

    if (i_inbox == 0) {
        animateShowUserInbox()
    } else {
        animateHideUserInbox()
    }
}
function animateHideOtherInbox(index) {
    var countOfInboxes = (delegatedUsers != null ? delegatedUsers.length : 0) + 1;
    for (var i = 1; i <= countOfInboxes + 2; i++) {
        if (i != index)
            animateHideInbox(i);
    }
}
function animateShowInbox(index) {
    //hide other
    animateHideUserInbox(); // remove after implementing main user inbox animation here
    animateHideProfile();
    animateHideSearchQueries();
    animateHideOtherInbox(index);

    //show inbox
    $('#inbox_menu_arrow' + index).addClass('active');
    $('#inboxNodes_ul_menu' + index).animate({
        minHeight: '32px'
    }, 200);
    $('#inboxNodes_ul_menu' + index + ' li').fadeIn();
}
function animateHideInbox(index) {
    //hide inbox
    $('#inbox_menu_arrow' + index).removeClass('active');
    $('#inboxNodes_ul_menu' + index).animate({
        minHeight: '0px'
    }, 200);
    $('#inboxNodes_ul_menu' + index + ' li').hide();
}
function animateToggleInbox(index) { // should implement the main inbox animation using this fct as well

    if ($('#inboxNodes_ul_menu' + index).css("min-height") == "0px") {
        animateShowInbox(index);
    } else {
        animateHideInbox(index);
    }

    $('.delegationNav').click(function (e) {
        var target = $(e.target);
        if (target.is('a')) {
            $('#navigation_div').find('a').removeClass('changeable_s ' + $.session.get("OldSecondColor"));
            $(target).addClass('changeable_s ' + $.session.get("OldSecondColor"));
        }
        else if (target.parents('a').length == 1) {
            $('#navigation_div').find('a').removeClass('changeable_s ' + $.session.get("OldSecondColor"));
            $(target).parents('a').addClass('changeable_s ' + $.session.get("OldSecondColor"));
        }
    });
    if ($('.delegationNav a').css("width") == '33px') {
        $('#menu_icon').trigger('click');
    }
}
function PopupSetSVGIcons(dialog) {
    $("#" + dialog).find("[resourceicon]").each(function () {
        $(this).append(GetHomeParentWindow(window).window[$(this).attr("resourceicon")]);
    });
}
function PopupTranslate(dialog) {
    $("#" + dialog).find("[ResourceKey]").each(function () {
        if ($(this).attr("ResourceAttribute").toLowerCase() == "text") {
            $(this).append(window[$(this).attr("ResourceKey")]);
        }
        else {
            if ($(this).attr("ResourceAttribute").toLowerCase() == "innerhtml") {
                $(this)[0].innerHTML = $(this)[0].innerHTML + window[$(this).attr("ResourceKey")];
            }
            else {
                if ($(this).attr("ResourceAttribute").toLowerCase() == "title") {
                    if (!IsPlatformIOS()) $(this).attr($(this).attr("ResourceAttribute"), window[$(this).attr("ResourceKey")]);
                } else {
                    $(this).attr($(this).attr("ResourceAttribute"), window[$(this).attr("ResourceKey")]);
                }
            }
        }
    });
}
function OpenPopupDialog(url, dialog, title, width, height, emptyUrl) {
    html = '';
    html += '<div class="popup_window_Dialog draggable"><div class="popup_title">' + title + '<div class="close_popup">';
    html += '<svg version="1.1" class="fill_svg_grey" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
        'viewBox="0 0 113.32 113.86" style="enable-background:new 0 0 113.32 113.86;" xml:space="preserve">' +
        '<g><path d="M113.32,104.809c-2.897,2.988-5.793,5.976-8.774,9.051C88.443,97.755,72.57,81.88,56.692,65.999' +
        'C40.772,81.92,24.896,97.796,9.046,113.646c-3.06-3.059-6-5.999-9.046-9.044c15.848-15.848,31.723-31.723,47.631-47.63' +
        'C31.734,41.079,15.857,25.207,0.056,9.41c3.036-3.044,5.971-5.988,8.931-8.956c15.797,15.8,31.652,31.658,47.499,47.509' +
        'C72.43,32.019,88.322,16.127,104.449,0c3.084,3.186,5.977,6.175,8.871,9.164c0,0.074,0,0.148,0,0.221' +
        'c-0.281,0.225-0.586,0.425-0.838,0.678C97.114,25.423,81.752,40.786,66.39,56.151c-0.255,0.255-0.491,0.527-0.774,0.832' +
        'c0.259,0.285,0.468,0.533,0.697,0.762c15.414,15.417,30.829,30.832,46.248,46.244c0.226,0.226,0.505,0.401,0.759,0.599' +
        'C113.32,104.661,113.32,104.735,113.32,104.809z" /></g></svg></div></div>';
    html += '<div class="popup_details_dialog"></div>';
    $("#" + dialog).empty();
    $("#" + dialog).append(html);
    $("#" + dialog).attr("url", url);
    if (url.indexOf("?") > -1) {
        url = url.substring(0, url.indexOf("?"));
    }
    $("#" + dialog + " .close_popup").click(function () {

        if (emptyUrl) {
            $("#" + dialog).attr('url', '');
            $("#" + dialog).empty();
            CloseDialog(dialog);
        } else {
            CloseDialog(dialog);
        }
    })
    $("#" + dialog + " .popup_details_dialog").load('Templates/' + url);
    $("#" + dialog + " .popup_window_Dialog").width(width);
    $("#" + dialog + " .popup_window_Dialog").height(height);
    $("#" + dialog + " .draggable").draggable({});
    $("#" + dialog).css('display', 'flex');
    $("#" + dialog).fadeIn('slow');
}
function OpenPopupDialogSearch(url, dialog, title, width, height, emptyUrl) {
    html = '';
    html += '<div class="popup_window_Dialog draggable"><div class="popup_title">' + title + '<div class="close_popup">';
    html += '<svg version="1.1" class="fill_svg_grey" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
        'viewBox="0 0 113.32 113.86" style="enable-background:new 0 0 113.32 113.86;" xml:space="preserve">' +
        '<g><path d="M113.32,104.809c-2.897,2.988-5.793,5.976-8.774,9.051C88.443,97.755,72.57,81.88,56.692,65.999' +
        'C40.772,81.92,24.896,97.796,9.046,113.646c-3.06-3.059-6-5.999-9.046-9.044c15.848-15.848,31.723-31.723,47.631-47.63' +
        'C31.734,41.079,15.857,25.207,0.056,9.41c3.036-3.044,5.971-5.988,8.931-8.956c15.797,15.8,31.652,31.658,47.499,47.509' +
        'C72.43,32.019,88.322,16.127,104.449,0c3.084,3.186,5.977,6.175,8.871,9.164c0,0.074,0,0.148,0,0.221' +
        'c-0.281,0.225-0.586,0.425-0.838,0.678C97.114,25.423,81.752,40.786,66.39,56.151c-0.255,0.255-0.491,0.527-0.774,0.832' +
        'c0.259,0.285,0.468,0.533,0.697,0.762c15.414,15.417,30.829,30.832,46.248,46.244c0.226,0.226,0.505,0.401,0.759,0.599' +
        'C113.32,104.661,113.32,104.735,113.32,104.809z" /></g></svg></div></div>';
    html += '<div class="popup_details_dialog"></div>';
    $("#" + dialog).empty();
    $("#" + dialog).append(html);
    $("#" + dialog).attr("url", url);
    if (url.indexOf("?") > -1) {
        url = url.substring(0, url.indexOf("?"));
    }
    $("#" + dialog + " .close_popup").click(function () {
        if (emptyUrl) {
            $("#" + dialog).attr('url', '');
            $("#" + dialog).empty();
            CloseDialog(dialog);
        } else {
            CloseDialog(dialog);
        }
    })
    $("#" + dialog + " .popup_details_dialog").load(url);
    $("#" + dialog + " .popup_window_Dialog").width(width * 0.98);
    $("#" + dialog + " .popup_window_Dialog").height(height * 0.98);
    $("#" + dialog + " .draggable").draggable({});
    $("#" + dialog).fadeIn('slow');
    $("#" + dialog).css('display', 'flex');
}
function OpenPopupDialogIframe(url, dialog, title, width, height, emptyUrl, onload) {

    html = '';
    html += '<div class="popup_window_Dialog draggable"><div class="popup_title">' + title + '<div class="close_popup">';
    html += '<svg version="1.1" class="fill_svg_grey" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
        'viewBox="0 0 113.32 113.86" style="enable-background:new 0 0 113.32 113.86;" xml:space="preserve">' +
        '<g><path d="M113.32,104.809c-2.897,2.988-5.793,5.976-8.774,9.051C88.443,97.755,72.57,81.88,56.692,65.999' +
        'C40.772,81.92,24.896,97.796,9.046,113.646c-3.06-3.059-6-5.999-9.046-9.044c15.848-15.848,31.723-31.723,47.631-47.63' +
        'C31.734,41.079,15.857,25.207,0.056,9.41c3.036-3.044,5.971-5.988,8.931-8.956c15.797,15.8,31.652,31.658,47.499,47.509' +
        'C72.43,32.019,88.322,16.127,104.449,0c3.084,3.186,5.977,6.175,8.871,9.164c0,0.074,0,0.148,0,0.221' +
        'c-0.281,0.225-0.586,0.425-0.838,0.678C97.114,25.423,81.752,40.786,66.39,56.151c-0.255,0.255-0.491,0.527-0.774,0.832' +
        'c0.259,0.285,0.468,0.533,0.697,0.762c15.414,15.417,30.829,30.832,46.248,46.244c0.226,0.226,0.505,0.401,0.759,0.599' +
        'C113.32,104.661,113.32,104.735,113.32,104.809z" /></g></svg></div></div>';
    html += '<div class="popup_details_dialog"></div>';
    $("#" + dialog).empty();
    $("#" + dialog).append(html);
    $("#" + dialog).attr("url", url);

    $("#" + dialog + " .close_popup").click(function () {
        if (emptyUrl) {
            $("#" + dialog).attr('url', '');
            $("#" + dialog).empty();
            CloseDialog(dialog);
        } else {
            CloseDialog(dialog);
        }
    })

    var iframe = document.createElement("iframe");
    iframe.id = "ifr_" + title;
    iframe.name = "ifr_" + title;
    if (url.indexOf("?") > -1) {
        url += "&time=" + new Date().getTime().toString();
    } else {
        url += "?time=" + new Date().getTime().toString();
    }
    if (url != '') {
        iframe.src = url;
        iframe.height = "100%";
        iframe.width = "100%";
        iframe.className = "rightPanelFrame";
    }

    $("#" + dialog + " .popup_details_dialog").append(iframe);
    $("#" + dialog + " .popup_window_Dialog").width(width * 0.98);
    $("#" + dialog + " .popup_window_Dialog").height(height * 0.98);
    $("#" + dialog + " .draggable").draggable({});
    $("#" + dialog).css('display', 'flex');
    $("#" + dialog).fadeIn('slow');
    HideMask();
}
function SimplePopup(title, text) {
    $('#simplePopup').empty();
    var popupValue = '';
    popupValue += '<div class="popup_window draggable ui-draggable ui-draggable-handle" style="position: relative;">'
        + '<div class="popup_title">' + title
        + '<div class="close_popup">'
        + '<svg version="1.1" class="fill_svg_grey" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 113.32 113.86" style="enable-background:new 0 0 113.32 113.86;" xml:space="preserve">'
        + ' < g >'
        + ' <path d="M113.32,104.809c-2.897,2.988-5.793,5.976-8.774,9.051C88.443,97.755,72.57,81.88,56.692,65.999' +
        'C40.772,81.92,24.896,97.796,9.046,113.646c-3.06-3.059-6-5.999-9.046-9.044c15.848-15.848,31.723-31.723,47.631-47.63' +
        'C31.734,41.079,15.857,25.207,0.056,9.41c3.036-3.044,5.971-5.988,8.931-8.956c15.797,15.8,31.652,31.658,47.499,47.509' +
        'C72.43,32.019,88.322,16.127,104.449,0c3.084,3.186,5.977,6.175,8.871,9.164c0,0.074,0,0.148,0,0.221' +
        'c-0.281,0.225-0.586,0.425-0.838,0.678C97.114,25.423,81.752,40.786,66.39,56.151c-0.255,0.255-0.491,0.527-0.774,0.832' +
        'c0.259,0.285,0.468,0.533,0.697,0.762c15.414,15.417,30.829,30.832,46.248,46.244c0.226,0.226,0.505,0.401,0.759,0.599' +
        'C113.32,104.661,113.32,104.735,113.32,104.809z"></path>' +
        '</g>'
        + '</svg>'
        + ' </div>'
        + '</div>'
        + '<div class="popup_details">'
        + '<div class="delete_form_group_warpper">'
        + text
        + ' </div>'
        + '<div class="reply_buttons_wrapper" style="padding-left:140px">'
        + '<div id="completePopup" class="reply_button reply_button_send popup_button ' + $.session.get("OldSecondColor") + ' changeable_s">' + resources_Ok + '</div>'
        + '</div>'
        + '</div>'
        + ' </div>';
    $('#simplePopup').append(popupValue);
    $('#simplePopup').fadeIn('slow');
    $("#simplePopup .draggable").draggable({});
    $('#simplePopup .close_popup, #simplePopup .popup_button').click(function () {
        $('#simplePopup').fadeOut();
    })
}
function getThemeColor() {
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
                $(this).removeClass($.session.get("OldSecondColor"));
                $(this).addClass(OldSecondColor);
            }
        });
    }
    if (olderColor != null) {
        $('*').each(function () {
            if ($(this).hasClass('changeable')) {
                $(this).removeClass($.session.get("OldColor"));
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
                $(this).removeClass($.session.get("OldBorderColor"));
                $(this).addClass(OldBorderColor);
            }
        });
    }
}
function OpenNewWindow(id, title, url, width, height, fullscreen) {
    LoadCoresChilds(url);
}
function LoadCoresChilds(url) {
    $('.attachments_wrapper').remove();
    $('#view_msg_div').append('<div class="attachments_wrapper" id="attachments_wrapper" ></div >');
    $('#attachments_wrapper').attr("url", url);
    if (url.indexOf("?") > -1) {
        url = url.substring(0, url.indexOf("?"));
    }
    $('#attachments_wrapper').empty();
    $('#attachments_wrapper').load(url);
}
function OpenBAMChart() {

    //CreateTab(resources_BAM, "BAMTab", document.getElementById("BAMReportsUrl").value + "?UserLanguage=" + document.getElementById("LanguageHidden").value + "&UserGcId=" + document.getElementById("ContactGcIdHidden").value + "&LoggedInUser=" + document.getElementById("TokenHidden").value + "&StructureGctId=" + document.getElementById("StructureGcIdHidden").value + "&time=" + new Date().toTimeString() + "&imagePath=" + imagePath + "&calendarType=" + calendarType, false, 'Style/' + imagePath + '/Resources/Images/CloseTab.svg');
    var actionId = $('li[onclick="OpenBAMChart();return false;"]').attr('id');

    profileMenuSelect(actionId);
    CreateTab(resources_BAM, "BAMTab", document.getElementById("BAMReportsUrl").value + "?UserLanguage=" + document.getElementById("LanguageHidden").value + "&UserGcId=" + document.getElementById("ContactGcIdHidden").value + "&LoggedInUser=" + document.getElementById("TokenHidden").value + "&UserToken=" + document.getElementById("TokenHidden").value + "&StructureGctId=" + document.getElementById("StructureGcIdHidden").value + "&StructureStcId=" + document.getElementById("StructureStcIdHidden").value + "&time=" + new Date().getTime().toString() + "&imagePath=" + imagePath + "&urlRoot=" + document.getElementById("RootUrlHidden").value + "&ThemeName=" + imagePath + "&calendarType=" + calendarType + "&MainActionId=" + actionId, false, 'Style/' + productVersion + '/' + imagePath + '/Resources/Images/CloseTab.svg', 'body_content');
    //CreateMailTab("resources_BAM", actionId, "IsCustom=false&Count=9");
}
function OpenSimpleSearch(id) {

    var searchRes;
    var search = $('#' + id).val();
    if (search != '') {
        if (search.trim().length > 2) {
            var url = document.getElementById("ActionsUrlHidden").value + 'AddKeyword';
            CallWebMethod(url, JSON.stringify({ keyword: search }), null, function (fail) {
            });
        }

        CreateTab(resources_SimpleSearch, 'SimpleSearch', "Templates/DynamicSimpleSearch.html?viewName=SimpleSearch&filter=" + escape(search), false, "Style/" + productVersion + "/" + imagePath + "/Resources/Images/CloseTab.svg");
    } else {
        GetHomeParentWindow(window).Alert(resources_FillSearchCriteria);
    }
}
function LoadCategories() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'GetDocumentCategories'
    }).then(function (retVal) {
        AvailableCategories = retVal;
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function CheckEditableBeforeSign() {
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'CheckEditableBeforeSign'
    }).then(function (retVal) {
        EditableMetaAndViewer = retVal;
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
function showLoader(div) {
    $('#' + div).remove('#' + div + 'Loading');
    html = '<div class="' + (div == 'performance' ? 'LoadingDivPerformance' : 'LoadingDiv') + '" id="' + div + 'Loading">' +
        '<div id="svg_loader_c" style="display: block;">' +
        '<div id = "loader_container_c" >' +
        '<div id="ball-1" class="loader_circle_c ' + $.session.get("OldSecondColor") + ' changeable_s"></div>' +
        '<div id="ball-2" class="loader_circle_c ' + $.session.get("OldSecondColor") + ' changeable_s"></div>' +
        '<div id="ball-3" class="loader_circle_c ' + $.session.get("OldSecondColor") + ' changeable_s"></div>' +
        '</div></div></div>';

    // html = '<div class="' + (div == 'performance' ? 'LoadingDivPerformance' : 'LoadingDiv') + '" id="' + div + 'Loading"><img class="imgLoader" src="' + AppSettings.LocalRootPath + '/Resources/Images/Loader.gif" id="' + div + 'imgLoader"/></div>';
    $('#' + div).append(html);
    $('#' + div + 'Loading').show();
}
function hideLoader(div) {
    $(div + 'Loading').hide();
    $(div + 'Loading').css('display', 'none');
    $(div + 'Loading #svg_loader').css('display', 'none');
    $(div + 'Loading').remove();
}
$("#see_all_notifications").on("click", function (e) {
    if ($('#CounterSpan').attr('data-id') > 0) {
        $('.UserNodeSelected').removeClass('UserNodeSelected');

        myTasksPlus();
        $("#clear_all_notifications").trigger('click');
    }
});
$("#clear_all_notifications").on("click", function (e) {

    if ($('#CounterSpan').attr('data-id') > 0) {
        showLoader('NotificatioUl');
        $.ajax({
            url: document.getElementById("ActionsUrlHidden").value + 'ClearAllNotifications?token=' + document.getElementById("TokenHidden").value,
            cache: false
        }).then(function (data) {
            $('#NotificatioUl').fadeOut();
            $('.notification_number').html(0);
            $('#CounterSpan1').text('[ 0 ]');
            $('#CounterSpan').text('0');
            $('#CounterSpan').attr('data-id', 0);
            hideLoader('#NotificatioUl');
        });
    }

});
$("#home_div").on("click", function (e) {
    window.location.href = window.location.href.replace(window.location.href.substring(window.location.href.lastIndexOf("/") + 1), Pages.Home + "?");
});
function RefreshTreeNodes(node_id, openNode, delegationId) {
    var params = {};
    params.token = document.getElementById("TokenHidden").value;
    var postedData = JSON.stringify(params);
    $.ajax({
        url: document.getElementById("ActionsUrlHidden").value + 'UserNodes',
        type: "POST",
        data: postedData,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
    }).then(function (data) {
        sessionStorage.setItem('UserNodes', data.UserNodesResult);
        UserNodes = data.UserNodesResult;
        for (var i = 0; i < data.UserNodesResult.length; i++) {
            $('#' + data.UserNodesResult[i].NodeText.replace(/\s/g, "")).find('span').first().html(' [ ' + data.UserNodesResult[i].Count + ' ] ');
        }

    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
    if (delegatedUsers.length > 0) {
        var gctIds = [];
        for (j = 0; j < delegatedUsers.length; j++) {
            gctIds.push(delegatedUsers[j].GctId);
        }
        var data = {};
        data.token = document.getElementById("TokenHidden").value;
        data.delegatedGctIds = gctIds;
        var postData = JSON.stringify(data);
        $.ajax({
            url: document.getElementById("ActionsUrlHidden").value + 'DelegationUsersNodes',
            type: "POST",
            data: postData,
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        }).then(function (result) {
            for (j = 0; j < result.DelegationUsersNodesResult.length; j++) {
                var gctId = result.DelegationUsersNodesResult[j].Key;
                for (var i = 0; i < result.DelegationUsersNodesResult[j].Value.length; i++) {
                    $('#' + result.DelegationUsersNodesResult[j].Value[i].NodeText.replace(/\s/g, "") + delegationInboxes[gctId]).find('.inbox_count').first().html(' [ ' + result.DelegationUsersNodesResult[j].Value[i].Count + ' ] ');
                }
            }
        }).fail(function (fail) {
            HandleUnAuthotizedException(fail);
        });
    }


    if (typeof node_id != "undefined") {
        var inboxArrow = "inbox_menu_arrow";
        var node = titleUpperCase(node_id);
        node = node.replace(/ /g, '').charAt(0).toUpperCase() + node.slice(1);
        if (typeof delegationId != "undefined" && delegationId != 0) {
            var inboxIndex = delegationInboxes[delegationId];
            inboxArrow = inboxArrow + inboxIndex;
            node = node + inboxIndex;
        }
        if (typeof node != "undefined") {
            if (!$('#' + node).hasClass('UserNodeSelected')) {
                $('.UserNodeSelected').removeClass('UserNodeSelected');
                $('#' + node).addClass('UserNodeSelected');
            }
        }
        if (typeof node_id != "undefined" && openNode) {
            $('#' + node).trigger('click');
        }
        if (!$('#' + inboxArrow).hasClass('active')) {
            $('#' + inboxArrow).trigger('click');
        }
    }
}
$('#navigation a').click(function () {
    $('#navigation_div').find('a').removeClass('changeable_s ' + $.session.get("OldSecondColor"));
    $(this).addClass('changeable_s ' + $.session.get("OldSecondColor"));
});
function titleUpperCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join('');
}
function kMFormatter(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}
function OpenReports(ParentMenuId) {
    CreateTab(resources_Reports, "ReportsTab", document.getElementById("ReportUrl").value + "?UserLanguage=" + document.getElementById("LanguageHidden").value + "&UserGctId=" + document.getElementById("ContactGcIdHidden").value + "&UserToken=" + document.getElementById("TokenHidden").value + "&UserStructureGctId=" + document.getElementById("StructureGcIdHidden").value + "&StructureStcId=" + document.getElementById("StructureStcIdHidden").value + "&StructureStcId=" + document.getElementById("StructureStcIdHidden").value + "&time=" + new Date().getTime().toString() + "&ThemeName=" + imagePath + "&calendarType=" + calendarType + "&ParentMenuId=" + ParentMenuId + "&color=" + $.session.get("OldSecondColor"), false, 'Style/' + productVersion + '/' + imagePath + '/Resources/Images/CloseTab.svg');
}
function DeleteSavedCriteria(id, name) {
    GetHomeParentWindow(window).ShowConfirmation(resources_DeleteQuery, resources_DeleteConfirmation + '"' + name + '" ' + resources_QuestionMark, function () {
        var data = {
            token: document.getElementById("TokenHidden").value,
            id: id
        };
        var postedData = JSON.stringify(data);
        CallWebMethod(document.getElementById("ActionsUrlHidden").value + 'DeleteQuery', postedData, function (result) {
            GetSavedQueries(true);
            if (typeof $('.Search_content_wrapper').attr('url') != "undefined" && $('.Search_content_wrapper').attr('url').indexOf('DynamicAdvancedSearch.html') > -1) {
                LoadSavedQueries();
                if ($("#DisplaySearchResult").is(":visible")) {
                    MaximizeSearchResults();
                }
                Clear();
            }
        }, function (fail) {
            GetHomeParentWindow(window).HideMask();
            HandleUnAuthotizedException(fail);
        });
    }, function () {
        if (typeof $('#body_content').attr('url') != "undefined" && $('#body_content').attr('url').indexOf('searchCorrespondance.html') > -1 && getQuerystring($('#body_content').attr('url'), 'nodeId', '') != '') {
            GetHomeParentWindow(window).HideMask();
        } else {
            $('.UserNodeSelected').removeClass('UserNodeSelected');
        }
    });
}
function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
function ChangeLang(lang) {
    ShowMask();
    var params = {};
    //loggedInUser.Token.Directory
    params.token = loggedInUser.Token.Token;
    params.firstName = loggedInUser.FirstName;
    params.lastName = loggedInUser.LastName;
    params.firstNameAr = loggedInUser.FirstNameAr;
    params.lastNameAr = loggedInUser.LastNameAr;
    params.firstNameFr = loggedInUser.FirstNameFr;
    params.lastNameFr = loggedInUser.LastNameFr;
    params.phone = loggedInUser.Token.Phone ? null : '';
    params.fax = loggedInUser.Token.Fax;
    params.mobile = loggedInUser.Token.Mobile;
    params.email = loggedInUser.Token.Email;
    params.receiveByMail = loggedInUser.Token.ReceiveByEmail;
    params.receiveBySms = loggedInUser.Token.ReceiveBySms;
    params.language = lang;
    params.showHirji = loggedInUser.Token.ShowHijriCalendar;
    params.showGregorian = loggedInUser.Token.ShowGregorianCalendar;
    params.classicView = loggedInUser.Token.ClassicView ? true : false;
    params.VIPView = loggedInUser.Token.VIPView ? true : false;
    params.defaultDisplaySearch = loggedInUser.Token.DefaultDisplaySearch ? true : false;
    params.defaultDisplayList = loggedInUser.Token.DefaultDisplayList ? true : false;
    params.receiveOverdueNotification = loggedInUser.Token.ReceiveOverdueDocumentsCreated;
    params.beforeOverdueDays = loggedInUser.Token.OverdueDocumentTimeSpan;
    if (document.getElementById("pro_img") != null) {
        if (document.getElementById("pro_img").src != '') {
            params.profilePicture = document.getElementById("pro_img").src.replace(/^data:image\/[a-z]+;base64,/, "");
        } else {
            params.profilePicture = null;
        }
    } else {
        params.profilePicture = null;
    }

    var postedData = JSON.stringify(params);
    $.ajax({
        url: AppSettings.AuthenticationUrl + "UpdateUserInfo",
        type: "POST",
        data: postedData,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        async: true,
        cache: false,
    }).then(function (data) {
        HideMask();
        Alert(resources_SuccessfullySaved, function () {
            if (loggedInUser.Token.Language !== lang) {
                loggedInUser.Token.Language = lang;
                sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
                window.location.href = window.location.href.replace(window.location.href.substring(window.location.href.lastIndexOf("/") + 1), 'Home.html?');
            }
        })
    }).fail(function (fail) {
        HandleUnAuthotizedException(fail);
    });
}
$('#lang_li').click(function () {
    $('ul.lang').toggleClass('hidden_ul');
});

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
        $('.li_hover_tab').addClass('hover');
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