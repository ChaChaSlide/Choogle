class emailController {

	constructor($rootScope, $interval) {
		const ctrl = this;
		ctrl.emails = [];
		$interval(() => {
			ctrl.randomEmails();
		}, 2000,[6]);

	};

	randomEmails() {
		const ctrl = this;
		$.ajax({ 
			url: 'https://randomuser.me/api/?nat=us',
  			dataType: 'json',
  			success: function(data) {
  				console.log(data);
  				let email = {
  					email: data.results[0].email,
  					gender: data.results[0].gender,
  					name: data.results[0].name.first,
  					img: data.results[0].picture.thumbnail

  				}

  				ctrl.emails.push(email);
  			}
		});

	}

	delete (){
		console.log('Click Works');
	}

}

export default emailController;