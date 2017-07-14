(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _app = require('./app.html');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.controller');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app4.default.$inject = ['$rootScope', '$interval'];

var appComponent = {
	template: _app2.default,
	controller: _app4.default
};

exports.default = appComponent;

},{"./app.controller":2,"./app.html":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appCtrl = function appCtrl() {
	_classCallCheck(this, appCtrl);

	var ctrl = this;
};

exports.default = appCtrl;

},{}],3:[function(require,module,exports){
module.exports = "<div class=\"container center-block\">\n<navbar></navbar>\n</div>\n\n<div class=\"sidenav\" >\n\t<sidenav></sidenav>\n</div>\n\n<div class=\"container pull-right\">\n \t<email></email>\n</div>";

},{}],4:[function(require,module,exports){
'use strict';

var _app = require('./app.component');

var _app2 = _interopRequireDefault(_app);

var _navbar = require('./components/navbar/navbar.component');

var _navbar2 = _interopRequireDefault(_navbar);

var _sidenav = require('./components/sidenav/sidenav.component');

var _sidenav2 = _interopRequireDefault(_sidenav);

var _email = require('./components/emails/email.component');

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', []).component('app', _app2.default).component('navbar', _navbar2.default).component('sidenav', _sidenav2.default).component('email', _email2.default);

},{"./app.component":1,"./components/emails/email.component":5,"./components/navbar/navbar.component":8,"./components/sidenav/sidenav.component":11}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _email = require('./email.html');

var _email2 = _interopRequireDefault(_email);

var _email3 = require('./email.controller');

var _email4 = _interopRequireDefault(_email3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emailComponent = {
	bindings: {},
	template: _email2.default,
	controller: ['$rootScope', '$interval', _email4.default],
	controllerAs: '$ctrl'
};

console.log('email.component');

exports.default = emailComponent;

},{"./email.controller":6,"./email.html":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var emailController = function () {
	function emailController($rootScope, $interval) {
		_classCallCheck(this, emailController);

		var ctrl = this;
		ctrl.emails = [];
		$interval(function () {
			ctrl.randomEmails();
		}, 2000, [6]);
	}

	_createClass(emailController, [{
		key: 'randomEmails',
		value: function randomEmails() {
			var ctrl = this;
			$.ajax({
				url: 'https://randomuser.me/api/?nat=us',
				dataType: 'json',
				success: function success(data) {
					console.log(data);
					var email = {
						email: data.results[0].email,
						gender: data.results[0].gender,
						name: data.results[0].name.first,
						img: data.results[0].picture.thumbnail

					};

					ctrl.emails.push(email);
				}
			});
		}
	}, {
		key: 'delete',
		value: function _delete() {
			console.log('Click Works');
		}
	}]);

	return emailController;
}();

exports.default = emailController;

},{}],7:[function(require,module,exports){
module.exports = "<div class=\"container\">\t\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<th>Read</th>\n\t\t\t<th><a href=\"#\" ng-click=\"$ctrl.delete()\">Delete</a></th>\n\t\t\t<th>Flagged</th>\n\t\t\t<th>Contact</th>\n\t\t\t<th>Email</th>\n\t\t\t<th>Gender</th>\n\t\t\t<th>Thumbnail</th>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr ng-repeat=\"email in $ctrl.emails\">\n\t\t\t\t<td><input type=\"checkbox\" name=\"Read\"></td>\n\t\t\t\t<td><input type=\"checkbox\" name=\"Star\"></td>\n\t\t\t\t<td><input type=\"checkbox\" name=\"Flagged\"></td>\n\t\t\t\t<td>{{email.name}}</td>\n\t\t\t\t<td>{{email.email}}</td>\n\t\t\t\t<td>{{email.gender}}</td>\n\t\t\t\t<td><img src=\"{{email.img}}\"></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>";

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _navbar = require('./navbar.html');

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar3 = require('./navbar.controller');

var _navbar4 = _interopRequireDefault(_navbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navbarComponent = {
	bindings: {},
	template: _navbar2.default,
	controller: ['$rootScope', '$interval', _navbar4.default],
	controllerAs: '$ctrl'
};

console.log('navbar.component');

exports.default = navbarComponent;

},{"./navbar.controller":9,"./navbar.html":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navbarController = function () {
	function navbarController($rootScope, $interval) {
		_classCallCheck(this, navbarController);

		var ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.title = "Choogle";
	}

	_createClass(navbarController, [{
		key: 'search',
		value: function search(searchText) {
			var ctrl = this;
			console.log(searchText);
			ctrl.$rootScope.search = searchText;
		}
	}, {
		key: 'hello',
		value: function hello() {
			console.log('hello world');
		}
	}, {
		key: 'user',
		value: function user() {
			console.log('User Settings');
		}
	}, {
		key: 'account',
		value: function account() {
			console.log('Account Settings');
		}
	}, {
		key: 'privacy',
		value: function privacy() {
			console.log('Privacy Settings');
		}
	}, {
		key: 'email',
		value: function email() {
			console.log('Emial Notifications');
		}
	}, {
		key: 'chats',
		value: function chats() {
			console.log('Chats Notifications');
		}
	}]);

	return navbarController;
}();

console.log('navbar.controller');
exports.default = navbarController;

},{}],10:[function(require,module,exports){
module.exports = "<div class=\"container-fluid\">\n<h4 id=\"moveleft\"><span class=\"glyphicon glyphicon-envelope\"></span>{{$ctrl.title}}</h4>\n\n <input id=\"moveleft1\" id=\"search-bar\" name=\"search\" type=\"text\" placeholder=\"Search..\" ng-model=\"$ctrl.searchText\">\n <input id=\"search-button\" name=\"search_submit\" type=\"submit\" value=\"Search\" ng-click=\"$ctrl.search($ctrl.searchText)\">\n\n \t<ul class=\"nav navbar-nav navbar-right\">\n\t\t<li class=\"dropdown\">\n\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Settings<b class=\"caret\"></b></a>\n\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t<li><a href=\"#\" ng-click=\"$ctrl.user()\">User</a></li>\n\t\t\t\t\t<li><a href=\"#\" ng-click=\"$ctrl.account()\">Account</a></li>\n\t\t\t\t\t<li><a href=\"#\" ng-click=\"$ctrl.privacy()\">privacy</a></li>\t\t\n\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Notifications<b class=\"caret\"></b></a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li><a href=\"#\" ng-click=\"$ctrl.email()\">Emails</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\" ng-click=\"$ctrl.chats()\">Chats</a></li>\n\t\t\t\t\t</li>\n\t\t</ul>\n\t\t</li>\n\t\t</ul>\n\t\t</div>\n";

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sidenav = require('./sidenav.html');

var _sidenav2 = _interopRequireDefault(_sidenav);

var _sidenav3 = require('./sidenav.controller');

var _sidenav4 = _interopRequireDefault(_sidenav3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sidenavComponent = {
	bindings: {},
	template: _sidenav2.default,
	controller: ['$rootScope', '$interval', _sidenav4.default],
	controllerAs: '$ctrl'
};

console.log('sidenav.component');

exports.default = sidenavComponent;

},{"./sidenav.controller":12,"./sidenav.html":13}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sidenavController = function () {
	function sidenavController($rootScope, $interval) {
		_classCallCheck(this, sidenavController);

		var ctrl = this;
		ctrl.title = "choogle";
		ctrl.compose = "compose";
		ctrl.$rootScope = $rootScope;
		ctrl.$rootScope.$watch('search', function () {
			ctrl.compose = ctrl.$rootScope.search;
		});
	}

	_createClass(sidenavController, [{
		key: "compose",
		value: function compose() {
			console.log('Compose New Email');
		}
	}, {
		key: "starred",
		value: function starred() {
			console.log('Starred Emails');
		}
	}, {
		key: "sent",
		value: function sent() {
			console.log('Sent Emails');
		}
	}, {
		key: "draft",
		value: function draft() {
			console.log('Draft Emails');
		}
	}, {
		key: "inbox",
		value: function inbox() {
			console.log('Inbox');
		}
	}]);

	return sidenavController;
}();

console.log('sidenav.controller');
exports.default = sidenavController;

},{}],13:[function(require,module,exports){
module.exports = "<div class=\"sidenav pull-left\">\n    <div class=\"row\" width=\"100px\">\n        <div class=\"col-xs-4\">\n            <div class=\"sidebar-nav\">\n                <div class=\"navbar navbar-default\" role=\"navigaion\">\n                    <div class=\"navbar-header\">\n                        <button class=\"btn btn-primary center-block\" ng-click=\"$ctrl.compose()\">Compose</button>\n                    </div>\n                    <div class=\"nav navbar-nav\">\n                        <ul class=\"nav sidebar-nav pull-left\">\n                            <li><a href=\"#\" ng-click=\"$ctrl.inbox()\">Inbox</a></li>\n                            <li><a href=\"#\" ng-click=\"$ctrl.starred()\">Starred</a></li>\n                            <li><a href=\"#\" ng-click=\"$ctrl.sent()\">Sent</a></li>\n                            <li><a href=\"#\" ng-click=\"$ctrl.draft()\">Drafts</a></li>\n                        </ul>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n";

},{}]},{},[4]);
