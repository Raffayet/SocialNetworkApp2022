Vue.component("editProfile",{
	data(){
        return{
            friends:null 
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
        		<img id="profile-icon" src="images/profilna.png" width="40px" height="40px" style="marginRight:20px;"/>
        		<button style="backgroundColor:#5dbea3; height: 40px; padding:0 5px; border:#5dbea3; flexDirection:row; borderRadius:10px; marginBottom: 15px; "v-on:click="applyChanges" type="button">Apply Changes</button>
				<button id="logout-button" style="backgroundColor:#FF416C; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px;" v-on:click="cancel" type="button">Cancel</button>
        	</div>
			<div class="container" style="marginTop: -220px; width:1000px; background: transparent; background:rgba(1,1,1,0.75);">
				<form class="editForm">
					<input class="textfield" type="text" placeholder="Username" required />
					<input class="textfield" type="password" placeholder="Old Password" required/>
					<input class="textfield" type="password" placeholder="New Password" required/>
					<input class="textfield" type="password"  placeholder="Confirm Password" name="confirm" required>
					<input class="textfield" type="email" placeholder="Email" required/>
					<input class="textfield" type="text" placeholder="First Name" name="firstName" required>		
					<input class="textfield" type="text"placeholder="Last Name" name="lastname" required>
				</form>
			</div>
			<link rel="stylesheet" href="css/editProfile.css" type="text/css">
			<link rel="stylesheet" href="css/profilePicture.scss" type="text/css">
		</div>
	`
	,
	methods:{
		selectPosts: function(post, user){
			console.log(post.text);
			this.$router.push({name:'post', params:{post:post, user:user}});
		},
		
		applyChanges: function(){
			console.log('da')
		},
		
		cancel: function(){
			this.$router.push('/feed/' + this.$route.params.username);
		},
	}
	,
	mounted(){
			axios.get('rest/feed')
                 .then((res) => {
                     //Perform Success Action
					console.log("Uspesno dobijeni postovi!");
					this.friends = res.data;
					console.log(this.friends);
					//axios.get('rest/user/findByUsername')
                 })
                 .catch((error) => {
                     this.submitError = true;
                 }).finally(() => {
                     //Perform action in always
                 });
                 
            
	}
})