// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
  function repeatStr (s,n) {
    //your code is here
    var str = "";

    while ( n > 0) {
    
      console.log(str+"\n");

     str = str + s
     n--;
    }
    return str;
  }
