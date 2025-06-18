let modalWrapper = document.querySelector(".modal-wrapper")
let modalInner = document.querySelector(".modal-inner")
let teachers = JSON.parse(localStorage.getItem("teachers")) || []
let elTeacherTable = document.querySelector(".teachers-tables")
let elSearchInput = document.querySelector(".search-input")
let elChooseFile = document.querySelector(".img-file")
let elChooseImg = document.querySelector(".img-choose")
let elWrapper = document.querySelector("#wrapper")
let isUser = document.querySelector(".logined-user")
let findedUser = JSON.parse(localStorage.getItem("user"))


let User = passwords.find(item => item.password == findedUser.password && item.username == findedUser.username)



isUser.innerHTML = `${User.firstname} ${User.lastname}`




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
// Add teacher part start
function handleAddBtnClick() {
    modalWrapper.classList.remove("scale-0")
    modalInner.innerHTML = `
    <form autocomplete="off" class="add-teacher-form w-[980px] px-[42px] py-[20px] flex gap-[60px]">
        <div class="flex flex-col gap-[15px]">
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Full Name</span>
                <input name="fullName" required
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none"
                    type="text" placeholder="Full Name">
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Email address</span>
                <input name="emailAddress" required
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none"
                    type="text" placeholder="Email address">
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Subject</span>
                <select name="subjectId"
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none">
                    <option value="0">Chemistry</option>
                    <option value="1">French</option>
                    <option value="2">Maths</option>
                    <option value="3">English</option>
                </select>
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">About</span>
                <input name="about" required
                    class="font-medium text-[14px] text-[#8A8A8A] pb-[130px] pl-[10px] w-[407px] h-[170px] border-[1px] border-[#A7A7A7] outline-none"
                    type="text" placeholder="About">
            </label>
        </div>
        <div class="flex flex-col gap-[16px]">
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Class</span>
                <select name="className"
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none">
                    <option value="0">J SS 2</option>
                    <option value="1">JSS 3</option>
                    <option value="2">SS 3</option>
                    <option value="3">JSS 1</option>
                </select>
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Gender</span>
                <select name="gender"
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none">
                    <option value="0">Female</option>
                    <option value="1">Male</option>
                </select>
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Age</span>
                <input name="age" required
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none"
                    type="number" placeholder="Age">
            </label>
            <label class="pt-[20px]">
                <input type="file" class="choose-file hidden"/>
                <div class="relative mx-auto flex text-start pt-[10px] w-[400px] h-[180px] bg-white">
                    <img class="choose-img absolute w-full h-full hidden" src="" alt="choose img"/>
                    <p class="text-[15px] text-[#4F4F4F] text-start">Import Img</p>
                </div>
            </label>
            <button class="add-btn hover:opacity-[70%] duration-300 font-semibold cursor-pointer text-[14px] text-[#FFFFFF] bg-[#509CDB] mt-[15px] py-[10px] w-[407px] text-center rounded-[4px]">Save</button>
        </div>
    </form>
`
    let elAddTeacherForm = document.querySelector(".add-teacher-form")
    let elChooseFile = document.querySelector(".choose-file")
    let elChooseImg = document.querySelector(".choose-img")
    let elSubmitBtn = document.querySelector(".add-btn")
    elChooseFile.addEventListener("change", function (evt) {
        elChooseImg.classList.remove("hidden")
        elChooseImg.src = URL.createObjectURL(evt.target.files[0])
    })
    elAddTeacherForm.addEventListener("submit", function (evt) {
        evt.preventDefault()
        let Teachers = {
            ID: teachers[teachers.length - 1]?.ID ? teachers[teachers.length - 1].ID + 1 : 1,
            fullName: evt.target.fullName.value,
            emailAddress: evt.target.emailAddress.value,
            subjectId: evt.target.subjectId.value,
            about: evt.target.about.value,
            className: evt.target.className.value,
            gender: evt.target.gender.value,
            age: evt.target.age.value,
            imgURL: elChooseImg.src,
        }
        teachers.push(Teachers)
        localStorage.setItem("teachers", JSON.stringify(teachers))
        setTimeout(() => {
            elSubmitBtn.innerHTML = `Save`
            setTimeout(() => {
                modalWrapper.classList.add("scale-0")
                renderTeachers(teachers, elTeacherTable)
            }, 1000)
        })
    })
}
elWrapper.addEventListener("click", () => {
    elWrapper.classList.add("scale-0")
})

// Bu yerda eventni to‘xtatamiz:
modalInner.addEventListener("click", (e) => {
    e.stopPropagation()
})


