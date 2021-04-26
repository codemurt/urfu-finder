const Psychotypes = {
	HumanNature: 'Человек-природа',
	HumanTech: 'Человек-техника',
	HumanSign: 'Человек-знаковая система',
	HumanArt: 'Челоевек-художественный образ',
	HumanHuman: 'Человек-человек'
}

const DATA = [
	{
		question: '1. Легко знакомлюсь с людьми.',
		Psychotype: Psychotypes.HumanHuman,
		value: 1
	},

	{
		question: '2. Охотно и подолгу могу что-нибудь мастерить.',
		Psychotype: Psychotypes.HumanTech,
		value: 1
	},

	{
		question: '3. Люблю ходить в музеи, театры, на выставки.',
		Psychotype: Psychotypes.HumanArt,
		value: 1
	},

	{
		question: '4. Охотно и постоянно ухаживаю за растениями, животными.',
		Psychotype: Psychotypes.HumanNature,
		value: 1
	},

	{
		question: '5. Охотно и подолгу могу что-нибудь вычислять, чертить.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '6. С удовольствием общаюсь со сверстниками или малышами.',
		Psychotype: Psychotypes.HumanHuman,
		value: 1
	},

	{
		question: '7. С удовольствием ухаживаю за растениями и животными.',
		Psychotype: Psychotypes.HumanNature,
		value: 1
	},

	{
		question: '8. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '9. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '10. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '11. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '12. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '13. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '14. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '15. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '16. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '17. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '18. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '19. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '20. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '21. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '22. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '23. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '24. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '25. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '26. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '27. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '28. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '29. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '30. Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	}
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const results = document.getElementById('results');
const indicator = document.getElementById('indicator');
const btnBack = document.getElementById('btn-back');
const btnRestart = document.getElementById('btn-restart');

const checkAvailableBack = (index) => {
	if (index == 0)
		btnBack.disabled = true;
	else
		btnBack.disabled = false;
}

const renderQuestions = (index) => {
	const renderButtons = () => {
		return `
			<button class="button-input" name="${index}" value="yes" id="${DATA[index].Psychotype}">Да</button>
			<button class="button-input" name="${index}" value="no" id="${DATA[index].Psychotype}">Нет</button>
		`;
	};

	checkAvailableBack(index);

	renderIndicator(index + 1);

	questions.dataset.currentStep = index;

	questions.innerHTML = `
		<div class="quiz-questions-item">
  			<div class="quiz-questions-item__question">${DATA[index].question}</div>
  			<div class="quiz-question-item__buttons">${renderButtons()}</div>
  		</div>
	`;
};

const renderResults = () => {

	const countPsychotype = (psychotype) => {
		var cnt = 0;
		for (key in localResults){
			if (localResults[key] == psychotype)
				cnt++;
		}

		return cnt;
	};

	results.innerHTML = `
		<div class="quiz-results-item">
			Человек-природа: ${countPsychotype(Psychotypes.HumanNature)} </br>
			Человек-техника: ${countPsychotype(Psychotypes.HumanTech)} </br>
			Человек-знаковая система: ${countPsychotype(Psychotypes.HumanSign)} </br>
			Челоевек-художественный образ: ${countPsychotype(Psychotypes.HumanArt)} </br>
			Человек-человек: ${countPsychotype(Psychotypes.HumanHuman)} </br>
  		</div>	
	`;
};

const renderIndicator = (currentStep) => {
	indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('click', (event) => {
	if (event.target.classList.contains('button-input')){
		if (event.target.value == 'yes'){
			localResults[event.target.name] = event.target.id;
		} else {
			localResults[event.target.name] = '';
		}

		const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

		if (DATA.length == nextQuestionIndex){
			questions.classList.add('questions-hidden');
			results.classList.add('results--visible');
			indicator.classList.add('indicator--hidden');
			btnBack.classList.add('btn-back--hidden');
			btnRestart.classList.add('btn-restart--visible');
			renderResults();
		} else {
			renderQuestions(nextQuestionIndex);
		}
	}

	if (event.target.classList.contains('btn-back')){
		const currentQuestionIndex = Number(questions.dataset.currentStep);

		if (currentQuestionIndex != 0)
			renderQuestions(currentQuestionIndex - 1);
	}

	if (event.target.classList.contains('btn-restart')){

		results.innerHTML = '';
		localResults = {};

		questions.classList.remove('questions-hidden');
		results.classList.remove('results--visible');
		indicator.classList.remove('indicator--hidden');
		btnBack.classList.remove('btn-back--hidden');
		btnRestart.classList.remove('btn-restart--visible');

		renderQuestions(0);
	}
});

renderQuestions(0);