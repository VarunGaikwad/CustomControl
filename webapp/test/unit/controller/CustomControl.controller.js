/*global QUnit*/

sap.ui.define([
	"CC/CustomControl/controller/CustomControl.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CustomControl Controller");

	QUnit.test("I should test the CustomControl controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});