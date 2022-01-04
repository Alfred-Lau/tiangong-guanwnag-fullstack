import { Context } from "egg";

function pick(obj, target) {
  const ret = {};
  for (const prop in obj) {
    if (target.includes(prop)) {
      ret[prop] = obj[prop];
    }
  }

  return ret;
}

export default {
  formatUser(this: Context, user) {
    return pick(user, ["name", "phone"]);
  },
};
