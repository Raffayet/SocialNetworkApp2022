
Vue.component("homePage",{
	data(){
        return{
            friends:null 
        }
    },
	template:
	`	<div>
			<navbar> </navbar>
			
			<div class="d-flex align-items-center justify-content-center">
				<table border='1'>
					<tr v-for="friend in friends">
						<td>
							<div v-for="post in friend.posts" v-on:click="selectPosts(post, friend)" class="card" style="width: 18rem;">
							  <img v-bind:src="post.picture" class="card-img-top" alt="...">
							  <div class="card-body">
							    <h5 class="card-title">{{friend.name}} {{friend.lastname}}</h5>
							    <p class="card-text">{{post.text}}</p>
							    <a href="#" class="btn btn-primary">Go somewhere</a>
							  </div>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
	`
	,
	methods:{
		selectPosts: function(post, user){
			console.log(post.text);
			//this.$router.push({name:'post', params:{post:post, user:user}});
		}
	}
	,
	mounted(){
			axios.get('rest/homePage')
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