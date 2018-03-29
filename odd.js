
//it works//
solution([2,2,3,3,5]);

function solution(A){
  var b={};
  const total=A.length;

  for(var i=0; i<total; i++){
      if(b[A[i]]){
        delete b[A[i]];
      }else{
        b[A[i]]=A[i];
    }
    }
    console.log(Object.keys(b)[0]);
   return Object.keys(b)[0]

}







  //Skepsi prwth//

// //
// solution([2,2,3,3,5]);
//
// function solution(A){
//   const total=A.length;
//    var count=0;
//   for(var i=0;i<total;i++){
//     for(var j=i+1; j<total; j++) {
//       if (A[j] !== A[i]) {
//         count++;
//       }else{
//         break;
//       }
//       if(count%2===0)
//         return A[i];
//       else{
//         count=0;
//         i=j-1;
//       }
//     }
//   }
//
// }

