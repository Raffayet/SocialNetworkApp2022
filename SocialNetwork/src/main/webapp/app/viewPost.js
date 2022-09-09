Vue.component("viewPost",{
	data(){
        return{
			imagePath: "./images/" + this.$route.params.imageId,
			description: '',
			comments:''
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
        		<button id="logout-button" style="backgroundColor:blue; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" v-on:click="back" type="button">Back</button>
        		<button id="logout-button" style="backgroundColor:#FF416C; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" v-on:click="deletePost" type="button">Delete Post</button>
        	</div>
			<div class="container" style="marginTop: -220px; width:1000px; background: transparent; background:rgba(1,1,1,0.75); display:grid;">
				<img class='single-post' :src="this.imagePath"/>
				<div class='description'>
					{{this.description}}
				</div>
				<div class='comments-container' v-for="comment in this.comments">
					<div class='comment'>
						<span>
							{{comment.publisher}} ({{comment.date}})
						</span>
						<h4>{{comment.text}}</h4>
						<hr/>
					</div>
				</div>
			</div>
			<link rel="stylesheet" href="css/viewPost.css" type="text/css">
		</div>
	`
	,
	methods:{
		selectPosts: function(post, user){
			console.log(post.text);
			this.$router.push({name:'post', params:{post:post, user:user}});
		},
		
		back: function(){
			this.$root.$router.push('/viewProfile/' + this.$route.params.username)
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
		
			
	},
	mounted(){
		
	},
	
	created(){
		axios.get('rest/user/post/' + this.$route.params.username + '/' + this.$route.params.imageId)
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