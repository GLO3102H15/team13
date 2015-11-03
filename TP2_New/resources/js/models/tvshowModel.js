/**
 * Created by Rod on 15/10/15.
 */
(function(){
    TvShowModel = Backbone.Model.extend({

        idAttribute: "collectionId",
        urlRoot : 'http://localhost:3000/unsecure/tvshows/season/',
        defaults: {
            wrapperType : '',
            collectionType : '',
            artistId : '',
            collectionId : '',
            artistName : '',
            collectionName : '',
            collectionCensoredName : '',
            artistViewUrl : '',
            collectionViewUrl : '',
            artworkUrl60 : '',
            artworkUrl100 : '',
            collectionPrice : '',
            collectionHdPrice : '',
            collectionExplicitness : '',
            contentAdvisoryRating : '',
            trackCount : '',
            copyright : '',
            country : '',
            currency : '',
            releaseDate : '',
            primaryGenreName : '',
            longDescription : ''
        },

        parse: function(response){
            return response.results[0];
        },
    });
})();