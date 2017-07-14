'use strict';

import emailComponent from './email.component';

let emailModule = angular.module('email',[])
.component('email', emailComponent)

console.log('email.js');

export default emailModule;