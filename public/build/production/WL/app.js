function _6f317f348b4377326cc57110781294c768674355(){};Ext.ns("Ext.util");Ext.Loader.setPath({Ext:"touch/src"});Ext.require(["Ext.field.Text"]);Ext.application({name:"WL",profiles:["Phone","Tablet"],models:["Book"],stores:["Books","Search","Activity"],views:["LoggedOut","Main","Activity","book.List","Dialog"],controllers:["Facebook","Viewings","YouTube"],viewport:{autoMaximize:true},launch:function(){WL.Facebook.initialize("534560986610800");if(window.localStorage&&window.localStorage.WL){var a=JSON.parse(window.localStorage.WL);this.fireEvent("localStorageData",a)}},updateUrl:function(a){this.getHistory().add(Ext.create("Ext.app.Action",{url:a}))},onUpdated:function(){Ext.create("WL.view.Dialog",{msg:"Application update was a success. Reload now?",buttons:[{ui:"green",text:"Update Now",handler:function(){window.location.reload()}},{ui:"red",text:"Later"}]}).show()}});