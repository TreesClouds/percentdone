function auto_refresh()
{
    let textBox = document.getElementById("update");
    let current_ms = Date.now();
    let start_ms = 1629124800000;
    let end_ms = 1654707600000;
    let perc = ((current_ms - start_ms) / (end_ms - start_ms) * 100)
    if (perc > 100) {
        textBox.innerHTML = "100%";
        setTimeout(confetti.start, 1000);
        setTimeout(confetti.stop, 5000);
    } else {
        textBox.innerHTML = perc.toFixed(10) + "%";
        setTimeout(auto_refresh, 1);
    }
}

auto_refresh()
