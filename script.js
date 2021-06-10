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
		weightQuestion: 1,
		image: '1'
	},

	{
		question: 'Охотно и подолгу могу что-нибудь мастерить.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 1,
		image: '2'
	},

	{
		question: 'Люблю ходить в музеи, театры, на выставки.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 1,
		image: '3'
	},

	{
		question: 'Охотно и постоянно ухаживаю за растениями, животными.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 1,
		image: '4'
	},

	{
		question: 'Охотно и подолгу могу что-нибудь вычислять, чертить.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 1,
		image: '5'
	},

	{
		question: 'С удовольствием общаюсь со сверстниками или малышами.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 1,
		image: '17'
	},

	{
		question: 'Люблю смотреть видео про животных и уход за ними.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 1,
		image: '13'
	},

	{
		question: 'Обычно делаю мало ошибок в письменных работах.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 1,
		image: '7'
	},

	{
		question: 'Мои изделия обычно вызывают интерес у товарищей, старших.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 2,
		image: '8'
	},

	{
		question: 'Люди считают, что у меня есть художественные способности.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 2,
		image: '9'
	},

	{
		question: 'Охотно читаю о растениях, животных.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 1,
		image: '4'
	},

	{
		question: 'Принимаю участие в спектаклях, концертах.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 1,
		image: '9'
	},

	{
		question: 'Люблю читать об устройстве механизмов, приборов, машин.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 1,
		image: '10'
	},

	{
		question: 'Подолгу могу разгадывать головоломки, задачи, ребусы.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 2,
		image: '11'
	},

	{
		question: 'Легко улаживаю разногласия между людьми.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 2,
		image: '16'
	},

	{
		question: 'Считают, что у меня есть способности к работе с техникой.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 2,
		image: '12'
	},

	{
		question: 'Людям нравится мое художественное творчество.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 2,
		image: '18'
	},

	{
		question: 'У меня есть способности к работе с растениями и животными.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 2,
		image: '4'
	},

	{
		question: 'Я могу ясно излагать свои мысли в письменной форме.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 2,
		image: '7'
	},

	{
		question: 'Я почти никогда ни с кем не ссорюсь.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 1,
		image: '6'
	},

	{
		question: 'Результаты моего технического творчества одобряют даже незнакомые люди.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 1,
		image: '8'
	},

	{
		question: 'Без особого труда усваиваю иностранные языки.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 1,
		image: '14'
	},

	{
		question: 'Мне часто случается помогать даже незнакомым людям',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 2,
		image: '1'
	},

	{
		question: 'Подолгу могу заниматься музыкой, рисованием, читать книги и т. д.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 1,
		image: '15'
	},

	{
		question: 'Могу влиять на ход развития растений и животных.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 2,
		image: '13'
	},

	{
		question: 'Люблю разбираться в устройстве механизмов, приборов.',
		Psychotype: Psychotypes.HumanTech,
		weightQuestion: 1,
		image: '19'
	},

	{
		question: 'Мне обычно удается убедить людей в своей правоте.',
		Psychotype: Psychotypes.HumanHuman,
		weightQuestion: 1,
		image: '16'
	},

	{
		question: 'Охотно наблюдаю за растениями или животными.',
		Psychotype: Psychotypes.HumanNature,
		weightQuestion: 1,
		image: '4'
	},

	{
		question: 'Охотно читаю научно-популярную, критическую литературу, публицистику.',
		Psychotype: Psychotypes.HumanSign,
		weightQuestion: 1,
		image: '10'
	},

	{
		question: 'Стараюсь понять секреты мастерства и пробую свои силы в живописи, музыке и т. п.',
		Psychotype: Psychotypes.HumanArt,
		weightQuestion: 1,
		image: '3'
	}
];

