/**
 * Created by Rod on 15/10/15.
 */
(function(){
    ActorModel = Backbone.Model.extend({

        idAttribute: "artistId",
        urlRoot : 'http://localhost:3000/unsecure/actors/',
        defaults: {
            wrapperType : '',
            artistType : '',
            artistName : '',
            artistLinkUrl : '',
            artistId : '',
            amgArtistId : '',
            primaryGenreName : '',
            primaryGenreId : '',
            radioStationUrl : ''
        },

        parse: function(response){
            return response.results[0];
        },

        validate: function(attrs){
            if(!attrs.artistName || attrs.artistName === ""){
                return "Please enter a valid sss";
            }
        }
    });
})();