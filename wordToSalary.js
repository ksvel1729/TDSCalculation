let a=`Enter table details`
let b=a.split('\n')
let c=""
let z
let flag=true
let sourceAccountNo="enterAccountnumber"
b.forEach((a,i)=>{
    if (!flag)return
    if (a.indexOf('ACCOUNT')>-1&&a.indexOf('AMOUNT')>-1) return
    if (a.indexOf('TOTAL')>-1) {z=a; flag=false; return}
    c+="1~"+a.split('\t')[2]+"~1~"+a.split('\t')[3]+"~WAGES\n"
    
})
c+="109~"+sourceAccountNo+"~2~"+z.split('\t')[3]+"~WAGES"

