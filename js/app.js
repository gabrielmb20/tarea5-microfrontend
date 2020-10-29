function getAll() {
  fetch('/template/list.html')
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, data);
      document.getElementById('content').innerHTML = rendered;    
   });
}

function checkId(item) {
	return item.id==this
}

function getById(query) {
  fetch('/template/single.html')
    .then((response) => response.text())
    .then((template) => {
	  var params = new URLSearchParams(query);
	  var elem = data.find(checkId,params.get('id'));
      var rendered = Mustache.render(template, elem);
      document.getElementById('content').innerHTML = rendered;    
   });
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