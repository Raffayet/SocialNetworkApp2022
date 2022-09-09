Vue.component("friendsPage",{
	data(){
        return{
            friends:'',
            friendRequests:'',
            accept:"accept",
            reject:"reject"
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
				<div class='friends-section'>
					<h2>Friends</h2>
					<div class='friend-row' v-for="friend in this.friends">
						<img :src="friend.profileImg.path" width="45px" height="45px" style="marginRight:10px;"/>
					    {{friend.firstName}} {{friend.lastName}} (@{{friend.username}})
						<button id="logout-button" style="backgroundColor:blue; border:blue; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" @click="friendProfile(friend.username)" type="button">View</button>
						<button id="logout-button" style="backgroundColor:#4682B4; border:green; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" type="button">Message</button>
					</div>
				</div>
				<div class='requests-section'>
					<h2>Friend Requests</h2>
					<div class='friend-req-row' v-for="friendReq in this.friendRequests">
						<img :src="friendReq .profileImg.path" width="45px" height="45px" style="marginRight:10px;"/>
					    {{friendReq.firstName}} {{friendReq.lastName}} (@{{friendReq.username}})
						<button id="accept" style="backgroundColor:green; border:green; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" @click="changeRequestStatus($event, friendReq.username)" type="button">Accept</button>
						<button id="reject" style="backgroundColor:red; border:red; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" @click="changeRequestStatus($event, friendReq.username)" type="button">Reject</button>
					</div>
				</div>
				<div class='dm-section'>
					<h2>Direct Messages</h2>
				</div>
			</div>
			<link rel="stylesheet" href="css/friendsPage.css" type="text/css">
		</div>
	`
	,
	methods:{
		selectPosts: function(post, user){
			console.log(post.text);
			this.$router.push({name:'post', params:{post:post, user:user}});
		},
		
		back: function(){
			this.$root.$router.push('/feed/' + this.$route.params.username)
		},
		
		viewPost: function(imagePath){
			const imagePathParts = imagePath.split('/')
			this.$router.push('/viewPost/' + this.$route.params.username + '/' + imagePathParts[2]); //odnosi se na sufiks putanje
		},
		
		changeRequestStatus: function(event, sender){
			console.log(event.target.id);
			axios.post('rest/user/change-request-status/' + this.$route.params.username + '/' + sender + '/' + event.target.id)
				.then((res) => {
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
		},
		
		friendProfile: function(friendUsername){
			this.$root.$router.push('/friendProfile/' + this.$route.params.username + '/' + friendUsername)
		}
	}
	,
	mounted(){
   
	},
	
	created(){
		
		axios.get('rest/user/friends/' + this.$route.params.username)
            	.then((res) => {
					this.friends = res.data;
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
                
        axios.get('rest/user/friend-requests/' + this.$route.params.username)
            	.then((res) => {
					this.friendRequests = res.data;
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });   
	}
})