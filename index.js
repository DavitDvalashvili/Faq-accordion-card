
const card = document.querySelector("#faq-card");


card.addEventListener("click", active)

function active(event) {
    if (event.target.matches(".question")) {
        if (event.target.style.fontWeight == 400) {
            event.target.parentElement.nextElementSibling.style.display = "block";
            event.target.style.fontWeight = 700;
            event.target.nextElementSibling.style.transform = "rotate(180deg)";
            return;
        }
        event.target.parentElement.nextElementSibling.style.display = "none";
        event.target.style.fontWeight = 400;
        event.target.nextElementSibling.style.transform = "unset"
    }
}
// for(let i= 0; i < card.getElementsByClassName(".question").length ;i++) {
//     card.getElementsByClassName("question")[i].style.fontWeight = 400;
//     card.getElementsByClassName("answer")[i].style.display = "none";
//     card.getElementsByClassName("arrow")[i].style.transform = "unset"
// }


