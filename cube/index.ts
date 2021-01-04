import * as nvk from "nvk/generated/1.1.126/win32";

function start() {
  let win = new nvk.VulkanWindow({
    width: 480,
    height: 320,
    title: "typescript-example"
  });
  
  let instance = new nvk.VkInstance();
  
  let appInfo = new nvk.VkApplicationInfo({
    pApplicationName: "Hello!",
    applicationVersion: nvk.VK_MAKE_VERSION(1, 0, 0),
    pEngineName: "No Engine",
    engineVersion: nvk.VK_MAKE_VERSION(1, 0, 0),
    apiVersion: nvk.VK_API_VERSION_1_0
  });
  
  let validationLayers: string | any[] | null = [];
  let instanceExtensions = win.getRequiredInstanceExtensions();
  
  let instanceInfo = new nvk.VkInstanceCreateInfo();
  instanceInfo.sType = nvk.VkStructureType.VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO;
  instanceInfo.pApplicationInfo = appInfo;
  instanceInfo.enabledLayerCount = validationLayers.length;
  instanceInfo.ppEnabledLayerNames = validationLayers;
  instanceInfo.enabledExtensionCount = instanceExtensions.length;
  instanceInfo.ppEnabledExtensionNames = instanceExtensions;
  
  let result = nvk.vkCreateInstance(instanceInfo, null, instance);
  if (result !== nvk.VkResult.VK_SUCCESS) throw `Failed to create VkInstance!`;
  
  setInterval(() => {
    win.pollEvents();
  }, 1e3 / 60);
  
  let amountOfLayers = { $: 0 };
  nvk.vkEnumerateInstanceLayerProperties(amountOfLayers, null);
  let layers = [];
  for(let i=0;i<amountOfLayers.$;i++) {
    layers.push(new nvk.VkLayerProperties())
  }
  nvk.vkEnumerateInstanceLayerProperties(amountOfLayers, layers);
}

start();