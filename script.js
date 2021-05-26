const Psychotypes = {
	HumanNature: 'Человек-природа',
	HumanTech: 'Человек-техника',
	HumanSign: 'Человек-знаковая система',
	HumanArt: 'Человек-художественный образ',
	HumanHuman: 'Человек-человек'
}

const DATA = [
	{
		question: 'Легко знакомлюсь с людьми.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 1
	},

	{
		question: 'Охотно и подолгу могу что-нибудь мастерить.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 1
	},

	{
		question: 'Люблю ходить в музеи, театры, на выставки.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 1
	},

	{
		question: 'Охотно и постоянно ухаживаю за растениями, животными.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 1
	},

	{
		question: 'Охотно и подолгу могу что-нибудь вычислять, чертить.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 1
	},

	{
		question: 'С удовольствием общаюсь со сверстниками или малышами.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 1
	},

	{
		question: 'С удовольствием ухаживаю за растениями и животными.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 1
	},

	{
		question: 'Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 1
	},

	{
		question: 'Мои изделия обычно вызывают интерес у товарищей, старших.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 2
	},

	{
		question: 'Люди считают, что у меня есть художественные способности.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 2
	},

	{
		question: 'Охотно читаю о растениях, животных.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 1
	},

	{
		question: 'Принимаю участие в спектаклях, концертах.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 1
	},

	{
		question: 'Люблю читать об устройстве механизмов, приборов, машин.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 1
	},

	{
		question: 'Подолгу могу разгадывать головоломки, задачи, ребусы.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 2
	},

	{
		question: 'Легко улаживаю разногласия между людьми.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 2
	},

	{
		question: 'Считают, что у меня есть способности к работе с техникой.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 2
	},

	{
		question: 'Людям нравится мое художественное творчество.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 2
	},

	{
		question: 'У меня есть способности к работе с растениями и животными.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 2
	},

	{
		question: 'Я могу ясно излагать свои мысли в письменной форме.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 2
	},

	{
		question: 'Я почти никогда ни с кем не ссорюсь.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 1
	},

	{
		question: 'Результаты моего технического творчества одобряют даже незнакомые люди.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 1
	},

	{
		question: 'Без особого труда усваиваю иностранные языки.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 1
	},

	{
		question: 'Мне часто случается помогать даже незнакомым людям',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 2
	},

	{
		question: 'Подолгу могу заниматься музыкой, рисованием, читать книги и т. д.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 1
	},

	{
		question: 'Могу влиять на ход развития растений и животных.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 2
	},

	{
		question: 'Люблю разбираться в устройстве механизмов, приборов.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 1
	},

	{
		question: 'Мне обычно удается убедить людей в своей правоте.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 1
	},

	{
		question: 'Охотно наблюдаю за растениями или животными.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 1
	},

	{
		question: 'Охотно читаю научно-популярную, критическую литературу, публицистику.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 1
	},

	{
		question: 'Стараюсь понять секреты мастерства и пробую свои силы в живописи, музыке и т. п.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 1
	}
];

