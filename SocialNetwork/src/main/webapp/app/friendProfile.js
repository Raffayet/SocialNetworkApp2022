Vue.component("friendProfile",{
	data(){
        return{

            profileImg:'',
            
            path: './images/' + this.$route.params.friendUsername + 'Profile.jpg',
            loadedImages: [],
            friend:'',
            "friendRemoval":true,
            "mutualFriends":[]
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
        		<button id="logout-button" style="backgroundColor:#FF416C; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" v-on:click="back" type="button">Back</button>
        	</div>
			<div class="container" style="marginTop: -220px; width:1000px; background: transparent; background:rgba(1,1,1,0.75);">
				<img id='profile-icon' class="profile-icon" width="70px" height="70px" style="marginLeft:45%; marginTop:40px;"/>
				<h3 style="color:white; marginLeft:46%;">{{this.friend.username}}</h3>
				<h4 style="color:white; marginLeft:42%;">{{this.friend.firstName}} {{this.friend.lastName}}</h4>
				<h4 style="color:white; marginLeft:42%; marginBottom:30px;">{{this.friend.birthDate}}</h4>
				<h4 style="color:white; marginLeft:39%; marginBottom:30px;">Mutual Friends</h4>
				
				<div class='mutual-friends-section'>
					<div class='mutual-friend-row' v-for="mutualFriend in this.mutualFriends">
						<img :src="mutualFriend.profileImg.path" width="45px" height="45px" style="marginRight:10px;"/>
					    {{mutualFriend.firstName}} {{mutualFriend.lastName}} (@{{mutualFriend.username}})
					</div>
				</div>
				
				<div class="my-images" v-for="loadedImage in this.loadedImages">
					<img class='single-image' :src="loadedImage.path" width="180px" height="180px" @click="viewPost(loadedImage.path)"/>
				</div>
				<button v-if="friendRemoval" class='remove-friend-button' style="marginBottom:30px;" @click="addRemoveFriend">Remove Friend</button>
				<button v-if="!friendRemoval" class='add-friend-button' style="marginBottom:30px;" @click="addRemoveFriend">Add Friend</button>
			</div>
			<link rel="stylesheet" href="css/friendProfile.css" type="text/css">
		</div>
	`
	,
	methods:{
		selectPosts: function(post, user){
			console.log(post.text);
			this.$router.push({name:'post', params:{post:post, user:user}});
		},
		
		back: function(){
			this.$root.$router.push('/friendsPage/' + this.$route.params.username)
		},
		
		viewPost: function(imagePath){
			const imagePathParts = imagePath.split('/')
			this.$router.push('/viewPost/' + this.$route.params.username + '/' + imagePathParts[2]); //odnosi se na sufiks putanje
		},
		
		addRemoveFriend: function(){
			if(this.friendRemoval)
			{
				axios.delete('rest/user/remove-friend/' + this.$route.params.username + '/' + this.$route.params.friendUsername)
            	.then((res) => {

                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
			}
			
			else
			{
				axios.post('rest/user/make-friend-request/' + this.$route.params.username + '/' + this.$route.params.friendUsername)
            	.then((res) => {

                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
			}
			
			this.friendRemoval = !this.friendRemoval;
		}
	}
	,
	mounted(){
			document.getElementById('profile-icon').src=this.path;
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
                 
            
	},
	
	created(){
		axios.get('rest/user/' + this.$route.params.friendUsername)
            	.then((res) => {
					this.friend = res.data;
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
		
		axios.get('rest/user/images/' + this.$route.params.friendUsername)
            	.then((res) => {
					this.loadedImages = res.data;
					console.log(this.loadedImages[0])
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
                 
        axios.get('rest/user/mutual-friends/' + this.$route.params.username + '/' + this.$route.params.friendUsername)
            	.then((res) => {
					this.mutualFriends = res.data;
					console.log(this.mutualFriends)
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
              
	}
})