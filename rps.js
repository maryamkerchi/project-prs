//  Get user move with process.argv
const userMove = process.argv[2];

//  Define possible moves
const moves = ["rock", "scissors", "paper"];

//  Validate player move

//include instead of find
if (!moves.find((move) => move === userMove)) {
  console.log("Wrong move! You should select from rock, paper, or scissors.");
  process.exit(1);

  //   process.exit(0);  success end

  //   process.exit(1);  error end
}

//  pc move randomly
const pcMove = moves[Math.floor(Math.random() * 3)];

// 5. Output both moves
console.log(`User chose: ${userMove}`);
console.log(`PC chose: ${pcMove}`);

// 6. Determine the winner
if (userMove === pcMove) {
  console.log("no winner!");
} else if (
  (userMove === "scissors" && pcMove === "paper") ||
  (userMove === "rock" && pcMove === "scissors") ||
  (userMove === "paper" && pcMove === "rock")
) {
  console.log("user win!");
} else {
  console.log("pc win!");
}
