//Sträng skapas (prompt dinFraga)
var dinFraga = "Då testar vi"; //Bara för test-data, prompt i html för input

//Andra variabler som behövs
var ord1 = [], ord2=[], ord3=[], ord4=[], ord5=[];
var ord6 = [], ord7=[], ord8=[], ord9=[], ord10=[];
var minArray = [];
var baklengesFraga = [];


// ********** Funktion för att vända strängar ****** //
var baklenges = function (dinMening){
    var i = 0;
    var j = dinMening.length -1;
    var temp1 = [];

    while (j >= 0){
        temp1[i] = dinMening[j];
        i++;
        j--;
    } return temp1.join("");
};
// ********************************************** //
//Fler funktioner, testade för sig men inte i program
var tommaArray = function(mening, word){
    for (var cnt = 0; cnt < word.length; cnt++){
        mening.shift();
    } 
    while(mening[0] === " "){
        mening.shift();
    } return mening;
}
//Ny funktion som krävs för tommaArray

var konverteraStringToArray = function(mening){
    for (var cnt = 0; cnt < mening.length; cnt++){
        minArray[cnt] = mening[cnt];
    } return minArray.join("");
}
//Ny funktion för att konvertera sträng till array

var ordFramtagare = function(mening, word){
    for (var cnt = 0; cnt < mening.length; cnt++){
        if (mening[cnt] !== " "){
            word[cnt] = mening[cnt];
        } else {
            break;
        }
    } return word.join("");
}
//Ny funktion för att ta fram första ordet i en mening


// zcha99 190624 for future use when I learn how to create dynamic variables
var mellan = 0;
var antalOrd = mellan + 1;

for (var a = 0; a < dinFraga.length; a++){
    if (dinFraga[a] === " "){
        mellan += 1;
        antalOrd += 1;
    };

};



//Konverterar till Array (minArray)
konverteraStringToArray(dinFraga);

//Loop för att plocka ut alla ord.
while (minArray.length > 0){
    if (ord1[0] === undefined){
        ordFramtagare(minArray, ord1);
        tommaArray(minArray, ord1);
        continue;
    }else if(ord2[0] === undefined ){
        ordFramtagare(minArray, ord2);
        tommaArray(minArray, ord2);
        continue;
    }else if(ord3[0] === undefined ){
        ordFramtagare(minArray, ord3);
        tommaArray(minArray, ord3);
        continue;
    }else if(ord4[0] === undefined ){
        ordFramtagare(minArray, ord4);
        tommaArray(minArray, ord4);
        continue;
    }else if(ord5[0] === undefined ){
        ordFramtagare(minArray, ord5);
        tommaArray(minArray, ord5);
        continue;
    }else if(ord6[0] === undefined ){
        ordFramtagare(minArray, ord6);
        tommaArray(minArray, ord6);
        continue;
    }else if(ord7[0] === undefined ){
        ordFramtagare(minArray, ord7);
        tommaArray(minArray, ord7);
        continue;
    }else if(ord8[0] === undefined ){
        ordFramtagare(minArray, ord8);
        tommaArray(minArray, ord8);
        continue;
    }else if(ord9[0] === undefined ){
        ordFramtagare(minArray, ord9);
        tommaArray(minArray, ord9);
        continue;
    }else if(ord10[0] === undefined ){
        ordFramtagare(minArray, ord10);
        tommaArray(minArray, ord10);
        continue;
    }else{
        console.log("inget ord är definierat");
        break;
    }return ord1.join(""), ord2.join(""), ord3.join(""), ord4.join(""), ord5.join(""), ord6.join(""), ord7.join(""), ord8.join(""), ord9.join(""), ord10.join("");
};
console.log("Debugcheckar:");
console.log("ord1: " + ord1);
console.log("ord2: " + ord2);
console.log("ord3: " + baklenges(ord3));
console.log("minArray: " + minArray + "minArray.length = " + minArray.length);

//for-loop här som befolkar svars array
for (var cnt = 0; cnt < antalOrd; cnt++){
    if (baklengesFraga[0] === undefined){
        baklengesFraga[0] = baklenges(ord1);
        //Ser ut att funka. Gör även toLower
    }else{
        break;
    }
};
console.log("Baklängesfråga = " + baklengesFraga);


//Följande steg upprepas sen x antal gånger
//ordframtagare i loopen (ord 2 - ord 10)
//Array-tömmare i loopen (ord2 - ord10)


//Vänd orden (kanske redan innan returneringen i ordframtagaren?)


//Lägg till orden i baklengesFraga[] med .push()


//Presentera frågan
