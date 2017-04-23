'use strict';

jQuery.get('events.json', show_events);

function show_events(response) {
  var events = JSON.parse(response.data);
  for (var i = 0; i < events.length; i++) {
    show(events[i]);
  }
}

function show(game) {
	var gameList = jQuery("#games");
	var gameLink = "<li><a href=\"" + game.id + "\">" + game.name + "</a></li>";
  gameList.append(gameLink);
}
