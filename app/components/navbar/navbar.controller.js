class navbarController {

	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.title = "Choogle";

	};
 	 

 	search(searchText) {
 		let ctrl = this;
 		console.log(searchText)
 		ctrl.$rootScope.search = searchText;
 	}

	hello () {
		console.log('hello world');
	}
	user () {
		console.log('User Settings');
	}

	account() {
		console.log('Account Settings');
	}

	privacy () {
		console.log('Privacy Settings');
	}

	email (){
		console.log('Emial Notifications');
	}

	chats (){
		console.log('Chats Notifications');
	}


}
console.log('navbar.controller');
export default navbarController;