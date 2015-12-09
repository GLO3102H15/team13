/**
 * Created by Rod on 27/10/15.
 */
(function () {
    LoginView = Backbone.View.extend({
        el: '#show_content',
        events: {
            'click #btnSubmitLogIn': 'submitLogIn',
            'click #btnSubmitSignUp': 'submitSignUp'
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var self = this;
            self.render();
        },

        render: function () {
            var self = this;
            $.get('resources/templates/loginTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template);
            }, 'html');
        },

        submitLogIn: function () {
            console.log("Log-in");
            var loginData = {
                "email": $("#inputEmailLogIn").val(),
                "password": $("#inputPasswordLogIn").val()
            };
            $.ajax({
                url: "http://localhost:3000/login",
                type: 'POST',
                data: loginData,
                contentType: 'application/x-www-form-urlencoded',
                success: function (data) {
                    var date = new Date();
                    var minutes = 60;
                    console.log('SUCCESS', data);
                    date.setTime(date.getTime() + (minutes * 60 * 1000));
                    $.cookie("myToken", data.token, {expires: date});
                    app_router.navigate('home',true);
                },
                error: function (data) {
                    $("#loginError").show("slow");
                }
            });
        },

        submitSignUp: function () {
            console.log("Sign-up");
            var signupData = {
                "name": $("#inputNameSignUp").val(),
                "email": $("#inputEmailSignUp").val(),
                "password": $("#inputPasswordSignUp").val()
            };
            $.ajax({
                url: "http://localhost:3000/signup",
                type: 'POST',
                data: signupData,
                contentType: 'application/x-www-form-urlencoded',
                success: function (data) {
                    console.log('SUCCESS', data);
                    app_router.navigate('home',true);
                },
                error: function (data) {
                    $("#signupError").show("slow");
                }
            });
        }
    })
})();