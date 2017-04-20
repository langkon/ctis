events=[
{name: "Искра", 
id:235
},
{name: "Король говорит",
id:229
},
{name: "Красное на черном",
id:212
},
]

for (var i=0; i<events.length; i++)
{show(events[i]);}

function show(game) {
	var gameList=jQuery("#games");
	var gameLink="<li><a href=\""+game.id+"\">"+game.name+"</a></li>";
gameList.append(gameLink);}
