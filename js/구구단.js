let num1;
let num2;

const num_1 = document.querySelector('#num_1');
const num_2 = document.querySelector('#num_2');
const answer = document.querySelector('#answer');
const enter = document.querySelector('#enter');
const check = document.querySelector('#check');


// 랜덤 숫자 넣어주기
function inputNumber(){
  num1= Math.floor((Math.random() * 9) + 1);
  num2= Math.floor((Math.random() * 9) + 1);
  num_1.textContent= num1;
  num_2.textContent= num2;
}
// 정답인지 확인
function validation(){
  if(num1*num2 == answer.value){
    check.textContent = "정답입니다",
    inputNumber()
  }
  else{
    check.textContent = "오답입니다"
  }
  answer.value = "";
}
// 처음 랜덤 숫자 넣기
inputNumber();
// 
answer.addEventListener('keydown',(event)=>{
  console.log(event.keyCode)
  event.keyCode == 13?validation():console.log();
})
enter.addEventListener('click',() => {validation();})


