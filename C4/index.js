window.onload = () => {
    const btn = document.querySelector('.render-btn');
    btn.onclick = () => {
        document.designMode = "on";
        document.execCommand("HiliteColor", false, "yellow");
        document.execCommand("foreColor", false, "red");
        document.designMode = "off";
    };
}