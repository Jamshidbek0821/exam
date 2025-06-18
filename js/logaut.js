let isUser = document.querySelector(".logined-user")
let findedUser = JSON.parse(localStorage.getItem("user"))
let modalWrapper = document.querySelector(".modal-wrapper")
let modalInner = document.querySelector(".modal-inner")

let User = passwords.find(item => item.password == findedUser.password && item.username == findedUser.username)
console.log("salom");


isUser.innerHTML = `${User.firstname} ${User.lastname}`

modalWrapper.addEventListener("click", (e) => e.target.id == "wrapper" && modalWrapper.classList.add("scale-0"))

// Sign out start
isUser.addEventListener("click", () => {
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

function handleSignOut() {
    modalWrapper.classList.add("scale-0")
    setTimeout(() => {
        localStorage.clear()
        location.pathname = "/"
    }, 800)
}
// Sign out end