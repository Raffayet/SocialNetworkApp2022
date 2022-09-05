Vue.component("editProfile",{
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
        		<img id="profile-icon" src="images/profilna.png" width="40px" height="40px" style="marginRight:20px;"/>
        	</div>
			<div class="container" style="marginTop: -220px; width:1000px; background: transparent; background:rgba(1,1,1,0.75);">
				<form class="editForm" v-on:submit.prevent="applyChanges">
					<input class="textfield" type="password" placeholder="Old Password" v-model="editForm.oldPassword"/>
					<input class="textfield" type="password" placeholder="New Password" v-model="editForm.newPassword"/>
					<input class="textfield" type="password"  placeholder="Confirm Password" name="confirm" v-model="editForm.confirmPassword">
					<input class="textfield" type="email" placeholder="Email" required v-model="editForm.email"/>
					<input class="textfield" type="text" placeholder="First Name" name="firstName" required v-model="editForm.firstName">		
					<input class="textfield" type="text"placeholder="Last Name" name="lastname" required v-model="editForm.lastName">
					<img id="blah" alt="your image" width="100" height="100" />
					<input class="inputFile" v-model="editForm.profileImg" type="file" onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])">
					<div class="submit-cancel">
						<button style="backgroundColor:#5dbea3; height: 40px; padding:0 5px; border:#5dbea3; flexDirection:row; borderRadius:10px; marginBottom: 15px;" type="submit">Apply Changes</button>
						<button id="logout-button" style="backgroundColor:#FF416C; height: 40px; padding:0 5px; flexDirection:row; borderRadius:10px; marginBottom: 15px; marginLeft:30px;" v-on:click="cancel" type="button">Cancel</button>
					</div>	
				</form>
				<p v-if="validationError" style="color:red;">
		    		<b>Please fill out all fields!</b>
	  			</p>
				<p v-else-if="oldPasswordError" style="color:red;">
					<b>Old password not valid!</b>
				 </p>
				<p v-else-if="confirmPasswordError" style="color:red;">
					<b>Confirm your new password!</b>
				</p>
				<p v-else-if="oldBeforeNewError" style="color:red;">
					<b>To change password, first enter the old one!</b>
				</p>
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
			console.log(this.editForm.profileImg)
			var editBody = {
				"username": this.$route.params.username,
				"password": this.editForm.newPassword,
				"email": this.editForm.email,
				"firstName": this.editForm.firstName,
				"lastName": this.editForm.lastName
			}
			
			if(this.editForm.email == "" || this.editForm.firstName == "" || this.editForm.lastName == ""){
				this.validationError = true;
			}
			
			
			else if(this.editForm.oldPassword !== this.password && this.editForm.oldPassword !== '')
			{
				this.validationError = false;
				this.oldPasswordError = true;
			}
			
			
			else if(this.editForm.newPassword != this.editForm.confirmPassword)
			{
				this.oldPasswordError = false;
				this.confirmPasswordError = true;
			}
			
			else if(this.editForm.newPassword != '' && this.editForm.oldPassword == '')
			{
				this.confirmPasswordError = false;
				this.oldBeforeNewError = true;
			}
			
			else{
				axios.post('rest/user/edit', editBody)
                 .then((res) => {
                     //Perform Success Action
					this.friends = res.data;
					console.log(this.friends);
					//axios.get('rest/user/findByUsername')
					this.$root.$router.push('/feed/' + this.$route.params.username)
                 })
                 .catch((error) => {
                     this.submitError = true;
                 }).finally(() => {
                     //Perform action in always
                 });	
			}
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