	// 1) 'negativeAll' create function that accept array as input and check the element 
    //     if it's positive make it negative 
     function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
  function negativeAll(array) {
   //your code here
   var arr = [];

  	 each(array,function(elem,i){

   		 if (elem < 0 ) {

   		   arr.push(elem*-1);

    } else {

      arr.push(elem)
    }

  
   });

   return arr; 
}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
function each1(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
  function multiplyOfFour(array) {
      //your code here
      var newArr = [];
      each1(array,function(elem,i){
        if ( elem % 4 === 0){
          newArr.push(elem*4); 

        }

      });
      return newArr;

}






