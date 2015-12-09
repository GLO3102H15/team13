/**
 * Created by Rod on 27/10/15.
 */
(function () {
    SearchView = Backbone.View.extend({
        el: '#show_content',
        events: {
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var self = this;
            self.render();
        },

        render: function () {
            var self = this;
            var result;

            var token = $.cookie('myToken');

            $.ajaxSetup({
                headers: { "Authorization": token }
            });

            $.ajax({
                url: "http://localhost:3000/search?q=saw",
                type: 'GET',
                dataType: 'JSON',
                success: function (data) {
                    result = data;
                    console.log(result);
                },
                error: function (data) {
                    //ERROR
                }
            });

            $.get('resources/templates/searchTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template);
            }, 'html');
        }
    })
})();