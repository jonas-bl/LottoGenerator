var lottoButton = document.getElementById('generate-lotto');
var euroButton = document.getElementById('generate-euro');

if (lottoButton) {
    lottoButton.addEventListener('click', () => {
        generateLotto();

    })
}

if (euroButton) {
    euroButton.addEventListener('click', () => {
        generateEuro();
    })
}


function generateLotto() {
    var numbers = new Array();

    for (i = 0; i < 6; i++) {
        numbers[i] = generateNumber(1, 49, numbers);
    }

    var sz = generateNumber(1, 9, new Array());

    numbers = sort(numbers);

    for (i = 1; i <= 6; i++) {
        document.getElementById('l' + i).innerText = numbers[i - 1];
    }
    document.getElementById('s1').innerText = sz;
}


function generateEuro() {
    var numbers = new Array();

    for (i = 0; i < 5; i++) {
        numbers[i] = generateNumber(1, 50, numbers);
    }

    var euros = new Array();
    euros[0] = generateNumber(1, 10, new Array());
    euros[1] = generateNumber(1, 10, euros);

    numbers = sort(numbers);
    euros = sort(euros);

    for (i = 1; i <= 5; i++) {
        document.getElementById('en' + i).innerText = numbers[i - 1];
    }
    document.getElementById('ez1').innerText = euros[0];
    document.getElementById('ez2').innerText = euros[1];


}

function generateNumber(min, max, ignore) {

    var num = Math.floor(Math.random() * max) + min;
    return ignore.includes(num) ? generateNumber(min, max, ignore) : num;
}

function sort(array) {
    return array.sort(function(a, b) { return a - b; });
}
