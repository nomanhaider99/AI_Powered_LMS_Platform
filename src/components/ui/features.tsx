import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Ayesha Khan",
    username: "@ayesha",
    body: "This platform makes studying so much easier. I can generate notes in seconds and send them to Google Docs without any hassle.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Michael Smith",
    username: "@michael",
    body: "Honestly, this is a game-changer. My revision notes are clear, structured, and ready to use. Highly recommend it!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Ali Raza",
    username: "@ali",
    body: "I used to spend hours rewriting notes. Now, with a single prompt, I get everything organized perfectly. Brilliant tool.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Emily Johnson",
    username: "@emily",
    body: "Perfect for my online classes. The AI-generated notes are neat and exporting to Google Docs is super smooth.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Haris Ahmed",
    username: "@haris",
    body: "As a student, this saves me so much time. My notes are always clear and I can focus more on learning than formatting.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Sophie Taylor",
    username: "@sophie",
    body: "I love how simple it is. Just type a prompt, get notes, and move them to Docs. Makes revision stress-free.",
    img: "https://avatar.vercel.sh/james",
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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Features() {
  return (
    <div className="relative flex w-full md:w-3/4 flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
