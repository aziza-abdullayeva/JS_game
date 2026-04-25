// JS Codes

const button = document.querySelector(".btn");
const first_player_img = document.querySelector('.first_player')
const second_player_img = document.querySelector('.second_player')
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
result.textContent = "You are first player. Click the button to start a game"

//takroriy kodlarning  kamaytirish uchun funksiya
function getRandomNumber(num){
    return Math.round(Math.random () *num)
}

function setImageAttribute(random_num, img){
    if(random_num == 0){
        img.setAttribute('src', './img/qaychi.jpg');
    }else if(random_num == 1){
        img.setAttribute('src', './img/qogoz.jpg')
    }else {
        img.setAttribute('src', './img/tosh.jpg')
    }
}
button.addEventListener("click", () => {
    const first_random_number = getRandomNumber(2);
    const second_random_number = getRandomNumber(2);


     if (first_random_number == 0) {
        first_player_img.setAttribute('src', './img/qogoz.jpg')
    } else if (first_random_number == 1) {
        first_player_img.setAttribute('src', './img/tosh.jpg')
    } else {
        first_player_img.setAttribute('src', ' ./img/qaychi.jpg')
    }


    if (second_random_number == 0) {
        second_player_img.setAttribute('src', './img/qogoz.jpg')
    } else if (second_random_number == 1) {
        second_player_img.setAttribute('src', './img/tosh.jpg')
    } else {
        second_player_img.setAttribute('src', ' ./img/qaychi.jpg')
    }

    // 0= qaychi
    // 1=tosh
    // 2=qogoz

    // birinchi o'yinchi yutadigan kompinatsiyalar
    if(first_random_number == 0 && second_random_number==1){
        result.textContent = "siz yutdingiz"
        result.style.color = "green"
    }else if(first_random_number == 1 && second_random_number == 2){
        result.textContent = "siz yutdingiz"
        result.style.color= "green"
    }else if(first_random_number == 2 && second_random_number == 0){
        result.textContent = "siz yutdingiz"
        result.style.color = "green"
    }

    // durrang bo'ladigan kombinatsiyalar
    else if(first_random_number == second_random_number){
        result.textContent = "durrang"
        result.style.color = "blue"
    }

    //ikkinchi o'yinchi yutadigan kombinatsiyalar
    else{
        result.textContent = "siz yutqazdingiz"
        result.style.color = "red"
    }


});


   
