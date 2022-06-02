function auto_refresh()
{
    let textBox = document.getElementById("update");
    let current_ms = Date.now();
    let start_ms = 1629124800000;
    let end_ms = 1654716600000;
    let perc = ((current_ms - start_ms) / (end_ms - start_ms) * 100)
    if (perc > 100) {
        perc = "100";
    } else {
        perc = perc.toFixed(10);
    }
    textBox.innerHTML = perc + "%";
    setTimeout(auto_refresh, 1);
}

auto_refresh()
