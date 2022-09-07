Vue.component("feed",{
	data(){
        return{
            friends:null,
            loggedUser: '' 
        }
    },
	template:
	`
		<div class='root'>
			<div style="display:flex;">
				<div class="d-flex justify-content-center h-100">
    				<div class="searchbar">
      					<input class="search_input" type="text" name="" placeholder="Search...">
      					<a href="#" class="search_icon"><i class="fas fa-search"></i></a>
    				</div>
    				<link rel="stylesheet" href="css/feed.css" type="text/css">
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	    			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        		</div>
        		<img id="profile-icon" v-on:click="viewProfile" src="images/profilna.png" width="40px" height="40px" style="marginRight:20px; cursor:pointer;"/>
        		<button style="backgroundColor:#5dbea3; height: 40px; padding:0 5px; border:#5dbea3; flexDirection:row; borderRadius:10px; marginBottom: 15px; cursor:pointer;"v-on:click="editProfile" type="button">Edit Profile</button>
				<button id="logout-button" style="backgroundColor:#FF416C; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" v-on:click="logOut" type="button">Log Out</button>
        	</div>
			<div class="container" style="marginTop: -220px; width:1000px; background: transparent; background:rgba(1,1,1,0.75);">
				<p style="color:white; fontSize:20px;">Dobro dosli</p>
			</div>
		</div>
	`
	,
	methods:{
		
		created: function () {
		this.loggedUser = this.$route.params.username;
		
		},
		
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
		},
		
		editProfile: function(){
			console.log(this.$route.params.username);
			this.$router.push('/editProfile/' + this.$route.params.username);
		},
		
		viewProfile: function(){
			this.$router.push('/viewProfile/' + this.$route.params.username);
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
			},
			
	created(){
		
		axios.get('rest/user/' + this.$route.params.username)
            	.then((res) => {
					console.log(res.data)
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
	}		
			
})