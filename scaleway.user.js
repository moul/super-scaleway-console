// ==UserScript==
// @name           Super Scaleway Console
// @version        2
// @author         Manfred Touron
// @namespace      http://m.42.am/
// @description    Scaleway console++
// @include        https://cloud.scaleway.com/*
// @run-at         document-end
// @updateURL      https://raw.githubusercontent.com/moul/super-scaleway-console/master/scaleway.user.js
// @downloadURL    https://raw.githubusercontent.com/moul/super-scaleway-console/master/scaleway.user.js
// @grant          GM_addStyle
// ==/UserScript==

function main() {
  console.log("Hello from super-scaleway-console !");
  GM_addStyle(".table tbody>tr:not(.ng-table-group) { height: auto !important; }");
  console.log("Goodbye from super-scaleway-console !");
}

window.setTimeout(main, 1000);
