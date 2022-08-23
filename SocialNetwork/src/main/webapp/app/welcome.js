Vue.component("welcome",{
	data(){
        return{
            searchInput: '' 
        }
    },
	template:
	`	
		<div class="d-flex align-items-center justify-content-center">
			
		 	<div>
				  <div class="input-group mb-3">
					  <input v-model="searchInput" type="text" class="form-control" placeholder="Search users..." aria-label="Search..." aria-describedby="basic-addon2">
					  <div class="input-group-append">
					    <button @click="$router.push('searchPage/' + searchInput)" class="btn btn-outline-primary" type="button">Search</button>
					  </div>
					</div>
				  <button style="backgroundColor:green;" @click="$router.push('login')" type="button">Login</button>
				  <button @click="$router.push('registration')" type="button">Register</button>	
			</div>
		</div>
	`
	,
	methods:{
		
	}
	,
	mounted(){
		
	}
})