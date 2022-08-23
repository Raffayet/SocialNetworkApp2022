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
		<div class="loginComp d-flex align-items-center justify-content-center">
		 	<div class="row">
			    
			    <div class="col">
			      <form style="marginTop:250px;" v-on:submit.prevent="checkForm" class="form-floating">
						<h1 style="
									fontSize:45px;
									justifyContent:center;
									marginLeft:90px;
									marginBottom:20px;
									fontFamily: Arial;"
						
						>Login</h1>
						<div class="form-floating mb-3">
							 <input type="text" class="form-control" id="floatingInput" placeholder="username" v-model="form.username" required>
							 <label for="floatingInput">Username</label>
						</div>
						<div class="form-floating">
							 <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="form.password"  required>
							 <label for="floatingPassword">Password</label>
							<br>
						</div>
						<hr>
						<button style="marginLeft:0px; width:300px; backgroundColor:green;" type="submit" class="btn btn-primary"><strong>Log in</strong></button>
					</form>
					<p v-if="loginError" class="error">
					    <b>Wrong credentials!</b>
					</p>
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