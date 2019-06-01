export default function countdown (whatLeft) {
    let mins = new Date(whatLeft).getMinutes();
    if (mins < 10) {
        mins = '0' + mins;
    }

    let secs = new Date(whatLeft).getSeconds();
    if (secs < 10) {
        secs = '0' + secs;
    }
    return `Залишилось ${mins}:${secs}`;
}

