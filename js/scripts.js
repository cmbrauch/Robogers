$(document).ready(function(){
    $("form#input").submit(function(event){
      event.preventDefault();

      const userInput = $("input#entry").val()
      let kvArray = [{key: 1, value: "Beep!"}, 
                    {key: 2, value: "Boop!"}, 
                    {key: 3, value: "Wont you be my Neighbor?"}]
      let numberReplace = [];
    function isNumber(userInput) { 
      if (!isNaN(userInput)) {
        alert("Please enter a number");
      }
    }
    isNumber(userInput);
      const numStr = userInput.split(" ");
      numStr.forEach(function(number){
        if(kvArray.includes(number[0])){
          number = "1"
          numberReplace.push(number)
        } else if (kvArray.includes(number[0])){
            number = "2"
            numberReplace.push(number)
        } else if (kvArray.includes(number[0])){
            number = "3"
            numberReplace.push(number)
//      } else {
//        word = word + word[0] + "ay"
//        word = word.substr(1, word.length-1)
//        numberReplace.push(word);
//        console.log(pigArr);
       }
        $("#output").text(numberReplace.join(" "));
      }); 
   });


});
  

//let kvArray = [{key: 1, value: "Beep!"}, 
//               {key: 2, value: "Boop!"}, 
//               {key: 3, value: "Wont you be my Neighbor?"}]
//
//let reformattedArray = kvArray.map(obj => {
//   let rObj = {}
//   rObj[obj.key] = obj.value
//   return rObj
//   
//   if (inputNumber >= numeralKey[i].number) {
//
//







//   const userInput = $("input#entry").val()
//   const neighborArray = ["3"];
//   const boopArray = ["2"]
//   const beepArray = ["1"]
//   let numberReplace = [];
// function isNumber(userInput) { 
//   if (!isNaN(userInput)) {
//     alert("Please enter a number");
//   }
// }
// isNumber(userInput);
//   const numStr = userInput.split(" ");
//   numStr.forEach(function(number){
//     if(neighborArray.includes(number[0])){
//       number = "Won't you be my neighbor?"
//       numberReplace.push(number
//     } else if (boopArray.includes(number[0])){
//         number = "Boop!"
//         numberReplace.push(number
//     } else if (beepArray.includes(number[0])){
//         number = "Beep!"
//         numberReplace.push(number
//   } else {
//     word = word + word[0] + "ay"
//     word = word.substr(1, word.length-1)
//     numberReplace.push(word);
//     console.log(pigArr);
//    }
//     $("#output").text(numberReplace.join(" "));
//   }); 
//});
//
//
//
////let kvArray = [{key: 1, value: "Beep!"}, 
////               {key: 2, value: "Boop!"}, 
////               {key: 3, value: "Wont you be my Neighbor?"}]
////
////let reformattedArray = kvArray.map(obj => {
//   let rObj = {}
//   rObj[obj.key] = obj.value
//   return rObj
//   
//   if (inputNumber >= numeralKey[i].number) {
//
//



