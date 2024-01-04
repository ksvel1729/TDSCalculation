let a=`Enter table details`
let b=a.split('\n')
let c=""
let z
let flag=true
let total=0
let sourceAccountNo="enterAccountnumber"
b.forEach((a)=>{
    if (!flag)return
    if (a.indexOf('ACCOUNT')>-1||a.indexOf('AMOUNT')>-1) return
    if (a.indexOf('TOTAL')>-1) {z=a; flag=false; return}
    total+=Number(a.split('\t')[3])
    c+="1~"+a.split('\t')[2]+"~1~"+a.split('\t')[3]+"~WAGES\n"
    
})
c+="109~"+sourceAccountNo+"~2~"+z.split('\t')[3]+"~WAGES"
console.assert(total==z.split('\t')[3])

// excel to salary
let b=a.split('\n')
let c=""
let z
let total=0
let flag=true
let sourceAccountNo="enterAccountnumber"
b.forEach((a)=>{
    if (!flag)return
    if (a.indexOf('ACCOUNT')>-1&&a.indexOf('AMOUNT')>-1) return
    if (a.indexOf('TOTAL')>-1) {z=a; flag=false; return}
    sal=a.split('\t')[3].replace(',','')
    if (sal.trim()=='-') sal=0 
    total+=Number(sal)
    c+="1~"+a.split('\t')[2]+"~1~"+Math.trunc(sal)+"~WAGES\n"
    
})
salF=z.split('\t')[3].replaceAll(',','')
c+="109~"+sourceAccountNo+"~2~"+Math.trunc(Number(salF))+"~WAGES"

console.log(total)
console.log(Number(z.split('\t')[3].replaceAll(',','')))
console.assert(total==Number(z.split('\t')[3].replaceAll(',','')))
