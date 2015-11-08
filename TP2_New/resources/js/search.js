// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search(query) {
    $("#trailerRow").css('display', 'block');
    var q = query;
    gapi.client.load('youtube', 'v3', function() {
        var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet',
            key: 'AIzaSyCQk-chKH60zZj3HlpK6I-t2Fm9h6eQaiY'
        });

        request.execute(function(response) {
            var str = (response.result);
            //console.log(response.result.items[0].id.videoId);
            var url = "https://www.youtube.com/embed/" + str.items[0].id.videoId;
            //console.log(url);
            $('#search-container').html('<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>');
        });
    });
}