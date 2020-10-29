function getAll() {
  var template = document.getElementById('list').text;
  var text = Mustache.render(template, data);
  document.getElementById('content').innerHTML = text;
}

function checkId(item) {
	return item.id==this
}

function getById(query) {
	var params = new URLSearchParams(query);
	var elem = data.find(checkId,params.get('id'));
	var template = document.getElementById('single').text;
	var text = Mustache.render(template, elem);
	document.getElementById('content').innerHTML = text;
}

function init() {
	router = new Navigo(null, false, '#!');
	router.on({
	  '/get': function(_,query) {
		 getById(query);
	  }
	});
	router.on(() => getAll());
	router.resolve();
}