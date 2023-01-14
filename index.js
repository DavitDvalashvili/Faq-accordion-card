
const card = document.querySelector("#faq-card");


card.addEventListener("click", active)

function active(event) {
    if (event.target.matches(".question")) {
        if(event.target.style.fontWeight != 400) {
           event.target.parentElement.nextElementSibling.style.display = "none";
           event.target.style.fontWeight = 400;
           event.target.nextElementSibling.style.transform = "unset";
           return
        }
        for(let i = 0; i < document.getElementsByClassName("question").length; i++) {
            document.getElementsByClassName("question")[i].style.fontWeight = 400;
            document.getElementsByClassName("answer")[i].style.display = "none";
            document.getElementsByClassName("arrow")[i].style.transform = "unset"
        }
        if (event.target.style.fontWeight == 400) {
            event.target.parentElement.nextElementSibling.style.display = "block";
            event.target.style.fontWeight = 700;
            event.target.nextElementSibling.style.transform = "rotate(180deg)";
            return
        }  
    }
}


