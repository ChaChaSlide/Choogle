import template from './email.html';
import controller from './email.controller';

let emailComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs : '$ctrl'
};

console.log('email.component');

export default emailComponent;