let PsychotypeDescription = new Map();
PsychotypeDescription.set(Psychotypes.HumanNature, 'Представителей этих профессий объединяет одно очень важное качество — любовь к природе. Но любовь не созерцательная. Которой обладают практически все люди, считая природу наиболее благоприятной средой для отдыха, а деятельная связанная с познанием ее законов и применением их. Одно дело — любить животных и растения, играть с ними, радоваться им. И совсем другое — регулярно, день за днем ухаживать за ними, наблюдать, лечить, выгуливать, не считаясь с личным временем и планами. Специалист должен не просто все знать о живых организмах, но и прогнозировать возможные изменения в них и принимать меры. От человека требуется инициатива и самостоятельность в решении конкретных задач, заботливость, терпение и дальновидность. Человек, работающий в сфере «человек-природа», должен быть спокойным и уравновешенным');
PsychotypeDescription.set(Psychotypes.HumanTech, 'Особенность технических объектов в том, что они, как правило, могут быть точно измерены по многим признакам. При их обработке, преобразовании, перемещении или оценке от работника требуется точность, определенность действий. Техника как предмет руда представляет широкие возможности для новаторства, выдумки. творчества, поэтому важное значение приобретает такое качество, как практическое мышление. Техническая фантазия, способность мысленно соединять и разъединять технические объекты и их части — важные условия для успеха в данной области.');
PsychotypeDescription.set(Psychotypes.HumanSign, 'Мы встречаемся со знаками значительно чаще, чем обычно представляем себе. Это цифры. Коды, условные знаки, естественные или искусственные языки, чертежи, таблицы формулы. В любом случае человек воспринимает знак как символ реального объекта или явления. Поэтому специалисту, который работает со знаками, важно уметь с одной стороны, абстрагироваться от реальных физических, химически, механических свойств предметов, а с другой — представлять и воспринимать характеристики реальных явлений или объектов, стоящих за знаками. Чтобы успешно работать в какой-нибудь профессии данного типа, необходимо уметь мысленно погружаться в мир, казалось бы, сухих обозначений и сосредотачиваться на сведениях, которые они несут в себе. Особые требования профессии этого типа предъявляют к вниманию.');
PsychotypeDescription.set(Psychotypes.HumanArt, 'Важнейшие требования, которые предъявляют профессии, связанные с изобразительной, музыкальной, литературно-художественной, актерско-сценической деятельностью человека — наличие способности к искусствам, творческое воображение, образное мышление, талант, трудолюбие.');
PsychotypeDescription.set(Psychotypes.HumanHuman, 'Даже выбирая профессию, не связанную непосредственно с общением, вы поступите правильно, если обратите внимание на общительность и контактность. Подумайте, куда вы  обращены- к людям или к себе? С кем бы вы хотели общаться — с собой или с другими? Главное содержание труда в профессиях типа «человек-человек» сводится к взаимодействию между людьми. Если не наладится это взаимодействие, значит, не наладится и работа. Качества, необходимые для работы с людьми: устойчивое, хорошее настроение в процессе работы с людьми, потребность в общении, способность мысленно ставить себя на место другого человека, быстро понимать намерения, помыслы, настроение людей, умение разбираться в человеческих взаимоотношениях, хорошая память (умение держать в уме имена и особенности многих людей), умение находить общий язык с различными людьми.');

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const results = document.getElementById('results');
const indicator = document.getElementById('indicator');
const btnBack = document.getElementById('btn-back');
const btnRestart = document.getElementById('btn-restart');
const btnStart = document.getElementById('btn-start');
const opening = document.getElementById('opening');

const checkAvailableBack = (index) => {
	if (index == 0)
		btnBack.disabled = true;
	else
		btnBack.disabled = false;
}

