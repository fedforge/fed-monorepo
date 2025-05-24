export interface BaseConfig {
  enabled?: boolean;
}

export interface TestFixturesConfig {
  path: string;
  cleanup: boolean;
}

export interface TestHelpersConfig {
  timeout: number;
  retries: number;
}

export interface TestIntegrationConfig {
  baseUrl: string;
  auth?: {
    username: string;
    password: string;
  };
}