let PsychotypeDescription = new Map();
PsychotypeDescription.set(Psychotypes.HumanNature, 'Представителей этих профессий объединяет одно очень важное качество — любовь к природе. Но любовь не созерцательная. Которой обладают практически все люди, считая природу наиболее благоприятной средой для отдыха, а деятельная связанная с познанием ее законов и применением их. Одно дело — любить животных и растения, играть с ними, радоваться им. И совсем другое — регулярно, день за днем ухаживать за ними, наблюдать, лечить, выгуливать, не считаясь с личным временем и планами. Специалист должен не просто все знать о живых организмах, но и прогнозировать возможные изменения в них и принимать меры. От человека требуется инициатива и самостоятельность в решении конкретных задач, заботливость, терпение и дальновидность. Человек, работающий в сфере «человек-природа», должен быть спокойным и уравновешенным');
PsychotypeDescription.set(Psychotypes.HumanTech, 'Особенность технических объектов в том, что они, как правило, могут быть точно измерены по многим признакам. При их обработке, преобразовании, перемещении или оценке от работника требуется точность, определенность действий. Техника как предмет руда представляет широкие возможности для новаторства, выдумки. творчества, поэтому важное значение приобретает такое качество, как практическое мышление. Техническая фантазия, способность мысленно соединять и разъединять технические объекты и их части — важные условия для успеха в данной области.');
PsychotypeDescription.set(Psychotypes.HumanSign, 'Мы встречаемся со знаками значительно чаще, чем обычно представляем себе. Это цифры. Коды, условные знаки, естественные или искусственные языки, чертежи, таблицы формулы. В любом случае человек воспринимает знак как символ реального объекта или явления. Поэтому специалисту, который работает со знаками, важно уметь с одной стороны, абстрагироваться от реальных физических, химически, механических свойств предметов, а с другой — представлять и воспринимать характеристики реальных явлений или объектов, стоящих за знаками. Чтобы успешно работать в какой-нибудь профессии данного типа, необходимо уметь мысленно погружаться в мир, казалось бы, сухих обозначений и сосредотачиваться на сведениях, которые они несут в себе. Особые требования профессии этого типа предъявляют к вниманию.');
PsychotypeDescription.set(Psychotypes.HumanArt, 'Важнейшие требования, которые предъявляют профессии, связанные с изобразительной, музыкальной, литературно-художественной, актерско-сценической деятельностью человека — наличие способности к искусствам, творческое воображение, образное мышление, талант, трудолюбие.');
PsychotypeDescription.set(Psychotypes.HumanHuman, 'Даже выбирая профессию, не связанную непосредственно с общением, вы поступите правильно, если обратите внимание на общительность и контактность. Подумайте, куда вы  обращены- к людям или к себе? С кем бы вы хотели общаться — с собой или с другими? Главное содержание труда в профессиях типа «человек-человек» сводится к взаимодействию между людьми. Если не наладится это взаимодействие, значит, не наладится и работа. Качества, необходимые для работы с людьми: устойчивое, хорошее настроение в процессе работы с людьми, потребность в общении, способность мысленно ставить себя на место другого человека, быстро понимать намерения, помыслы, настроение людей, умение разбираться в человеческих взаимоотношениях, хорошая память (умение держать в уме имена и особенности многих людей), умение находить общий язык с различными людьми.');

let PsychotypeUniversityDirections = new Map();
PsychotypeUniversityDirections.set(Psychotypes.HumanNature, `
	<tr>
      <th scope="row">1</th>
      <td><a href="https://insma.urfu.ru/admissions/bac/44-progs/201-biology" target="_blank">Биология</a></td>
      <td>ИЕНиМ</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><a href="https://insma.urfu.ru/admissions/bac/44-progs/216-ecology" target="_blank">Экология и природопользование</a></td>
      <td>ИЕНиМ</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><a href="https://info.urfu.ru/ru/entrant-info/bakalavriatspecialitet/technosphere-safety/" target="_blank">Техносферная безопасность</a></td>
      <td>ИнФО</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><a href="https://programs.edu.urfu.ru/ru/9873/" target="_blank">Туризм</a></td>
      <td>УГИ</td>
    </tr>
	`);
