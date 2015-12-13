/**
 * Created by Rod on 27/10/15.
 */
(function(){
    var followFlagEvent = false;
    var unfollowFlagEvent = false;
    UserView = Backbone.View.extend({
        //template: _.template($('#tvshow-episodes-tpl').html()),
        el: '#show_content',
        events: {
            'click .btn-follow': 'followUser',
            'click .btn-unfollow': 'unfollowUser'
        },
        initialize: function(){
            _.bindAll(this, 'render');
            var self = this;
            this.modelUser = new UserModel();
            this.modelUser.url = app_URL +'tokenInfo';
            this.modelUser.fetch();
            this.modelUser.bind('sync add remove',function(){
                self.render();
            });
            this.model = new UserModel();
            this.model.url = app_URL + 'users/' + this.id;

            this.model.bind('sync add remove',function(){
                self.render();
            });
            // We want the view to render itself each time the model is changed.
            // We can bind to any events like this.
            this.model.fetch({
                success: function(){
                    self.render();
                },
                error: function (data) {
                    if(data.status == 401){
                        console.log("Token expired");
                        app_router.navigate("",true);
                    }
                }
            });
        },

        render: function(){
            var self = this;
            var listeFollow = self.modelUser.toJSON();
            var idLogin = listeFollow.id;
            var flag = self.checkFollow(listeFollow);
            $.get('resources/templates/userTemplate.html', function (data) {
                self.template = _.template(data);
                self.$el.html(self.template({user : self.model.toJSON(), idLogin: idLogin,flag : flag}));
            }, 'html');
            followFlagEvent = false;
            unfollowFlagEvent = false;

            console.log(self.model.toJSON().name);
        },
        checkFollow: function(list){
            var self = this;
            var idFollow = self.model.toJSON().id;
            var flag = 'none';
            for (var i = 0; i< list.following.length; i++){
                if(idFollow == list.following[i].id){
                    flag = 'follow';
                }
            };
            if(idFollow == list.id){
                flag = 'self'
            };
            return flag;
        },
        followUser: function(){
            if(!followFlagEvent) {
                console.log('Click Follow');
                var self = this;
                var idFollow = self.model.toJSON().id;
                console.log(self.model.toJSON().name);
                console.log(idFollow);
                $.ajax({
                    url: "http://localhost:3000/follow",
                    type: 'POST',
                    data: {id: idFollow},
                    dataType: 'JSON',
                    async: true,
                    success: function (data) {
                        console.log('ok');
                        self.spanUnFollow();
                        //$('.btn-follow').remove();

                    },
                    error: function (data) {
                        if (data.status == 401) {
                            console.log("Token expired");
                            app_router.navigate("", true);
                        }
                        if (data.status == 412) {
                            console.log("Already exist");
                        }
                    }
                });
                followFlagEvent = true;
                unfollowFlagEvent = false;
            }
        },
        unfollowUser: function(){
            if(!unfollowFlagEvent) {
                console.log('Click unFollow');
                var self = this;
                var idFollow = self.model.toJSON().id;
                console.log(self.model.toJSON().name);

                $.ajax({
                    url: "http://localhost:3000/follow/" + idFollow,
                    type: 'DELETE',
                    dataType: 'JSON',
                    async: true,
                    success: function (data) {
                        console.log('ok delete');
                        self.spanFollow();

                    },
                    error: function (data) {
                        if (data.status == 401) {
                            console.log("Token expired");
                            app_router.navigate("", true);
                        }
                        if (data.status == 412) {
                            console.log("Already exist");
                        }
                    }
                });
                followFlagEvent = false;
                unfollowFlagEvent = true;
            }
        },
        spanFollow: function(){
            $('.btn-unfollow').remove();
            var html = '<span class="btn-follow"><span class="glyphicon glyphicon-plus follow"></span>Follow</span>';
            $('#colUser').prepend(html);
        },
        spanUnFollow: function(){
            var self = this.modelUser.toJSON();
            var id = self.id;
            var name = self.name;
            $('.btn-follow').remove();
            var html = '<span class="btn-unfollow"><span class="glyphicon glyphicon-remove unfollow"></span>unFollow</span>';
            $('#colUser').prepend(html);
            /*
            html = '<a href="#/user/'+id+'" class="btn btn-primary col-xs-3">'+name+' <small>(Me)</small></a>';
            $('.friends-list').append(html);
            */
        }
    });
})();