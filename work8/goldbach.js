function goldbach(){
    var odd = 0 ;
    for(var i=1;i<=odd;i++){
        if(odd % 1 == 0){
            odd++
        }
    }
    if(odd==2){
        return true
    }else{
        return false
    }
}

function isTrue(odd){
    for(var i=2;i<odd-2;i++){
        var j = odd-i;
        if(ifZhishu(i)&&ifZhishu(j)){
            console.log(odd+"可以拆分为两个质数"+i+"与"+j+"的和")
        }
    }
}