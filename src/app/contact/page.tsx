import { ContactBanner } from "@/components/contact-banner";
import { ContactPageBanner } from "@/components/contact-page-banner";

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-24 mb-10">
      <ContactPageBanner />
      <ContactBanner />
    </div>
  );
}
