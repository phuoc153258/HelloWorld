let product =['Samsung j2','Iphone 10','Iphone 6'];
let count;
function ShowData()
{
    for (let index = 0; index < product.length; index++) {
        document.getElementById("tableProduct").innerHTML += "<tr>"
                                                        +   "<td>"+product[index]+"</td>"
                                                        +   "<td><button>Edit</button></td>"
                                                        +   "<td><button>Delete</button></td>"
                                                        +   "<td></td>"
                                                        +   "</tr>"
    }
}
function Count()
{
   document.getElementById("countt").innerHTML+= count=product.length
}
ShowData();
Count();