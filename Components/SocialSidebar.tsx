import { Facebook, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    color: "text-blue-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    color: "text-pink-500",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    color: "text-sky-500",
  },
];

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 z-40 -translate-y-1/2 hidden lg:flex flex-col gap-2">
      {socials.map((item) => {
        const Icon =
          item.name === "Facebook"
            ? Facebook
            : item.name === "Instagram"
            ? Instagram
            : Twitter;

        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="-translate-x-[80px] flex w-[130px] items-center justify-end rounded-r-lg border border-border bg-background/90 px-3 py-2 text-sm font-medium text-foreground shadow-md transition-transform duration-500 ease-out hover:translate-x-0"
          >
            <div className="flex items-center gap-2">
              <span>{item.name}</span>
              <Icon className={`h-4 w-4 ${item.color}`} />
              <span className="text-xs text-muted-foreground">&rarr;</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialSidebar;
