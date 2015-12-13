/**
 * Created by Rod on 15/10/15.
 */


var app_URL = "http://localhost:3000/";

Backbone.ajax = function() {

    var token = $.cookie('myToken');

    arguments[0].headers = {
        'Authorization': token,
        'Accept': "application/json"
    };

    return Backbone.$.ajax.apply(Backbone.$, arguments);
};

$(function(){

    // Router



    var AppRouter = Backbone.Router.extend({
        routes: {
            ""                             : "getLogIn",          // Route pour le log-in / sign-up
            "home"                         : "getHome",           // Route pour le home
            "movies/:id"                   : "getMovie",          // Route pour afficher les détails d'un film
            "actors/:id"                   : "getActor",          // Route pour afficher les détails d'un acteur
            "tvshows/season/:id"           : "getTvshow",         // Route pour afficher les détails d'un TV show
            "tvshows/season/:id/episodes"  : "getTvshowEpisodes", // Route pour afficher les épisodes d'un TV show
            "watchlists"                   : "getWatchlist",      // Route pour afficher les détails d'une watchlist
            "watchlists/:id"               : "getWatchlistId",    // Route pour afficher les détails d'une watchlist
            "search?q=:query"              : "getSearch",         // Route pour afficher les résultats d'une recherche
            "surprise/:id"                 : "getSurprise",       // Route pour generer un film aléatoire
            "user/:id"                     : "getUser"            // Route pour generer un film aléatoire
        }
    });

    window.app_router = new AppRouter;

    app_router.on('route:getSurprise', function (id) {
        var menuView = new MenuView();
        var movieView = new MovieView({ id: id});
    });

    app_router.on('route:getUser', function (id) {
        var menuView = new MenuView();
        var userView = new UserView({ id: id});
    });

    app_router.on('route:getSearch', function (query) {
        var menuView = new MenuView();
        var searchView = new SearchView({q: query});
    });

    app_router.on('route:getLogIn', function () {
        if($.cookie('myToken')){
            app_router.navigate("#/home",true);
        }
        else{
            var loginView = new LoginView();
        }
    });

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

        var tvshowCollection = new TvShowCollectionEpisodes({id: id});
        var tvshowView = new TvShowView({
            id: id,
            collection: tvshowCollection
        });
        tvshowCollection.fetch();
    });

    app_router.on('route:getTvshowEpisodes', function (id) {
        var menuView = new MenuView();
        var tvshowViewEpisode = new TvShowViewEpisodes({ id: id});
    });

    app_router.on('route:getWatchlist', function () {
        var menuView = new MenuView();

        var watchlistCollection = new WatchlistsCollection();
        var watchlistView = new WatchlistView({
                collection: watchlistCollection
            });
        watchlistCollection.fetch();
    });

    app_router.on('route:getWatchlistId', function (id) {
        var menuView = new MenuView();
        var watchlistIdView = new WatchlistIdView({id: id});
    });

    Backbone.history.start(); // Important! Active le routing dans Backbone

});