// Add teacher part end
// update part start 
function handleUpdateTeacher(id) {
    let findedObj = teachers.find(item => item.ID == id)
    modalWrapper.classList.remove("scale-0")
    modalInner.innerHTML = `
    <form autocomplete="off" class="add-pool-form w-[980px] px-[42px] py-[20px] flex gap-[60px]">
        <div class="flex flex-col gap-[15px]">
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Full Name</span>
                <input value="${findedObj.fullName}" name="fullName" required
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none"
                    type="text" placeholder="Full Name">
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Email address</span>
                <input value="${findedObj.emailAddress}" name="emailAddress" required
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none"
                    type="text" placeholder="Email address">
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Subject</span>
                <select name="subjectId"
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none">
                    <option ${findedObj.subjectId == "0" && "selected"} value="0">Chemistry</option>
                    <option ${findedObj.subjectId == "1" && "selected"} value="1">French</option>
                    <option ${findedObj.subjectId == "2" && "selected"} value="2">Maths</option>
                    <option ${findedObj.subjectId == "3" && "selected"} value="3">English</option>
                </select>
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">About</span>
                <input value="${findedObj.about}" name="about" required
                    class="font-medium text-[14px] text-[#8A8A8A] pb-[130px] pl-[10px] w-[407px] h-[170px] border-[1px] border-[#A7A7A7] outline-none"
                    type="text" placeholder="About">
            </label>
        </div>
        <div class="flex flex-col gap-[16px]">
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Class</span>
                <select name="className"
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none">
                    <option ${findedObj.className == "0" && "selected"} value="0">J SS 2</option>
                    <option ${findedObj.className == "1" && "selected"} value="1">JSS 3</option>
                    <option ${findedObj.className == "2" && "selected"} value="2">SS 3</option>
                    <option ${findedObj.className == "3" && "selected"} value="3">JSS 1</option>
                </select>
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Gender</span>
                <select name="gender"
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none">
                    <option ${findedObj.gender == "0" && "selected"} value="0">Female</option>
                    <option ${findedObj.gender == "1" && "selected"} value="1">Male</option>
                </select>
            </label>
            <label class="flex flex-col">
                <span class="font-medium text-[14px] text-[#8A8A8A] pb-[5px]">Age</span>
                <input value="${findedObj.age}" name="age" required
                    class="font-medium text-[14px] text-[#8A8A8A] pt-[8px] pb-[7px] pl-[10px] w-[407px] border-[1px] border-[#A7A7A7] outline-none"
                    type="number" placeholder="Age">
            </label>
            <label class="pt-[20px]">
                <input type="file" class="choose-file hidden"/>
                <div class="relative mx-auto flex text-start pt-[10px] w-[400px] h-[180px] bg-white">
                    <img class="choose-img absolute w-full h-full " src="${findedObj.imgURL}" alt="choose img"/>
                    <p class="text-[15px] text-[#4F4F4F] text-start">Import Img</p>
                </div>
            </label>
            <button class="add-btn hover:opacity-[70%] duration-300 font-semibold cursor-pointer text-[14px] text-[#FFFFFF] bg-[#509CDB] mt-[15px] py-[10px] w-[407px] text-center rounded-[4px]">Update</button>
        </div>
    </form>
`
    let elUpdateTeacher = document.querySelector(".add-pool-form")
    let elChooseFile = document.querySelector(".choose-file")
    let elChooseImg = document.querySelector(".choose-img")
    let elSubmitBtn = document.querySelector(".add-btn")
    elChooseFile.addEventListener("change", function (evt) {
        elChooseImg.src = URL.createObjectURL(evt.target.files[0])
    })
  elUpdateTeacher.addEventListener("submit", function (evt) {
    evt.preventDefault()
    findedObj.fullName = evt.target.fullName.value
    findedObj.emailAddress = evt.target.emailAddress.value
    findedObj.subjectId = evt.target.subjectId.value
    findedObj.about = evt.target.about.value
    findedObj.className = evt.target.className.value
    findedObj.gender = evt.target.gender.value
    findedObj.age = evt.target.age.value
    findedObj.imgURL = elChooseImg.src

    localStorage.setItem("teachers", JSON.stringify(teachers))

    elSubmitBtn.innerHTML = `Updating...`

    setTimeout(() => {
        modalWrapper.classList.add("scale-0")
        renderTeachers(teachers, elTeacherTable)
    }, 1000)
})

}
// update part end 
// Delete Part startAdd commentMore actions
let handleDeleteTeacher = (ID) => {
    modalWrapper.classList.remove("scale-0")
    modalInner.innerHTML = `
         <div class="w-[600px]">
            <h1 class="font-bold mb-[20px] text-[35px] text-center">Do you want to delete?</h1>
            <div class="flex items-center justify-center gap-[20px]">
                <button onclick="handleCancel()" class="hover:opacity-[70%] duration-300 w-[48%] p-[8px] bg-green-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px]">Cancel</button>
                <button onclick="deleteTeacher(${ID})" class="hover:opacity-[70%] duration-300 w-[48%] p-[8px] bg-red-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px]">Delete</button>
            </div>
        </div>
    `
}
function deleteTeacher(id) {
    let deleteId = teachers.findIndex(item => item.ID == id)
    teachers.splice(deleteId, 1)
    localStorage.setItem("teachers", JSON.stringify(teachers))
    modalWrapper.classList.add("scale-0")
    renderTeachers(teachers, elTeacherTable)
}
// Delete Part end
// Search Part start
elSearchInput.addEventListener("input", function (e) {
    let value = e.target.value.toLowerCase()
    let feltredTeachers = teachers.filter(item => item.fullName.toLowerCase().includes(value))
    renderTeachers(feltredTeachers, elTeacherTable)
})
// Search Part end

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

function handleSignOut(){
    location.pathname ="/index.html"
}