const renderQuestions = (index) => {
	const renderButtons = () => {
		return `
			<button class="button-input" name="${index}" value="yes" id="${DATA[index].Psychotype}_${DATA[index].weightQuestion}">Да</button>
			<button class="button-input" name="${index}" value="no" id="${DATA[index].Psychotype}_${DATA[index].weightQuestion}">Нет</button>
			<button class="button-input" name="${index}" value="nothing" id="${DATA[index].Psychotype}_${DATA[index].weightQuestion}">Затрудняюсь ответить</button>
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
		var sum = 0;
		for (key in localResults){
			if (localResults[key].resultPsychotype == psychotype)
				sum += Number(localResults[key].resultWeight);
		}

		return (sum + 8) / 16 * 100;
	};

	// TO DO
	let percentHumanNature = {Count: countPsychotype(Psychotypes.HumanNature), Psycho: Psychotypes.HumanNature};
	let percentHumanTech = {Count: countPsychotype(Psychotypes.HumanTech), Psycho: Psychotypes.HumanTech};
	let percentHumanSign = {Count: countPsychotype(Psychotypes.HumanSign), Psycho: Psychotypes.HumanSign};
	let percentHumanArt = {Count: countPsychotype(Psychotypes.HumanArt), Psycho: Psychotypes.HumanArt};
	let percentHumanHuman = {Count: countPsychotype(Psychotypes.HumanHuman), Psycho: Psychotypes.HumanHuman};

	let maxPercentPsychotype = Math.max(percentHumanNature.Count, percentHumanTech.Count, percentHumanSign.Count, percentHumanSign.Count,
		percentHumanArt.Count, percentHumanHuman.Count);

	let countMaxPercent = Number(percentHumanNature.Count == maxPercentPsychotype) + Number(percentHumanTech.Count == maxPercentPsychotype)
		+ Number(percentHumanSign.Count == maxPercentPsychotype) + Number(percentHumanArt.Count == maxPercentPsychotype) +
		Number(percentHumanHuman.Count == maxPercentPsychotype);

	console.log(countMaxPercent);
	console.log(maxPercentPsychotype)

		results.innerHTML = `
			<div class="quiz-results-item">
				Человек-природа:</br>
				<div class="progress">
	  				<div class="progress-bar" role="progressbar" style="width: ${percentHumanNature.Count}%;" aria-valuenow="${percentHumanNature.Count}" aria-valuemin="0" aria-valuemax="100">${percentHumanNature.Count}%</div>
				</div>
				Человек-техника:</br>
				<div class="progress">
	  				<div class="progress-bar" role="progressbar" style="width: ${percentHumanTech.Count}%;" aria-valuenow="${percentHumanTech.Count}" aria-valuemin="0" aria-valuemax="100">${percentHumanTech.Count}%</div>
				</div>
				Человек-знаковая система:</br>
				<div class="progress">
	  				<div class="progress-bar" role="progressbar" style="width: ${percentHumanSign.Count}%;" aria-valuenow="${percentHumanSign.Count}" aria-valuemin="0" aria-valuemax="100">${percentHumanSign.Count}%</div>
				</div>
				Человек-художественный образ:</br>
				<div class="progress">
	  				<div class="progress-bar" role="progressbar" style="width: ${percentHumanArt.Count}%;" aria-valuenow="${percentHumanArt.Count}" aria-valuemin="0" aria-valuemax="100">${percentHumanArt.Count}%</div>
				</div>
				Человек-человек:</br>
				<div class="progress">
	  				<div class="progress-bar" role="progressbar" style="width: ${percentHumanHuman.Count}%;" aria-valuenow="${percentHumanHuman.Count}" aria-valuemin="0" aria-valuemax="100">${percentHumanHuman.Count}%</div>
				</div>
	  		</div>	
		`;

	if (countMaxPercent == 1){

		let resultPsychotype;

		if (percentHumanNature.Count == maxPercentPsychotype)
			resultPsychotype = percentHumanNature.Psycho;
		else if (percentHumanTech.Count == maxPercentPsychotype)
			resultPsychotype = percentHumanTech.Psycho;
		else if (percentHumanSign.Count == maxPercentPsychotype)
			resultPsychotype = percentHumanSign.Psycho;
		else if (percentHumanArt.Count == maxPercentPsychotype)
			resultPsychotype = percentHumanArt.Psycho;
		else 
			resultPsychotype = percentHumanHuman.Psycho;

		results.innerHTML += `<div class="quiz-results-item"> 
			<h1> Ваш психотип: ${resultPsychotype} </h1>
			<p>${PsychotypeDescription.get(resultPsychotype)} </p>
		</div>`
	} else {
		results.innerHTML += `<div class="quiz-results-item"> 
			<h3>Мы не смогли точно установить ваш психотип, поэтому пожалуйста пройдите тест заново.</h3>
		</div>`
	}
};

const renderIndicator = (currentStep) => {
	indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('click', (event) => {
	if (event.target.classList.contains('button-input')){

		var targetPsychotype = event.target.id.split("_")[0];
		var targetWeight = event.target.id.split("_")[1];

		if (event.target.value == 'yes'){
			localResults[event.target.name] = {resultPsychotype: targetPsychotype, resultWeight: targetWeight};
		} else if(event.target.value == 'no') {
			localResults[event.target.name] = {resultPsychotype: targetPsychotype, resultWeight: -targetWeight};
		} else {
			localResults[event.target.name] = {resultPsychotype: targetPsychotype, resultWeight: 0};
		}

		const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

		if (DATA.length == nextQuestionIndex){
			questions.classList.add('questions--hidden');
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

		questions.classList.remove('questions--hidden');
		results.classList.remove('results--visible');
		indicator.classList.remove('indicator--hidden');
		btnBack.classList.remove('btn-back--hidden');
		btnRestart.classList.remove('btn-restart--visible');

		renderQuestions(0);
	}
});

opening.addEventListener('click', (event) => {
	if (event.target.classList.contains('btn-start')){
		opening.classList.add('opening--hidden');
		btnBack.classList.remove('btn-back--hidden');

		renderQuestions(0);
	}
});

btnBack.classList.add('btn-back--hidden');
