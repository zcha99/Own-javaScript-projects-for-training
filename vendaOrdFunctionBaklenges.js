var dinFraga = "Nu testar vi att vända mening, först per mening sen per ord";

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

console.log(baklenges(dinFraga));