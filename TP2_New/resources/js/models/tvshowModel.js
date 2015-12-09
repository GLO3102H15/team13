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
    TvShowModelEpisodes = Backbone.Model.extend({

        defaults: {
            wrapperType: '',
            kind: '',
            artistId: '',
            collectionId: '',
            trackId: '',
            artistName: '',
            collectionName: '',
            trackName: '',
            collectionCensoredName: '',
            trackCensoredName: '',
            artistViewUrl: '',
            collectionViewUrl: '',
            trackViewUrl: '',
            previewUrl: '',
            artworkUrl30: '',
            artworkUrl60: '',
            artworkUrl100: '',
            collectionPrice: '',
            trackPrice: '',
            collectionHdPrice: '',
            trackHdPrice: '',
            releaseDate: '',
            collectionExplicitness: '',
            trackExplicitness: '',
            discCount: '',
            discNumber: '',
            trackCount: '',
            trackNumber: '',
            trackTimeMillis: '',
            country: '',
            currency: '',
            primaryGenreName: '',
            contentAdvisoryRating: '',
            shortDescription: '',
            longDescription: '',
            radioStationUrl: ''
        }
    });
})();