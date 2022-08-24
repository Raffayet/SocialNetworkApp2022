Vue.component("welcome",{
	data(){
        return{
            searchInput: '' 
        }
    },
	template:
	`	
			<div style="marginTop:250px;" class="d-flex align-items-center justify-content-center">
				
			 	<div style="marginTop:20px;">
					  <div class="input-group mb-3" >
						  <input v-model="searchInput" type="text" class="form-control" placeholder="Search users..." aria-label="Search..." aria-describedby="basic-addon2">
						  <div class="input-group-append">
						    <button  style="backgroundColor:#FF416C; borderRadius:10px;marginBottom:20px; marginLeft:35px;" @click="$router.push('searchPage/' + searchInput)" class="btn btn-outline-primary" type="button">Search</button>
						  </div>
						</div>
					 <button style="backgroundColor:#FF416C; borderRadius:10px;" @click="$router.push('login')" type="button">Login / Register</button>
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