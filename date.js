//заблокировать в календаре прошедшие числа
const input = document.getElementById('input');
let today = new Date().toISOString().split('T')[0];
document.getElementsByName("somedate")[0].setAttribute('min', today);

//функция
const returnBtn = document.getElementById('btn');

returnBtn.onclick = function() {
    const result = document.getElementById('result');
    let textBlock = document.createElement('p');
    textBlock.style.fontWeight="bold";

    //получаем дату из input
    const inputDate = document.getElementById('input').value;
    let date = new Date(inputDate);

    //получаем текущую дату
    let today = new Date();
    today.getHours();

    //миллисекунды до даты
    let finalDate = date - today;

    //рендер миллисекунд
    const finalDateArray = [];
  
    let years = Math.floor(finalDate / (1000 * 60 * 60 * 24 * 30 * 12));
    if (years > 0) {
      years += ' years';
    } else {
      years = " ";
    }
    let months = Math.floor(finalDate / (1000 * 60 * 60 * 24 * 30) % 12);
    if (months > 0) {
      months += ' month';
    } else {
      months = " ";
    }
    let days = Math.floor(finalDate / (1000 * 60 * 60 * 24) % 30);
    if (days > 0) {
      days += ' days';
    } else {
      days = " ";
    }
    let hours = Math.floor((finalDate / (1000 * 60 * 60)) % 24);
    if (hours > 0) {
      hours += ' hours';
    } else {
      hours = " ";
    }
    let minutes = Math.floor((finalDate / (1000 * 60)) % 60);
    if (minutes > 0) {
      minutes += ' minutes';
    } else {
      minutes = " ";
    }
    
    const renderFinalDate = `After ${years} ${months} ${days} ${hours} ${minutes}`;
      
    //выводим finalDate на экран
    textBlock.append(renderFinalDate);
    result.innerHTML= '';
    result.append(textBlock);
}




