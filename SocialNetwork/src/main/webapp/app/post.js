
Vue.component("post",{
	data(){
        return{
            user:null,
			post:null,
			allUsers:null
        }
    },
	template:
	`	<div>
			<navbar></navbar>
			
			<div class="page-content page-container" id="page-content">
			    <div class="padding">
			        <div class="row container d-flex justify-content-center">
			            <div class="col-md-6">
			                <div v-if="allUsers" class="box box-widget">
			                    <div class="box-header with-border">
			                        <div class="user-block"> <img class="img-circle" src="https://img.icons8.com/color/36/000000/guest-male.png" alt="User Image"> <span class="username"><a href="#" data-abc="true">{{user.name}} {{user.surname}}</a></span> <span class="description">Public - 7:30 PM Today</span> </div>
			                        <div class="box-tools"> <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="" data-original-title="Mark as read"> <i class="fa fa-circle-o"></i></button> <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i> </button> <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button> </div>
			                    </div>
			                    <div class="box-body"> <img class="img-responsive pad" v-bind:src="post.picture" alt="Photo">
			                        <p>{{post.text}}</p>
			                    </div>
			                    <div class="box-footer box-comments">
			                        <div v-for="comment in post.comments" class="box-comment"> <img class="img-circle img-sm" src="https://img.icons8.com/office/36/000000/person-female.png" alt="User Image">
			                            <div class="comment-text"> <span class="username"> {{getName(comment.publisher)}} <span v-if="comment.editDate" class="text-muted pull-right">Edited:{{comment.editDate}}</span><span class="text-muted pull-right" v-if="comment.editDate == null">{{comment.date}}</span> </span> {{comment.text}}</div>
			                        </div>
			                    </div>
			                    <div class="box-footer">
			                        <form action="#" method="post"> <img class="img-responsive img-circle img-sm" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="Alt Text">
			                            <div class="img-push"> <input type="text" class="form-control input-sm" placeholder="Press enter to post comment"> </div>
			                        </form>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</div>
	`
	,
	methods:{
		getName:function(username){
			for(user of this.allUsers){
				if(user.username == username)	
					return user.name+" "+user.surname;
			}
		}
		
	}
	,
	mounted(){
			this.post = this.$route.params.post;
			this.user = this.$route.params.user;
			axios.get('rest/user')
                 .then((res) => {
                     //Perform Success Action
					this.allUsers = res.data;
                 })
                 .catch((error) => {
                     this.submitError = true;
                 }).finally(() => {
                     //Perform action in always
                 });
	}
})