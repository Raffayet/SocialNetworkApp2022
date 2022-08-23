
Vue.component("feed",{
	data(){
        return{
            friends:null 
        }
    },
	template:
	`	<p>dobro dosli</p>
	`
	,
	methods:{
		selectPosts: function(post, user){
			console.log(post.text);
			this.$router.push({name:'post', params:{post:post, user:user}});
		}
	}
	,
	mounted(){
			axios.get('rest/feed')
                 .then((res) => {
                     //Perform Success Action
					console.log("Uspesno dobijeni postovi!");
					this.friends = res.data;
					console.log(this.friends);
                 })
                 .catch((error) => {
                     this.submitError = true;
                 }).finally(() => {
                     //Perform action in always
                 });
	}
})