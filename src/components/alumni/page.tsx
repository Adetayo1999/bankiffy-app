import { AlumniBanner } from "@/components/alumni-banner";
import { ALumniNetwork } from "@/components/alumnii-network";
import { Testimonials } from "@/components/testimonials";

export default function Alumni() {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-24 mb-10">
      <AlumniBanner />
      <ALumniNetwork />
      <Testimonials />
    </div>
  );
}
