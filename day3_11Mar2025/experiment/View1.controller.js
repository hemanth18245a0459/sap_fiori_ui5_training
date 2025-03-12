sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("avengerdata.controller.View1", {
        onInit: function() {
            var that = this;
            
            

            //var oAvengerTableModel = new JSONModel(AvengerObj);
            //this.getView().setModel(oAvengerTableModel, "oAvengerTableModel")

            // var oInfityStoneTableModel = new JSONModel(InfityStoneObj);
            // this.getView().setModel(oInfityStoneTableModel, "oInfityStoneTableModel")
        },
        onAvengersClick: function(oEvent) {
            var AvengerObj = {
                "aAvengersData": [
                    {
                        "sAvengerId": "001",
                        "sAvengerName": "Captain America",
                        "sRealName": "Steve Rogers",
                        "sWeapon": "Shield",
                        "sPower": "Superhuman strength, Vibranium shield"
                    },
                    {
                        "sAvengerId": "002",
                        "sAvengerName": "Iron Man",
                        "sRealName": "Tony Stark",
                        "sWeapon": "Energy Blasters",
                        "sPower": "Genius, Powered Armor Suite"
                    },
                    {
                        "sAvengerId": "003",
                        "sAvengerName": "Thor",
                        "sRealName": "Thor Odinson",
                        "sWeapon": "Stormbreaker",
                        "sPower": "Weather manipulation"
                    }
                ]
            };
            var oAvengerTableModel = new JSONModel(AvengerObj);
            this.getView().getModel("oAvengerTableModel").setProperty("/aAvengerTableResult", AvengerObj.aAvengersData)
        },
        onInfinityStonesClick: function(oEvent) {
            var InfityStoneObj = {
                "aInfityStoneData": [
                    {
                        "sStoneId": "011",
                        "sStoneName": "Space Stone",
                        "sStoneColor": "Blue",
                        "sStoneLocation": "Tesseract",
                        "sStonePower": "Teleportation",
                        "sMovie": "Captain America: The First Avenger"
                    },
                    {
                        "sStoneId": "012",
                        "sStoneName": "Mind Stone",
                        "sStoneColor": "Yellow",
                        "sStoneLocation": "Loki’s Baton",
                        "sStonePower": "Mind control",
                        "sMovie": "Avengers"
                    },
                    {
                        "sStoneId": "013",
                        "sStoneName": "Reality Stone",
                        "sStoneColor": "Red",
                        "sStoneLocation": "Aether",
                        "sStonePower": "Alter reality",
                        "sMovie": "Thor: The Dark World"
                    }
                ]
            };
            var oInfityStoneTableModel = new JSONModel(InfityStoneObj);
            this.getView().getModel(oInfityStoneTableModel).setProperty("/aInfinityStoneTableResult", InfityStoneObj.aInfityStoneData);
        }

        
    });
});
