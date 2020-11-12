//need to run on server, for localhost use laragon or node server
//for more info/tutorial refer this website https://lokalise.com/blog/localizing-apps-jquery/
$(function() {
    //function to load all the translation file and apply on the page
    loadLanguageOnReady();

    $('.dropdown-item').on('click', function(){
        //function to load the translation based on selected dropdown and apply on the page
        loadLanguageOnChange($(this).data('lang'));
    });
});

function loadLanguageOnReady(){
    $.i18n().load({
        en: 'js/i18n/lang/en.json',
        bm: 'js/i18n/lang/bm.json',
    }).done(function() {
        $('html').i18n();
    });
}

function loadLanguageOnChange(lang) {
    $.i18n().locale = lang;
    $('html').i18n();
}