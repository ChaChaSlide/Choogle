import appComponent from './app.component';
import navbarComponent from  './components/navbar/navbar.component';
import sidenavComponent from './components/sidenav/sidenav.component';
import emailComponent from './components/emails/email.component'

angular.module('app', [])
.component('app', appComponent)
.component('navbar', navbarComponent)
.component('sidenav',sidenavComponent)
.component('email', emailComponent)