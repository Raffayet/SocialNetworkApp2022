Vue.component("addPost",{
	data(){
        return{
			picture:'',
			text:''
            
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
    				<button id="logout-button" style="backgroundColor:#FF416C; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px; cursor:pointer;" v-on:click="back" type="button">Back</button>
    				<link rel="stylesheet" href="css/feed.css" type="text/css">
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	    			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        		</div>
        	</div>
			<div class="container" style="marginTop: -220px; width:1000px; background: transparent; background:rgba(1,1,1,0.75);">
				<form class="editForm" v-on:submit.prevent="createPost">
					<img id="blah" alt="your image" width="100" height="100" />
					<input class="inputFile" v-model="this.picture" type="file" onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])">
					<label style="color:white; fontSize:28px; marginTop:80px;">Post Description</label>
					<textarea v-model="this.text" style="marginTop:30px; width:300px; height:150px; opacity:0.8; borderRadius:10px;"></textarea>
					<button style="backgroundColor:green; height: 50px; padding:0 5px; border:#5dbea3; marginTop:50px; flexDirection:row; borderRadius:10px; marginBottom: 15px; cursor:pointer;" v-on:click="createPost" type="submit">Create Post</button>
				</form>
			</div>
			<link rel="stylesheet" href="css/editProfile.css" type="text/css">
			<link rel="stylesheet" href="css/profilePicture.scss" type="text/css">
		</div>
	`
	,
	methods:{
		
		back: function(){
			this.$router.push('/viewProfile/' + this.$route.params.username);
		},
		
		createPost: function(){
			
			var postBody =
			{
				"picturePath": document.getElementById('blah').src,
				"text": this.text
			}
			
			axios.post('rest/user/add-post/' + this.$route.params.username, postBody)	
					.then((res) => {
           				console.log(res)
						this.$router.push('/viewProfile/' + this.$route.params.username);
	                 })
	                 .catch((error) => {
	                 }).finally(() => {
	                    
	                 });
		}
	}
	,
	mounted(){
			
                 
            
	},
	
	created(){
		
		
	}
})