import { AdvisoryBoard } from "@/components/advisory-board";
import { MeetThePeople } from "@/components/meet-the-people";
import { OurMentors } from "@/components/our-mentors";
import { OurTeam } from "@/components/our-team";
import { WhatWeDo } from "@/components/what-we-do";

export default function Team() {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-24 mb-10">
      <MeetThePeople />
      <WhatWeDo />
      <AdvisoryBoard />
      <OurTeam />
      {/* <OurMentors /> */}
    </div>
  );
}
