 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
  //your code is here
  if ( num % 10 >= 5 ) {
    var mod =  num  + (10-(num % 10)) ;
     return mod

  } else {
    mod = num - (num % 10 );
    return mod
  }
  return mod
 }
