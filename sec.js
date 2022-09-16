document.addEventListener("DOMContentLoaded", () => {
    const recentimg = localStorage.getItem("image")

    if(recentimg){
        document.getElementById("imgper").setAttribute("src", recentimg)
    }
})