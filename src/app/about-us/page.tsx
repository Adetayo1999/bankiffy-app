import { DriveINclusion } from "@/components/drive-inclusion";
import { PartnerWithUs } from "@/components/partner-with-us";
import { RegisterNow } from "@/components/register-now";
import { WhyJoinBankiffy } from "@/components/why-join-bankiffy";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-24 mb-10">
      <DriveINclusion />
      <PartnerWithUs />
      <WhyJoinBankiffy />
      <RegisterNow />
    </div>
  );
}
