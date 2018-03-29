
//it works//

function solution(A) {
    N = A.length;
    if (N===1){
        return A[0];
    }
    A.sort(function(a, b){
        return a - b;    
    });
 
    for (i=0; i < N-1 ; i+=2){
        if( A[i] != A[i+1]){
            return A[i];
            break;
        }
    }
    return A[N-1];
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

