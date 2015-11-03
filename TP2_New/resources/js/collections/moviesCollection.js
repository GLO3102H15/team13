/**
 * Created by Rod on 1/11/15.
 */
$(function(){
    MovieCollection = Backbone.Collection.extend({
        model: MovieModel,
        parse: function(response){
            return response.movies;
        }
    });
});

