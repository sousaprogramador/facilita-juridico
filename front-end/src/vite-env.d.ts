/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_PORT: string;
  readonly VITE_BASE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
