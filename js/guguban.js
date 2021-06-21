let num1;
let num2;

const num_1 = document.querySelector('#num_1');
const num_2 = document.querySelector('#num_2');
const answer = document.querySelector('#answer');

const enter = document.querySelector('#enter');
const result = document.querySelector('#result');


// 랜덤 숫자 넣어주기
function inputNumber(){
  num1= Math.floor((Math.random() * 9) + 1);
  num2= Math.floor((Math.random() * 9) + 1);
  num_1.textContent= num1;
  num_2.textContent= num2;
}
// 정답인지 확인
function validation(){
  let value = document.querySelector('#answer').value;
  if(num1*num2 == value){
    result.textContent = "정답입니다",
    inputNumber()
  }
  else{
    result.textContent = "오답입니다"
  }
  console.log("확인중")
  answer.value = "";
}
// 처음 랜덤 숫자 넣기
inputNumber();
// 
answer.addEventListener('keydown',(event)=>{
  event.keyCode == 13?validation():console.log();
})
enter.addEventListener('click',() => {validation();})


