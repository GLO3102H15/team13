/**
 * Created by Rod on 27/10/15.
 */
(function(){
    WatchlistView = Backbone.View.extend({
        el: '#show_content',
        events: {
            'click #save-watchlist-button': 'createWatchlist'
        },

        initialize: function() {
            _.bindAll(this, 'render');
            var self = this;
            this.collection = new WatchlistsCollection();
            this.collection.fetch({
                success: function () {
                    self.render();
                }
            });
        },

        render: function(){
            var self = this;
            $.get('resources/templates/watchlistTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({watchlists : this.collection.toJSON()}));
            }, 'html');
        },

        createWatchlist: function(){
            var isValid = this.collection.create({
                name: $("#watchlist-input").val(),
                owner: "owner@mail.com"
            },{
                url: this.collection.url,
                type: 'POST',
                validate: true
            });
            //this.render();
            if(!isValid){
                //$("#error-task").slideDown("fast");
                console.log('erreur');
            }
        }
    });
})();







