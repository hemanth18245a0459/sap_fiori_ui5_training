sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("avengerdata.controller.View1", {
        onInit: function() {
            var that = this;

            var AvengerObj = {
                "aAvengersData": [
                    {
                        "sName": "Iron Man",
                        "sPower": "Powered Armor Suite",
                        "sMovie": "Iron Man (2008)"
                    },
                    {
                        "sName": "Thor Odinson",
                        "sPower": "Stormbreaker",
                        "sMovie": "Thor (2011)"
                    }
                ],
                "aInfityStoneData": [
                    {
                        "sName": "Space Stone",
                        "sPower": "Teleportation",
                        "sMovie": "Captain America: The First Avenger"           
                    },
                    {
                        "sName": "Mind Stone",
                        "sPower": "Mind control",
                        "sMovie": "Avengers (2012)"
                    }
                ]
            };

            var oAvengerTableModel = new JSONModel(AvengerObj);
            this.getView().setModel(oAvengerTableModel, "oAvengerTableModel");

        },
        onAvengersClick: function(oEvent) {
            
            // define a new variable to store and get the data from init funtion.
            var oAvengerTableModel = this.getView().getModel("oAvengerTableModel")

            oAvengerTableModel.setProperty("/aAvengerTableResult", oAvengerTableModel.getData().aAvengersData)
            // this.getView().getModel("oAvengerTableModel").setProperty("/InfinityStoneTableResult", AvengerObj.aInfityStoneData)
        },
        onInfinityStonesClick: function (oEvent) {
            // this.getView().getModel("oAvengerTableModel").setProperty("/aAvengerTableResult", AvengerObj.aInfityStoneData);
            var oAvengerTableModel = this.getView().getModel("oAvengerTableModel")
            oAvengerTableModel.setProperty("/aAvengerTableResult", oAvengerTableModel.getData().aInfityStoneData)
        }
    });
});
