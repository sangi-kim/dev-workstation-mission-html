// 다크 모드 토글 함수
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// 랜덤 응원 메시지 생성 함수
function generateQuote() {
  const quotes = [
    "포기하지 마세요! 거의 다 왔습니다. 🏃‍♂️",
    "코딩은 마법과 같습니다. 당신은 마법사예요! 🧙‍♂️",
    "에러는 실패가 아니라 배움의 과정입니다. 💡",
    "오늘 배운 한 줄이 내일의 멋진 웹사이트를 만듭니다. 🌳",
    "정말 잘하고 계십니다! 스스로를 칭찬해주세요. 👏"
  ];
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteText").innerText = quotes[randomIndex];
}