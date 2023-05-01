import packageJson from '../../package.json';

export const environment = {
    production: false,
    apiUrl: 'https://partnersapi-stg.coactionspecialty.com/api',
    consoleLog: true,
    logRocketKey: '6e4z4s/partners-non-prod',
    GTMTrackingId: 'GTM-W7M2642',
    VERSION: packageJson.version
  };
  