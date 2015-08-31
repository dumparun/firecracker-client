#!/usr/bin/env node
//This script will add or remove all plugins listed

//usage: node 010_install_plugins.js [ add | remove ]

var command = process.argv[2] || 'add';

// add your plugins to this list--either the identifier, the filesystem location
// or the URL
var pluginlist = [ "com.ionic.keyboard", "cordova-plugin-splashscreen",
		"cordova-plugin-whitelist", "cordova-plugin-statusbar",
		"cordova-plugin-inappbrowser" ];

var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

function createAddRemoveStatement(plugin) {
	var pluginCmd = 'cordova plugin ' + command + ' ';
	if (typeof plugin === 'string') {
		pluginCmd += plugin;
	} else {
		if (command === 'add') {
			pluginCmd += plugin.locator + ' ';
			if (plugin.variables) {
				Object.keys(plugin.variables).forEach(
						function(variable) {
							pluginCmd += '--variable ' + variable + '="'
									+ plugin.variables[variable] + '" ';
						});
			}
		} else {
			pluginCmd += plugin.id;
		}
	}

	return pluginCmd;
}

function processPlugin(index) {
	if(command != 'remove')
		command = 'add';
	
	if (index >= pluginlist.length)
		return;

	var plugin = pluginlist[index];
	var pluginCommand = createAddRemoveStatement(plugin);
	console.log(pluginCommand);
	exec(pluginCommand, function() {
		processPlugin(index + 1);
	});
}

processPlugin(0);
