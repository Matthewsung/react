let first = document.querySelector('#first');
const answer = document.querySelector('#answer');
const check = document.querySelector('#check');
const result = document.querySelector('#result');

function getWord (event) {
  let last = first.textContent.length - 1;
  return first.textContent.slice(last);
}

check.addEventListener('click',(event) => {
  event.preventDefault();
  let tmpAnswer = answer.value;
  if(getWord () == tmpAnswer.slice(0,1) &&tmpAnswer.length >1 ){
    first.textContent = tmpAnswer;
    answer.value = '';
    result.textContent = "맞았어요"
  }
  else{
    result.textContent = "틀렸어요"
  }
})

