function timer() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let running = false;
    $("#start-timer").on('click', function start() {
        $(this).attr("disabled", "disabled");
        if(running){
            return;
        }
        let interval = setInterval(function start(){
            running = true;
            if (seconds === 59) {
                seconds = 0;
                if (minutes === 59) {
                    minutes = 0;
                    if (hours === 60) {
                        timer.stop();
                    }
                    else hours++;
                }
                else minutes++;
            }
            else seconds++;
            $("#seconds").text(pad(seconds, 2));
            $("#minutes").text(pad(minutes, 2));
            $("#hours").text(pad(hours, 2));

            $("#stop-timer").on('click', function(){
                $("#start-timer").removeAttr("disabled");
                clearInterval(interval);
                if (interval) {
                    clearInterval(interval);
                }
                running = false;
            });
        }, 1000);
    });
    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
}
