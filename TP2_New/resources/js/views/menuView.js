/**
 * Created by Rod on 27/10/15.
 */
(function(){
    MenuView = Backbone.View.extend({
        el: '#show_menu',
        events: {
            'click #doSearch' : 'getResults'
        },

        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            self.render();
        },

        render: function(){
            var self = this;
            $.get('resources/templates/menuTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template);
            }, 'html');
        },

        getResults: function(){
            var qKey = $("#searchInput").val();
            var qURL = "search?q=" + qKey;
            app_router.navigate(qURL,true);
            //var resultsView = new SearchView({q : qURL, key : qKey});
        }
    });
})();