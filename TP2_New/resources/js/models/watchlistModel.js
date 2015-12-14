/**
 * Created by Rod on 15/10/15.
 */
(function(){
    WatchlistModel = Backbone.Model.extend({
        urlRoot : app_URL + 'watchlists',
        defaults: {
            name : '',
            movies : [],
            owner : 'hola',
            id : ''
        },
        parse: function(response){
            return response;
        },
        validate: function(attrs){
            if(!attrs.name || attrs.name === ""){
                return "Please enter a valid task";
            }
        }
    });
})();