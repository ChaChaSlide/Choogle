import template from './sidenav.html';
import controller from './sidenav.controller';

let sidenavComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs : '$ctrl'
};

console.log('sidenav.component');

export default sidenavComponent;