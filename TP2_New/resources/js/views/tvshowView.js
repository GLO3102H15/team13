/**
 * Created by Rod on 27/10/15.
 */
(function(){
    TvShowView = Backbone.View.extend({
        //template: _.template($('#tvshow-episodes-tpl').html()),
        el: '#show_content',
        events: {},
        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            this.model = new TvShowModel({collectionId: this.id});
            this.collection.url = 'http://localhost:3000/unsecure/tvshows/season/' + this.id + '/episodes';
            this.collection.bind('sync add remove',function(){
                self.render();
            });
            // We want the view to render itself each time the model is changed.
            // We can bind to any events like this.
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
                self.$el.html(self.template({tvshow : self.model.toJSON(), episodes: self.collection.toJSON()}));
            }, 'html');
        }
    });

    TvShowViewEpisodes = Backbone.View.extend({
        el: '#show_content',
        events: {},

        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            this.model = new TvShowModelEpisodes({collectionId: this.id});
            this.model.fetch({
                success: function(){
                    self.render();
                }
            });
        },

        render: function(){
            var self = this;
            $.get('resources/templates/tvshowEpisodesTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({tvshows : self.model.toJSON()}));
            }, 'html');
        }
    });

})();