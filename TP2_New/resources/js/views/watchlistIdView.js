/**
 * Created by Rod on 27/10/15.
 */
(function(){
    WatchlistIdView = Backbone.View.extend({

        el: '#show_content',
        events: {},

        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            this.model = new WatchlistModel({id: this.id});
            this.model.fetch({
                success: function(){
                    self.render();
                }
            });
        },

        render: function(){
            var self = this;
            $.get('resources/templates/watchlistIdTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({watchlist : self.model.toJSON()}));
            }, 'html');
        }
    });
})();

