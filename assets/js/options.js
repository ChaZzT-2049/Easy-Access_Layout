const optionsBtn = document.querySelector("#openoptions")
const optionsMenu = document.querySelector(".options")
const closeOBtn = document.querySelector("#closeoptions")

window.addEventListener("click", (e)=>{
    if(e.target != optionsMenu && e.target != optionsBtn && !optionsMenu.contains(e.target)){
        optionsMenu.classList.remove("options--shown")
    }
})

optionsBtn.addEventListener("click", () =>{
    optionsMenu.classList.toggle("options--shown")
})
closeOBtn.addEventListener("click", () =>{
    optionsMenu.classList.toggle("options--shown")
})