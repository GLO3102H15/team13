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
        name_watchlist = $('#myModal-watchlist select option:selected').text();
        id_movie = $('#id_movie').val();
        var film;
        $.get('http://localhost:3000/unsecure/movies/'+id_movie,function( data ) {
            film = data.results[0];
            $.post('http://localhost:3000/unsecure/watchlists/'+id_watchlist+'/movies',film,function( data ){
                getWatchlist();
                html = '<div class="alert alert-success alert-dismissible fade in alert-add-success" role="alert">';
                html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
                html += '<strong>Ajout réussi!</strong> Le film a bien été rajouté à la watchlist : '+name_watchlist+'.</div>';
                $('#alert-movie').append(html);
            });
        });
    });
    $('body').delegate('#save-watchlist-button','click',function(){
        name = $("#watchlist-input").val();
        $.post('http://localhost:3000/unsecure/watchlists',{"name":name},function( data ){
            html = '<a href="#/watchlists/'+data.id+'">';
            html += '<button id="'+data.id+'" class="btn btn-primary watchlistBtn" type="button">'+data.name;
            html += '<span class="badge">'+data.movies.length+' <span class="glyphicon glyphicon glyphicon-film" aria-hidden="true"></span></span>';
            html += '</button></a>';
            $('#list-watchlist').append(html);
            $('#watchlist-input').val('');
        });
    });
});

function getWatchlist(){
    $('#colInfo h3 .glyphicon').remove();
    $('#myModal-watchlist select option').remove();
    $('#watchlist-deja-present ul li').remove();
    $.get('http://localhost:3000/unsecure/watchlists',function( data ) {
        $('#colInfo h3').append('<span class="glyphicon glyphicon-plus glyph-watchlist" id="glyph-watchlist-ajouter"></span>');
        id = $('#id_movie').val();
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
};
function createWatchlistScript(){
    console.log('create a tester');
}