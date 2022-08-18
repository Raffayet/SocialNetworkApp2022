const Login = {template: '<login></login>'}
const Feed = {template:'<homePage></homePage>'}


const router = new VueRouter({
	mode:'hash',
	routes:[
		{path:'/', component:Login},
		{path:'/login', component:Login},
		{path:'/homePage', component:Feed},
	]
});

var app = new Vue({
	router,
	el: '#login'
});