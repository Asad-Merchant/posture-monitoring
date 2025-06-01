import { cn } from "@/lib/utils";
import { Marquee } from "../components/magicui/marquee";
import { BlurFade } from "./magicui/blur-fade";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "This device has been a game-changer for my back pain! It's so subtle, I barely notice it, but the gentle reminders have made a huge difference in how I sit and stand throughout the day. The app is also fantastic for tracking my progress.",
    img: "/images/avatar1.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I was surprised at how much I actually slouched! The software's visual feedback is really eye-opening, and the exercises are easy to follow. Definitely worth it for anyone serious about improving their posture and overall comfort.",
    img: "/images/avatar2.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "The hardware is comfortable to wear, and the battery lasts all day. I love being able to see my posture score improve over time in the app. It's motivating and has helped me become much more aware of my body alignment.",
    img: "/images/avatar3.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Finally, a solution that actually works! I've tried other posture correctors, but this one is different. The combination of the gentle device and the informative software provides a holistic approach to building better posture habits. Highly recommend!",
    img: "/images/avatar4.avif",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "As someone who works at a desk all day, this has been a lifesaver for my neck and shoulders. The device is unobtrusive, and the app gives me clear, actionable steps to improve my posture. I've noticed a significant reduction in stiffness.",
    img: "/images/avatar5.avif",
  },
  {
    name: "James",
    username: "@james",
    body: "I appreciate how the software personalizes the experience. The exercises are tailored to my specific needs, and the progress tracking keeps me motivated. It's like having a personal posture coach right with me.",
    img: "/images/avatar6.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function Review() {
  return (
    <BlurFade delay={0.25} inView>
        <p className='text-white text-6xl font-bold text-center mt-[44px]'>
            Reviews
        </p>
        <div className="mt-5 relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className={cn("[--duration:40s]")}>
                {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]">
                {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/60"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/60"></div>
            </div>
    </BlurFade>
  );
}
