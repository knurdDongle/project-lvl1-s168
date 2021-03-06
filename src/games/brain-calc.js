import {
  getRandomNumber,
  randomSymbol,
  convertListToString,
} from '../utils';
import startGame from '../index';

const askQuestion = () => [getRandomNumber(10), randomSymbol(), getRandomNumber(10)];

const calc = (list) => {
  let correctAnswer = 0;
  const mathSymbol = list[1];
  const num1 = list[0];
  const num2 = list[2];

  switch (mathSymbol) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  return correctAnswer;
};

const getGameData = () => {
  const question = askQuestion();
  const answer = calc(question);
  return [convertListToString(question), answer];
};

export default () => {
  const gameDescription = 'What is the result of the expression?';
  return startGame(gameDescription, getGameData);
};
