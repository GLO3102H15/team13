/**
 * Created by Rod on 15/10/15.
 */
$(function(){
    WatchlistsCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        url : 'http://localhost:3000/unsecure/watchlists',
        parse: function(response){
            return response.watchlists;
        }
    });
});

