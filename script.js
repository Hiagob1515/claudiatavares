document.addEventListener("DOMContentLoaded", function () {
    let count = 1;
    const totalRadios = 10; // Alterar se houver mais ou menos opções

    document.getElementById("radio1").checked = true;

    setInterval(function () {
        nextImage();
    }, 5000);

    function nextImage() {
        count++;
        if (count > totalRadios) {
            count = 1;
        }
        let radio = document.getElementById("radio" + count);
        if (radio) {
            radio.checked = true;
        }
    }
});
