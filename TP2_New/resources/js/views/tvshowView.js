/**
 * Created by Rod on 27/10/15.
 */
(function(){
    TvShowView = Backbone.View.extend({
        el: '#show_content',
        events: {},
        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            this.model = new TvShowModel({collectionId: this.id});
            this.model.fetch({
                success: function(){
                    self.render();
                }
            });
        },

        render: function(){
            var self = this;
            $.get('resources/templates/tvshowTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({tvshow : self.model.toJSON()}));
            }, 'html');
        }
    });

    TvShowViewEpisodes = Backbone.View.extend({
        el: '#show_content',
        events: {},

        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            self.render();
        },

        render: function(){
            var self = this;
            $.get('resources/templates/tvshowTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({tvshow : self.model.toJSON()}));
            }, 'html');
        }
    });

})();