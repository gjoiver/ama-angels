import { navbar as navbar_es } from './es/navbar';
import { hero as hero_es } from './es/hero';
import { services as services_es } from './es/services';
import { turismoMedico as turismoMedico_es } from './es/turismoMedico';
import { corporateBienestar as corporateBienestar_es } from './es/corporateBienestar';
import { financingBanner as financingBanner_es } from './es/financingBanner';
import { legalSection as legalSection_es } from './es/legalSection';
import { ctaSection as ctaSection_es } from './es/ctaSection';
import { footer as footer_es } from './es/footer';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    ...navbar_es,
    ...hero_es,
    ...services_es,
    ...turismoMedico_es,
    ...corporateBienestar_es,
    ...financingBanner_es,
    ...legalSection_es,
    ...ctaSection_es,
    ...footer_es,
  },
  en: {
    // Add en/ files here when English is needed
  },
} as const;
