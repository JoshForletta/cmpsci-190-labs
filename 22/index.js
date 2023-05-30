var zoomPercent = 1.0;

function flashLoaded(movie) {
    if (typeof (movie) != "undefined") {
        return movie.PercentLoaded() == 100;
    }

    return false;
}

function play() {
    let demo = document.getElementById("demo");

    if (flashLoaded(demo) && !demo.IsPlaying()) {
        demo.Play;
    }
}

function stop() {
    let demo = document.getElementById("demo");

    if (flashLoaded(demo) && demo.IsPlaying()) {
        demo.StopPlay();
    }
}

function rewind() {
    let demo = document.getElementById("demo");
    
    stop();

    if (demo.Rewind()) {
        demo.Rewind();
    }
}

function zoomIn() {
    let demo = document.getElementById("demo");

    zoomPercent *= 1.25;
    
    demo.Zoom(zoom);
}

function zoomOut() {
    let demo = document.getElementById("demo");

    zoomPercent *= 0.25;
    
    demo.Zoom(zoom);
}

window.onload = function() {
    document.getElementById("play").onclick = play;
    document.getElementById("stop").onclick = stop;
    document.getElementById("rewind").onclick = rewind;
    document.getElementById("zoomIn").onclick = zoomIn;
    document.getElementById("zoomOut").onclick = zoomOut;

}
