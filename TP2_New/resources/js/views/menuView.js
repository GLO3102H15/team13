/**
 * Created by Rod on 27/10/15.
 */
(function(){
    MenuView = Backbone.View.extend({
        el: '#show_menu',
        events: {
            'click #doSearch' : 'getResults',
            'keyup #searchInput' : 'getResults',
            'click .btn-surprise' : 'getSurprise'
        },

        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            self.render();
        },

        render: function(){
            var self = this;
            var name = tokenInformation.name;
            var idUser = tokenInformation.id;
            //console.log(data);
            $.get('resources/templates/menuTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({username : name, idUser : idUser}));
            }, 'html');
            /*
            $.ajax({
                url: app_URL + "tokenInfo",
                type: 'GET',
                dataType: 'JSON',
                async: true,
                success: function (data) {
                    var name = data.name;
                    var idUser = data.id;
                    //console.log(data);
                     $.get('resources/templates/menuTemplate.html', function (data) {
                         self.template = _.template(data);
                         self.$el.html(self.template({username : name, idUser : idUser}));
                     }, 'html');
                },
                error: function (data) {
                    if(data.status == 401){
                        console.log("Token expired");
                        app_router.navigate("",true);
                    }
                }
            });
            */

        },

        getResults: function(){
            var qKey = $("#searchInput").val();
            var qURL = "search?q=" + qKey;
            app_router.navigate(qURL,true);
            //var resultsView = new SearchView({q : qURL, key : qKey});
        },

        getSurprise: function(){
            var id = Surprise();
            var qURL = "surprise/" + id;
            app_router.navigate(qURL,true);
        }

    });
})();