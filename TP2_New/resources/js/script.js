/**
 * Created by thomasbonnardot on 07/11/2015.
 */
function getWatchlist(){
    $('#colInfo h3 .glyphicon').remove();
    $('#myModal-watchlist select option').remove();
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
                if(parseInt(data[i].movies[j].trackId) == parseInt(id) ){
                    flag = true;
                    flag_present = true;
                }
            }
            if (flag_present){
                html += '<small>  (déjà présent)</small>';
            }
            html += '</option>';
            $('#myModal-watchlist select').append(html);
        }
        if(flag){
            $('#colInfo h3').append('<span class="glyphicon glyphicon-ok glyph-watchlist" id="glyph-watchlist-present"></span>');
        }
    });
}