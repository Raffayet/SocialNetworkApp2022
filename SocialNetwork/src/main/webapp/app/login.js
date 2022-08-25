Vue.component("login",{
	data(){
        return{
            form: {
                username: '',
                password: ''
            },
			loginError:false,
			
			formRegistration: {
				username: '',
                password: '',
                confirmPassword: '',
                email: '',
                firstName: '',
                lastName: '',
                gender: 'MALE'
			},
			validationError: false,
			passwordError: false,
			submitError:false
			
        }
    },
	template:
	`	
		
		 	<div style="margin-top:120px;">
			 	<div class="container" id="container">
					<div class="form-container sign-up-container" v-on:submit.prevent="checkFormRegistration">
						<form action="#">
							<h1>Create Account</h1>
							
							<span>or use your email for registration</span>
							<input type="text" placeholder="Username" required v-model="formRegistration.username"/>
							<input type="password" placeholder="Password" required v-model="formRegistration.password"/>
							<input type="password"  placeholder="Confirm Password" name="confirm" required v-model="formRegistration.confirmPassword">
							<input type="email" placeholder="Email" required v-model="formRegistration.email"/>
							<input type="text" placeholder="First Name" name="firstName" required v-model="formRegistration.firstName">		
							<input type="text"placeholder="Last Name" name="lastname" required v-model="formRegistration.lastName">
							<select name="gender" v-model="formRegistration.gender" class="btn btn-primary">
								<option value="MALE">MALE</option>
								<option value="FEMALE">FEMALE</option>
							</select>
							<button>Sign Up</button>
							<p v-if="submitError" class="error">
								<b>User already exists!</b>
							</p>
							<p v-if="passwordError" class="error">
								<b>Passwords don't match!</b>
							</p>
						</form>
					</div>
					<div class="form-container sign-in-container" v-on:submit.prevent="checkForm">
						<form action="#">
							<h1>Sign in</h1>
							
							<span>or use your account</span>
							<input type="text" class="form-control" id="floatingInput" placeholder="username" v-model="form.username" required/>
							<input type="password" id="floatingPassword" class="form-control" placeholder="Password" v-model="form.password"  required />
							<a href="#">Forgot your password?</a>
							<button type="submit">Sign In</button>
							<p v-if="loginError" class="error">
									    <b>Wrong credentials!</b>
							</p>
						</form>
						
					</div>
					<div class="overlay-container">
						<div class="overlay">
							<div class="overlay-panel overlay-left">
								<h1>Welcome Back!</h1>
								<p>To keep connected with us please login with your personal info</p>
								<button class="ghost" id="signIn">Sign In</button>
							</div>
							<div class="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>Enter your personal details and start journey with us</p>
								<button class="ghost" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
			 	
			 	<link rel="stylesheet" href="css/login.css" type="text/css">
			</div>
		</div>
		
	`
	,
	methods:{
		checkForm : function(){
			var body = {
				"username": "" + this.form.username,
				"password": "" + this.form.password
			}
			console.log(body);
			axios.post('rest/login', body)
             .then((res) => {
                 
				console.log("Successfully logged in!");
				this.$router.push('/feed');
             })
             .catch((error) => {
                 this.loginError = true;
             }).finally(() => {
                 
             });
		},
		
		checkFormRegistration : function(){
			var registrationBody = {
				"username": this.formRegistration.username,
				"password": this.formRegistration.password,
				"confirmPassword": this.formRegistration.confirmPassword,
				"email": this.formRegistration.email,
				"firstName": this.formRegistration.firstName,
				"lastName": this.formRegistration.lastName,
				"gender": this.formRegistration.gender
			}
			
			if(this.formRegistration.password !== this.formRegistration.confirmPassword)
			{
				this.passwordError = true;
			}
			
			else
			{
				console.log(registrationBody);
				axios.post('rest/user/register', registrationBody)	
					.then((res) => {
           
						console.log("Successful registration!");
						this.$router.push('/feed');
	                 })
	                 .catch((error) => {
	                     this.submitError = true;
	                 }).finally(() => {
	                    
	                 });
			}			
		}
	}
	,
	mounted(){
		
		
	}
})