/**
 * Created by Rod on 27/10/15.
 */
(function(){
    MovieView = Backbone.View.extend({

        el: '#show_content',
        events: {},

        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            this.model = new MovieModel({trackId: this.id});
            this.model.fetch({
                success: function(){
                    self.render();
                }
            });
        },

        render: function(){
            var self = this;
            $.get('resources/templates/movieTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({movie : self.model.toJSON()}));
            }, 'html');
            getWatchlist();
        }
    });
})();

