// function để lấy máy tính chọn random giá trị
function getComputerChoice() {
    // function này sẽ trả về 1 trong 3 giá trị: 'rock', 'paper' hoặc 'scissors'

    // cần 1 array để lưu ba giá trị
    const arr = ['rock', 'paper', 'scissors'];
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
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  