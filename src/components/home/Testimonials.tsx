"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "Pat Russell",
    role: "Client",
    avatar: "PR",
    text: "Ronak is an extremely skilled developer but what sets him apart are his communication skills. He takes the time to explore projects from the user perspective and understand purpose. After just a few weeks he was as capable as our lead developer who created the software.",
    upwork: false,
  },
  {
    name: "Timothy Franklyn",
    role: "NSoJ",
    avatar: "TF",
    text: "National School of Journalism and Public Discourse has benefited from Ronak's expertise as a consultant for several years now. He is responsive and provides design solutions to our needs in a timely and effective manner. He has strong technical and problem solving skills. I strongly recommend him.",
    upwork: false,
  },
  {
    name: "Brandon Oakley",
    role: "Client",
    avatar: "BO",
    text: "I have been working with Ronak for several months now. He understands our system and what we are trying to accomplish making it easy to discuss projects with him. Ronak is able to dive into an issue and find the resolution as well as think big picture to design and implement new ideas with limited information.",
    upwork: false,
  },
  {
    name: "Martijn Deinum",
    role: "Client",
    avatar: "MD",
    text: "Ronak has built various websites for my company and we are very satisfied with his service. The quality of the website is really good, he listens very good to your preferences and he is available most of the day. Keep it up!",
    upwork: false,
  },
  {
    name: "Aran Jagers",
    role: "Client",
    avatar: "AJ",
    text: "We are very delightful to work with Ronak. Always a fast response. Reliable in every way.",
    upwork: false,
  },
  {
    name: "Long-term Hourly",
    role: "Verified Client",
    avatar: "UP",
    text: "Professional and reliable Senior Ruby On Rails Developer. Always delivered work on time. Highly recommend working with Ronak.",
    upwork: true,
  },
  {
    name: "Custom Rails CMS (milestone)",
    role: "Verified Client",
    avatar: "CR",
    text: "Very proactive and experienced RoR developer. Delivered outstanding work for a decent price. It was a very big project with a lot of pressure, but it worked out very well.",
    upwork: true,
  },
  {
    name: "RoR CMS Changes",
    role: "Verified Client",
    avatar: "RC",
    text: "Reliable freelancer with very good understanding of RoR and HTML/CSS/JS. Responding quickly and going that extra mile outside business hours. Recommending his services.",
    upwork: true,
  },
  {
    name: "Rails Mapping App",
    role: "Verified Client",
    avatar: "RM",
    text: "Working with Ronak is a joy! Does excellent work. Great communicator. Looking forward to working with him again.",
    upwork: true,
  },
  {
    name: "Stripe Webhook Fix",
    role: "Verified Client",
    avatar: "SW",
    text: "Great communication, easy to work with, fixed my problem very quickly! Would highly recommend!",
    upwork: true,
  },
  {
    name: "Investment Platform",
    role: "Verified Client",
    avatar: "IP",
    text: "Great communication, quick results, fair price. Thanks for the great work. Would hire again. Amazing work yet again, thank you!",
    upwork: true,
  },
  {
    name: "React Theme · CRM",
    role: "Verified Client",
    avatar: "RT",
    text: "Great work, and listened very carefully to requirements and delivered above expectations.",
    upwork: true,
  },
  {
    name: "AI VS Code Extension",
    role: "Verified Client",
    avatar: "AI",
    text: "Great to work with Ronak for the second time! Would hire again for a third.",
    upwork: true,
  },
  {
    name: "VS Code Extension",
    role: "Verified Client",
    avatar: "VS",
    text: "Hire this guy. The best Upwork has to offer!",
    upwork: true,
  },
  {
    name: "Swagger API UI",
    role: "Verified Client",
    avatar: "SA",
    text: "This is the first time we've worked with Ronak for our Ruby on Rails based projects. I'm delighted to say that the work and communication continues to be of the highest standard.",
    upwork: true,
  },
  {
    name: "Rails App · Database & Escrow",
    role: "Verified Client",
    avatar: "RD",
    text: "Did a great job. Very satisfied with his performance and professionalism. Highly recommend him to anyone.",
    upwork: true,
  },
  {
    name: "Rails · Immediate Start",
    role: "Verified Client",
    avatar: "RI",
    text: "Great job!! Will be moving forward with Ronak with other tasks!",
    upwork: true,
  },
  {
    name: "Custom Rails CMS",
    role: "Verified Client",
    avatar: "CM",
    text: "As always very good to work with.",
    upwork: true,
  },
  {
    name: "AppLand Extension",
    role: "Verified Client",
    avatar: "AL",
    text: "Excellent work! Total pro.",
    upwork: true,
  },
];

const INITIAL_COUNT = 6;

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, INITIAL_COUNT);

  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="section-label mb-4">WHAT CLIENTS SAY</p>
        <h2 className="text-4xl font-bold text-[#0f0f0f] mb-12">Real results from real projects.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div key={`${t.name}-${i}`} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col">
              <p className="text-yellow-400 text-sm mb-4">★★★★★</p>
              <p className="text-gray-600 leading-relaxed text-sm italic flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5] font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
                {t.upwork && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 shrink-0">
                    Upwork
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200"
            >
              Show all {testimonials.length} reviews
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
