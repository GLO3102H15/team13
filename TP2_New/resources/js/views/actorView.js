/**
 * Created by Rod on 27/10/15.
 */
(function(){
    ActorView = Backbone.View.extend({

        el: '#show_content',
        events: {},

        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            this.model = new ActorModel({artistId: this.id});
            this.model.fetch({
                success: function(){
                    self.render();
                }
            });
        },

        render: function(){
            var self = this;
            $.get('resources/templates/actorTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({actor : self.model.toJSON()}));
            }, 'html');
        }
    });
})();

