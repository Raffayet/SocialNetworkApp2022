const SearchPage = {template:'<searchPage></searchPage>'}
const Welcome = {template: '<welcome></welcome>'}
const Login = {template: '<login></login>'}
const Registration = {template:'<registration></registration>'}
const Feed = {template:'<feed></feed>'}
const Navbar = {template:'<navbar></navbar>'}
const Post = {template:'<post></post>'}
const EditProfile = {template:'<editProfile></editProfile>'}



const router = new VueRouter({
	mode:'hash',
	routes:[
		{path:'/', component:Welcome, props:true},
		{path:'/login', component:Login, props:true},
		{path:'/registration', component:Registration},
		{path:'/navbar', component: Navbar},
		{path:'/feed/:username', component:Feed},
		{path:'/searchPage/:text', component: SearchPage},
		{path:'/post',name:'post', component: Post, props:true},
		{path:'/editProfile/:username', component:EditProfile, props:true},
	]
});

var app = new Vue({
	router,
	el: '#welcome'
});