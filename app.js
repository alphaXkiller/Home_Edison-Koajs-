var koa = require('koa');
var app = koa();
var router = require('koa-router')();


var requestTime = function(headerName){
	return function *(next){
		var start = new Date();
		yield next;
		var end = new Date();
		var ms = end - start;
		this.set(headerName, ms + 'ms');
	}
}

app.use(requestTime('Response-time'));

router.get('/', function	*(){
	this.body = "Hello from koajs, guys";
});

router.get('/date', function *(){
	this.body = new Date();
})

app
	.use(router.routes())
	.use(router.allowedMethods());
	
app.listen(3000);
