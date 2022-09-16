document.getElementById("file1").addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("image", reader.result)
    })

    reader.readAsDataURL(this.files[0])
})

