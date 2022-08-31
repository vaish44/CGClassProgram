function isPrime(x:number):boolean {

    for(let i=2;i<x;i++)
    {
    if(x%i==0)return false
    else
    continue
    }

return true
}
console.log(isPrime(5))