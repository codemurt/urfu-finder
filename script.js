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
		question: '9. Мои изделия обычно вызывают интерес у товарищей, старших.',
		Psychotype: Psychotypes.HumanTech,
		value: 2
	},

	{
		question: '10. Люди считают, что у меня есть художественные способности.',
		Psychotype: Psychotypes.HumanArt,
		value: 2
	},

	{
		question: '11. Охотно читаю о растениях, животных.',
		Psychotype: Psychotypes.HumanNature,
		value: 1
	},

	{
		question: '12. Принимаю участие в спектаклях, концертах.',
		Psychotype: Psychotypes.HumanArt,
		value: 1
	},

	{
		question: '13. Люблю читать об устройстве механизмов, приборов, машин.',
		Psychotype: Psychotypes.HumanTech,
		value: 1
	},

	{
		question: '14. Подолгу могу разгадывать головоломки, задачи, ребусы.',
		Psychotype: Psychotypes.HumanSign,
		value: 2
	},

	{
		question: '15. Легко улаживаю разногласия между людьми.',
		Psychotype: Psychotypes.HumanHuman,
		value: 2
	},

	{
		question: '16. Считают, что у меня есть способности к работе с техникой.',
		Psychotype: Psychotypes.HumanTech,
		value: 2
	},

	{
		question: '17. Людям нравится мое художественное творчество.',
		Psychotype: Psychotypes.HumanArt,
		value: 2
	},

	{
		question: '18. У меня есть способности к работе с растениями и животными.',
		Psychotype: Psychotypes.HumanNature,
		value: 2
	},

	{
		question: '19. Я могу ясно излагать свои мысли в письменной форме.',
		Psychotype: Psychotypes.HumanSign,
		value: 2
	},

	{
		question: '20. Я почти никогда ни с кем не ссорюсь.',
		Psychotype: Psychotypes.HumanHuman,
		value: 1
	},

	{
		question: '21. Результаты моего технического творчества одобряют даже незнакомые люди.',
		Psychotype: Psychotypes.HumanTech,
		value: 1
	},

	{
		question: '22. Без особого труда усваиваю иностранные языки.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '23. Мне часто случается помогать даже незнакомым людям',
		Psychotype: Psychotypes.HumanHuman,
		value: 2
	},

	{
		question: '24. Подолгу могу заниматься музыкой, рисованием, читать книги и т. д.',
		Psychotype: Psychotypes.HumanArt,
		value: 1
	},

	{
		question: '25. Могу влиять на ход развития растений и животных.',
		Psychotype: Psychotypes.HumanNature,
		value: 2
	},

	{
		question: '26. Люблю разбираться в устройстве механизмов, приборов.',
		Psychotype: Psychotypes.HumanTech,
		value: 1
	},

	{
		question: '27. Мне обычно удается убедить людей в своей правоте.',
		Psychotype: Psychotypes.HumanHuman,
		value: 1
	},

	{
		question: '28. Охотно наблюдаю за растениями или животными.',
		Psychotype: Psychotypes.HumanNature,
		value: 1
	},

	{
		question: '29.Охотно читаю научно-популярную, критическую литературу, публицистику.',
		Psychotype: Psychotypes.HumanSign,
		value: 1
	},

	{
		question: '30. Стараюсь понять секреты мастерства и пробую свои силы в живописи, музыке и т. п.',
		Psychotype: Psychotypes.HumanArt,
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