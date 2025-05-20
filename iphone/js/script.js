const buttons = document.querySelectorAll("#image-pics li")
const image = document.querySelector("#product-image")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
       

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selector")
        })

        const button = e.target
        const id = button.getAttribute("id")


       button.querySelector(".color").classList.add("selector")
        

       image.classList.add("changing")
       image.setAttribute("src", `img/iphone_${id}.jpg`);

       setTimeout(() => {
        image.classList.toggle("changing");
       }, 200);
    })
})


function toogleSection(button) {
    const content = button.closest("#especificacoes").querySelectorAll(".row")
    const hidden = content[0].style.display == "none"

    content.forEach(el => {
        el.style.display = hidden ? "flex" : "none"
    })
    button.textContent = hidden ? "-" : "+"
}