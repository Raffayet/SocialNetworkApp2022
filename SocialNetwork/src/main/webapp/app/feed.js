
Vue.component("feed",{
	data(){
        return{
            friends:null 
        }
    },
	template:
	`	
		<div class="container">
			<p>Dobro dosli</p>
			<button style="backgroundColor:#FF416C; borderRadius:10px; marginTop:650px; marginLeft:590px;" v-on:click="logOut" type="button">Log Out</button>
		</div>
	`
	,
	methods:{
		selectPosts: function(post, user){
			console.log(post.text);
			this.$router.push({name:'post', params:{post:post, user:user}});
		},
		
		logOut: function(){
			axios.post('rest/login/logout')
				.then((res) => {
						this.$router.push('/login');
	                 })
	                 .catch((error) => {
						console.log(error)
	                 }).finally(() => {
	                    
	                 });
		}
	}
	,
	mounted(){
			axios.get('rest/feed')
                 .then((res) => {
                     //Perform Success Action
					console.log("Uspesno dobijeni postovi!");
					this.friends = res.data;
					console.log(this.friends);
                 })
                 .catch((error) => {
                     this.submitError = true;
                 }).finally(() => {
                     //Perform action in always
                 });
	}
})