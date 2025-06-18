// Table Head Create
let elOrderHeading = document.querySelector(".order-heading")
let elTeacherTableBody = document.querySelector(".table-body")

let teacherHeading = ["ID", "Name", "Subject", "Class", "Email  address", "Gender", "age", "Actions"]
let orders = JSON.parse(localStorage.getItem("teachers")) || []


function orderHeading(arr, list, data) {
    if (data.length > 0) {
        list.innerHTML = null
        let elTR = document.createElement("tr")
        arr.forEach((item) => {
            let elTH = document.createElement("th")
            elTH.textContent = item
            elTR.append(elTH)
        })
        list.append(elTR)
    }
}

// Table Head Create


// Render Products start
function renderTeachers(arr, list) {
    list.innerHTML = null

    if (arr.length > 0) {
        arr.forEach((item) => {
            let elTr = document.createElement("tr");
            elTr.className = "bg-white";
            elTr.innerHTML = `
                <td class="py-[17px] text-[#4F4F4F] text-center text-[12px] bg-white">${item.ID}</td>
                <td class="text-center text-[12px] text-[#424242] flex py-[17px] bg-white"> 
                    <img class="mx-auto" src="${item.imgURL}" alt="Pool img" width="24" height="24">${item.fullName}
                </td>
                <td class="py-[17px] text-[#4F4F4F] text-center text-[12px] bg-white">
                    ${item.subjectId == "0" ? "Chemistry" : (item.subjectId == "1" ? "French" : (item.subjectId == "2" ? "Maths" : "English"))}
                </td>
                <td class="py-[17px] text-[#4F4F4F] text-center text-[12px] bg-white">
                    ${item.className == "0" ? "J SS 2" : (item.className == "1" ? "JSS 3" : (item.className == "2" ? "SS 3" : "JSS 1"))}
                </td>
                <td class="py-[17px] text-[#4F4F4F] text-center text-[12px] bg-white">${item.emailAddress}</td>
                <td class="py-[17px] text-[#4F4F4F] text-center text-[12px] bg-white">${item.gender == "0" ? "Female" : "Male"}</td>
                <td class="py-[17px] text-[#4F4F4F] text-center text-[12px] bg-white">${item.age}</td>
                <td class="py-[17px] text-[#4F4F4F] text-center bg-white">
                    
                    <button onclick="handleUpdateTeacher(${item.ID})" class="cursor-pointer">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.75012 15.8125V19.2499H6.18752L16.3255 9.11191L12.8881 5.67234L2.75012 15.8125ZM18.9847 6.45268C19.0697 6.36793 19.1372 6.26722 19.1832 6.15635C19.2292 6.04547 19.2529 5.9266 19.2529 5.80655C19.2529 5.6865 19.2292 5.56763 19.1832 5.45675C19.1372 5.34588 19.0697 5.24517 18.9847 5.16041L16.8396 3.01529C16.7548 2.93027 16.6541 2.86281 16.5432 2.81679C16.4323 2.77076 16.3135 2.74707 16.1934 2.74707C16.0734 2.74707 15.9545 2.77076 15.8436 2.81679C15.7328 2.86281 15.632 2.93027 15.5473 3.01529L13.8697 4.69827L17.3071 8.13026L18.9847 6.45268Z"
                                fill="#3F8C8E" />
                        </svg>
                    </button>
                    <button onclick="handleDeleteTeacher(${item.ID})" class="cursor-pointer ml-[10px]">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path

                                d="M11 1.57129C11.8064 1.57129 12.5818 1.8812 13.1661 2.43693C13.7503 2.99266 14.0986 3.75168 14.139 4.557L14.1429 4.71415H18.0715C18.2717 4.71437 18.4643 4.79105 18.61 4.92853C18.7556 5.066 18.8432 5.25389 18.8549 5.45381C18.8667 5.65373 18.8016 5.85059 18.6731 6.00416C18.5446 6.15773 18.3622 6.25642 18.1634 6.28007L18.0715 6.28557H17.4044L16.4772 17.7201C16.4174 18.4579 16.0821 19.1462 15.5379 19.648C14.9937 20.1499 14.2805 20.4285 13.5402 20.4284H8.45981C7.71955 20.4285 7.00639 20.1499 6.46219 19.648C5.91799 19.1462 5.58263 18.4579 5.52281 17.7201L4.59488 6.28557H3.9286C3.73615 6.28555 3.5504 6.21489 3.40659 6.08701C3.26278 5.95913 3.1709 5.78291 3.14838 5.59179L3.14288 5.49986C3.14291 5.30741 3.21356 5.12167 3.34145 4.97785C3.46933 4.83404 3.64554 4.74216 3.83667 4.71965L3.9286 4.71415H7.85717C7.85717 3.88061 8.18829 3.08121 8.77769 2.49181C9.36709 1.90241 10.1665 1.57129 11 1.57129ZM9.23217 8.83915C9.08977 8.83915 8.95219 8.89072 8.84487 8.98432C8.73755 9.07792 8.66775 9.20721 8.64838 9.34829L8.64288 9.42843V15.7141L8.64838 15.7943C8.66779 15.9353 8.7376 16.0646 8.84492 16.1581C8.95224 16.2517 9.0898 16.3032 9.23217 16.3032C9.37454 16.3032 9.5121 16.2517 9.61942 16.1581C9.72673 16.0646 9.79655 15.9353 9.81595 15.7943L9.82145 15.7141V9.42843L9.81595 9.34829C9.79659 9.20721 9.72679 9.07792 9.61947 8.98432C9.51215 8.89072 9.37457 8.83915 9.23217 8.83915ZM12.7679 8.83915C12.6255 8.83915 12.4879 8.89072 12.3806 8.98432C12.2733 9.07792 12.2035 9.20721 12.1841 9.34829L12.1786 9.42843V15.7141L12.1841 15.7943C12.2035 15.9353 12.2733 16.0646 12.3806 16.1581C12.4879 16.2517 12.6255 16.3032 12.7679 16.3032C12.9103 16.3032 13.0478 16.2517 13.1551 16.1581C13.2624 16.0646 13.3323 15.9353 13.3517 15.7943L13.3572 15.7141V9.42843L13.3517 9.34829C13.3323 9.20721 13.2625 9.07792 13.1552 8.98432C13.0479 8.89072 12.9103 8.83915 12.7679 8.83915ZM11 3.14272C10.6036 3.14259 10.2217 3.29232 9.93102 3.56189C9.64032 3.83146 9.46226 4.20095 9.43253 4.59629L9.4286 4.71415H12.5715L12.5675 4.59629C12.5378 4.20095 12.3597 3.83146 12.069 3.56189C11.7783 3.29232 11.3965 3.14259 11 3.14272Z"
                                fill="#FF0202" />
                        </svg>
                    </button>
                </td>
            `;
            list.append(elTr);
        });
    } else {
        let elDiv = document.createElement("div");
        elDiv.className = "bg-[#FCFAFA] m-w-[900px] mt-[10px]";
        elDiv.innerHTML = `
            <img class="mx-auto" src="./images/teacher-img.png" alt="img" width="340" height="225">
            <h3 class="font-semibold text-[28px] text-[#4F4F4F] text-center pt-[9px]">No Teachers at this time</h3>
            <p class="font-medium text-[14px] text-[#4F4F4F] pt-[4px] text-center ">
                Teachers will appear here after they enroll in your school.
            </p>
            <div class="justify-end flex mr-[20px] pb-[15px]">
                <a class="flex bg-[#152259] items-center pt-[21px] pb-[22px] mb-[40px] text-[#FCFAFA] text-[14px] font-semibold w-[181px] justify-between px-[24px] rounded-[30px]"
                    href="#">
                     <svg class="mr-[15px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.00016 1.33331C4.32416 1.33331 1.3335 4.32398 1.3335 7.99998V10.762C1.3335 11.4446 1.9315 12 2.66683 12H3.3335C3.51031 12 3.67988 11.9297 3.8049 11.8047C3.92992 11.6797 4.00016 11.5101 4.00016 11.3333V7.90465C4.00016 7.72784 3.92992 7.55827 3.8049 7.43324C3.67988 7.30822 3.51031 7.23798 3.3335 7.23798H2.72816C3.09883 4.65798 5.31883 2.66665 8.00016 2.66665C10.6815 2.66665 12.9015 4.65798 13.2722 7.23798H12.6668C12.49 7.23798 12.3204 7.30822 12.1954 7.43324C12.0704 7.55827 12.0002 7.72784 12.0002 7.90465V12C12.0002 12.7353 11.4022 13.3333 10.6668 13.3333H9.3335V12.6666H6.66683V14.6666H10.6668C12.1375 14.6666 13.3335 13.4706 13.3335 12C14.0688 12 14.6668 11.4446 14.6668 10.762V7.99998C14.6668 4.32398 11.6762 1.33331 8.00016 1.33331Z" fill="#FCFAFA"/>
                    </svg>
                    <p class="pr-[35px]">Support</p>
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10L8 6L12 10" stroke="#FCFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        `;
        list.parentElement.append(elDiv);
    }
}

// Render Products end

if (location.pathname == "/ui.html") {
    orderHeading(teacherHeading, elOrderHeading, orders);
    renderTeachers(orders, elTeacherTableBody);
}