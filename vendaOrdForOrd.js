//Sträng skapas (prompt dinFraga)
var dinFraga = "Då testar vi ett lite längre exempel"; //Bara för test-data, prompt i html för input
var dittSvar = "räh remmok tte ravs"; //Bara för test-data, prompt i html för input
//Andra variabler som behövs
var ord1 = [], ord2=[], ord3=[], ord4=[], ord5=[];
var ord6 = [], ord7=[], ord8=[], ord9=[], ord10=[];
var minArray = [];
var baklengesFraga = [];
var baklengesSvar = [];
var sord1 = [], sord2=[], sord3=[], sord4=[], sord5=[];
var sord6 = [], sord7=[], sord8=[], sord9=[], sord10=[];


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
        baklengesFraga[0] = baklenges(ord1);
        tommaArray(minArray, ord1);
        continue;
    }else if(ord2[0] === undefined ){
        ordFramtagare(minArray, ord2);
        baklengesFraga[1] = baklenges(ord2);
        tommaArray(minArray, ord2);
        continue;
    }else if(ord3[0] === undefined ){
        ordFramtagare(minArray, ord3);
        baklengesFraga[2] = baklenges(ord3);
        tommaArray(minArray, ord3);
        continue;
    }else if(ord4[0] === undefined ){
        ordFramtagare(minArray, ord4);
        baklengesFraga[3] = baklenges(ord4);
        tommaArray(minArray, ord4);
        continue;
    }else if(ord5[0] === undefined ){
        ordFramtagare(minArray, ord5);
        baklengesFraga[4] = baklenges(ord5);
        tommaArray(minArray, ord5);
        continue;
    }else if(ord6[0] === undefined ){
        ordFramtagare(minArray, ord6);
        baklengesFraga[5] = baklenges(ord6);
        tommaArray(minArray, ord6);
        continue;
    }else if(ord7[0] === undefined ){
        ordFramtagare(minArray, ord7);
        baklengesFraga[6] = baklenges(ord7);
        tommaArray(minArray, ord7);
        continue;
    }else if(ord8[0] === undefined ){
        ordFramtagare(minArray, ord8);
        baklengesFraga[7] = baklenges(ord8);
        tommaArray(minArray, ord8);
        continue;
    }else if(ord9[0] === undefined ){
        ordFramtagare(minArray, ord9);
        baklengesFraga[8] = baklenges(ord9);
        tommaArray(minArray, ord9);
        continue;
    }else if(ord10[0] === undefined ){
        ordFramtagare(minArray, ord10);
        baklengesFraga[9] = baklenges(ord10);
        tommaArray(minArray, ord10);
        continue;
    }else{
        console.log("inget ord är definierat");
        break;
    }
};

console.log("Baklängesfråga = " + baklengesFraga.join(" "));

/* ************ Ny kod här *********** */

//Konverterar till Array (minArray)
konverteraStringToArray(dittSvar);
console.log(minArray);

//Loop för att plocka ut alla ord.
while (minArray.length > 0){
    if (sord1[0] === undefined){
        ordFramtagare(minArray, sord1);
        baklengesSvar[0] = baklenges(sord1);
        tommaArray(minArray, sord1);
        continue;
    }else if(sord2[0] === undefined ){
        ordFramtagare(minArray, sord2);
        baklengesSvar[1] = baklenges(sord2);
        tommaArray(minArray, sord2);
        continue;
    }else if(sord3[0] === undefined ){
        ordFramtagare(minArray, sord3);
        baklengesSvar[2] = baklenges(sord3);
        tommaArray(minArray, sord3);
        continue;
    }else if(sord4[0] === undefined ){
        ordFramtagare(minArray, sord4);
        baklengesSvar[3] = baklenges(sord4);
        tommaArray(minArray, sord4);
        continue;
    }else if(sord5[0] === undefined ){
        ordFramtagare(minArray, sord5);
        baklengesSvar[4] = baklenges(sord5);
        tommaArray(minArray, sord5);
        continue;
    }else if(sord6[0] === undefined ){
        ordFramtagare(minArray, sord6);
        baklengesSvar[5] = baklenges(sord6);
        tommaArray(minArray, sord6);
        continue;
    }else if(sord7[0] === undefined ){
        ordFramtagare(minArray, sord7);
        baklengesSvar[6] = baklenges(sord7);
        tommaArray(minArray, sord7);
        continue;
    }else if(sord8[0] === undefined ){
        ordFramtagare(minArray, sord8);
        baklengesSvar[7] = baklenges(sord8);
        tommaArray(minArray, sord8);
        continue;
    }else if(sord9[0] === undefined ){
        ordFramtagare(minArray, sord9);
        baklengesSvar[8] = baklenges(sord9);
        tommaArray(minArray, sord9);
        continue;
    }else if(sord10[0] === undefined ){
        ordFramtagare(minArray, sord10);
        baklengesSvar[9] = baklenges(sord10);
        tommaArray(minArray, sord10);
        continue;
    }else{
        console.log("inget ord är definierat");
        break;
    }
};

console.log("Baklängessvar = " + baklengesSvar.join(" "));
