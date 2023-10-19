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
    // chuyển giá trị của tham số truyền vào thành chữ thường
    playerSelection = playerSelection.toLowerCase();


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

function game(){

    // biến đếm số lần thắng của player và computer
    let playerWinCounter = 0;
    let computerWinCounter = 0;

    // chạy vòng lặp 5 lần để chơi game và in kết quả người thắng cuộc
    let i = 0;
    while (i < 5) {

        // lấy giá trị của người dùng và máy tính
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Please enter your choice: rock, paper or scissors');


        // kiểm tra đầu vào của người dùng
        if (arr.includes(playerSelection.toLowerCase()) == false) {
            alert('Please enter a valid choice!');
            continue;
        } else {
            // xác định người chiến thăng mỗi round và tăng biến đếm lên 1
            if (playRound(playerSelection, computerSelection) ==  `You Win! ${playerSelection} beats ${computerSelection}`){
                alert("You win this round! Computer chose " + computerSelection);
                playerWinCounter++;
                i++;
            } else if (playRound(playerSelection, computerSelection) == `You Lose! ${computerSelection} beats ${playerSelection}`) {
                alert("You lose this round! Computer chose " + computerSelection);
                computerWinCounter++;
                i++;
            } else {
                alert("Draw! Computer chose " + computerSelection);
                i++;
            }
        }
    }
    
    // in kết quả người thắng cuộc
    if (playerWinCounter > computerWinCounter) {
        alert(`You win the game! with the score ${playerWinCounter} - ${computerWinCounter}`);
    } else if (playerWinCounter < computerWinCounter){
        alert(`You lose the game! ${playerWinCounter} - ${computerWinCounter}`);
    } else {
        alert(`Draw!`);
    }

}

game();