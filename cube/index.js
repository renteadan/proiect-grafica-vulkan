"use strict";
exports.__esModule = true;
var nvk = require("nvk/generated/1.1.126/win32/index");
function start() {
    var win = new nvk.VulkanWindow({
        width: 480,
        height: 320,
        title: "typescript-example"
    });
    var appInfo = new nvk.VkApplicationInfo({
        pApplicationName: "Hello!",
        applicationVersion: nvk.VK_MAKE_VERSION(1, 0, 0),
        pEngineName: "No Engine",
        engineVersion: nvk.VK_MAKE_VERSION(1, 0, 0),
        apiVersion: nvk.VK_API_VERSION_1_0
    });
    var validationLayers = [];
    var instanceExtensions = win.getRequiredInstanceExtensions();
    var instanceInfo = new nvk.VkInstanceCreateInfo();
    instanceInfo.sType = nvk.VkStructureType.VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO;
    instanceInfo.pApplicationInfo = appInfo;
    instanceInfo.enabledLayerCount = validationLayers.length;
    instanceInfo.ppEnabledLayerNames = validationLayers;
    instanceInfo.enabledExtensionCount = instanceExtensions.length;
    instanceInfo.ppEnabledExtensionNames = instanceExtensions;
    var instance = new nvk.VkInstance();
    var result = nvk.vkCreateInstance(instanceInfo, null, instance);
    if (result !== nvk.VkResult.VK_SUCCESS)
        throw "Failed to create VkInstance!";
    // setInterval(() => {
    //   win.pollEvents();
    // }, 1e3 / 60);
}
start();
