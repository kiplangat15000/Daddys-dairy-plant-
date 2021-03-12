// // function totalProduction() {
// //     var sheds = [];
// //     // pushing all sheds to array
// //     // sheds.push(document.getElementById("ShedA").value);
// //     // sheds.push(document.getElementById("ShedB").value);
// //     // sheds.push(document.getElementById("ShedC").value);
// //     // sheds.push(document.getElementById("ShedD").value);


// //     // assigning array values 
// //     var [ShedA, ShedB, ShedC, ShedD] = sheds;
// //     var display = document.getElementById("display");
// //     if (ShedA.length === 0 || ShedB.length === 0 || ShedC.length === 0 || ShedD.length) {
// //        display.innerHTML = "<p>Please<span class ='fill'>FILL</span> all the fields</p>"
// //     }
// //     else {
// //         ShedA = parseInt(ShedA);
// //         ShedB = parseInt(ShedB);
// //         ShedC = parseInt(ShedC);
// //         ShedD = parseInt(ShedD);
// //         track(ShedA, ShedB, ShedC, ShedD);
// //     }
// // }



// function updateform() {
//     if (document.getElementById('shedA').value=="") {
//         alert("fill all required fields");
//         return false;
//     }
// }
var field1;
var field2;
var field3;
var field4;
var dailyProduction = 0;
var weeklyProduction = 0;
var monthlyProduction = 0;
var price = 45;

function dailyProduction() {
    var field1 = document.getElementById("shedA").value;
    var field2 = document.getElementById("shedB").value;
    var field3 = document.getElementById("shedC").value;
    var field4 = document.getElementById("shedD").value;

    var results = field1 + field2 + field3 + field4;

    if (document.getElementById(field1).value == "") {
        alert('please field required');
        return false;
        else(document.getElementById)

    }
    if (document.getElementById(field2).value == "") {
        alert('please field required');
        return false;
}