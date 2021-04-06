const Psychotypes = {
	HumanNature: 'Человек-природа',
	HumanTech: 'Человек-техника',
	HumanSigh: 'Человек-знаковая система',
	HumanArt: 'Челоевек-художественный образ',
	HumanHuman: 'Человек-человек'
}

const DATA = [
	{
		question: '1. Легко знакомлюсь с людьми.',
		Psychotypes: Psychotypes.HumanHuman
	},

	{
		question: '2. Охотно и подолгу могу что-нибудь мастерить.',
		Psychotypes: Psychotypes.HumanTech
	}
];


let localResults = {};

const quiz = document.getElementById('quiz');
const answer = document.getElementById('answer');
const question = document.getElementById('question');
const results = document.getElementById('results');
const indicator = document.getElementById('indicator');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
	renderIndicator(index + 1);

	question.dataset.currentStep = index;

	answer.innerHTML = `
		<button type="button" class="answer-input" id="yes" name=${index}>Да</button>
  		<button type="button" class="answer-input" id="no" name=${index}>Нет</button>
	`;

	question.innerHTML = `
		<div class="quiz-questions-item">
  			<div class="quiz-questions-item__question">${DATA[index].question}</div>
  		</div>
	`;
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
	
		if (DATA.length === nextQuestionIndex){
			question.classList.add('questions-hidden');
			results.classList.add('indicator--visible');
			indicator.classList.add('indicator--hidden');
			btnNext.classList.add('btn-next--hidden');
			btnRestart.classList.add('btn-restart--visible');
			renderResults();
		} else {
			renderQuestions(nextQuestionIndex);
		}

		btnNext.disabled = true;
	}

	if (event.target.classList.contains('btn-restart')){
		console.log('Restart');

		results.innerHTML = '';
		localResults = {};

		question.classList.remove('questions-hidden');
		results.classList.remove('indicator--visible');
		indicator.classList.remove('indicator--hidden');
		btnNext.classList.remove('btn-next--hidden');
		btnRestart.classList.remove('btn-restart--visible');

		renderQuestions(0);
	}
});

renderQuestions(0);