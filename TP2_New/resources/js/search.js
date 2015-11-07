// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
    var q = $('#query').val();
    gapi.client.load('youtube', 'v3', function() {
        var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet',
            key: 'AIzaSyCQk-chKH60zZj3HlpK6I-t2Fm9h6eQaiY'
        });

        request.execute(function(response) {
            var str = JSON.stringify(response.result);
            $('#search-container').html('<pre>' + str + '</pre>');
        });
    });
}