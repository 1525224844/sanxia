$("#turn_left").bind("mouseover",function(){
    $(this).animate({"left":"-9px"},400);
})

$("#turn_left").bind("mouseout",function(){
    $(this).animate({"left":"0px"},400);
})

$("#turn_right").bind("mouseover",function(){
    $(this).animate({"left":"494px"},400);
})

$("#turn_right").bind("mouseout",function(){
    $(this).animate({"left":"485px"},400);
})


var autorun = window.setInterval(right,5000);
var count = 1;

$("#turn_right").bind("click",right);
$("#turn_left").bind("click",left);

function right(){
    clearInterval(autorun);
    if(count==5)
    {
	count = 0;
    }
    var left = count*(-460)+"px";
    var now = count+1;
    $("#album_show").animate({"left":left},800);
    count++;
    autorun = window.setInterval(right,5000);
}

function left(){
    clearInterval(autorun);
    if(count==1)
    {
	count = 5;
    }
    var left = (count-2)*(-460)+"px";
    var now = count-1;
    $("#album_show").animate({"left":left},800);
    count--;
    autorun = window.setInterval(right,5000);
}
