function buy()
{  var name,pw;
    var names,pws;
    names=[ "Manar", "Mohammed"];
    pws["773305443", "771176821"];
    name= document.getElementById("un").Value;
    pw=document.getElementById("pw").Value;
    var log=false;
    for( var i=0; i<2; i++)
    {
if(name==names[i]&&pw==pws[i])
log=true;

    }
if(log==true)

window.open("project.html");
else
document.write("<p style='color:blue;'> The passwored is rong</p>");


}
