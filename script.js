//alert('Урфу норм уник');
const DATA = [
    {
        question: "Вопрос 1", 
        answers:[
            {
                id: "11",
                value: "Ответ 1",
                userRoute: 1
            },
            {
                id: "12",
                value: "Ответ 2",
                userRoute: 2
            }
        ]
    }
];


const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const results = document.getElementById("results");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");