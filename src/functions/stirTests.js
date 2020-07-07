import stirNumbers from './stirNumbers';

export default function stirTests(testArray) {
  let oldOrder = testArray.slice();
  let mixedTestStack = [];
  let mixedNumbers = stirNumbers(oldOrder.length); // Mixed order of tests
  let correctAnswersArr = []; 
  
  // Array for saving correct answers
  for (let i = 0; i < mixedNumbers.length; i++) {
    if ('imageSrc' in oldOrder[mixedNumbers[i]]) { 
      correctAnswersArr[i] = {
        question: oldOrder[mixedNumbers[i]].question,
        answer: oldOrder[mixedNumbers[i]].answers[0],
        number: i,
        imageSrc: oldOrder[mixedNumbers[i]].imageSrc,
        imageAlt: oldOrder[mixedNumbers[i]].imageAlt
      };
    } else {
      correctAnswersArr[i] = {
        question: oldOrder[mixedNumbers[i]].question,
        answer: oldOrder[mixedNumbers[i]].answers[0],
        number: i
      };
    }

    // Для кожного теста перемішуємо відповіді
    let answersArray = oldOrder[mixedNumbers[i]].answers.slice();
    let correctAnswer = answersArray[0];
    let mixedAnswerNumbers = stirNumbers(answersArray.length);
    let mixedAnswers = [];
    for (let i = 0; i < mixedAnswerNumbers.length; i++) {
      mixedAnswers[i] = answersArray[mixedAnswerNumbers[i]];
    }
    
    let testUnit = {};
    testUnit.question = oldOrder[mixedNumbers[i]].question;
    testUnit.answers = mixedAnswers;
    testUnit.correct = correctAnswer;
    if ('imageSrc' in oldOrder[mixedNumbers[i]]) { 
      testUnit.imageSrc = oldOrder[mixedNumbers[i]].imageSrc;
      testUnit.imageAlt = oldOrder[mixedNumbers[i]].imageAlt;
    }
    mixedTestStack[i] = testUnit;
  }
  
  let correctAnswers = JSON.stringify(correctAnswersArr);
  localStorage.setItem('correctAnswers', correctAnswers);

  return mixedTestStack;
}