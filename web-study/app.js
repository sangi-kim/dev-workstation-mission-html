const title = document.getElementById('title');
const button = document.getElementById('myBtn');
button.addEventListener('click', function() {
 title.innerText = "짜잔! 자바스크립트 마술입니다! 🐰🎩";
 title.style.color = "blue";
});
const darkBtn = document.getElementById('darkModeBtn');
darkBtn.addEventListener('click', function() {
     document.body.classList.toggle('dark-mode');
});const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greetingText = document.getElementById('greetingText');
greetBtn.addEventListener('click', function() {
const userName = nameInput.value; 
if (userName === "") {
        greetingText.innerText = "이름을 먼저 적어주세요! 😅";
    } 
     else {
        greetingText.innerText = "반갑습니다, " + userName + "님! 👋";
    }
});