/**
 * Created by Rod on 15/10/15.
 */
$(function(){
    WatchlistsCollection = Backbone.Collection.extend({
        model: WatchlistModel,
        url : app_URL + 'watchlists',
        parse: function(response){
            console.log(tokenInformation);
            var collection = [];
            _(response).each(function(watchlist) {
                if(watchlist.hasOwnProperty('owner')){
                    if(watchlist.owner.email == tokenInformation.email){
                        console.log('ok ok');
                        collection.push(watchlist);
                    };
                }
                //collection.push(episode);
            });
            console.log(collection);
            return collection;
        }
    });
});

