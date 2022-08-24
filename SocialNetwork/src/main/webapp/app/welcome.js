Vue.component("welcome",{
	data(){
        return{
            searchInput: '' 
        }
    },
	template:
	`	
		<div class="d-flex align-items-center justify-content-center">
			
		 	<div style="marginTop:20px;">
				  <div class="input-group mb-3" >
					  <input v-model="searchInput" type="text" class="form-control" placeholder="Search users..." aria-label="Search..." aria-describedby="basic-addon2">
					  <div class="input-group-append">
					    <button  style="backgroundColor:#FF416C; borderRadius:10px;marginBottom:20px;" @click="$router.push('searchPage/' + searchInput)" class="btn btn-outline-primary" type="button">Searchddss</button>
					  </div>
					</div>
				 
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