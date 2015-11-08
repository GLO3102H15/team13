/**
 * Created by thomasbonnardot on 07/11/2015.
 */
$(document).ready(function(){
    $('body').delegate('#glyph-watchlist-present','click',function() {
        $('#myModal-movie').modal('show');
        $('#myModal-movie').css('display', 'block');
    });
    $('body').delegate('#go-watchlist','click',function(){
        setTimeout(function(){ window.location.href = '#/watchlists'; }, 400);
    });
    $('body').delegate('#glyph-watchlist-ajouter','click',function(){
        $('#myModal-watchlist').modal('show');
        $('#myModal-watchlist').css('display','block');
    });

    $('body').delegate('#ajouter-movie-watchlist','click',function(){
        id_watchlist = $('#myModal-watchlist select').val();
        id_movie = $('#id_movie').val();
        console.log('click sur Ajout Watchlist');
        var film;
        var watchlist;
        $.get('http://localhost:3000/unsecure/movies/'+id_movie,function( data ) {
            film = data.results[0];
            $.post('http://localhost:3000/unsecure/watchlists/'+id_watchlist+'/movies',film,function( data ){
                getWatchlist();
            });
        });

    });
});

function getWatchlist(){
    console.log('fonction getWatchlist');
    $('#colInfo h3 .glyphicon').remove();
    $('#myModal-watchlist select option').remove();
    $('#watchlist-deja-present ul li').remove();
    $.get('http://localhost:3000/unsecure/watchlists',function( data ) {
        $('#colInfo h3').append('<span class="glyphicon glyphicon-plus glyph-watchlist" id="glyph-watchlist-ajouter"></span>');
        id = $('#id_movie').val();
        console.log('Dans le GET');
        console.log(data);
        //Pour chaque Watchlist
        flag = false;
        for (i = 0; i < data.length; i++) {
            html = '<option value="'+data[i].id+'">'+data[i].name;
            flag_present = false
            for (j = 0; j < data[i].movies.length; j++) {
                flag_present = false
                //console.log(id);
                //console.log(data[i].movies[j].trackId);
                if(parseInt(data[i].movies[j].trackId) == parseInt(id) ){
                    flag = true;
                    flag_present = true;
                }
            }
            if (flag_present){
                html += '<small>  (déjà présent)</small>';
                $('#watchlist-deja-present ul').append('<li>' + data[i].name + '</li>')
            }
            html += '</option>';
            $('#myModal-watchlist select').append(html);
        }
        if(flag){
            $('#colInfo h3').append('<span class="glyphicon glyphicon-ok glyph-watchlist" id="glyph-watchlist-present"></span>');
        }
    });
}