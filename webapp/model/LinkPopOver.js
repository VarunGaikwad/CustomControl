sap.ui.define([
	"sap/m/Link"
], function (Link) {
	"use strict";
	return Link.extend("CC.CustomControl.model.LinkPopOver", {
		metadata: {
			properties: {
				popOverText: {
					type: "string",
					defaultValue: ""
				}
			},
			events: {
				"hoverIn": {},
				"hoverOut": {}
			}
		},
		oPopover: new sap.m.Popover(),
		oText: new sap.m.Text(),
		onAfterRendering: function () {
			if (Link.prototype.onAfterRendering) {
				Link.prototype.onAfterRendering.apply(this, arguments);
			}
			this.oPopover.setShowHeader(false);
			this.oText.addStyleClass("sapUiSmallMargin");
			this.oText.setText(this.getPopOverText());
			this.oPopover.addContent(this.oText);
		},
		onmouseover: function (oEvent) {
			this.oPopover.openBy(this);
		},
		onmouseout: function (oEvent) {
			this.oPopover.close();
		},
		renderer: {}
	});
});