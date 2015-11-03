/**
 * Created by Rod on 27/10/15.
 */
(function(){
    WatchlistView = Backbone.View.extend({
        el: '#show_content',
        events: {},

        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            self.render();
        },

        render: function(){
            var self = this;
            $.get('resources/templates/watchlistTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({watchlist : self.model.toJSON()}));
            }, 'html');
        }
    });
})();