sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("avengerdata.controller.View1", {
        onInit: function () {
            var that = this;

            var AvengerObj = {
                "aAvengersData": [
                    {
                        "sName": "Iron Man",
                        "sPower": "Powered Armor Suite",
                        "sMovie": "Iron Man (2008)",
                        "bStatus": false
                    },
                    {
                        "sName": "Thor Odinson",
                        "sPower": "Stormbreaker",
                        "sMovie": "Thor (2011)",
                        "bStatus": true
                    },
                    {
                        "sName": "Captain America",
                        "sPower": "Superhuman Strength",
                        "sMovie": "Captain America: The First Avenger (2011)",
                        "bStatus": false
                    },
                    {
                        "sName": "Black Widow",
                        "sPower": "Combat Expertise",
                        "sMovie": "The Avengers (2012)",
                        "bStatus": false
                    },
                    {
                        "sName": "Hulk",
                        "sPower": "Unstoppable Rage",
                        "sMovie": "The Incredible Hulk (2008)",
                        "bStatus": true
                    }
                ],
                "aInfityStoneData": [
                    {
                        "sName": "Space Stone",
                        "sPower": "Teleportation",
                        "sMovie": "Captain America: The First Avenger (2011)",
                        "bStatus": true
                    },
                    {
                        "sName": "Mind Stone",
                        "sPower": "Mind control",
                        "sMovie": "Avengers (2012)",
                        "bStatus": true
                    },
                    {
                        "sName": "Reality Stone",
                        "sPower": "Alter Reality",
                        "sMovie": "Thor: The Dark World (2013)",
                        "bStatus": false
                    },
                    {
                        "sName": "Power Stone",
                        "sPower": "Energy Manipulation",
                        "sMovie": "Guardians of the Galaxy (2014)",
                        "bStatus": true
                    },
                    {
                        "sName": "Time Stone",
                        "sPower": "Control Time",
                        "sMovie": "Doctor Strange (2016)",
                        "bStatus": false
                    }
                ]
            };

            var oAvengerTableModel = new JSONModel(AvengerObj);
            this.getView().setModel(oAvengerTableModel, "oAvengerTableModel");

            that._oRouter = sap.ui.core.UIComponent.getRouterFor(that);
			that._oRouter.attachRouteMatched(that._handleRouteMatched, that);

        },
        onAvengersClick: function (oEvent) {
            var that = this;
            // var oAvengerTableModel = new JSONModel(AvengerObj);
            var oAvengerTableModel = this.getView().getModel("oAvengerTableModel")

            oAvengerTableModel.setProperty("/aAvengerTableResult", oAvengerTableModel.getData().aAvengersData)
            // this.getView().getModel("oAvengerTableModel").setProperty("/InfinityStoneTableResult", AvengerObj.aInfityStoneData)
        },
        onInfinityStonesClick: function (oEvent) {
            var that = this;
            // this.getView().getModel("oAvengerTableModel").setProperty("/aAvengerTableResult", AvengerObj.aInfityStoneData);
            var oAvengerTableModel = this.getView().getModel("oAvengerTableModel");
            // oAvengerTableModel.setProperty("/aAvengerTableResult", oAvengerTableModel.getData().aInfityStoneData)
            oAvengerTableModel.setProperty("/aAvengerTableResult", oAvengerTableModel.getProperty("/aInfityStoneData"));
        },
        onListItemPress: function (oEvent) {
            var that = this;
            this._oRouter.navTo("View2");
        }
    });
});
