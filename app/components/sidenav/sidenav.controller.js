class sidenavController {

	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.title = "choogle";
		ctrl.compose = "compose";
		ctrl.$rootScope = $rootScope;
		ctrl.$rootScope.$watch('search',() =>{
			ctrl.compose = ctrl.$rootScope.search;
		})
	};

	compose () {
		console.log('Compose New Email');
	};

	starred (){
		console.log('Starred Emails');
	};

	sent (){
		console.log('Sent Emails');
	};

	draft (){
		console.log('Draft Emails');
	};

	inbox (){
		console.log('Inbox');
	};

}
console.log('sidenav.controller');
export default sidenavController;