sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("fontend.controller.View1", {
            onInit: function () {

            },

            //Login
            onLoginPress: function () {
                var empId = this.byId("empIdInput").getValue();
                var password = this.byId("passwordInput").getValue();

                this.validateLogin(empId, password);
            },

            validateLogin: function (empId, empPassword) {
                var that = this;

                let url =
                this.getOwnerComponent().getModel("bookshop").getServiceUrl() +
                "Employees";

                console.log(url);

                $.ajax({
                    url: url,
                    method: 'POST',
                    data: {
                        empId: empId,
                        empPassword: empPassword
                    },
                    success: function (data) {
                        if (data.success) {
                            MessageBox.success("Login successful!");
                        } else {
                            MessageBox.error("Credentials not matched. Please try again.");
                        }
                    },
                    error: function (error) {
                        console.log(error);
                        MessageBox.error("Failed to authenticate. Please try again later.");
                    }
                });
            }
        });
    });
