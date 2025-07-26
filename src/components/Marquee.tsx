import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Aarav Sharma",
    username: "@aaravsharma",
    body: "The Recharge App is fantastic! I earned ₹500 through referrals in just a week. Highly recommend!",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    name: "Pranav Kumar",
    username: "@pranavkumar",
    body: "Recharging my phone has never been easier, and the referral bonuses are amazing! Got ₹300 already!",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Priya Sharma",
    username: "@priyasharma ",
    body: "Love the Recharge App! Super fast recharges and earned ₹400 by inviting friends. Awesome!",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Ananya Gupta",
    username: "@ananyagupta",
    body: "The referral program is a game-changer! I earned ₹600 just by sharing the Recharge App with friends.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Rohan Mehta",
    username: "@rohanmehta",
    body: "Quick recharges and great rewards! Earned ₹450 through referrals in no time. Love this app!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Sneha Reddy",
    username: "@snehareddy",
    body: "The Recharge App is so user-friendly, and the referral earnings are real! Got ₹550 last month!",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border p-6",
        "border-gray-900 bg-black/80 hover:bg-black/80 text-white dark:border-gray-50/[0.2]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image className="rounded-full w-[48px] h-[48px] object-cover" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-base text-gray-200">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
    </div>
  );
}