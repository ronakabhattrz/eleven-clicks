import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Pat Russell",
    role: "Client",
    avatar: "PR",
    text: "Ronak is an extremely skilled developer but what sets him apart are his communication skills. He takes the time to explore projects from the user perspective and understand purpose. After just a few weeks he was as capable as our lead developer who created the software.",
  },
  {
    name: "Timothy Franklyn",
    role: "NSoJ",
    avatar: "TF",
    text: "National School of Journalism and Public Discourse has benefited from Ronak's expertise as a consultant for several years now. He is responsive and provides design solutions to our needs in a timely and effective manner. He has strong technical and problem solving skills. He is also a delight to deal with personally. I strongly recommend him.",
  },
  {
    name: "Brandon Oakley",
    role: "Client",
    avatar: "BO",
    text: "I have been working with Ronak for several months now. He understands our system and what we are trying to accomplish making it easy to discuss projects with him. Ronak is able to dive into an issue and find the resolution as well as think big picture to design and implement new ideas with limited information.",
  },
  {
    name: "Martijn Deinum",
    role: "Client",
    avatar: "MD",
    text: "Ronak has built various websites for my company and we are very satisfied with his service. The quality of the website is really good, he listens very good to your preferences and he is available most of the day. Keep it up!",
  },
  {
    name: "Aran Jagers",
    role: "Client",
    avatar: "AJ",
    text: "We are very delightful to work with Ronak. Always a fast response. Reliable in every way.",
  },
  {
    name: "Long-term Hourly",
    role: "Verified Client · Upwork",
    avatar: "UP",
    text: "Professional and reliable Senior Ruby On Rails Developer. Always delivered work on time. Highly recommend working with Ronak.",
  },
  {
    name: "Custom Rails CMS (milestone)",
    role: "Verified Client · Upwork",
    avatar: "CR",
    text: "Very proactive and experienced RoR developer. Delivered outstanding work for a decent price. It was a very big project with a lot of pressure, but it worked out very well.",
  },
  {
    name: "RoR CMS Changes",
    role: "Verified Client · Upwork",
    avatar: "RC",
    text: "Reliable freelancer with very good understanding of RoR and HTML/CSS/JS. Responding quickly and going that extra mile outside business hours. Recommending his services.",
  },
  {
    name: "Rails Mapping App",
    role: "Verified Client · Upwork",
    avatar: "RM",
    text: "Working with Ronak is a joy! Does excellent work. Great communicator. Looking forward to working with him again.",
  },
  {
    name: "Stripe Webhook Fix",
    role: "Verified Client · Upwork",
    avatar: "SW",
    text: "Great communication, easy to work with, fixed my problem very quickly! Would highly recommend!",
  },
  {
    name: "Investment Platform",
    role: "Verified Client · Upwork",
    avatar: "IP",
    text: "Great communication, quick results, fair price. Thanks for the great work. Would hire again. Amazing work yet again, thank you!",
  },
  {
    name: "React Theme · CRM",
    role: "Verified Client · Upwork",
    avatar: "RT",
    text: "Great work, and listened very carefully to requirements and delivered above expectations.",
  },
  {
    name: "AI VS Code Extension",
    role: "Verified Client · Upwork",
    avatar: "AI",
    text: "Great to work with Ronak for the second time! Would hire again for a third.",
  },
  {
    name: "VS Code Extension",
    role: "Verified Client · Upwork",
    avatar: "VS",
    text: "Hire this guy. The best Upwork has to offer!",
  },
  {
    name: "Swagger API UI",
    role: "Verified Client · Upwork",
    avatar: "SA",
    text: "This is the first time we've worked with Ronak for our Ruby on Rails based projects. I'm delighted to say that the work and communication continues to be of the highest standard.",
  },
  {
    name: "Rails App · Database & Escrow",
    role: "Verified Client · Upwork",
    avatar: "RD",
    text: "Did a great job. Very satisfied with his performance and professionalism. Highly recommend him to anyone.",
  },
  {
    name: "Rails · Immediate Start",
    role: "Verified Client · Upwork",
    avatar: "RI",
    text: "Great job!! Will be moving forward with Ronak with other tasks!",
  },
  {
    name: "Custom Rails CMS",
    role: "Verified Client · Upwork",
    avatar: "CM",
    text: "As always very good to work with.",
  },
  {
    name: "AppLand Extension",
    role: "Verified Client · Upwork",
    avatar: "AL",
    text: "Excellent work! Total pro.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8B5CF6]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-[#06B6D4] uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Trusted by <span className="text-gradient">Growing Businesses</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass border border-white/8 rounded-2xl p-6 h-full flex flex-col">
                <Stars />
                <p className="text-sm text-white/70 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
