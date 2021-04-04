var vietNam={
    name:"VND",
    value:1
}
var USA=
{
    name:"USD",
    value: 22000
}
var japan=
{
    name:"JPY",
    value:207.82
}
var arr=[vietNam,USA,japan]
function Show()
{
    let dataFrom='';
    let dataTo='';
    for (let index = 0; index < arr.length; index++) {
        dataFrom+='<option value="'+arr[index].name+'">'+arr[index].name+'</option>'
    }
    for (let index = 0; index < arr.length; index++) {
        dataTo+='<option value="'+arr[index].name+'">'+arr[index].name+'</option>'
    }
    document.getElementById('From').innerHTML=dataFrom
    document.getElementById('To').innerHTML=dataTo
}

function Convert()
{
    var from=document.getElementById('From').value
    var money=document.getElementById('amount').value
    var to=document.getElementById('To').value
    var moneyfrom
    var moneyto
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].name==from)
        {
            moneyfrom=arr[index].value
        }
    }
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].name==to)
        {
            moneyto=arr[index].value
        }
    }
    var moneyrs=(money*moneyfrom)/moneyto
    document.getElementById('result').innerHTML='Result:'+moneyrs
}
Show()