PsychotypeUniversityDirections.set(Psychotypes.HumanTech, `
	<tr>
		<th scope="row">1</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9959/" target="_blank">Биотехнические системы и технологии</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">2</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10080/" target="_blank">Биотехнология</a></td>
		<td>ХТИ</td>
	</tr>
	<tr>
		<th scope="row">3</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/203-geodesy" target="_blank">Геодезия и дистанционное зондирование</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">4</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/infocommunication-technologies-communication-systems/" target="_blank">Инфокоммуникационные технологии и системы связи</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">5</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/informatics-and-computers/" target="_blank">Информатика и вычислительная техника</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">6</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/design-technology-electronic-media/" target="_blank">Конструирование и технология электронных средств</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">7</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10092/" target="_blank">Конструкторско-технологическое обеспечение машиностроительных производств</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">8</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10205/" target="_blank">Лазерная техника и лазерные технологии</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">9</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10124/" target="_blank">Машиностроение</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">10</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10117/" target="_blank">Металлургия</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">11</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10102/" target="_blank">Мехатроника и робототехника</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">12</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10126/" target="_blank">Наземные транспортно-технологические комплексы</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">13</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9968/" target="_blank">Наноинженерия</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">14</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/210-nano" target="_blank">Нанотехнологии и микросистемная техника</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">15</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10329/" target="_blank">Оптотехника</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">16</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9957/" target="_blank">Приборостроение</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">17</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/radio-engineering/" target="_blank">Радиотехника</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">18</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10186/" target="_blank">Строительство</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">19</th>
		<td><a href="https://programms.edu.urfu.ru/ru/9826/" target="_blank">Строительство</a></td>
		<td>ИСА </td>
	</tr>
	<tr>
		<th scope="row">20</th>
		<td><a href="https://programs.edu.urfu.ru/ru/8735/" target="_blank">Теплоэнергетика и теплотехника</a></td>
		<td>УралЭНИН</td>
	</tr>
	<tr>
		<th scope="row">21</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10034/" target="_blank">Технологические машины и оборудование</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">22</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/technology-printing-packaging-production/" target="_blank">Технология полиграфического и упаковочного производства</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">23</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/management-technical-systems/" target="_blank">Управление в технических системах</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">24</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10103/" target="_blank">Химическая технология</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">25</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10073/" target="_blank">Химическая технология</a></td>
		<td>ХТИ</td>
	</tr>
	<tr>
		<th scope="row">26</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10127/" target="_blank">Эксплуатация транспортно-технологических машин и комплексов</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">27</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9955/" target="_blank">Электроника и наноэлектроника</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">28</th>
		<td><a href="https://programs.edu.urfu.ru/ru/8838/" target="_blank">Электроэнергетика и электротехника</a></td>
		<td>УралЭНИН</td>
	</tr>
	<tr>
		<th scope="row">29</th>
		<td><a href="https://programs.edu.urfu.ru/ru/8843/" target="_blank">Энергетическое машиностроение</a></td>
		<td>УралЭНИН</td>
	</tr>
	<tr>
		<th scope="row">30</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10079/" target="_blank">Энерго- и ресурсосберегающие процессы в химической технологии</a></td>
		<td>ХТИ</td>
	</tr>
	<tr>
		<th scope="row">31</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9962/" target="_blank">Ядерные физика и технологии</a></td>
		<td>ФТИ</td>
	</tr>	
	`);
PsychotypeUniversityDirections.set(Psychotypes.HumanSign, `
	<tr>
		<th scope="row">1</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10035/" target="_blank">Автоматизация технологических процессов и производств</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">2</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10153/" target="_blank">Антропология и этнология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">3</th>
		<td><a href="https://programms.edu.urfu.ru/ru/9843/" target="_blank">Архитектура</a></td>
		<td>ИСА </td>
	</tr>
	<tr>
		<th scope="row">4</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10095/" target="_blank">Бизнес-информатика</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">5</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10158/" target="_blank">Востоковедение и африканистика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">6</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10152/" target="_blank">Документоведение и архивоведение</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">7</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10312/" target="_blank">Зарубежное регионоведение</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">8</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/205-inno" target="_blank">Инноватика</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">9</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9966/" target="_blank">Инноватика</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">10</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9875/" target="_blank">Интеллектуальные системы в гуманитарной сфере</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">11</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/information-security/" target="_blank">Информационная безопасность</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">12</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10118/" target="_blank">Информационные системы и технологии</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">13</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9952/" target="_blank">Информационные системы и технологии</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">14</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10151/" target="_blank">История</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">15</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10150/" target="_blank">Лингвистика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">16</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/206-math" target="_blank">Математика</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">17</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/207-mathcopm" target="_blank">Математика и компьютерные науки</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">18</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/208-moais" target="_blank">Математическое обеспечение и администрирование информационных систем</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">19</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10125/" target="_blank">Материаловедение и технологии материалов</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">20</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9866/" target="_blank">Политология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">21</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/applied-informatics/" target="_blank">Прикладная информатика</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">22</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10139/" target="_blank">Прикладные математика и физика</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">23</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/software-engineering/" target="_blank">Программная инженерия</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">24</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10156/" target="_blank">Религиоведение</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">25</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10128/" target="_blank">Системный анализ и управление</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">26</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9864/" target="_blank">Социология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">27</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/211-metrology" target="_blank">Стандартизация и метрология</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">28</th>
		<td><a href="https://programms.edu.urfu.ru/ru/9983/" target="_blank">Стандартизация и метрология</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">29</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9808/" target="_blank">Торговое дело</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">30</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10140/" target="_blank">Управление качеством</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">31</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/212-phys" target="_blank">Физика</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">32</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10145/" target="_blank">Филология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">33</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10154/" target="_blank">Философия</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">34</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9874/" target="_blank">Фундаментальная и прикладная лингвистика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">35</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/213-dsp" target="_blank">Фундаментальная информатика и информационные технологии</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">36</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/214-chem" target="_blank">Химия</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">37</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/215-chemphys" target="_blank">Химия, физика и механика материалов</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">38</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10071/" target="_blank">Экономика</a></td>
		<td>ИнЭУ</td>
	</tr>

	`);
