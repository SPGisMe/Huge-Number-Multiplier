function multiply(a, b) {
  if (a === '0' || b === '0'){return '0'}
  
  let carry = 0; //value for carrying remainder in multiplication and addition
  let big = '';
  let sml = '';
  let pad = '0'; //value to add a zero everytime we go up by a multiple of 10 so place value is preserved
  let result = [];
  let bigArray = [];
  let final = [];
  
  a.length > b.length ? (big = a, sml = b) : (big = b, sml = a); //makes sure to always multiply the larger number by the smaller 
  
  for (let j = sml.length - 1; j >= 0; j--){
  //set padding to line up array nums for addition
    if (j < sml.length - 2){pad += '0';}
    
    for (let i = big.length - 1; i >= 0; i--) {
       let temp = 0;
       let num = (parseInt(sml[j]) * parseInt(big[i])) + carry;
       
       // simple single number multiply carrying remainder
       num > 9 ? carry = Math.floor(num / 10) : carry = 0;
       i === 0 ? temp = num : temp = num % 10;
       
       temp = temp.toString().split('').reverse().join('');
       result.unshift(temp);
       
       // sets current multiplied number into array in ascending order
       if (i === 0) {
         // lines up nums in array for final addition
         if (j < sml.length - 1){result.push(pad);}
         bigArray.push(result.reverse().join(''));
         result = [];
         carry = 0;
       }
     }
    }

  let maxLength = bigArray[bigArray.length - 1].length;
  let sum = 0;
  
  carry = 0;
  //add em up!
  
  for (let n = 0; n < maxLength; n++) {
    for (let x = 0; x < bigArray.length; x++){
      if (bigArray[x][n]) {
        sum += parseInt(bigArray[x][n]);
      }

      if (x === bigArray.length - 1) {
          sum += carry;
        if (sum > 9) {
          carry = Math.floor(sum / 10);
        }else{carry = 0;}

        n === maxLength - 1 ? final.unshift(sum) : final.unshift(sum % 10);

        sum = 0;
      }
    }
  }
  return final.join('').replace(/^0+/, '');
}
