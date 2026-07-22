import { ContactHero } from '@/sections/contact/ContactHero';
import { ContactForms } from '@/sections/contact/ContactForms';
import { DirectContact } from '@/sections/contact/DirectContact';

export function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForms />
      <DirectContact />
    </>
  );
}
