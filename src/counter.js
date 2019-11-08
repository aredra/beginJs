//DOM tag의 정보를 가진 객처
const number = document.getElementById('number');
//해당하는 태그를  List로 가져올 수 있음
const buttons = document.querySelectorAll('button');

console.log(number);
console.log(buttons);

const [increase, decrease] = buttons;

increase.onclick = () =>  {
    const current = parseInt(number.innerText, 10);
    number.innerText = current+1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current-1;
}