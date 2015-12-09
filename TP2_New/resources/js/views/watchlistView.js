/**
 * Created by Rod on 27/10/15.
 */
(function(){
    WatchlistView = Backbone.View.extend({
        el: '#show_content',
        /*
        events: {
            'click #save-watchlist-button': 'createWatchlist'
        },
        */
        initialize : function() {
            _.bindAll(this, 'render');
            var self = this;
            this.collection.bind('sync add remove',function(){
                self.render();
            });
        },
        render : function(){
            var self = this;
            $.get('resources/templates/watchlistTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({watchlists : self.collection.toJSON()}));
            }, 'html');
            console.log(self.collection.toJSON());
        },
        //Pb de double insertion avec cette methode
        /*
        createWatchlist : function(){
            console.log('click creation WichList');
            /*
            var isValid = this.collection.create({
                name: $("#watchlist-input").val()
            },{
                url: this.collection.url,
                type: 'POST',
                validate: true
            });
            if(!isValid){
                $("#save-watchlist-error").slideDown("fast");
            }

        }
         */
    });
})();







