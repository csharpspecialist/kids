
var work = function()
{
	console.log("working dude..no time for play");
};

  //   work();

var doWork = function(f)
{
	alert("Starting Work");
	f();
	alert("ending work!!");
}

doWork(work);