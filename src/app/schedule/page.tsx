import { Agenda } from "@/components/agenda";
import { EligibilityCriteria } from "@/components/eligibility-criteria";
import { EventProgramComponent } from "@/components/event-program";
import { ScheduleBanner } from "@/components/schedule-banner";
import { WhyJoinBankiffy } from "@/components/why-join-bankiffy";

export default function Schedule() {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-24 mb-10">
      <ScheduleBanner />
      <WhyJoinBankiffy />
      <Agenda />
      <EligibilityCriteria />
      <EventProgramComponent />
    </div>
  );
}
