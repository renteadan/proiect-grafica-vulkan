import * as nvk from "nvk/generated/1.1.126/win32/index";


function start() {
  let win = new nvk.VulkanWindow({
    width: 480,
    height: 320,
    title: "typescript-example"
  });
   
  let appInfo = new nvk.VkApplicationInfo({
    pApplicationName: "Hello!",
    applicationVersion: nvk.VK_MAKE_VERSION(1, 0, 0),
    pEngineName: "No Engine",
    engineVersion: nvk.VK_MAKE_VERSION(1, 0, 0),
    apiVersion: nvk.VK_API_VERSION_1_0
  });
}
start();