const openSidebar = document.querySelector("#openside")
const closeSidebar = document.querySelector("#closeside")
const sidebar = document.querySelector(".sidebar")

window.addEventListener("click", (e)=>{
    if(e.target != sidebar && e.target != openSidebar && !sidebar.contains(e.target)){
        sidebar.classList.remove("sidebar--shown")
    }
})

openSidebar.addEventListener("click", () =>{
    sidebar.classList.toggle("sidebar--shown")
})
closeSidebar.addEventListener("click", () =>{
    sidebar.classList.toggle("sidebar--shown")
})

const navOptions = document.querySelectorAll(".nav__option");

navOptions.forEach((option) =>{
    option.addEventListener("click", (event) =>{ changeOption(event.target) })
})

const changeOption = (item) => {
    navOptions.forEach((option) =>{
        option.classList.remove("nav--active")
        if(option.contains(item)){
            option.classList.add("nav--active")
        }
    })
}