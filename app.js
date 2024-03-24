var too = 5;
var toonuud = [5,6,3,100];
console.log(toonuud);
console.log(toonuud[0]);
var test = ["text",20,true,null];
console.log(test);
console.log(test[0]);
console.log(test[test.length-1]);
var fruits = ["apple","banana","orange","mango","green", "apple"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[test.length-1]);
var numbers = [1,6,3,4,5];
console.log(numbers);

for(var i=0;i<=numbers.length-1;i++){
	console.log(numbers[i]);
}
var num = [100,111,112,113,114,115,116];
console.log(num[0]*num[num.length-1]);

var niilber=0;
var urjver=1;
for(var i=0; i<=num.length-1;i++){
	niilber = niilber + num[i];
	urjver = urjver + num[i];
}
console.log("Niilber:"+niilber);
console.log("Urjver:"+niilber);
for (var i=0; i<=num.length-1;i++){
	if(num[i]%2==0){
		console.log("tegsh:"+num[i]);
	}else{
		console.log("sondgoi:"+num[i]);
	}
}
var colors = ["black","grey","white"];
var body = document.getElementsByTagName('body')[0]; 
var btn = document.getElementsByTagName('button')[1]; 
var i=-1;
function changeColor(){
	i++;
	if(i>colors.length-1){
		i=0
	}
	body.style.backgroundColor = colors[i];
	btn.innerText = colors[i];
}
function backColor(){
	i--;
	if(i<0){
		i=colors.length-1;
	}
	body.style.backgroundColor = colors[i];
}
var up;
function auto(){
	i++;
	if(i>colors.length-1){
		i=0
	}
	body.style.backgroundColor = colors[i];
	 up = setTimeout(auto,1000);
}
function stop(){
	clearTimeout(up);
}