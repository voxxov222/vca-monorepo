/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VCA_API_URL?: string;
  readonly EXPO_PUBLIC_SUPABASE_URL?: string;
  readonly EXPO_PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly EXPO_PUBLIC_TOOLKIT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
