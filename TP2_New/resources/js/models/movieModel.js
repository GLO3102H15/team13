/**
 * Created by Rod on 15/10/15.
 */
(function(){
    MovieModel = Backbone.Model.extend({

        idAttribute: "trackId",
        urlRoot : app_URL + 'movies/',
        defaults: {
            wrapperType : '',
            kind : '',
            trackId : '',
            artistName : '',
            trackName : '',
            trackCensoredName : '',
            trackViewUrl : '',
            previewUrl : '',
            artworkUrl30 : '',
            artworkUrl60 : '',
            artworkUrl100 : '',
            collectionPrice : '',
            trackPrice : '',
            trackRentalPrice : '',
            collectionHdPrice : '',
            trackHdPrice : '',
            trackHdRentalPrice : '',
            releaseDate : '',
            collectionExplicitness : '',
            trackExplicitness : '',
            trackTimeMillis : '',
            country : '',
            currency : '',
            primaryGenreName : '',
            contentAdvisoryRating : '',
            longDescription : '',
            radioStationUrl : ''
        },

        parse: function(response){
            return response.results[0];
        },

        validate: function(attrs){
            if(!attrs.trackId || attrs.trackId === ""){
                return "Please enter a valid movie";
            }
        }
    });
})();