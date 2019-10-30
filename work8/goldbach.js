function goldbach(){
    var value = document.getElementById('odd').value
    if(value % 2 !== 0 || value == 2){
        console.log('非大于二的偶数')
        return false
    }

    var goldbach = document.getElementById('goldbach')
        var arr = []
        var a;
    for (var x=2;x<=value;x++ ){
                a = 0
        for(var y=2;y<x;y++){
            if(x%y==0){
                a++
            }
        }
        if(a==0){
            arr.push(x)
        }
    }
    var str = ''
    for (let x=0;x<arr.length/2;x++){
        for (let y=0;y<arr.length;y++){
            if((arr[x]+arr[y])==Number(value )){
                str +='<div>'+value+"可以拆分为两个质数"+arr[x]+"与"+arr[y]+"的和"+'</div>'
            }
        }
    }
    goldbach.innerHTML = str
}