'use strict';

import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar',[])
.component('navbar', navbarComponent)

console.log('navbar.js');

export default navbarModule;