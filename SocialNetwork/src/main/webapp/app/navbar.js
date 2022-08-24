Vue.component("navbar",{
	data(){
        return{
        }
    },
	template:
	`	
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			  <div class="container-fluid">
			    <a class="navbar-brand" href="#">Navbar</a>
			    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			      <span class="navbar-toggler-icon"></span>
			    </button>
			    <div class="collapse navbar-collapse" id="navbarNavDropdown">
			      <ul class="navbar-nav">
			        <li class="nav-item">
			          <a class="nav-link active" aria-current="page" href="#">Home page</a>
			        </li>
			        <li class="nav-item">
			          <a class="nav-link" href="#">Messages</a>
			        </li>
			        <li class="nav-item">
			          <a class="nav-link" href="#">Settings</a>
			        </li>
			        <li class="nav-item dropdown">
			        </li>
			        <li>
			          <form class="d-flex">
			              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
			              <button class="btn btn-outline-success" type="submit">Search</button>
			        </form>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		</div>
		
	`
	,
	methods:{
		
	}
	,
	mounted(){
		
		
	}
})