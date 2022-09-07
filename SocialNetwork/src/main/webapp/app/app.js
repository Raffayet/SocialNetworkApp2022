const Welcome = {template: '<welcome></welcome>'}
const Login = {template: '<login></login>'}
const Feed = {template:'<feed></feed>'}
const EditProfile = {template:'<editProfile></editProfile>'}
const ViewProfile = {template:'<viewProfile></viewProfile>'}
const ViewPost = {template:'<viewPost></viewPost>'}



const router = new VueRouter({
	mode:'hash',
	routes:[
		{path:'/', component:Welcome, props:true},
		{path:'/login', component:Login, props:true},
		{path:'/feed/:username', component:Feed},
		{path:'/editProfile/:username', component:EditProfile, props:true},
		{path:'/viewProfile/:username', component:ViewProfile, props:true},
		{path:'/viewPost/:username/:imageId', component:ViewPost, props:true},
	]
});

var app = new Vue({
	router,
	el: '#welcome'
});