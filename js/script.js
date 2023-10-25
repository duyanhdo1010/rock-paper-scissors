// cần 1 array để lưu ba giá trị (sử dụng biến toàn cục để dùng thêm ở dưới)
var arr = ['rock', 'paper', 'scissors'];

// function để lấy máy tính chọn random giá trị
function getComputerChoice() {
    // function này sẽ trả về 1 trong 3 giá trị: 'rock', 'paper' hoặc 'scissors'


    // cần 1 biến để lưu giá trị random
    let random = arr[Math.floor(Math.random() * arr.length)];
    // trả về giá trị của biến lưu giá trị random đó
    return random;
}
// check giá trị trả về của function getComputerChoice()
//console.log(getComputerChoice());

// function để chơi game và trả về kết quả của một round

function playRound(playerSelection, computerSelection) {

    // so sánh giá trị của hai tham số truyền vào và trả về đoạn text kết quả

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return 'Draw!';
    }

  }

  
// check giá trị trả về của function playRound()
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));

// tạo giao diện cho game với DOM

const playerChoice = document.querySelector('.player-choice');
const playerPoint = document.querySelector('.player-point');
const computerPoint = document.querySelector('.computer-point');
const roundResult = document.querySelector('.round-result');
const matchResult = document.querySelector('.match-result');


// tạo 3 nút cho cho 3 lựa chọn của player 
const btn_rock = document.createElement('button');
btn_rock.classList.add('btn', 'btn-rock');
btn_rock.value = 'rock';
btn_rock.textContent = 'rock';

const btn_paper = document.createElement('button');
btn_paper.classList.add('btn', 'btn-paper');
btn_paper.value = 'paper';
btn_paper.textContent = 'paper';


const btn_scissors = document.createElement('button');
btn_scissors.classList.add('btn', 'btn_scissors');
btn_scissors.value = 'scissors';
btn_scissors.textContent = 'scissors';

// thêm 3 nút vào div playerChoice
playerChoice.append(btn_rock, btn_paper, btn_scissors);


let playerScore = 0;
let computerScore = 0;


const button = document.querySelectorAll('.btn');
button.forEach((btn) => {
    btn.style.cssText = "padding: 10px; margin: 10px";    
    btn.addEventListener('click', () => {
        playerSelection = btn.value;
        if (playerScore < 5 && computerScore < 5) {
            playerPoint.textContent = "Your score: " + playerScore;
            computerPoint.textContent = "Computer Score: "+ computerScore;
            playGame(playerSelection);
        } else if (playerScore == 5 || computerScore == 5){
            playerScore = 0;
            computerScore = 0;
            playerPoint.textContent = "Your score: " + playerScore;
            computerPoint.textContent = "Computer Score: "+ computerScore;
            playGame(playerSelection);
        }
    });
});

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    if (playRound(playerSelection, computerSelection) ==  `You Win! ${playerSelection} beats ${computerSelection}`){
        roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerPoint.textContent = "Your score: " + playerScore;
    } else if (playRound(playerSelection, computerSelection) == `You Lose! ${computerSelection} beats ${playerSelection}`) {
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        computerPoint.textContent = "Computer Score: "+ computerScore;
    } else {
        roundResult.textContent = 'Draw!, Computer choose ' + computerSelection;
    }

    if (playerScore == 5) {
        matchResult.textContent = 'You Win!';
    } else if (computerScore == 5) {
        matchResult.textContent = 'You Lose!';
    } else {
        matchResult.textContent = '';
    }

}
