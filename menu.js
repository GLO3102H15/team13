/**
 * Created by Rod on 21/9/15.
 */

function menuOnOff(){
    if(document.getElementById("miniMenu").style.display == "block"){
        document.getElementById("miniMenu").style.display = "none";
    }
    else{
        document.getElementById("miniMenu").style.display = "block";
    }
}

function menuWatchlistOnOff(){
    if(document.getElementById("myWatchlistMenu").style.display == "block"){
        document.getElementById("myWatchlistMenu").style.display = "none";
        document.getElementById("myWatchlist").style.backgroundColor = "rgba(20, 20, 20, 0)";
    }
    else{
        document.getElementById("myWatchlistMenu").style.display = "block";
        document.getElementById("myWatchlist").style.backgroundColor = "#16A79D";
    }
}