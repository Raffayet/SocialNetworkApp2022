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
			<br/>
    		<br/>
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
        		<button style="backgroundColor:blue; height: 40px; padding:0 5px; border:#5dbea3; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft: 10px; cursor:pointer;"v-on:click="friendsPage" type="button">Friends</button>
				<button id="logout-button" style="backgroundColor:#FF416C; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:10px; cursor:pointer;" v-on:click="logOut" type="button">Log Out</button>
        	</div>
			<div class="container" style="marginTop: -220px; width:1000px; background: transparent; background:rgba(1,1,1,0.75);">
				<div class='friend-row' v-for="friend in this.friends">
				   <div class='friend-row' v-for="post in friend.posts">
				   		<br/>
				  		<span style="color:white;">
				  			<img :src="friend.profileImg.path"  width="50px" height="50px" style="marginLeft:50px;border-radius:10px;"/>
				  			{{friend.firstName}} {{friend.lastName}} (@{{friend.username}})
				  		</span>
				   <br>
				   	<img :src="post.picture.path"  width="900px" height="500px" style="marginLeft:50px;border-radius:10px;"/>
				   	<br><br>
			     	 <div align="center" style="color:white">
				   {{post.text}}
				   <br><br>
				   <input placeholder="ostavite vas komentar" v-model="commentText" style="border-radius:10px; width:800px"/>  <br><br> 
				   
				   <button  style="border-radius:10px;"  v-on:click="addComment(friend.username,post.picture.path)">add comment</button>
				   <br><br>
				     <div class='friend-row' v-for="comment in post.comments" >
				     	<div class='comment'>
				     	        @{{comment.publisher}}: {{comment.text}}
				     			
				     			</div>
				     </div>
				   </div>
				   
					<br>		
					
					</div>
				</div>
				</div>
			<link rel="stylesheet" href="css/viewPost.css" type="text/css">
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
		},
		
		friendsPage: function(){
			this.$router.push('/friendsPage/' + this.$route.params.username);
		},
		
		deletePost: function(){
			axios.delete('rest/user/delete-post/' + this.$route.params.username + '/' + this.$route.params.imageId)
            	.then((res) => {
					this.$root.$router.push('/viewProfile/' + this.$route.params.username)
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
		}
		
		,
		addComment:function(publisher,imagepath){
		const imagePathParts = imagepath.split('/')
		axios.post('rest/user/posts/add-comment/' + this.$route.params.username + '/' + publisher +'/'+ this.commentText +'/'+ imagePathParts[2])
            	.then((res) => {
					
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
		
		
		}
		,
		postovi :function(){
	axios.post('user/posts')
				.then((res) => {
						this.$router.push('/user/posts');
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
			},
			
	created(){
		console.log(this.$route.params.imageId)
		axios.get('rest/user/' + this.$route.params.username)
            	.then((res) => {
					console.log(res.data)
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
                 
                axios.get('rest/user/friends/' + this.$route.params.username)
            	.then((res) => {
					this.friends = res.data;
					console.log(this.friends)
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
                 
                 axios.get('rest/user/post/' + this.$route.params.username + '/pera.jpg' )
            	.then((res) => {
					this.description = res.data.text;
					this.comments = res.data.comments;
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
	}			
			
})
