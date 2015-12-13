/**
 * Created by Rod on 27/10/15.
 */
(function () {
    SearchView = Backbone.View.extend({
        el: '#show_content',
        events: {
        },

        initialize: function (options) {
            this.options = options;
            _.bindAll(this, 'render');
            var self = this;
            self.render();
        },

        render: function () {
            var self = this;
            var results;
            var resultsUsers;
            var query = this.options.q;
            var token = $.cookie('myToken');

            $.ajaxSetup({
                headers: { "Authorization": token }
            });

            $.ajax({
                url: app_URL + "search/users?q=" + query + "&limit=24",
                type: 'GET',
                dataType: 'JSON',
                async: true,
                success: function (data) {
                    resultsUsers = data;
                },
                error: function (data) {
                    if(data.status == 401){
                        console.log("Token expired");
                        app_router.navigate("",true);
                    }
                }
            });

            $.ajax({
                url: app_URL + "search?q=" + query + "&limit=24",
                type: 'GET',
                dataType: 'JSON',
                async: true,
                success: function (data) {
                    results = data.results;
                    $.get('resources/templates/searchTemplate.html', function (data) {
                        self.template = _.template(data);
                        self.$el.html(self.template({results: results, resultsUsers: resultsUsers, key: query}));
                    }, 'html');
                },
                error: function (data) {
                    if(data.status == 401){
                        console.log("Token expired");
                        app_router.navigate("",true);
                    }
                }
            });
        }
    })
})();