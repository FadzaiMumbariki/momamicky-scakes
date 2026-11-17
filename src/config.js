// Fill these in with the real business details. Anything left empty is hidden on the site.
// whatsapp: digits only, with country code and no "+" (e.g. 1473389209)
export const CONTACT = {
  whatsapp: '1473389209',
  phone: '+1 473 389 209',
  email: 'orders@mommamickyscakes.com',
  address: '1080 Bakery Blvd, Suite 200',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  tiktok: '',
};

export function buildOrderLink({ name, email, phone, message }) {
  const text =
    `Hi Momma Micky's Cakes! I'd like to enquire about a cake.\n\nName: ${name}\n` +
    (phone ? `Phone: ${phone}\n` : '') +
    (email ? `Email: ${email}\n` : '') +
    `\n${message}`;
  if (CONTACT.whatsapp) return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
  if (CONTACT.email)
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent('Cake enquiry')}&body=${encodeURIComponent(text)}`;
  return null;
}
