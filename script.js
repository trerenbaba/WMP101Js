function fonk1() {
    document.getElementById('test4').innerHTML = "Test4 için Paragraf değiştirildi.";
}

function haftasonu() {
    let text;
    switch (new Date().getDay()) {
        case 6:
            text = "Bugün günlerden Cumartesi";
            break;
        case 0:
            text = "Bugün günlerden Pazar";
            break;

        default:
            text = "Hafta sonunu iple çekiyorum!!!";
            break;
    }
    document.getElementById('test1').innerHTML = text;

}

function selamlama() {
    const time = new Date().getHours();
    let greeting; //selamlama
    if (time < 10) {
        greeting = "Günaydın";
    } else if (time < 20) {
        greeting = "İyi günler.";
    } else {
        greeting = "İyi akşamlar";
    }

    document.getElementById('test').innerHTML = greeting;
}

function dongulerFor() {
    let text = "";
    for (let i = 0; i < 5; i++) {
        text += "Sayi " + (i + 1) + " Index No = " + i + "<br>";
    }
    document.getElementById('test3').innerHTML = text;
}

function donguArrayFor() {
    const isimler = ['Eren', 'Emre', 'Aysel', 'Şaban', 'Ferhat', 'Filiz']
    let text = "";
    for (let i = 0; i < isimler.length; i++) {
        text += isimler[i] + '<br>';
    }
    document.getElementById('test4').innerHTML = text;
}

function donguArrayFor1() {
    const isimler = ['Eren', 'Emre', 'Aysel', 'Şaban', 'Ferhat', 'Filiz']
    let text = "";
    for (let i = 0; i < isimler.length;) {
        text += isimler[i] + '<br>';
        i++;
    }
    document.getElementById('test5').innerHTML = text;
}

function donguVar() {
    var i = 5;
    for (var i = 0; i < 10; i++) {
        //some code 
    }
    document.getElementById("test6").innerHTML = i;
}

function donguLet() {
    let i = 5;
    for (let i = 0; i < 10; i++) {
        //some code 
    }
    document.getElementById("test7").innerHTML = i;
}

function donguForOf() {
    let language = "Javascript";
    let text = "";
    for (let x of language) {
        text += x + "<br>";
    }
    document.getElementById("test9").innerHTML = text;
}

function donguWhile() {
    const meyveler = ["Muz", "Elma", "Armut", "Karpuz", "Şeftali"];

    let i = 0;
    let text = "";

    while (meyveler[i]) {
        text += meyveler[i] + "<br>";
        i++;
    }
    document.getElementById("test10").innerHTML = text;
}

//break yöntemi

function donguBreak() {
    let text = "";
    for (let i = 0; i < 10; i++) {

        if (i === 3) {
            break;
        }
        text += "This is " + i + "<br>";
    }
    document.getElementById("test11").innerHTML = text;
}

function donguContinue() {
    let text = "";
    for (let i = 0; i < 10; i++) {

        if (i === 3) {
            continue;
        }
        text += "This is " + i + "<br>";
    }
    document.getElementById("test12").innerHTML = text;
}

function donguBreakList() {
    const isimler = ['Ahmet', 'Mehmet', 'Halime', 'Selime', 'Makbule']
    let text = "";
    list: {
        text += isimler[0] + '<br>';
        break list;
        text += isimler[1] + '<br>';
        text += isimler[2] + '<br>';
        text += isimler[3] + '<br>';
        text += isimler[4] + '<br>';
    }
    document.getElementById("test13").innerHTML = text;
}

function funkTypeOf() {
    document.getElementById("test14").innerHTML = typeof "Onur" + '<br>' +
        typeof 3.14 + "<br>" +
        typeof NaN + "<br>" +
        typeof false + "<br>" +
        typeof [1, 2, 3, 4] + "<br>" +
        typeof {
            name: 'Selin',
            age: 10
        } + "<br>" +
        typeof new Date() + "<br>" +
        typeof

    function () {} + "<br>" +
    typeof myCar + "<br>" +
        typeof null;

}

function nan() {
    let x = 0;
    let y = 0;
    let z = x / y;
    document.getElementById("test15").innerHTML = x;
}

//Converting string to number
//Number("3.14") //return 3.14
//Number(" ") //return 0
//Number("") //return 0
//Number("33 44") // return NaN


//the Unary + Operatör
//variable yapıları number olarak çevirmek

function Unary() {
    let y = "3";
    let x = +y;
    document.getElementById("test16").innerHTML = typeof y + "<br>" + typeof x + x;
}

//Hata kontrol yapısı
//Try-Catch

function trycatch1() {
    try {
        alertt("selam nasılsın?");
    } catch (error) {
        document.getElementById("test17").innerHTML = error.message;
    }
}

function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";

    let x = document.getElementById("test21").value;

    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";

        x = Number(x);

        if (x > 4 && x < 11) throw " correct";
        else if (x > 10) throw "too hight";
        else if (x < 5) throw "too low";
    } catch (err) {
        message.innerHTML = "Input is " + err;
    }
}


//Arrow Functions
let carpim = (a, b) => a * b;