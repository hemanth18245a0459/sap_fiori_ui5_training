sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("avengerdata.controller.View2", {
        onInit: function () {
            var that = this;

            // var oAvengerTableModel = new JSONModel(AvengerObj);
            // this.getView().setModel(oAvengerTableModel, "oAvengerTableModel");

            that._oRouter = sap.ui.core.UIComponent.getRouterFor(that);
            that._oRouter.attachRouteMatched(that._handleRouteMatched, that);

        },
        onGoToPage1Click: function(oEvent) {
            var that = this;
            this._oRouter.navTo("RouteView1");
        },
        onGoToPage3Click: function(oEvent) {
            var that = this;
            this._oRouter.navTo("View3");
        }

    });
});
