Vue.component("login",{
	data(){
        return{
            form: {
                username: '',
                password: ''
            },
			loginError:false
        }
    },
	template:
	`	
		
		 	<div style="margin-top:70px;">
		 	<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<input type="text" placeholder="Enter Username" name="username" >		
			<input type="text"placeholder="Enter Name" name="name">
			<input type="text"placeholder="Enter Last Name" name="lastname" >
			<select name="gender"  class="btn btn-primary">
							<option value="MALE">MALE</option>
							<option value="FEMALE">FEMALE</option>
						</select>
						
						
						
						<input type="password"  placeholder="Confirm Password" name="confirm">
						
						<input type="date"  placeholder="date" name="confirm" >
			<button>Sign Up</button>
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
		 	
		 	
		</div>
		
		</div>
		
	`
	,
	methods:{
		checkForm : function(){
			var body={
				"username":""+this.form.username,
				"password":""+this.form.password
			}
			console.log(body);
			axios.post('rest/login', body)
             .then((res) => {
                 //Perform Success Action
				console.log("Uspesno logovan korisnik!");
				this.$router.push('/feed');
             })
             .catch((error) => {
                 this.loginError = true;
             }).finally(() => {
                 //Perform action in always
             });
		}
	}
	,
	mounted(){
		
		
	}
})