import { Agenda } from "@/components/agenda";
import { EligibilityCriteria } from "@/components/eligibility-criteria";
import { HeroSection } from "@/components/hero-section";
import { ProblemStatement } from "@/components/problem-statement";
import { RegisterNow } from "@/components/register-now";
import { TicketOptions } from "@/components/ticket-options";
import { WhatWeDo } from "@/components/what-we-do";
import { WhyAttendComponent } from "@/components/why-attend";
import { WhyJoinBankiffy } from "@/components/why-join-bankiffy";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-24 mb-6 md:mb-10">
      <HeroSection />
      <ProblemStatement />
      <WhatWeDo />
      <WhyJoinBankiffy />
      <WhyAttendComponent />
      <EligibilityCriteria />
      <Agenda />
      <RegisterNow />
      <TicketOptions />
    </div>
  );
}