PsychotypeUniversityDirections.set(Psychotypes.HumanArt, `
	<tr>
		<th scope="row">1</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10157/" target="_blank">Дизайн</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">2</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9876/" target="_blank">История искусств</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">3</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9877/" target="_blank">Культурология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">4</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10204/" target="_blank">Технология художественной обработки материалов</a></td>
		<td>ИНМиТ</td>
	</tr>

	`);
PsychotypeUniversityDirections.set(Psychotypes.HumanHuman, `
	<tr>
		<th scope="row">1</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9920/" target="_blank">Гостиничное дело</a></td>
		<td>ИФКСиМП</td>
	</tr>
	<tr>
		<th scope="row">2</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9804/" target="_blank">Государственное и муниципальное управление</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">3</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9869/" target="_blank">Журналистика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">4</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10292/" target="_blank">Издательское дело</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">5</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9871/" target="_blank">Медиакоммуникации</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">6</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9863/" target="_blank">Международные отношения</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">7</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10075/" target="_blank">Менеджмент</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">8</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9918/" target="_blank">Организация работы с молодежью</a></td>
		<td>ИФКСиМП</td>
	</tr>
	<tr>
		<th scope="row">9</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10210/" target="_blank">Педагогическое образование</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">10</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10155/" target="_blank">Прикладная этика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">11</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10143/" target="_blank">Психология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">12</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9806/" target="_blank">Публичная политика и социальные науки</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">13</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9810/" target="_blank">Реклама и связи с общественностью</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">14</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9868/" target="_blank">Реклама и связи с общественностью</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">15</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9919/" target="_blank">Сервис</a></td>
		<td>ИФКСиМП</td>
	</tr>
	<tr>
		<th scope="row">16</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9872/" target="_blank">Сервис</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">17</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10293/" target="_blank">Социальная работа</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">18</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9878/" target="_blank">Социально-культурная деятельность</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">19</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10226/" target="_blank">Телевидение</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">20</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10144/" target="_blank">Управление персоналом</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">21</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9921/" target="_blank">Физическая культура</a></td>
		<td>ИФКСиМП</td>
	</tr>
	<tr>
		<th scope="row">22</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9922/" target="_blank">Физическая культура для лиц с отклонениями в состоянии здоровья</a></td>
		<td>ИФКСиМП</td>
	</tr>
`);

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
			<button class="button-input btn btn-primary ms-1" name="${index}" value="yes" id="${DATA[index].Psychotype}_${DATA[index].weightQuestion}">Да</button>
			<button class="button-input btn btn-primary ms-1" name="${index}" value="no" id="${DATA[index].Psychotype}_${DATA[index].weightQuestion}">Нет</button>
			<button class="button-input btn btn-primary ms-1" name="${index}" value="nothing" id="${DATA[index].Psychotype}_${DATA[index].weightQuestion}">Затрудняюсь ответить</button>
		`;
	};

	checkAvailableBack(index);

	renderIndicator(index + 1);

	questions.dataset.currentStep = index;

	questions.innerHTML = `
		<div class="quiz-questions-item">
			<div class="row">
				<img src="images/${DATA[index].image}.png" alt="question image" id="questionImage" class="d-flex justify-content-center">
			</div>
			<div class="row">
  				<div class="quiz-questions-item__question d-flex justify-content-center">${DATA[index].question}</div>
  			</div>
  			<div class="row">
  				<div class="quiz-question-item__buttons d-flex justify-content-center">${renderButtons()}</div>
  			</div>
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

			<h1>Список подходящих направлений: </h1>
			<table class="table">
				<thead class="thead-dark">
				    <tr>
				      <th scope="col">№</th>
				      <th scope="col">Название направления</th>
				      <th scope="col">Институт</th>
				    </tr>
  				</thead>

  				<tbody>
  					${PsychotypeUniversityDirections.get(resultPsychotype)}
  				</tbody>
			</table>

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
			btnBack.classList.add('d-none');
			btnRestart.classList.add('btn-restart--visible');
			btnRestart.classList.remove('d-none');
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
		btnBack.classList.remove('d-none');
		btnRestart.classList.remove('btn-restart--visible');
		btnRestart.classList.add('d-none');

		renderQuestions(0);
	}
});

opening.addEventListener('click', (event) => {
	if (event.target.classList.contains('btn-start')){
		opening.classList.add('opening--hidden');
		btnBack.classList.remove('btn-back--hidden');
		btnBack.classList.remove('d-none');

		renderQuestions(0);
	}
});

btnBack.classList.add('btn-back--hidden');
