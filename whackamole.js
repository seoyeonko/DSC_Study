const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole; // 랜덤에서 사용
let timeUp = false; // 게임 종료를 위한 변수
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min); // (0~1)*(max~min사이의 실수값)
}

function randHole(holes) {
  const randIndex = Math.floor(Math.random() * holes.length);
  const hole = holes[randIndex];
  if (hole === lastHole) {
    return randHole(holes);
  }

  lastHole = hole; // 가장 최근에 나온 홀을 홀로 선언
  return hole;
}

function peep() {
  const time = randTime(1000, 2000);
  const hole = randHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) {
      peep(); // 게임이 끝나지 않을 동안에는 항상 peep() 실행
    }
  }, time);
}

function startGame() {
  // 클릭시 점수 0으로 초기화
  scoreBoard.textContext = 0;
  score = 0;
  timeUp = false;
  peep(); // 게임 시작시, 두더지가 튀어나옴

  setTimeout(() => (timeUp = true), 100000); // 두더지 게임 진행 시간
}

function bonk(e) {
  if (!e.isTrusted) return; // 사용자 확인

  // 두더지 클릭시 점수 획득
  this.classList.remove('up'); // 두더지가 올라온 것을 제거
  score++;
  scoreBoare.textContent = score; // 현재 score로 업데이트
}

moles.forEach((mole) => mole.addEventListener('click', bonk));
