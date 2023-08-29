const themeBtn = document.querySelector("#theme")

if(localStorage.getItem("mode") != ""){
    document.body.classList.add(localStorage.getItem("mode"))
    themeBtn.previousElementSibling.textContent = "Dark"
    themeBtn.textContent = "dark_mode"
}

themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themeBtn.previousElementSibling.textContent = "Dark"
        themeBtn.textContent = "dark_mode"
        localStorage.setItem("mode", "dark");
    }else{
        themeBtn.previousElementSibling.textContent = "Light"
        themeBtn.textContent = "light_mode"
        localStorage.setItem("mode", "");
    }
})
