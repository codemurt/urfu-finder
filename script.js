const DATA = [
	{
		question: 'Вопрос 1',
		answers: [
			{
				id: '0',
				value: 'Ответ 1',
				correct: true
			},
			{
				id: '1',
				value: 'Ответ 2',
				correct: false
			},
			{
				id: '2',
				value: 'Ответ 3',
				correct: false
			}
		]
	},

	{
		question: 'Вопрос 2',
		answers: [
			{
				id: '3',
				value: 'Ответ 4',
				correct: true
			},
			{
				id: '4',
				value: 'Ответ 5',
				correct: false
			}
		]	
	}
];

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const indicator = document.getElementById('indicator');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
	const renderAnswers = () => DATA[index].answers
		.map((answer) =>
			`
				<li>
  					<label>
  						<input class="answer-input" type="radio" name=${index} value=${answer.id}>
  						${answer.value}
  					</label>
  				</li>
			`)
		.join('');

	question.innerHTML = `
		<div class="quiz-questions-item">
  			<div class="quiz-questions-item__question">${DATA[index].question}</div>
  			<ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
  		</div>
	`;
};

const renderResults = () => {};

const renderIndicator = () => {};

quiz.addEventListener('change', (event) => {
	// logic ans
});

quiz.addEventListener('click', (event) => {
	if (event.target.classList.contains('btn-next')){
		console.log('Next');
	}
});

renderQuestions(0);