// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods
 //across different instances.




// function makeGame(upperbound){
//   var upper=upperbound;
//   var rand=randInt(upper)
//   var counter=0;
  
//   return {

//   	guessMyNumber:function(n){
//   		this.counter++;
// 	    if (n > this.upper) {
// 	      return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
// 	    } else if (n === this.rand) {
// 	      return "You guessed my number!";
// 	    }
// 	    return "Nope! That wasn't it!";
//   	},
//   	giveUp:function(){
//     	return this.rand;
//   	},
//   	numOfGuesses:function(){
//     	return this.counter;
//   	}
//   }
// }

function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}
function makeGame(number){
  var obj = {}
  obj.upper = number;
  obj.rand = randInt(number);
  obj.counter = 0;
  obj.guessMyNumber = guessMyNumber;
  obj.giveUp = giveUp;
  obj.numOfGuesses = numOfGuesses;

  return obj;

}

function guessMyNumber(n) {
  this.counter++;
     if (n > this.upper) {
       return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
     } else if (n === this.rand) {
       return "You guessed my number!";
     }
     return "Nope! That wasn't it!";
}
 
 function giveUp(){
  return this.rand;
 }
 function numOfGuesses() {
  return this.counter
 }



