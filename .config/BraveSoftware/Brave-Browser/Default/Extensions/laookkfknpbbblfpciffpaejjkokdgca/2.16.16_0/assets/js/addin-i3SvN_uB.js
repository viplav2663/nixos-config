import{h as e}from"./handlebarLoader-xbtIzd6B.js";e({addin:"9e4cdd4d-8e0d-4b36-a159-fab66de84970",id:"settings_common"},Object.assign({"./models/settingsmanager.js":e=>{e.models.SettingsManager=Backbone.Model.extend({initialize:function(){this.listenTo(m,"settings:register:nav",this.registerNavItem),this.listenTo(m,"settings:register:subnav",this.registerSubNavItem),this.listenTo(m,"settings:register:panel",this.registerPanel),window.addEventListener("storage",(function(e){"loggedOut"!=e.key&&"loggedIn"!=e.key||window.location.reload()})),this.registerStockCommandSources()},stockNavItems:null,navItems:[],secondaryNavItems:[],panelItems:[],registerNavItem:function(e){return this.stockNavItems||this.populateStockNavItems(),!this.addOrReplaceIfOverride(this.navItems,e)&&(!this.addOrReplaceIfOverride(this.stockNavItems.navItems,e)&&(this.navItems.push(e),!0))},registerPanel:function(e){return!this.addOrReplaceIfOverride(this.panelItems,e)&&(this.panelItems.push(e),!0)},registerSubNavItem:function(e){return this.stockNavItems||this.populateStockNavItems(),!this.addOrReplaceIfOverride(this.secondaryNavItems,e)&&(!this.addOrReplaceIfOverride(this.stockNavItems.secondaryNavItems,e)&&(this.secondaryNavItems.push(e),!0))},addOrReplaceIfOverride:function(e,t,s){var i=s||{id:t.id},n=_.findWhere(e,i);return!!n&&(!t.override||(e.splice(e.indexOf(n),1),e.push(t),!0))},registerNavItems:function(e){var t=this,s=!1;e&&(e.nav&&_.each(e.nav,(function(e){t.registerNavItem(e)&&(s=!0)})),e.subNav&&_.each(e.subNav,(function(e){t.registerSubNavItem(e)&&(s=!0)})),e.panels&&_.each(e.panels,(function(e){t.registerPanel(e)})),s&&this.trigger("navItemsChanged"))},getNavItems:function(){return this.populateStockNavItems(),{navItems:_.chain(this.stockNavItems.navItems).union(this.navItems).sortBy("position").value(),secondaryNavItems:_.chain(this.stockNavItems.secondaryNavItems).union(this.secondaryNavItems).sortBy("position").value()}},getNavItem:function(e){var t=this.getNavItems(),s=_.findWhere(t.navItems,{id:e});return s||(s=_.findWhere(t.secondaryNavItems,{id:e})),s},getPanelItems:function(){return this.panelItems},registerStockCommandSources:function(){this.registerPanel({id:"trello",section:"todo",cmd:"settings.panels.trello.config"}),this.registerPanel({id:"clickup",section:"todo",cmd:"settings.panels.clickup.config"})},populateStockNavItems:function(){if(!this.stockNavItems){var e=[{id:"general",title:"General",cmd:"settings.panels.general",position:10},{id:"todo",title:"Tasks",cmd:"settings.panels.todo",position:20},{id:"mantra-settings",title:"Mantras",cmd:"settings.panels.mantras",position:30},{id:"background-settings",title:"Photos",cmd:"settings.panels.backgrounds",position:40},{id:"quote-settings",title:"Quotes",cmd:"settings.panels.quotes",position:50}];m.utils.userIsLegacyUnregistered()||m.utils.isTouchDevice()||e.push({id:"focus-mode-settings",title:"Focus Mode",cmd:"settings.panels.focusmode",position:15}),m.utils.isTouchDevice()||e.push({id:"bookmark-settings",title:m.utils.bookmarksNotSupported()?"Links":"Links & Bookmarks",cmd:"settings.panels.bookmarks",position:70}),e.push({id:"balance",title:"Balance",cmd:"settings.panels.balance",position:80});var t=[{id:"help",title:"Help",cmd:"settings.panels.help",position:20},{id:"release-notes",title:"Release Notes",cmd:"settings.panels.releaseNotes",position:21},{id:"feedback",title:"Give Feedback",cmd:"settings.panels.feedback",position:29},{id:"about",title:"About",cmd:"settings.panels.about",position:30}];m.conditionalFeatures.featureEnabled("plus")||m.conditionalFeatures.featureEnabled("team")||t.push({id:"upgrade",title:"Upgrade to Plus",cmd:"upsell.upgrade",cmdOnly:!0,options:{source:"nav-upgrade-plus"},position:40,isUpgradeButton:!0}),m.conditionalFeatures.featureEnabled("team")||m.utils.isTouchDevice()||t.push({id:"take-a-tour",title:"Take a Tour",cmd:"settings.takeATour",cmdOnly:!0,position:10}),t.push({id:"join-workshop",title:"Join a Live Workshop",cmd:"settings.joinWorkshop",cmdOnly:!0,position:11}),this.stockNavItems={navItems:e,secondaryNavItems:t}}},infinispin:function(){var e=localStorage.getItem("infinispin");return e=!!e&&JSON.parse(e)},toggleInfinispin:function(){var e=!this.infinispin();return localStorage.setItem("infinispin",e),e}})}}),{},(e=>{m.settingsManager=new e.models.SettingsManager}));