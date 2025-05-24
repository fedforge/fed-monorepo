export interface BaseConfig {
  enabled?: boolean;
}

export interface BuildConfig {
  env: 'development' | 'staging' | 'production';
  optimize: boolean;
  sourceMaps: boolean;
}

export interface RuntimeConfig {
  features: Record<string, boolean>;
  api: {
    url: string;
    timeout: number;
  };
}
