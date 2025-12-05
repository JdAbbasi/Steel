// Configuration constants for the HTS Derivative Analyzer

// Admin password - change this in production
export const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || '332';

// Gemini API Key - should be set via environment variables
export const GEMINI_API_KEY = import.meta.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY;

// Application metadata
export const APP_CONFIG = {
  name: 'HTS Derivative Analyzer',
  version: '1.0.0',
  author: 'Junaid Abbasi',
  description: 'An intelligent tool to verify HTS codes against Aluminum and Steel derivative lists using Gemini AI.',
};

// Gemini AI configuration
export const GEMINI_CONFIG = {
  model: 'gemini-2.5-flash',
  temperature: 0, // Deterministic for compliance
  maxTokens: 4096,
};

// Database configuration
export const DB_CONFIG = {
  name: 'HTSAnalyzerDB',
  version: 2,
  stores: {
    settings: 'settings',
    entries: 'entries',
  },
  keys: {
    activeContext: 'activeContext',
  },
};

// UI Configuration
export const UI_CONFIG = {
  theme: {
    default: 'light',
    storageKey: 'theme',
  },
  history: {
    maxItems: 5,
  },
  search: {
    placeholder: 'e.g. 7604.10.10',
    pattern: /[^0-9.]/g,
  },
};