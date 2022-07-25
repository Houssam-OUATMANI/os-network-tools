import os from "os";
const osData = {
  hostname: os.hostname(),
  platform: os.platform(),
  release: os.release(),
  type: os.type(),
  version: os.version(),
  arch : os.arch(),
  tempDir : os.tmpdir(),
  userInfo: os.userInfo({ encoding: "utf-8" }),
  cpu: os.cpus(),
  totalMemory: os.totalmem(),
  freememory: os.freemem(),
};

const networkInterfaces = os.networkInterfaces();
export { osData, networkInterfaces };
