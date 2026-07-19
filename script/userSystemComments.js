function getOs() {
    const agent = navigator.userAgent;

    if(/Mac/.test(agent)) {
        return "MacOS";
    }
    else if(/iPhone|iPad|iPod|iOS/.test(agent)) {
        return "iOS";
    }
    else if(/Windows/.test(agent)) {
        return "Windows";
    }
    else if(/Android/.test(agent)) {
        return "Android";
    }
    else if(/Linux/.test(agent)) {
        return "Linux";
    }
}

document.getElementById("browser-comment").textContent = navigator.userAgent;
document.getElementById("os-comment").textContent = getOs();
