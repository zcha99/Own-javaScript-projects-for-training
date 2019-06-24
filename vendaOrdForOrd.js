var dinFraga = "Då testar vi"; //Bara för test-data, prompt i html för input

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



var mellan = 0;
var antalOrd = mellan + 1;

for (var a = 0; a < dinFraga.length; a++){
    if (dinFraga[a] === " "){
        mellan += 1;
        antalOrd += 1;
    };

};
//Kod ovan tar fram antal Ord, dvs antal ord vi behöver skapa.



//Sträng skapas (prompt dinFraga)
//Ordframagare körs (ord1)
//Konverterar till Array (minArray)
//Tömmer av array (minArray)
//Följande steg upprepas sen x antal gånger
//ordframtagare i loopen (ord 2 - ord 10)
//Array-tömmare i loopen (ord2 - ord10)
//Vänd orden (kanske redan innan returneringen i ordframtagaren?)
//Lägg till orden i baklengesFraga[] med .push()
//Presentera frågan