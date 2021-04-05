function Good()
{
    var good= document.getElementById('good').checked
    var fast=document.getElementById('fast').checked

    if(good&&fast)
    {
        document.getElementById('cheap').checked=false
    }
}
function Cheap()
{
    var good= document.getElementById('good').checked

    var cheap=document.getElementById('cheap').checked
    if(cheap&&good)
    {
        document.getElementById('fast').checked=false
    }
}
function Fast()
{

    var fast=document.getElementById('fast').checked
    var cheap=document.getElementById('cheap').checked
    if(fast&&cheap)
    {
        document.getElementById('good').checked=false
    }
}



