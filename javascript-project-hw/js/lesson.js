

const phoneInput = document.querySelector("#phone_input")
const phoneCheck = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "ok"
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerHTML = "Not ok"
        phoneResult.style.color = "red"
    }
}
////////////////////////////

const tabContent = document.querySelectorAll(".tab_content_block")
const tabs = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")

const hideTabContent = () => {
    tabContent.forEach((item) => {
    item.style.display = "none"
 })

 tabs.forEach((item) => {
    item.classList.remove("tab_content_item_active")
 })
 }

 const showTabContent = (index =0) => {
 tabContent[index].style.display = "block" 
 tabs[index].classList.add("tab_content_item_active")
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabs.forEach((item, i) => {
            if(event.target === item) {
                hideTabContent()
                showTabContent(i)  
            }
        })
    }
}

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

autoSlider()