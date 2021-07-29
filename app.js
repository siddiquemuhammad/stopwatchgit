var inpmin,inpsec;

mainSec();
mainMin();
min=inpmin;
sec=inpsec;

var strt = false
var ms=100;
ms=ms.toFixed(2);
//var sec=0;
//sec = ('0' + sec).slice(-2);
//var min=0;
var mytime ;
var dispms = document.getElementById("milisec");
//console.log(dispms.innerHTML)
var dispsec= document.getElementById("sec");
var dispmin= document.getElementById("min");

start();

function mainSec()
{
    inpsec = prompt("enter seconds for timer, less than 60 and Greater than 0");
    if(inpsec>=60 || inpsec <=0)
    {   
     mainSec();
    }
}

function mainMin ()
{
     inpmin = prompt("enter minutes for times , less than 60 only and Greater than 0");
    {
        if(inpmin>=60 || inpmin<=0)
        {
            
            mainMin();
        }
    }

}

function timerfunc ()
{
    console.log("timer started");
    ms--
    if(ms==0)
    {sec--
        ms=110;
    }
    if(sec==0)
    {min--
    sec=59;}
     if(min==-1)
     {ms=0; sec=0;min=0;
   // Reset();
    }
     
    
    dispms.innerHTML=('0' + ms).slice(-2);
    dispsec.innerHTML=('0' + sec).slice(-2);
    dispmin.innerHTML=('0' + min).slice(-2);
}

function start()
{
    if(strt==false)
    {

        mytime=setInterval(timerfunc,10);
        strt=true;
    }
    
}
function Pause()
{
    strt=false;
    clearInterval(mytime);
}
function Reset()
{
    strt=false;
    ms=0;
    sec=0;
    min=0;
    dispms.innerHTML=('0' + ms).slice(-2);
    dispsec.innerHTML=('0' + sec).slice(-2);
    dispmin.innerHTML=('0' + min).slice(-2);
    Pause();
    // mainSec();
    // mainMin();
    // start();
    
}