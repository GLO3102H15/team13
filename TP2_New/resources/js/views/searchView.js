/**
 * Created by Rod on 8/12/15.
 */
(function() {
    SearchView = Backbone.View.extend({
        el: '#show_content',
        events: {},

        initialize: function () {
            _.bindAll(this, 'render');
            var self = this;
            self.render();
        },

        render: function () {
            var self = this;
            $.get('resources/templates/searchTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template);
            }, 'html');
        }
    });
});