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

let PsychotypeUniversityDirections = new Map();
PsychotypeUniversityDirections.set(Psychotypes.HumanNature, `
	<tr>
      <th scope="row">1</th>
      <td><a href="https://insma.urfu.ru/admissions/bac/44-progs/201-biology">Биология</a></td>
      <td>ИЕНиМ</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><a href="https://insma.urfu.ru/admissions/bac/44-progs/216-ecology">Экология и природопользование</a></td>
      <td>ИЕНиМ</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><a href="https://info.urfu.ru/ru/entrant-info/bakalavriatspecialitet/technosphere-safety/">Техносферная безопасность</a></td>
      <td>ИнФО</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><a href="https://programs.edu.urfu.ru/ru/9873/">Туризм</a></td>
      <td>УГИ</td>
    </tr>
	`);
PsychotypeUniversityDirections.set(Psychotypes.HumanTech, `
	<tr>
		<th scope="row">1</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9959/">Биотехнические системы и технологии</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">2</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10080/">Биотехнология</a></td>
		<td>ХТИ</td>
	</tr>
	<tr>
		<th scope="row">3</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/203-geodesy">Геодезия и дистанционное зондирование</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">4</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/infocommunication-technologies-communication-systems/">Инфокоммуникационные технологии и системы связи</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">5</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/informatics-and-computers/">Информатика и вычислительная техника</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">6</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/design-technology-electronic-media/">Конструирование и технология электронных средств</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">7</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10092/">Конструкторско-технологическое обеспечение машиностроительных производств</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">8</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10205/">Лазерная техника и лазерные технологии</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">9</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10124/">Машиностроение</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">10</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10117/">Металлургия</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">11</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10102/">Мехатроника и робототехника</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">12</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10126/">Наземные транспортно-технологические комплексы</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">13</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9968/">Наноинженерия</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">14</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/210-nano">Нанотехнологии и микросистемная техника</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">15</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10329/">Оптотехника</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">16</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9957/">Приборостроение</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">17</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/radio-engineering/">Радиотехника</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">18</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10186/">Строительство</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">19</th>
		<td><a href="https://programms.edu.urfu.ru/ru/9826/">Строительство</a></td>
		<td>ИСА </td>
	</tr>
	<tr>
		<th scope="row">20</th>
		<td><a href="https://programs.edu.urfu.ru/ru/8735/">Теплоэнергетика и теплотехника</a></td>
		<td>УралЭНИН</td>
	</tr>
	<tr>
		<th scope="row">21</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10034/">Технологические машины и оборудование</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">22</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/technology-printing-packaging-production/">Технология полиграфического и упаковочного производства</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">23</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/management-technical-systems/">Управление в технических системах</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">24</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10103/">Химическая технология</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">25</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10073/">Химическая технология</a></td>
		<td>ХТИ</td>
	</tr>
	<tr>
		<th scope="row">26</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10127/">Эксплуатация транспортно-технологических машин и комплексов</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">27</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9955/">Электроника и наноэлектроника</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">28</th>
		<td><a href="https://programs.edu.urfu.ru/ru/8838/">Электроэнергетика и электротехника</a></td>
		<td>УралЭНИН</td>
	</tr>
	<tr>
		<th scope="row">29</th>
		<td><a href="https://programs.edu.urfu.ru/ru/8843/">Энергетическое машиностроение</a></td>
		<td>УралЭНИН</td>
	</tr>
	<tr>
		<th scope="row">30</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10079/">Энерго- и ресурсосберегающие процессы в химической технологии</a></td>
		<td>ХТИ</td>
	</tr>
	<tr>
		<th scope="row">31</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9962/">Ядерные физика и технологии</a></td>
		<td>ФТИ</td>
	</tr>	
	`);
