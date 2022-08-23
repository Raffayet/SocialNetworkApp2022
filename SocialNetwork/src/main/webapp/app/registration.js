Vue.component("registration",{
	data(){
        return{
            form: {
                username: '',
                email: '',
                name: '',
                lastName: '',
                gender: '',
                password: '',
                confirm: '',
				dateOfBirth: ''
            },
			validationError: false,
			passwordError: false,
			submitError:false
        }
    },
	template:
	`	
		<div class="container">
		 	<div class="row">
			    <div class="col"></div>
			    <div class="col">
					<form v-on:submit.prevent="checkForm">
						<h1>Register Here</h1>
						<p>Please fill in the details to create an account with us.</p>
						<hr>
						<label for="username"><b>Username</b></label>
						<input type="text" class="form-control" id="floatingInput" placeholder="Enter Username" name="username" v-model="form.username">
						<br>
						<label for="email"><b>Email</b></label>
						<input type="email" class="form-control" id="floatingInput" placeholder="Enter Email" name="email" v-model="form.email">
						<br>
						<label for="name"><b>Name</b></label>
						<input type="text" class="form-control" id="floatingInput" placeholder="Enter Name" name="name" v-model="form.name">
						<br>
						<label for="lastname"><b>Last Name</b></label>
						<input type="text" class="form-control" id="floatingInput" placeholder="Enter Last Name" name="lastname" v-model="form.lastName">
						<br>
						<label for="gender"><b>Gender</b>&nbsp;&nbsp;&nbsp;</label>
						<select name="gender" v-model="form.gender" class="btn btn-primary">
							<option value="MALE">MALE</option>
							<option value="FEMALE">FEMALE</option>
						</select>
						<br><br>
						<label for="password"><b>Password</b></label>
						<input type="password" class="form-control" id="floatingInput" placeholder="Enter Password" name="password"  v-model="form.password">
						<br>
						<label for="confirm"><b>Confirm Password</b></label>
						<input type="password" class="form-control" id="floatingInput" placeholder="Confirm Password" name="confirm" v-model="form.confirm">
						<br>
						<label for="date"><b>Date of birth</b></label>
						<input type="date" class="form-control" id="floatingInput" placeholder="date" name="confirm" v-model="form.dateOfBirth">
						<hr>
						<button type="submit" class="btn-lg btn-primary"><strong>Register</strong></button>
						<p>Already have an account? <a href="#/">Sign in</a>.</p>
					</form>
					<p v-if="validationError">
		    			<b>Please fill out all fields!</b>
	  				</p>
					<p v-else-if="passwordError">
					    <b>Password don't match!</b>
				  	</p>
					<p v-else-if="submitError">
					    <b>Username already exists!</b>
					</p>
			    </div>
			    <div class="col"></div>
		 	</div>
		</div>
	`
	,
	methods:{
		checkForm : function(){
			if(this.form.username == "" || this.form.email == "" || this.form.name == "" || this.form.lastName == "" || this.form.password == "" || this.form.confirm == "" || this.form.gender == ""){
				this.validationError = true;
			}
			else if (this.form.password != this.form.confirm){
				this.passwordError = true;
			}
			else{
				console.log(this.form);
				axios.post('rest/registration', this.form)
                 .then((res) => {
                     //Perform Success Action
					console.log("Uspesno registrovan korisnik!");
					this.$router.push('/feed');
                 })
                 .catch((error) => {
                     this.submitError = true;
                 }).finally(() => {
                     //Perform action in always
                 });
			}
		}
		
	}
	,
	mounted(){
	}
})