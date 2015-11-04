/**
 * Created by Rod on 15/10/15.
 */
(function(){
    WatchlistModel = Backbone.Model.extend({
        urlRoot : 'http://localhost:3000/unsecure/watchlists/',
        defaults: {
            name : '',
            movies : [],
            owner : {
                email : '',
                name : '',
                id : ''
            },
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