PsychotypeUniversityDirections.set(Psychotypes.HumanSign, `
	<tr>
		<th scope="row">1</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10035/">Автоматизация технологических процессов и производств</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">2</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10153/">Антропология и этнология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">3</th>
		<td><a href="https://programms.edu.urfu.ru/ru/9843/">Архитектура</a></td>
		<td>ИСА </td>
	</tr>
	<tr>
		<th scope="row">4</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10095/">Бизнес-информатика</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">5</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10158/">Востоковедение и африканистика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">6</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10152/">Документоведение и архивоведение</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">7</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10312/">Зарубежное регионоведение</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">8</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/205-inno">Инноватика</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">9</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9966/">Инноватика</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">10</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9875/">Интеллектуальные системы в гуманитарной сфере</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">11</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/information-security/">Информационная безопасность</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">12</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10118/">Информационные системы и технологии</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">13</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9952/">Информационные системы и технологии</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">14</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10151/">История</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">15</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10150/">Лингвистика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">16</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/206-math">Математика</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">17</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/207-mathcopm">Математика и компьютерные науки</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">18</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/208-moais">Математическое обеспечение и администрирование информационных систем</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">19</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10125/">Материаловедение и технологии материалов</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">20</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9866/">Политология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">21</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/applied-informatics/">Прикладная информатика</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">22</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10139/">Прикладные математика и физика</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">23</th>
		<td><a href="https://priem-rtf.urfu.ru/ru/baccalaureate/software-engineering/">Программная инженерия</a></td>
		<td>ИРИТ-РТФ</td>
	</tr>
	<tr>
		<th scope="row">24</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10156/">Религиоведение</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">25</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10128/">Системный анализ и управление</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">26</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9864/">Социология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">27</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/211-metrology">Стандартизация и метрология</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">28</th>
		<td><a href="https://programms.edu.urfu.ru/ru/9983/">Стандартизация и метрология</a></td>
		<td>ИНМиТ</td>
	</tr>
	<tr>
		<th scope="row">29</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9808/">Торговое дело</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">30</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10140/">Управление качеством</a></td>
		<td>ФТИ</td>
	</tr>
	<tr>
		<th scope="row">31</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/212-phys">Физика</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">32</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10145/">Филология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">33</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10154/">Философия</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">34</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9874/">Фундаментальная и прикладная лингвистика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">35</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/213-dsp">Фундаментальная информатика и информационные технологии</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">36</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/214-chem">Химия</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">37</th>
		<td><a href="https://insma.urfu.ru/admissions/bac/44-progs/215-chemphys">Химия, физика и механика материалов</a></td>
		<td>ИЕНиМ</td>
	</tr>
	<tr>
		<th scope="row">38</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10071/">Экономика</a></td>
		<td>ИнЭУ</td>
	</tr>

	`);
PsychotypeUniversityDirections.set(Psychotypes.HumanArt, `
	<tr>
		<th scope="row">1</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10157/">Дизайн</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">2</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9876/">История искусств</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">3</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9877/">Культурология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">4</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10204/">Технология художественной обработки материалов</a></td>
		<td>ИНМиТ</td>
	</tr>

	`);
PsychotypeUniversityDirections.set(Psychotypes.HumanHuman, `
	<tr>
		<th scope="row">1</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9920/">Гостиничное дело	</a></td>
		<td>ИФКСиМП</td>
	</tr>
	<tr>
		<th scope="row">2</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9804/">Государственное и муниципальное управление</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">3</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9869/">Журналистика</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">4</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10292/">Издательское дело	</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">5</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9871/">Медиакоммуникации</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">6</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9863/">Международные отношения</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">7</th>
		<td><a href="https://programms.edu.urfu.ru/ru/10075/">Менеджмент</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">8</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9918/">Организация работы с молодежью</a></td>
		<td>ИФКСиМП</td>
	</tr>
	<tr>
		<th scope="row">9</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10210/">Педагогическое образование</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">10</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10155/">Прикладная этика	</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">11</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10143/">Психология</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">12</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9806/">Публичная политика и социальные науки</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">13</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9810/">Реклама и связи с общественностью</a></td>
		<td>ИнЭУ</td>
	</tr>
	<tr>
		<th scope="row">14</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9868/">Реклама и связи с общественностью</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">15</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9919/">Сервис</a></td>
		<td>ИФКСиМП</td>
	</tr>
	<tr>
		<th scope="row">16</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9872/">Сервис</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">17</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10293/">Социальная работа</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">18</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9878/">Социально-культурная деятельность</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">19</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10226/">Телевидение</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">20</th>
		<td><a href="https://programs.edu.urfu.ru/ru/10144/">Управление персоналом</a></td>
		<td>УГИ</td>
	</tr>
	<tr>
		<th scope="row">21</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9921/">Физическая культура</a></td>
		<td>ИФКСиМП</td>
	</tr>
	<tr>
		<th scope="row">22</th>
		<td><a href="https://programs.edu.urfu.ru/ru/9922/">Физическая культура для лиц с отклонениями в состоянии здоровья</a></td>
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
