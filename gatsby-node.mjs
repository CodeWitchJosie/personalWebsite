// const ChildProcess = require('child_process');

import { execSync } from 'child_process';

export const onPostBuild = () => {
  execSync("ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill");
};
