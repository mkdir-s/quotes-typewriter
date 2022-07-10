let quoteArray = [];
let index = 0;
let textPosition = 0;
let flag = true;
let destination = document.getElementById('typedtext');

window.addEventListener('load', typeWriter);

function loadQuote() {
    const url = 'https://api.quotable.io/random';
    fetch(url)
        .then(res => {
            if(res.ok)
                return res.json();
            else  
                console.log(res.status);
        })
        .then(data => {
            quoteArray[index] = data.content;
        })
}

function typeWriter() {
    if (flag) {
        loadQuote();
        quoteArray[index] += ' ';
        flag = false;
    }

    destination.innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';

    if(textPosition++ != quoteArray[index].length) {
        setTimeout(typeWriter(), 100);
    } else {
        quoteArray[index] = ' ';
        setTimeout(typeWrite(), 3000);
        textPosition = 0;
        flag = true;
    }
}
