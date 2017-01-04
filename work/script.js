
var work = function()
{
	alert("working dude..no time for play");
};

  //   work();

var doWork = function(f)
{
	alert("Starting Work");
	f();
	alert("ending work!!");
}

doWork(work);