Vue.component("searchPage",{
	data(){
        return{
            searchText: ''
        }
    },
	template:
	`	
		<div class="d-flex align-items-center justify-content-center">
		 	<div class="d-grid gap-2 col-4 mx-auto">
				  <div class="input-group mb-3">
					  <input v-model="searchText" type="text" class="form-control" placeholder="Search users..." aria-label="Search..." aria-describedby="basic-addon2">
					  <div class="input-group-append">
					    <button class="btn btn-outline-primary" type="button">Search</button>
					  </div>
					</div>
			</div>
		</div>
	`
	,
	methods:{
		
	},
	created: function () {
		this.searchText = this.$route.params.text;
		
	},
	mounted(){
		
	}
})