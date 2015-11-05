/**
 * Created by Rod on 27/10/15.
 */
(function(){
    WatchlistIdView = Backbone.View.extend({

        el: '#show_content',
        events: {
            'click #delete-watchlist': 'deleteWatchlist',
            'click .delMovie': 'deleteMovie',
            'click #save-name-watchlist-button': 'renameWatchlist'
        },

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
        },

        deleteWatchlist: function() {
            var r = confirm("Are you sure you want to delete the entire watchlist ?");
            if (r == true) {
                var isValid = this.model.destroy({
                    success: function(){
                        app_router.navigate("#/watchlists",{trigger:true, replace:true});
                        //this.listenTo(this.model, 'destroy', app_router.navigate("#/watchlists",{trigger:false, replace:true}));
                        window.location.reload();
                    },
                    error: function(){
                        console.log("The watchlist could not be destroyed.");
                    }
                });
            };
        },

        deleteMovie: function(event){
            var trackId = (event.target).id;
            this.model.destroy({
                url: this.model.url() + "/movies/" + trackId,
                success : function(){
                    window.location.reload();
                },
                error: function(){
                    console.log("The movie could not be deleted.");
                }
            });
        },

        renameWatchlist:function(){
            var newName = $("#rename-watchlist-input-text").val();
            this.model.save({
                name: newName,
                success: function(){
                    window.location.reload();
                },
                error: function(){
                    console.log("The watchlist could not be renamed.");
                }
            });
        }
    });
})();

