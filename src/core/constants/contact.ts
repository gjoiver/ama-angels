export const PHONE_DISPLAY = '+57 300 453 4836';
export const PHONE_HREF = 'tel:+573004534836';
export const WHATSAPP_NUMBER = '573004534836';
export const EMAIL = 'salud.encasa.amaangels@gmail.com';
export const ADDRESS = 'Medellín, Colombia';

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
