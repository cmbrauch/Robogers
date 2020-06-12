$(document).ready(function(){
    $("form#input").submit(function(event){
      event.preventDefault();
  
      const userInput = $("input#entry").val().toLowerCase();
      const neighborArray = ["3"];
      const boopArray = ["2"]
      const beepArray = ["1"]
      let numberReplace = [];
  
      function isNumber(userInput) { 
        if (!isNaN(userInput)) {
          alert("Please enter a number");
        }
      }
      isNumber(userInput);
  
      const numStr = userInput.split(" ");
      numStr.forEach(function(number){
        if(neighborArray.includes(number[0])){
          number = "Won't you be my neighbor?"
          numberReplace.push(number);

        } else if (boopArray.includes(number[0])){
            number = "Boop!"
            numberReplace.push(number);

        } else if (beepArray.includes(number[0])){
            number = "Beep!"
            numberReplace.push(number);

        } else {
          word = word + word[0] + "ay"
          word = word.substr(1, word.length-1)
          numberReplace.push(word);
          console.log(pigArr);
        }
  
        $("#output").number(numberReplace.join(" "));
      }); 
      })
    })







// User Interface logic

//function leapYear(year) {
//    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//      return true;
//    } else {
//      return false;
//    }
//  }
//  
//  $(document).ready(function() {
//    $("form#leap-year").submit(function(event) {
//      event.preventDefault();
//      const year = parseInt($("input#year").val());
//      const result = leapYear(year);
//  
//      $(".year").text(year);
//  
//      if (!result) {                 // same as writing if (result === false)
//        $(".not").text("not");
//      } else {
//        $(".not").text("");
//      }
//  
//      $("#result").show();
//    });
//  });


  // Business Logic
