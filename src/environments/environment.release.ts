import packageJson from '../../package.json';

export const environment = {
    production: '#{wc_IsProduction}#',
    apiUrl: '#{wc_ApiURL}#',
    consoleLog: '#{wc_ConsoleLogEnable}#',
    logRocketKey: '#{wc_LogrocketApiKey}#',
    GTMTrackingId: '#{wc_GTMTrackingId}#',
    version: packageJson.version
  };
  