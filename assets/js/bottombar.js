const navItems = document.querySelectorAll(".nav__item")

navItems.forEach((navItem) =>{
    navItem.addEventListener("click", (event) =>{ changeItem(event.target) })
})

const changeItem = (item) => {
    navItems.forEach((navItem) =>{
        navItem.classList.remove("item--active")
        if(navItem.contains(item)){
            navItem.classList.add("item--active")
        }
    })
}
