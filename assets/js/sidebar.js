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