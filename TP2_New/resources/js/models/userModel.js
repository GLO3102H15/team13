/**
 * Created by Rod on 15/10/15.
 */
(function(){
    UserModel = Backbone.Model.extend({
        defaults: {
            email : '',
            name : '',
            id : '',
            following : '',
            token: ''
        },

        parse: function(response){
            return response
        }
    });
})();