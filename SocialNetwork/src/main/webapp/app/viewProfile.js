Vue.component("viewProfile",{
	data(){
        return{
            friends:null,
            editForm: {
				username:'',
                oldPassword: '',
                newPassword:'',
                confirmPassword:'',
                email:'',
                firstName:'',
                lastName:''
            }, 
            
            password:'',
            profileImg:'',
            
            path: 'images/' + this.$route.params.username + 'Profile.jpg',
            
            validationError: false,
			oldPasswordError: false,
			confirmPasswordError:false,
			oldBeforeNewError:false
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
        		<button id="logout-button" style="backgroundColor:#FF416C; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px;" v-on:click="back" type="button">Back</button>
        	</div>
			<div class="container" style="marginTop: -220px; width:1000px; background: transparent; background:rgba(1,1,1,0.75);">
				<img id='profile-icon' class="profile-icon" src="getPath" width="70px" height="70px" style="marginLeft:45%; marginTop:40px;"/>
			</div>
			<link rel="stylesheet" href="css/viewProfile.scss" type="text/css">
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
		
		getPath: function(){
			return this.path;
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
		
		axios.get('rest/user/' + this.$route.params.username)
            	.then((res) => {
					this.editForm.email = res.data.email
					this.editForm.firstName = res.data.firstName
					this.editForm.lastName = res.data.lastName
					this.password = res.data.password
                 })
                 .catch((error) => {

                 }).finally(() => {
                     //Perform action in always
                 });
	}
})