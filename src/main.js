const body = document.body

const DM = () => {
    let theme = localStorage.getItem("gppcrTheme");
    if (!theme) {
        localStorage.setItem("gppcrTheme", "light");
        theme = "light";
    }
    if (theme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
};


(function init() {
    DM()
})()