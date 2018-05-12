document.addEventListener('DOMContentLoaded', function (){console.log('ntg');
var i=0;
var timer =0;
var backspace=1;
var text="a worm hole can connect two different part of universe but is a hypothetical concept";
var typed=document.querySelector('#type-area');
var result =document.querySelector('#result');
typed.addEventListener('keydown',function(e){
if(!timer)
{
	
	startTimer = new Date();
	timer++;
}
    if(backspace && e.key!='Backspace' )
  	{if(e.key==text[i] )
  	{
		backspace=1;//backspace prevented
        i++;
        if(i==text.length)
        {
        	 endTimer = new Date();
        	 const timeTaken = (endTimer.getTime() - startTimer.getTime()) / 1000;
        	 const speed= text.length/timeTaken;
            result.innerHTML= speed; 
         
 
            console.log(speed);
        }
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
	
	
}

}



	)})