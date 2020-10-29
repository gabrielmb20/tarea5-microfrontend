function getAll() {
  console.log('ok3')
  var template = document.getElementById('list').text;
  console.log(template);
  var text = Mustache.render(template, data);
  console.log(text);
  document.getElementById('content').innerHTML = text;
  console.log('ok4')
}

function checkId(item) {
	return item.id==this
}

function getById(query) {
	console.log('ok5')
	var params = new URLSearchParams(query);
	var elem = data.find(checkId,params.get('id'));
	var template = document.getElementById('single').text;
	var text = Mustache.render(template, elem);
	document.getElementById('content').innerHTML = text;
	console.log('ok6')
}

function init() {
	console.log('ok1')
	router = new Navigo(null, false, '#!');
	console.log('ok2')
	router.on({
	  '/get': function(_,query) {
		 getById(query);
	  }
	});
	router.on(() => getAll());
	router.resolve();
}