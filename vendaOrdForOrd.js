//Sträng skapas (prompt dinFraga)
var dinFraga = "Då testar vi ett lite längre exempel"; //Bara för test-data, prompt i html för input
var dittSvar = "räh remmok tte ravs"; //Bara för test-data, prompt i html för input
//Andra variabler som behövs
var ord1 = [], ord2=[], ord3=[], ord4=[], ord5=[];
var ord6 = [], ord7=[], ord8=[], ord9=[], ord10=[];
var ord11 = [], ord12=[], ord13=[], ord14=[], ord15=[];
var ord16 = [], ord17=[], ord18=[], ord19=[], ord20=[];
var minArray = [];
var baklengesFraga = [];
var fraga = [];
var svar = [];
var baklengesSvar = [];
var sord1 = [], sord2=[], sord3=[], sord4=[], sord5=[];
var sord6 = [], sord7=[], sord8=[], sord9=[], sord10=[];
var sord11 = [], sord12=[], sord13=[], sord14=[], sord15=[];
var sord16 = [], sord17=[], sord18=[], sord19=[], sord20=[];

/* *** FUNKTIONER *** */

//Första bokstaven stor, resten germener
var grammatik = function(_aArray, _newArray){
    for (var cnt = 0; cnt < _aArray.length; cnt++){
        if (cnt === 0){
            _newArray[cnt] = _aArray[cnt].toUpperCase();
        }else{
            _newArray[cnt] = _aArray[cnt].toLowerCase();
        }
    }return _newArray;
};

// Vänd en sträng
var baklenges = function (dinMening){
    var i = 0;
    var j = dinMening.length -1;
    var temp1 = [];

    while (j >= 0){
        temp1[i] = dinMening[j];
        i++;
        j--;
    }return temp1.join("");
};

// Vänd en sträng där första bokstaven blir stor
var baklenges1 = function (dinMening){
    var i = 0;
    var j = dinMening.length -1;
    var temp1 = [];
    var _temp = [];

    while (j >= 0){
        temp1[i] = dinMening[j];
        i++;
        j--;
    }grammatik(temp1, _temp);
    return _temp.join("");
};

// Tömmer en array från 0 enligt längd på argument 2
var tommaArray = function(mening, word){
    for (var cnt = 0; cnt < word.length; cnt++){
        mening.shift();
    } 
    while(mening[0] === " "){
        mening.shift();
    } return mening;
}

// Gör om en sträng till en array
var konverteraStringToArray = function(mening){
    for (var cnt = 0; cnt < mening.length; cnt++){
        minArray[cnt] = mening[cnt];
    } return minArray.join("");
}
// Tar ut orden från en "promptad" mening
var ordFramtagare = function(mening, word){
    for (var cnt = 0; cnt < mening.length; cnt++){
        if (mening[cnt] !== " "){
            word[cnt] = mening[cnt];
        } else {
            break;
        }
    } return word.join("");
}
/* *** FUNKTIONER SLUT *** */

/* *** KOD SOM INTE ANVÄNDS NU *** 
// zcha99 190624 for future use when I learn how to create dynamic variables
var mellan = 0;
var antalOrd = mellan + 1;
for (var a = 0; a < dinFraga.length; a++){
    if (dinFraga[a] === " "){
        mellan += 1;
        antalOrd += 1;
    };
};
*/

konverteraStringToArray(dinFraga);

//Loop för att plocka ut alla ord. - //Zcha 190625 Borde gå att göra en funktion utav. 
while (minArray.length > 0){
    if (ord1[0] === undefined){
        ordFramtagare(minArray, ord1);
        baklengesFraga[0] = baklenges1(ord1); //OBS! Första ordet använder baklenges1
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
    }else if(ord11[0] === undefined){
        ordFramtagare(minArray, ord11);
        baklengesFraga[10] = baklenges(ord11);
        tommaArray(minArray, ord11);
        continue;
    }else if(ord12[0] === undefined ){
        ordFramtagare(minArray, ord12);
        baklengesFraga[11] = baklenges(ord12);
        tommaArray(minArray, ord12);
        continue;
    }else if(ord13[0] === undefined ){
        ordFramtagare(minArray, ord13);
        baklengesFraga[12] = baklenges(ord13);
        tommaArray(minArray, ord13);
        continue;
    }else if(ord14[0] === undefined ){
        ordFramtagare(minArray, ord14);
        baklengesFraga[13] = baklenges(ord14);
        tommaArray(minArray, ord14);
        continue;
    }else if(ord15[0] === undefined ){
        ordFramtagare(minArray, ord15);
        baklengesFraga[14] = baklenges(ord15);
        tommaArray(minArray, ord15);
        continue;
    }else if(ord16[0] === undefined ){
        ordFramtagare(minArray, ord16);
        baklengesFraga[15] = baklenges(ord16);
        tommaArray(minArray, ord16);
        continue;
    }else if(ord17[0] === undefined ){
        ordFramtagare(minArray, ord17);
        baklengesFraga[16] = baklenges(ord17);
        tommaArray(minArray, ord17);
        continue;
    }else if(ord18[0] === undefined ){
        ordFramtagare(minArray, ord18);
        baklengesFraga[17] = baklenges(ord18);
        tommaArray(minArray, ord18);
        continue;
    }else if(ord19[0] === undefined ){
        ordFramtagare(minArray, ord19);
        baklengesFraga[18] = baklenges(ord19);
        tommaArray(minArray, ord19);
        continue;
    }else if(ord20[0] === undefined ){
        ordFramtagare(minArray, ord20);
        baklengesFraga[19] = baklenges(ord20);
        tommaArray(minArray, ord10);
        continue;
    }{
        break;
    }
};

console.log("Baklängesfråga = " + baklengesFraga.join(" ")); // Tas bort i html

// I stort sett samma kod för svaret som för frågan - //Zcha 190625 När/om jag löser funktionsfråan här så ryker mycket kod.
konverteraStringToArray(dittSvar);

//Loop för att plocka ut alla ord.
while (minArray.length > 0){
    if (sord1[0] === undefined){
        ordFramtagare(minArray, sord1);
        baklengesSvar[0] = baklenges1(sord1); //OBS! baklenges1 för ord1
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
        break;
    }
};

console.log("Baklängessvar = " + baklengesSvar.join(" ")); // Tas bort i html
