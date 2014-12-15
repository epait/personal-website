var message="All content ©Eric Pait. Please contact eric@ericpait.com for usage information.";
if (navigator.appName == 'Microsoft Internet Explorer'){
function NOclickIE(e) {
if (event.button == 2 || event.button == 3) {
alert(message);
return false;
}
return true;
}
document.onmousedown=NOclickIE;
document.onmouseup=NOclickIE;
window.onmousedown=NOclickIE;
window.onmouseup=NOclickIE;
}
else {
function NOclickNN(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}}}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=NOclickNN; }
document.oncontextmenu=new Function("alert(message);return false")
}

function slide(navigation_id, pad_out, pad_in, time, multiplier)  
{  
    // creates the target paths  
    var list_elements = navigation_id + " li.sliding-element";  
    var link_elements = list_elements + " a";  
  
    // initiates the timer used for the sliding animation  
    var timer = 0;  
  
    // creates the slide animation for all list elements  
    $(list_elements).each(function(i)  
    {  
        // margin left = - ([width of element] + [total vertical padding of element])  
        $(this).css("margin-left","-180px");  
        // updates timer  
        timer = (timer*multiplier + time);  
        $(this).animate({ marginLeft: "0" }, timer);  
        $(this).animate({ marginLeft: "15px" }, timer);  
        $(this).animate({ marginLeft: "0" }, timer);  
    });  
  
    // creates the hover-slide effect for all link elements  
    $(link_elements).each(function(i)  
    {  
        $(this).hover(  
        function()  
        {  
            $(this).animate({ paddingLeft: pad_out }, 150);  
        },  
        function()  
        {  
            $(this).animate({ paddingLeft: pad_in }, 150);  
        });  
    });  
}  