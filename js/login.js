let elForm = document.querySelector(".login-form")

let passwordsSaved = JSON.parse(localStorage.getItem("passwords"))

elForm.addEventListener("submit", function(e){
    e.preventDefault()
    let data = {
        username:e.target.username.value,
        password:e.target.password.value
    }
    let isUser = passwordsSaved ? passwordsSaved.some(item => item.username == data.username && item.password == data.password) : passwords.some(item => item.username == data.username && item.password == data.password)
    let user = passwordsSaved ? passwordsSaved.find(item => item.username == data.username && item.password == data.password) : passwords.find(item => item.username == data.username && item.password == data.password)
    
    localStorage.setItem("user", JSON.stringify(user))
    setTimeout(() => {
        elForm.lastElementChild.previousElementSibling.innerHTML = `Login`
        setTimeout(() => {
            if(isUser){
                location.pathname = "/admin.html"
            }
            else{
                alert("Mistake")
            }
        },600)
    },1000)
})
