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

let localResults = {};

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const results = document.getElementById('results');
const indicator = document.getElementById('indicator');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
	renderIndicator(index + 1);

	question.dataset.currentStep = index;

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

const renderResults = () => {
    let	content = '';

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
    .map((answer) => `<li>${answer.value}</li>`)
    	.join('');

    DATA.forEach((question, index) => {
    	content += `
    		<div class="quiz-results-item">
	  			<div class="quiz-results-item__question">
	  				${question.question}
	  			</div>
	  			<ul class="quiz-results-item__anwsers">${getAnswers(index)}</ul>
  			</div>
    	`
    })

	results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
	indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
	if (event.target.classList.contains('answer-input')){
		localResults[event.target.name] = event.target.value;
		btnNext.disabled = false;
		console.log(localResults);
	}
});

quiz.addEventListener('click', (event) => {
	if (event.target.classList.contains('btn-next')){
		console.log('Next');
		const nextQuestionIndex = Number(question.dataset.currentStep) + 1; 
	
		if (DATA.length === Number(question.dataset.currentStep) + 1){
			renderResults();
		} else {
			renderQuestions(nextQuestionIndex);
		}

		btnNext.disabled = true;
	}
});

renderQuestions(0);

// 45:16