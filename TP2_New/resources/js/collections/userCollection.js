/**
 * Created by Rod on 15/10/15.
 */
$(function(){
    UserCollection = Backbone.Collection.extend({
        model: UserModel,
        parse: function(response){
            var collection = [];
            console.log(response);
            /*
            _(response.results).each(function(episode) {
                collection.push(episode);
            });
            console.log(collection);
            */
            return collection;
        }
    });
});

