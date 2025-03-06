// src/components/Footer/Footer.ts
export interface FooterConfig {
    showSocialLinks: boolean;
    showColumns: boolean;
  }
  
  export const DEFAULT_FOOTER_CONFIG: FooterConfig = {
    showSocialLinks: true,
    showColumns: true,
  };