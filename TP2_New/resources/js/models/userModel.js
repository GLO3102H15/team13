/**
 * Created by Rod on 15/10/15.
 */
(function(){
    UserModel = Backbone.Model.extend({

        //idAttribute: "artistId",
        //urlRoot : 'http://localhost:3000/unsecure/users/',
        defaults: {
            email : '',
            name : '',
            id : '',
            following : '',
            token: ''

        },

        parse: function(response){
            console.log('userModel');
            console.log(response);
            return response
        }
    });
})();