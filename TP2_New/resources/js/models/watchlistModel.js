/**
 * Created by Rod on 15/10/15.
 */
(function(){
    WatchlistModel = Backbone.Model.extend({
        defaults: {
            movies : [],
            owner : {
                email : '',
                name : '',
                id : ''
            },
            id : ''
        },
        parse: function(response){
            this.id = response.id;
            return response;
        }
    });
})();