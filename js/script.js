function getComputerChoice() {
    // function này sẽ trả về 1 trong 3 giá trị: 'rock', 'paper' hoặc 'scissors'

    // cần 1 array để lưu ba giá trị
    const arr = ['rock', 'paper', 'scissors'];
    // cần 1 biến để lưu giá trị random
    let random = arr[Math.floor(Math.random() * arr.length)];
    // trả về giá trị của biến lưu giá trị random đó
    return random;
}
// check giá trị trả về
console.log(getComputerChoice());

