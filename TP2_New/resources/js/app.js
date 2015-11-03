/**
 * Created by Rod on 15/10/15.
 */

$(function(){

    // Router

    var AppRouter = Backbone.Router.extend({
        routes: {
            ""                             : "getHome",           // Route par défault
            "movies/:id"                   : "getMovie",          // Route pour afficher les détails d'un film
            "actors/:id"                   : "getActor",          // Route pour afficher les détails d'un acteur
            "tvshows/season/:id"           : "getTvshow",         // Route pour afficher les détails d'un TV show
            "tvshows/season/:id/episodes"  : "getTvshowEpisodes", // Route pour afficher les épisodes d'un TV show
            "watchlists/:id"               : "getWatchlist"       // Route pour afficher les détails d'une watchlist
        }
    });

    var app_router = new AppRouter;

    app_router.on('route:getHome', function () {
        var menuView = new MenuView();
        var homeView = new HomeView();
    });

    app_router.on('route:getMovie', function (id) {
        var menuView = new MenuView();
        var movieView = new MovieView({ id: id});
    });

    app_router.on('route:getActor', function (id) {
        var menuView = new MenuView();
        var actorView = new ActorView({ id: id});
    });

    app_router.on('route:getTvshow', function (id) {
        var menuView = new MenuView();
        var tvshowView = new TvShowView({ id: id});
    });

    app_router.on('route:getTvshowEpisodes', function (id) {
        var menuView = new MenuView();
        var tvshowViewEpisode = new TvShowViewEpisodes({ id: id});
    });

    app_router.on('route:getWatchlist', function (id) {
        var menuView = new MenuView();
        var watchlistView = new WatchlistView({id: id});
    });

    Backbone.history.start(); // Important! Active le routing dans Backbone

});
