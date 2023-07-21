
const containerCard = document.getElementById('container_card');

const cardNumber = '<div class="card number"><span id="progress"></span></div>';

const cardFizz = '<div class="card fizz">Fizz</div>';

const cardBuzz = '<div class="card buzz">Buzz</div>';

const cardFizzBuzz = '<div class="card fizzbuzz">FizzBuzz</div>';



 for (let i = 1; i <=100; i++ ){

    
    if (i % 3 == 0 && i % 5 == 0){

        containerCard.innerHTML += cardFizzBuzz;

    }

    else if( i % 3 == 0){

        containerCard.innerHTML += cardFizz;
    }

    else if (i % 5 == 0) {

        containerCard.innerHTML += cardBuzz;
    }

    else{
        containerCard.innerHTML += cardNumber;
            
        const progress = containerCard.querySelector('.card.number #progress');
        progress.innerHTML = i;

    }

    
}






