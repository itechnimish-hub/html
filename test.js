function myfunction()
{

document.getElementById('heading').innerHTML="Success";

document.getElementById('heading').style.color="red";

let x=document.getElementById('data').value;
// document.getElementById('data1').value=x;
 document.getElementById('data1').type=x;
document.getElementById('heading').innerHTML=x;


let cars=document.getElementById('cars').value;

alert(cars);


}

