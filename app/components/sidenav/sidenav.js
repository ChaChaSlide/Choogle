'use strict';

import sidenavComponent from './sidenav.component';

let sidenavModule = angular.module('sidenav',[])
.component('sidenav', sidenavComponent)

console.log('sidenav.js');

export default sidenavModule;