function handleWindowResize() {
    if (window.innerWidth > 500) {
        document.body.className = "big";
    } else if (window.innerWidth < 300) {
        document.body.className = "small";
    } else {
        document.body.className = "";
    }
/*    if (window.innerWidth > 70%) {
    } else if (window.innerWidth > 50%)
*/
}

window.addEventListener("resize", handleWindowResize);
