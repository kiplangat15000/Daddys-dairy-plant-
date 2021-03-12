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





function calculate() {
    var field1 = document.getElementById("shedA").value;
    var field2 = document.getElementById("shedB").value;
    var field3 = document.getElementById("shedC").value;
    var field4 = document.getElementById("shedD").value;

    var results = parseFloat(field1) + parseFloat(field2) + parseFloat(field3) + parseFloat(field4);


    if (!isNaN(results)) {
        document.getElementById(sheds).innerHTML = "The total output per day is " + results;
    }
}