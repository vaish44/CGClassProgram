function isPrime(num:number):boolean{
    let isPrime = false;
    if(num==2){
        isPrime=true;
        return isPrime;
    }
    for(let i=0 ;i<num/2 ; i++)

        if(num%i==0){
            isPrime=false;
            break;
        }
    return isPrime;
}