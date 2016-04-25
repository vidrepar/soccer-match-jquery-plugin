$.get('', function (data, status) {

    if (status) {
        resData = data;
        $('#plugin').matchCarouselSport(resData);
    }

});

$.get('', function (data, status) {

    if (status) {
        resData = data;
        $('#plugin').matchCarouselBet(resData);
    }

});
