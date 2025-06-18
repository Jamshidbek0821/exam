let modalWrapper = document.querySelector(".modal-wrapper")
let modalInner = document.querySelector(".modal-inner")
let isUser = document.querySelector("")

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


loginedUserText.addEventListener("click", () => {
    modalWrapper.classList.remove("scale-0")
    modalInner.innerHTML = `
        <div class="w-[400px]">
            <h1 class="font-bold mb-[20px] text-[25px] text-center">Do you want to go out?</h1>
            <div class="flex items-center justify-center gap-[20px]">
                <button onclick="handleCancel()" class="hover:opacity-[70%] duration-300 w-[50%] p-[8px] bg-green-700 cursor-pointer text-white font-normal text-[15px] rounded-[35px]">Cancel</button>
                <button onclick="handleSignOut()" class="hover:opacity-[70%] duration-300 w-[50%] p-[8px] bg-red-700 cursor-pointer text-white font-normal text-[15px] rounded-[35px]">Exit</button>
            </div>
        </div>
    `
})
function handleCancel() {
    modalWrapper.classList.add("scale-0")
}
