let numOriginal = document.getElementById('n1')
let sysOriginal = document.getElementById('system1')
let sysDesired = document.getElementById('system2')

let btnConvert = document.getElementById('button')

function reverse(n) {
    if (n.length == 1) return n;
    else {
        let buf = "";
        for (let i=n.length-1; i>=0; i--) {
            buf+=n[i];
        }
        return buf;
    }
}

function convert(a, sys, sys2) {
    let t = 0
    let v =0
    s=''
    if (sys > 16 || sys<2 || sys2>16 || sys2<0) {
        result.style.color = 'red'
        return 'ERROR: INVALID NUMBER SYSTEM'
    }
    else {
        for (let k=(a.length)-1; k>=0; k--) {
            
            t = a[k];
         
             switch(t){
                 case 'A': {t = 10; break}
                 case 'B': {t = 11 ; break}
                 case 'C': {t = 12 ; break}
                 case 'D': {t = 13 ; break}
                 case 'E': {t = 14; break}
                 case 'F': {t = 15 ; break}
               }
        
             let d = t*Math.pow(sys, a.length-1-k)
             v = v + d
             
         } 
 
         v = Number(v)
         while (v > 0 ) {
             b = v % sys2
         
            switch(b){
             case 10: {b ='A'; break}
             case 11: {b ='B'; break}
             case 12: {b ='C'; break}
             case 13: {b ='D'; break}
             case 14: {b ='E'; break}
             case 15: {b ='F'; break}
           }
     
            
           
             s = s + b
             
             v = (v - v % sys2) / sys2
         }
         return reverse(s)
    }
 
    
}


let result = document.getElementById('res')

btnConvert.addEventListener('click', function(){
    
    result.innerText = `RESULT: ` + convert(numOriginal.value, sysOriginal.value, sysDesired.value)
})