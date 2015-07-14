var koa = require('koa');
var app = koa();

app.use(function *(){
	console.log(this.request);
	var url = this.request.url;
	if(url === '/'){
		this.body = 'Hello from koajs';
	}
	else if(url === '/date'){
		this.body = new Date();
	}
	else{
		this.status = 404;
		this.body = 'Ooops! Page not found';
	}
});

app.listen(3000);
