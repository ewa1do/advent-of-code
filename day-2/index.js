// figures
// A - X (rock)
// B - Y (paper)
// C - Z (scissors)

// points by figure
// 1 - rock // 2 - paper // 3 - scissors

// points by match
// 0 - loss / 3 - draw / 6 - win

const fs = require('fs');

(function () {
  
  let totalScore = 0;
  let strategyScore = 0;

  const win = 6;
  const draw = 3;
  const loss = 0;

  const rock = 1;
  const paper = 2;
  const scissors = 3;

  const matches = 
    fs.readFileSync('./input.txt', 'utf-8').split('\n')
    .map(match => match.split(' ').map(item => item.trim()));


  for (const match of matches) {
    // possible wins

    if (match[0] === 'C' && match[1] === 'X') {
      totalScore += (win + rock);
    }

    if (match[0] === 'A' && match[1] === 'Y') {
      totalScore += (win + paper);
    }
    
    if (match[0] === 'B' && match[1] === 'Z') {
      totalScore += (win + scissors);
    }

    // Draws
    if (match[0] === 'A' && match[1] === 'X') {
      totalScore += (draw + rock);
    }

    if (match[0] === 'B' && match[1] === 'Y') {
      totalScore += (draw + paper);
    }

    if (match[0] === 'C' && match[1] === 'Z') {
      totalScore += (draw + scissors);
    }

    // losses
    if (match[0] === 'A' && match[1] === 'Z') {
      totalScore += (loss + scissors);
    }
    
    if (match[0] === 'B' && match[1] === 'X') {
      totalScore += (loss + rock);
    }
    
    if (match[0] === 'C' && match[1] === 'Y') {
      totalScore += (loss + paper);
    }

    // PART 2

    if (match[1] === 'X') { //have to lose

      if (match[0] === 'A') {
        strategyScore += (loss + scissors);
      }

      if (match[0] === 'B') {
        strategyScore += (loss + rock);
      }

      if (match[0] === 'C') {
        strategyScore += (loss + paper);
      }

    }

    if (match[1] === 'Y') { // have to draw

      if (match[0] === 'A') {
        strategyScore += (draw + rock);
      }

      if (match[0] === 'B') {
        strategyScore += (draw + paper);
      }

      if (match[0] === 'C') {
        strategyScore += (draw + scissors);
      }

    }

    if (match[1] === 'Z') { // have to win

      if (match[0] === 'A') {
        strategyScore += (win + paper);
      }

      if (match[0] === 'B') {
        strategyScore += (win + scissors);
      }

      if (match[0] === 'C') {
        strategyScore += (win + rock);
      }

    }
  }

  console.log({ totalScore, strategyScore })

})();