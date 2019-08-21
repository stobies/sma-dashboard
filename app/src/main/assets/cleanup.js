'use strict';

function cleanLayout() {
    var $ = window.jQuery;
    $("#application-header").remove();
    $("#split-layout-teaser").remove();
    $("#screen-above > summary-and-navigation > div").remove();
    $("#split-toggle-wrapper").remove();
    $("#split-right > dashboard-widgets > section > badges").remove();
    $("#split-right > dashboard-widgets > section > sma-footer").remove();
    $("#split-right > dashboard-widgets > section > energy-power-balance > article > div.context-buttons.context-left").remove();
    $("#split-right > dashboard-widgets > section > energy-power-balance > article > div.context-buttons.context-right").remove();
    $("#chartPreview > article > fb-share-button").remove();
    $("#main-content-div").css({ 'padding-top' : '0px'});
    $("#split-right > dashboard-widgets > section > energy-power-balance > article > section.epb-headline").remove();
    $("#split-right > dashboard-widgets > section > weather").remove();
    $("#green-impact").remove();
    $("#chartPreview > article > nav").remove();


    $("#split-right > dashboard-widgets > section > energy-power-balance > article > section:nth-child(2) > energy-power-balance-system-view > section > div").css({ 'font-size' : '22px'});
    $("#livedata > div:nth-child(1)").css({'height' : '180px'});
    $("#livedata > div:nth-child(2)").css({'height' : '180px'});

    $("#livedata > div:nth-child(1) > div > donut > div").css({'padding-top' : ''});
    $("#livedata > div:nth-child(2) > div > donut > div").css({'padding-top' : ''});
}

window.setTimeout(cleanLayout, 10000);
window.setInterval(cleanLayout, 10000);

