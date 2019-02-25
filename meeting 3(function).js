//start1
function hello()
{
  console.log("helloworld")
}

hello()
hello()
//end1

//start2
function printaisbigger()
{
  console.log("a bigger")
}
function printbisbigger()
{
  console.log("b bigger")
}

var a = parseInt(prompt("enter num" , 0))
var b = parseInt(prompt("enter num" , 0))
if(a>b)
  {
    printaisbigger()
  } 
  else
    {
       printbisbigger()
    }
   
//end2

//start3
function avg(x , y , z)
{
  var sum = x + y + z 
  console.log(sum/3)
}
var x1 = parseInt(prompt("enter num" , 0))
var y1 = parseInt(prompt("enter num" , 0))
var z1 = parseInt(prompt("enter num" , 0))
avg(x1,y1,z1)
//end3

//start4
function flip(x)
{
  if( x<0 )
    {
      var a = -1 * x
      return a
    }
  else
    {
      var b = -1 * x
      return b
    }
}
console.log( flip(5) )
console.log( flip(-8))
//end4
