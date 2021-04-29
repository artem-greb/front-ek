let question_arr = ["1. Год создания?", "Сколько магазинов в Харькове?", "Средняя зарплата за месяц?"]
let a1_arr = ["2010", "10", "15 000"]
let a2_arr = ["2013", "17", "25 000"]
let a3_arr = ["2015", "9", "20 000" ]
let answer_arr = ["2010", "9","25 000"]


let n_right_answer_arr=[1,3,2];
let n_answer = 2;
let right_answers = 0;


question.innerHTML = question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(n1.checked);
    console.log(n2.checked);
    console.log(n3.checked);
    if (n1.checked){ n_a = 1;}
    if (n2.checked){ n_a = 2;}
    if (n3.checked){ n_a = 3;}
    console.log(n_a);
    if (n_a == n_right_answer){
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        console.log("right_answ = "+right_answers);
        if (n_question.value == n_answer){
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b> Верно ответили на вопросы:  " +right_answers+"</b>";
            right_div.appendChild(el1);
            resa.classList.remove("hidden");
        }
    }else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }

}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question);
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    n_right_answer = n_right_answer_arr[n_question.value];
}