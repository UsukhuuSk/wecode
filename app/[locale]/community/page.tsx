import React from "react";
import { useTranslations } from "next-intl";
import eight from "../../../assets/LandingPage/8.svg";
import nine from "../../../assets/LandingPage/9.svg";
import ten from "../../../assets/LandingPage/10.svg";
import eleven from "../../../assets/LandingPage/11.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Image from "next/image";
import NewFooter from "../../../components/NewFooter";

export default function page() {
  const t = useTranslations("community");

  return (
    <main className="h-full min-h-screen w-full relative m-auto overflow-hidden ">
      <div className="absolute -top-1/4 left-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="absolute -top-1/4 right-0 -translate-x-1/2 bg-[#4317FF] blur-[200px] w-[244px] h-[200px]"></div>
      <div className="flex flex-col justify-center px-5 py-[200px] items-center max-w-[1280px] m-auto gap-16 relative text-white">
        <div className="flex flex-col gap-4">
          <h1 className="team font-adineue text-5xl md:text-[96px] font-bold tracking-[0.151px] text-center">
            {t("welcome")}
          </h1>
          <p className="font-neue text-xl font-normal text-center">
            {t("subheadline")}
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-6"
        >
          <AccordionItem value="item-1" className="border-[#78FF57]">
            <AccordionTrigger className="flex justify-between items-center">
              <div className="flex items-center justify-start text-start gap-[20px]">
                <div className="">
                  <Image src={eight} alt="" className="h-[18px] w-[18px]" />
                </div>
                <span>
                  <h1 className="font-bold font-adineue text-[24px]">
                    Become a Community Ambassador
                  </h1>
                  <p className="font-bold text-[16px] font-adineue text-[rgba(255,255,255,0.5)]">
                    Lead, Organize, and Inspire in Mongolia
                  </p>
                </span>
              </div>
              <div className=" text-black py-3 px-5 font-bold text-[14px] font-neue bg-[#78ff57] rounded-[48px]">
                Apply now
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-8  mx-auto text-white font-neue ">
                <p className="mb-6">
                  Are you ready to become a pioneer of AI education in your
                  local community? As a Community Ambassador, you will play a
                  critical role in establishing and growing the first AI
                  Community Hub in Mongolia, organizing impactful events, and
                  sharing your expertise to make a difference locally.
                </p>

                <h3 className="text-lg font-semibold mt-8 mb-4">
                  Your Eligibility
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>
                    You have a strong passion for AI, machine learning, and deep
                    learning.
                  </li>
                  <li>
                    You are currently employed in the AI industry or actively
                    seeking to switch into an AI-related career.
                  </li>
                  <li>
                    You have prior experience in organizing developer-focused
                    events like hackathons, workshops, or tech meetups.
                  </li>
                  <li>You are fluent in both Mongolian and English.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-8 mb-4">
                  Your Responsibilities
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>
                    Create the first AI community hub in Mongolia: Establish a
                    local network to connect AI enthusiasts, provide learning
                    opportunities, and promote knowledge-sharing in your region.
                  </li>
                  <li>
                    Organize local events and meetups: Host engaging events,
                    workshops, and meetups (virtually or in-person) to foster a
                    learning community and connect like-minded individuals in
                    Mongolia.
                  </li>
                  <li>
                    Produce podcasts and blogs: Share valuable content,
                    including podcasts and blog posts, to educate and inspire
                    others in your local community.
                  </li>
                  <li>
                    Self-financed initiative: As an Event Ambassador, you are a
                    volunteer and responsible for covering your event costs. If
                    sponsorship is needed, ensure that potential sponsors align
                    with the mission and values of the community.
                  </li>
                  <li>
                    Consistent local engagement: Host meetups for your community
                    at least once every quarter, providing regular opportunities
                    for connection and learning.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-8 mb-4">
                  Why become an Ambassador?
                </h3>
                <p className="mb-4">
                  Becoming an Ambassador offers you a unique opportunity to make
                  a meaningful impact in your local community while advancing
                  your own skills and career in AI. Here’s why you should join:
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-6 pl-4">
                  <li>
                    <strong>Lead the AI movement in Mongolia</strong>
                    <br />
                    As an Ambassador, you will be at the forefront of
                    establishing the first AI Community Hub in Mongolia,
                    empowering others to learn about AI, machine learning, and
                    deep learning. You’ll play a vital role in shaping the
                    future of tech education locally.
                  </li>
                  <li>
                    <strong>Expand your expertise and skill set</strong>
                    <br />
                    Enhance your leadership, event organization, and public
                    speaking skills by hosting workshops, meetups, and community
                    events. You’ll gain practical experience in facilitating
                    learning and community building, which will be a strong
                    asset in your AI career path.
                  </li>
                  <li>
                    <strong>Access to exclusive resources and support</strong>
                    <br />
                    Ambassadors receive early access to our learning materials,
                    training content, and special events. You’ll be equipped
                    with everything you need to successfully lead AI initiatives
                    in your region.
                  </li>
                  <li>
                    <strong>Build a strong local network</strong>
                    <br />
                    Connect with like-minded AI enthusiasts, developers, and
                    industry experts within Mongolia. As an Ambassador, you’ll
                    foster a community of learners and innovators, creating
                    opportunities for collaboration and shared learning.
                  </li>
                  <li>
                    <strong>Create lasting impact</strong>
                    <br />
                    By organizing events and sharing your knowledge, you’ll
                    inspire others and contribute to the growth of the Mongolian
                    tech ecosystem. Your efforts will help bridge the digital
                    skills gap and provide more people with access to
                    cutting-edge AI education.
                  </li>
                </ol>
                <p className="mb-4">
                  Contribute to a meaningful cause
                  <br />
                  Join a mission-driven initiative aimed at making AI and coding
                  education accessible to everyone in Mongolia. Your leadership
                  will help democratize technology and bring transformative
                  opportunities to diverse groups, including underserved
                  communities.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-[#FF8500]">
            <AccordionTrigger className="flex justify-between items-center">
              <div className="flex items-center justify-start text-start gap-[20px]">
                <div className="">
                  <Image src={nine} alt="" className="h-[18px] w-[18px]" />
                </div>
                <span>
                  <h1 className="font-bold font-adineue text-[24px]">
                    Local meetups and events
                  </h1>
                  <p className="font-bold text-[16px] font-adineue text-[rgba(255,255,255,0.5)]">
                    Connect, Collaborate and Grow Locally
                  </p>
                </span>
              </div>{" "}
              <div className=" text-black font-bold text-[14px] font-neue py-3 px-5 bg-[#FF8500] rounded-[48px]">
                Join our Next Meetup
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-8 mx-auto text-white font-neue ">
                <p className="mb-6">
                  Our community hosts regular meetups and events, bringing
                  together learners, professionals, and AI enthusiasts from
                  across Mongolia. Whether you’re a beginner or an expert, our
                  events offer a platform to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>
                    Learn from local experts: Gain insights from experienced
                    professionals in AI, coding, and digital skills through
                    talks and workshops.
                  </li>
                  <li>
                    Collaborate on local projects: Work with fellow participants
                    on projects that solve real-world problems using AI and
                    digital skills relevant to Mongolia.
                  </li>
                  <li>
                    Build strong local connections: Meet and engage with
                    like-minded individuals who share your passion for
                    technology and innovation in Mongolia.
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-[#785EFF]">
            <AccordionTrigger>
              <div className="flex items-center justify-start text-start gap-[20px]">
                <div className="">
                  <Image src={ten} alt="" className="h-[18px] w-[18px]" />
                </div>
                <span>
                  <h1 className="font-bold font-adineue text-[24px]">
                    Community stories: Celebrating local achievements
                  </h1>
                  <p className="font-bold text-[16px] font-adineue text-[rgba(255,255,255,0.5)]">
                    Inspiring the next generation of AI learners in Mongolia
                  </p>
                </span>
              </div>
              <div className=" text-black font-bold text-[14px] font-neue py-3 px-5 bg-[#785EFF] rounded-[48px]">
                Share Your Story
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-8 mx-auto text-white font-neue ">
                <p className="mb-6">
                  Our community is full of inspiring stories of individuals who
                  have made a difference locally. From students learning to code
                  for the first time to professionals advancing their careers
                  with new AI skills, we celebrate the achievements of our
                  members across Mongolia.
                </p>
                <p className="mb-6">
                  We want to hear from you! Share your journey and the impact
                  our platform has had on your learning experience. Your story
                  could inspire others in Mongolia to embark on their own
                  learning adventure.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-[#FF9FE4]">
            <AccordionTrigger>
              {" "}
              <div className="flex items-center justify-start text-start gap-[20px]">
                <div className="">
                  <Image src={eleven} alt="" className="h-[18px] w-[18px]" />
                </div>
                <span>
                  <h1 className="font-bold font-adineue text-[24px]">
                    Get involved: Make a Local Impact
                  </h1>
                  <p className="font-bold text-[16px] font-adineue text-[rgba(255,255,255,0.5)]">
                    Connect, Collaborate and Grow Locally
                  </p>
                </span>
              </div>
              <div className=" text-black font-bold text-[14px] font-neue py-3 px-5 bg-[#FF9FE4] rounded-[48px]">
                Join Us Today
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-8 mx-auto text-white font-neue ">
                <p className="mb-6">
                  Our community offers many ways to contribute beyond becoming
                  an Ambassador. If you are passionate about AI and digital
                  skills, here’s how you can get involved and make a difference:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>
                    Mentor local learners: Use your expertise to guide and
                    support learners on their journey in AI and coding. Your
                    mentorship can help others gain confidence, develop skills,
                    and achieve their goals..
                  </li>
                  <li>
                    Contribute local content: Share your knowledge by creating
                    valuable content. Write blog posts, develop tutorials, or
                    provide insights on AI trends and challenges specific to
                    Mongolia, helping to educate and inspire others.
                  </li>
                  <li>
                    Engage with the community: Join our discussions, attend
                    events, and actively participate in promoting inclusive
                    digital education across Mongolia. Your voice and
                    involvement can help shape a supportive learning
                    environment.
                  </li>
                  <li>
                    Provide financial aid or sponsorship: Support our mission by
                    offering financial assistance or sponsorship. Whether it’s
                    funding scholarships, donating equipment, or sponsoring an
                    event, your contribution can help make AI education
                    accessible to underserved communities.
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <NewFooter />
    </main>
  );
}
