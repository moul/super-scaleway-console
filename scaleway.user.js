// ==UserScript==
// @name           Super Scaleway Console
// @version        4
// @author         Manfred Touron
// @namespace      http://m.42.am/
// @description    Scaleway console++
// @include        https://cloud.scaleway.com/*
// @run-at         document-end
// @updateURL      https://raw.githubusercontent.com/moul/super-scaleway-console/master/scaleway.user.js
// @downloadURL    https://raw.githubusercontent.com/moul/super-scaleway-console/master/scaleway.user.js
// @grant          GM_addStyle
// ==/UserScript==


/*
var initWatcher = setInterval(function () {
  console.log('watch');
  if (angular) {
    clearInterval(initWatcher);
    init();
  }
}, 100);
 */


setTimeout(init, 1000);


function init() {
  var w = typeof unsafeWindow == 'undefined' ? window : unsafeWindow;

  (function($) {
    $.fn.changeElementType = function(newType) {
      var attrs = {};

      $.each(this[0].attributes, function(idx, attr) {
        attrs[attr.nodeName] = attr.nodeValue;
      });

      this.replaceWith(function() {
        return $("<" + newType + "/>", attrs).append($(this).contents());
      });
    };
  })(w.jQuery);

  console.log('angular', w.angular);

  console.log("Hello from super-scaleway-console !");
  GM_addStyle(".table tbody>tr:not(.ng-table-group) { height: auto !important; }");
  $("button.new-server.btn").changeElementType("a");
  console.log("Goodbye from super-scaleway-console !");
}
