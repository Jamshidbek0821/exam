let elForm = document.querySelector(".register-form")

passwords = JSON.parse(localStorage.getItem("passwords")) || []

elForm.addEventListener("submit", function(e){
    e.preventDefault()
     let data = {
        id:passwords.length + 1,
        username:e.target.username.value,
        password:e.target.password.value
    }
    passwords.push(data)
    localStorage.setItem("passwords", JSON.stringify(passwords))

    setTimeout(() => {
        elForm.lastElementChild.previousElementSibling.innerHTML = `Sign up`
        setTimeout(() => {
            location.pathname = "/index.html"
        },600)
    },1000)
})