import { Trophy, Code2, BrainCircuit, Target } from "lucide-react";
import ScrollFloat from "./ScrollFloat";
import Magnet from "./Magnet";
import { motion as Motion } from "motion/react";

const profiles = [
  {
    id: "gfg",
    name: "GeeksforGeeks",
    icon: Trophy,
    description:
      "Solved 800+ problems with a strong focus on data structures and algorithms.",
    url: "https://www.geeksforgeeks.org/user/garvsharmacs21/",
    color: "text-emerald-400",
  },
  {
    id: "codeforces",
    name: "Codeforces",
    icon: Target,
    description: "Expert-rated with consistent performance in contests.",
    url: "https://codeforces.com/profile/garv1202",
    color: "text-sky-400",
  },
  {
    id: "codechef",
    name: "CodeChef",
    icon: Code2,
    description: "3★ coder with hands-on problem solving and long challenges.",
    url: "https://www.codechef.com/users/sonagarvish",
    color: "text-rose-400",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    icon: BrainCircuit,
    description: "Regular problem solving with emphasis on patterns and efficiency.",
    url: "https://leetcode.com/u/garv1202/",
    color: "text-amber-400",
  },
  {
    id: "codolio",
    name: "Codolio",
    icon: Trophy,
    description: "Solved 2000+ problems across platforms; comprehensive competitive programming profile.",
    url: "https://codolio.com/profile/garv_sharma",
    color: "text-purple-400",
  },
];

export const CodingProfilesSection = () => {
  return (
    <section id="coding-profiles" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <ScrollFloat
            as="h2"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-3xl md:text-4xl font-bold"
          >
            Coding Profiles
          </ScrollFloat>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A snapshot of my competitive programming presence across major platforms.
          </p>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map(({ id, name, icon: Icon, description, url, color }, idx) => (
            <Motion.div
              key={id}
              className="gradient-border p-6 card-hover h-full flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.06 }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(139, 92, 246, 0.18)" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{name}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{description}</p>
                </div>
              </div>
              <div className="pt-5 flex justify-end">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/60 hover:text-primary hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
                >
                  <Magnet padding={40} magnetStrength={40}>
                    <span>View Profile</span>
                  </Magnet>
                </a>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
