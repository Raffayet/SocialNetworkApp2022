const SearchPage = {template:'<searchPage></searchPage>'}
const Welcome = {template: '<welcome></welcome>'}
const Login = {template: '<login></login>'}
const Registration = {template:'<registration></registration>'}
const Feed = {template:'<feed></feed>'}
const Navbar = {template:'<navbar></navbar>'}
const Post = {template:'<post></post>'}
const Posts = {template:'<posts></posts>'}

const router = new VueRouter({
	mode:'hash',
	routes:[
		{path:'/', component:Welcome},
		{path:'/login', component:Login},
		{path:'/registration', component:Registration},
		{path:'/posts', component:Posts},
		{path:'/navbar', component: Navbar},
		{path:'/feed', component:Feed},
		{path:'/searchPage/:text', component: SearchPage},
		{path:'/post',name:'post', component: Post, props:true},
	]
});

var app = new Vue({
	router,
	el: '#welcome'
});