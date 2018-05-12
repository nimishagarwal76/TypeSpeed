document.addEventListener('DOMContentLoaded', function (){
var i=0;
var timer=0;
var backspace=1;
var text="nimish the great is making type speed";
var typed=document.querySelector('#type-area');
typed.addEventListener('keydown',function(e){
	if(!timer)
	{const timeinit =Date.now();
timer++;
console.log(timeinit);
	}
	
if(i!=text.length)
   { if(backspace && e.key!='Backspace' )
  	{if(e.key==text[i] )
  	{
		backspace=1;//backspace prevented
        i++;
	}
    else
    {
    	backspace=0;
    }
    }
   else
   {
	if(e.key=='Backspace' && backspace==0)
	{
		backspace=1;
		
	}
	else 
	{
		e.preventDefault();
	}
	
	
}}
else{

	var timefinal=Date.now();
	console.log(timefinal);
}

}




	
	 



	)})


// var d =  Date.now();
// console.log(d);