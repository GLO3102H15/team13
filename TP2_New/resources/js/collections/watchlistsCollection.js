/**
 * Created by Rod on 15/10/15.
 */
$(function(){
    WatchlistsCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        parse: function(response){
            return response.watchlists;
        }
    });
});