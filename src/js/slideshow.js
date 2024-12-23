let slideshow = document.querySelector('.tm-slideshow')
let listItem  = slideshow.querySelectorAll(".tm-slide-title-container")
let slideNav  = document.querySelector(".tm-slide-nav > ul")
let index     = 1

slideNav.addEventListener("click", (e) => {
    console.log(e.target.parentNode)
    let nav = e.target.parentNode
    let itemTarget = nav.getAttribute('data-item')

    listItem.forEach((item, index) => {
        if(index == (itemTarget - 1)) {
            item.className = 'tm-slide-title-container'
        } else {
            item.className = 'tm-slide-title-container tm-hidden'
        }
    })
})
