var img = document.getElementById('anhminh').src
var img1 = document.getElementById('anhhung').src
var img2 = document.getElementById('anhduc').src
var img3 = document.getElementById('anhphuoc').src
var minh= {
    name: 'Minh',
    age: 19,
    image: img,
    class: 'KTPM 43'
  }
var hung={
    name:'Hung',
    age:19,
    image: img1,
    class:'CNTT 43'
}
var duc={
    name:'Duc',
    age:19,
    image: img2,
    class:'CNTT 43'
}
var phuoc={
    name:'Phuoc',
    age:19,
    image: img3,
    class:'CNTT 43'
}
var arr=[minh,hung,duc,phuoc]
let data ='';
//for
for (let index = 0; index < arr.length; index++) {
    data += '<div class="col-3">'
        +'<div class="card">'
        +'<div class="card-header">'+arr[index].name+'</div>'
        +'<div class="card-body">'

        +' <img class="my-img"src='+arr[index].image+' alt="img">'
        +' <h5 class="card-title">Age:'+arr[index].age+'</h5>'
        +' <p class="card-text">Class:'+arr[index].class+'</p>'
        +' <a href="#" class="btn btn-primary" onclick="Show('+index+')">See Profile</a>'
        +'</div>'
        +'</div>'
        +'</div>'
}
function Show(index)
{   
    bootbox.alert(  "Name:"+arr[index].name
                    +"<br>Age:" +arr[index].age
                    +"<br>Class: "+arr[index].class
    )

}
document.getElementById('data').innerHTML =data