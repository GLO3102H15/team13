/**
 * Created by Rod on 15/10/15.
 */
$(function(){
    TvShowCollectionEpisodes = Backbone.Collection.extend({
        model: TvShowModelEpisodes,
        url: 'http://localhost:3000/unsecure/tvshows/season/544435219/episodes',
        parse: function(response){
            var collection = [];
            _(response.results).each(function(episode) {
                collection.push(episode);
            });
            console.log(collection);
            return collection;
        }
    });
});

