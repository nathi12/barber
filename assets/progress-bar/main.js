
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');

const longCircleText1 = document.createElement('span');
longCircleText1.classList.add('long-circle-text-1');
longCircleText1.innerText = '--step 1 text--';

const longCircleText2 = document.createElement('span');
longCircleText2.classList.add('long-circle-text-2');
longCircleText2.innerText = '--step 2 text--';

const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');


btnLeft.addEventListener('click', () => {

    if (circle1.contains(longCircleText1)) {
        circle1.removeChild(longCircleText1);
    } else {
        circle1.appendChild(longCircleText1);
    }
    circle1.classList.toggle('long-circle-1');
    circle1.classList.toggle('circle-1');

    //moving to normal circle-2 when circle-1 in long circle
    if (circle2.classList.contains('circle-2-moved')) {
        circle2.classList.add('circle-2');
    }

    //moving stuff
    line2.classList.toggle('line-2-moved');
    circle2.classList.toggle('circle-2-moved');
    line3.classList.toggle('line-3-moved');



    if (circle2.classList.contains('long-circle-2')) {
        circle2.classList.remove('long-circle-2');
        circle2.classList.add('circle-2-moved');
        circle2.removeChild(longCircleText2);
        line3.classList.remove('line-3-moved-1');
        line3.classList.add('line-3-moved');
    }
});


btnRight.addEventListener('click', () => {

    if (circle2.contains(longCircleText2)) {
        circle2.removeChild(longCircleText2);
    } else {
        circle2.appendChild(longCircleText2);
    }

    if (circle2.classList.contains('circle-2-moved')) {
        circle2.classList.remove('circle-2-moved');
        circle2.classList.add('circle-2');
        line3.classList.add('line-3');
    }

    circle2.classList.toggle('long-circle-2');
    circle2.classList.toggle('circle-2');


    //trigger for line 3
    if (circle2.classList.contains('long-circle-2')) {
        line3.classList.add('line-3-moved-1');
    } else {
        line3.classList.remove('line-3-moved-1');
        line3.classList.remove('line-3-moved');
        line3.classList.add('line-3');
    }

    if (line3.classList.length === 0) {
        line3.classList.add('line-3');
    }


    if (circle1.classList.contains('long-circle-1')) {
        //move circle 1 to nomal circle
        circle1.classList.remove('long-circle-1');
        circle1.classList.add('circle-1');


        line2.classList.remove('line-2-moved');
        line2.classList.add('line-2');
        circle1.removeChild(longCircleText1);

    }
});


