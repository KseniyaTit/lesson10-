/*task 1
let aname = prompt ('enter you name')
let surname = prompt ('enter you surname')
let nickname = prompt ('enter you nickname')
if (aname && surname && nickname){
    alert(`hello ${aname} ${surname} ${nickname}`) 
} else {
    if(aname && surname){
        alert (`hello ${aname} ${surname} ${nickname}`) 
    } else {
        if(surname && nickname) {
            alert (`hello, ${nickname}`)
        }else{ 
            if (nickname && aname){
            alert(`hello, ${aname}`)
            } else {
                if (((aname && surname && nickname) ==false) || (surname || nickname)){
                    alert('hello, noName')
                }
            }
        }




    }
    }
  
        */

/*task 2 */
/*let num = prompt('enter the number')
   if (num > 100){
       if (num % 2===0 && Math.sign(num)===1 && num % 1=== 0){
        alert(`введенное вами число больше 100, четное, положительное ,недробное`)
    }
    if ( num % 2 !==0 && Math.sign(num)===1 && num % 1=== 0){
    alert(`введенное вами число больше 100, нечетное целое положительное недробное`)
    }
    if (num % 2 !==0 && Math.sign(num)===1 && num % 1 !== 0){
    alert(`введенное вами число больше 100, нечетное недробное положительное`)
    }
    if ( num % 2 ===0 && Math.sign(num)===1 && num % 1!== 0){
    alert(`введенное вами число больше 100, положительное, четное, дробное`)
    }
} else if (num < 100){
 
    if ( num % 2 !==0 && Math.sign(num)===1 && num % 1=== 0){
    alert(`введенное вами число меньше 100, нечетное положительное недробное`)
    }
    if ( num % 2 ===0 && Math.sign(num)===1 && num % 1=== 0){
    alert(`введенное вами число меньше 100, четное положительное недробное`)
    }
    if (num % 2 ===0 && Math.sign(num) ===1 && num % 1 !== 0){
        alert(`введенное вами число меньше 100, четное положительное дробное`)
        }
    if (num % 2 !==0 && Math.sign(num) ===-1 && num % 1=== 0){
            alert(`введенное вами число меньше 100, нечетное положительное дробное`)
            }
    if (num % 2 ===0 && Math.sign(num) ===-1 && num % 1=== 0){
            alert(`введенное вами число меньше 100, четное  отрицательное недробное`)
         }
    if (num % 2 !==0 && Math.sign(num) ===-1 && num % 1=== 0){
    alert(`введенное вами число меньше 100, нечетное отрицательное недробное`)
    }
    if (num % 2 ===0 && Math.sign(num) ===-1 && num % 1 !== 0){
        alert(`введенное вами число меньше 100, четное отрицательное дробное`)
        }
     if (num % 2 !==0 && Math.sign(num) ===-1 && num % 1=== 0){
            alert(`введенное вами число меньше 100, нечетное отрицательное дробное`)
            }
}else if (num===NaN) {
    alert('введенный вами символ нечисловой')
    
}
*/
/* task 4 */
/*let n = +prompt('enter the number')
if (n === Number){
switch (n){
    case 1:
        alert('one');
        break;
    case 2:
         alert('two');
         break;
    case 3:
        alert('three');
        break;
    case 4:
        alert('four');
        break;
    case 5:
        alert('five');
        break;
    case 6:
        alert('six');
        break;
    case 7:
        alert('seven')
        break;
    case 8:
        alert('eight')
        break;
    case 9:
        alert('nine')
        break;
    case 0:
        alert('zero')
        break;
    
    
}} else if (n>10){
    alert( 'this number is more than 10')
}else if (n !==Number){
    alert ('not correct simbol.try again')
}
*/