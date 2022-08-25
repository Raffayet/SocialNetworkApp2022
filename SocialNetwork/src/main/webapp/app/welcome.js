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
					  <div class="d-flex justify-content-center h-100">
        				<div class="searchbar">
          					<input class="search_input" type="text" name="" placeholder="Search...">
          					<a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        				</div>
        			  </div>
        			  <h1 style="color:white; marginTop:-150px; fontFamily:Impact; marginLeft:30px; marginBottom:200px;" >WELCOME TO OUR WEBSITE</h1>
        			  <p style="color:white; fontSize:24px; marginTop:-150px; marginBottom:60px; fontFamily:Impact; marginLeft:156px;">Social Media App</p>
					 <button style="backgroundColor:#FF416C; borderRadius:10px; marginBottom:500px; marginLeft:130px;" @click="$router.push('login')" type="button">Login / Register</button>
				</div>
				<link rel="stylesheet" href="css/welcome.css" type="text/css">
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
			</div>
	`
	,
	methods:{
		
	}
	,
	mounted(){
		
	}
})