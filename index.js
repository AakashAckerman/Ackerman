console.log("🕵️‍♂️ Looking under the hood? Respect.");

const togglebtn = document.getElementById("mode-toggle")
const docBody = document.body

function modeToggle(){
    if(docBody.className == "dark-mode"){
        docBody.classList.remove("dark-mode")
        docBody.classList.add("light-mode")
        togglebtn.textContent = "☀️"
    }else{
        docBody.classList.remove("light-mode")
        docBody.classList.add("dark-mode")
        togglebtn.textContent = "🌙"
    }
}