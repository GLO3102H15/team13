/**
 * Created by Tom on 11/12/15.
 */

function Surprise(){
    return getMovieId();
};

function getMovieId(){
    var info = getMovieInfo().responseJSON;
    var id;

    while( info.resultCount ==  0){
        info = getMovieInfo().responseJSON;
    }
    var max = info.results.length-1;
    var i = Math.floor(Math.random() * (max + 1) + 0);
    var movie = info.results[i];
    id = movie.trackId;

    return id;
}
function getMovieInfo(){
    var token = $.cookie('myToken');
    var txt = createString();

    $.ajaxSetup({
        headers: { "Authorization": token }
    });

    return $.ajax({
        url: "http://localhost:3000/search/movies?q="+txt,
        type: 'GET',
        dataType: 'JSON',
        async: false,
        success: function (data) {
            //handleMovie(data)
            return data;
        },
        error: function (data) {
            if(data.status == 401){
                console.log("Token expired");
                app_router.navigate("",true);
            }
        }
    });
}

function createString()
{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 2; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

