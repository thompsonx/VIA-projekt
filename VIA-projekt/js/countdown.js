function countdown() {
    var date = $("#c-date").text();
    var time = $("#c-time").text();
    var edate = new Date(Number(date.substr(date.lastIndexOf(".") + 2, 4)),
                            Number(date.substr(date.indexOf(".") + 2, 2)) - 1,
                            Number(date.substr(0, 2)),
                            Number(time.substr(0, 2)),
                            Number(time.substr(3, 2)), 0, 0);
    var now = new Date();
    var missing = edate - now;
    var tmp_m = missing;
    var days = Math.floor(missing / (1000 * 60 * 60 * 24));
    missing = Math.floor(missing % (1000 * 60 * 60 * 24));
    var hours = Math.floor(missing / (1000 * 60 * 60));
    missing = Math.floor(missing % (1000 * 60 * 60));
    var minutes = Math.floor(missing / (1000 * 60));
    missing = Math.floor(missing % (1000 * 60));
    var seconds = Math.floor(missing / (1000));

    $("#cd-days").text(days);
    $("#cd-hours").text(hours);
    $("#cd-minutes").text(minutes);
    $("#cd-seconds").text(seconds);

    var p_date = $("#c-published").text();
    var published = new Date(Number(p_date.substr(p_date.lastIndexOf(".") + 2, 4)),
                            Number(p_date.substr(p_date.indexOf(".") + 2, 2)) - 1,
                            Number(p_date.substr(0, 2)), 0, 0, 0, 0);
    var full = edate - published;
    var miss = (tmp_m / full) * 80;
    var c = 80 - miss;

    $("#cd-completed").css("width", c.toString() + "%");
    $("#cd-missing").css("width", miss.toString() + "%");
}

countdown();
window.setInterval(countdown, 1000);