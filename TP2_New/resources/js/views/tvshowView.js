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
            //this.model = new TvShowModel({collectionId: this.id});
            self.collection = new TvShowCollectionEpisodes({});
            self.collection.fetch({
                success: function(){
                    console.log('Render');
                    console.log(self.collection);
                }
            });
            // We want the view to render itself each time the model is changed.
            // We can bind to any events like this.
            this.collection.bind('change', function() {
                self.render();
            });
            /*
            this.model.fetch({
                success: function(){
                    self.render();
                    console.log(self);
                }
            });
            */
        },

        render: function(){
            var self = this;
            $.get('resources/templates/tvshowTemplate.html', function (data) {
                self.template = _.template(data);
                //self.$el.html(self.template({tvshow : self.model.toJSON()}));
            }, 'html');
            //var collection = new TvShowCollectionEpisodes();
            //collection.url = 'http://localhost:3000/unsecure/tvshows/season/'+this.id+'/episodes';
            //collection.fetch();
            //console.log('coucou');
            //console.log(collection);

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