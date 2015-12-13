/**
 * Created by Rod on 15/10/15.
 */
$(function(){
    WatchlistsCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        url : app_URL + 'watchlists',
        parse: function(response){
            console.log(response);
            return response;
        }
    });
});

