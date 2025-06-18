let modalWrapper = document.querySelector(".modal-wrapper")
let modalInner = document.querySelector(".modal-inner")

let elChooseFile = document.querySelector(".img-file")
let elChooseImg = document.querySelector(".img-choose")

let loginedUserText = document.querySelector(".logined-user")
let user = JSON.parse(localStorage.getItem("user"))
loginedUserText.textContent = `${user.firstname} ${user.lastname}`


// Sahifa yuklanganda localStorage dan rasmni yuklash
let savedImage = localStorage.getItem("uploaded-image")
if (savedImage) {
    elChooseImg.src = savedImage
} else {
    elChooseImg.src = "./images/profile-img.png" // default image
}

// Rasmga bosilganda file input ochiladi
elChooseImg.addEventListener("click", function () {
    elChooseFile.click()
})

// Rasm tanlanganda
elChooseFile.addEventListener("change", function (evt) {
    let selectedFile = evt.target.files[0]
    if (selectedFile) {
        let reader = new FileReader()
        reader.onload = function (e) {
            elChooseImg.src = e.target.result
            localStorage.setItem("uploaded-image", e.target.result)
        }
        reader.readAsDataURL(selectedFile)
    }
})

elChooseImg.addEventListener("contextmenu", function (e) {
    e.preventDefault()
    localStorage.removeItem("uploaded-image")
    elChooseImg.src = "./images/profile-img.png"
})
