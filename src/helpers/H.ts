import { Platform } from "ionic-angular";

function getPlatformName(platform: Platform) {
  if (platform.is("mobileweb")) {
    return "browser";
  }

  if (platform.is("android")) {
    return "android";
  }

  if (platform.is("ios")) {
    return "ios";
  }

  if (platform.is("windows")) {
    return "windows";
  }

  return "browser";
}
export default {
  getPlatformName,
};
