"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { CounterItem, CounterSeperator } from "../counter/counter";
import { usePersistentCountdown } from "@/hooks/usePersistentCountdown";
import { useEffect, useState } from "react";
import { throttle } from "lodash";

export const Header = () => {
  const router = useRouter();
  const { days, hours, minutes, seconds } = usePersistentCountdown();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const shouldBeVisible = scrollTop <= 200;

      setIsVisible((prev) =>
        prev !== shouldBeVisible ? shouldBeVisible : prev
      );
    }, 500); // runs at most once every 100ms

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="shadow-md shadow-black/5 z-20 sticky top-0 bg-white">
      {/* {isVisible && ( */}
        <div className="flex flex-col sm:flex-row py-3 justify-center items-center gap-3 border-b-[1.5px]">
          <div className="flex items-center gap-2">
            <Image src="./clock.svg" width={20} height={20} alt="clock" />
            <p className="font-stolzl text-xs md:text-base">
              Limited Time Offer - Hurry Up!
            </p>
          </div>
          <div className="flex items-center font-stolzl text-xs md:text-base">
            <CounterItem value={days} />
            <CounterSeperator />
            <CounterItem value={hours} />
            <CounterSeperator />
            <CounterItem value={minutes} />
            <CounterSeperator />
            <CounterItem value={seconds} />
          </div>
        </div>
      {/* )} */}

      <div className="flex gap-4 justify-between section-container py-2">
        <div className="flex gap-1 items-center">
          <Link href="/">
            <Image
              className="w-[160px] h-14 sm:w-[224px] sm:h-[65px]"
              src="./logo.svg"
              width={224}
              height={65}
              alt="logo"
            />
          </Link>
          <Separator orientation="vertical" className="mr-2" />
          <Image
            className="w-16 h-7 sm:w-[100px] sm:h-[33px]"
            src="./skill-india.svg"
            width={100}
            height={33}
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <span>Jobs</span>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="start"
              className="space-y-2 px-2 w-40"
            >
              <DropdownMenuItem className="font-medium hover:underline">
                Coming Soon
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          {/* <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Courses{" "}
                <div className="bg-[#E32420] px-2 py-0.5 uppercase rounded-md ml-2 text-sm text-white">
                  offer
                </div>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={10}
              side="bottom"
              align="start"
              className="space-y-2 px-2 w-40"
            >
              <DropdownMenuItem className="font-medium hover:underline">
                Coming Soon
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-stolzl">
                  Jobs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="md:w-40">
                    <NavigationMenuLink>Coming Soon</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link
                    href="/course-details/123"
                    className="font-bold font-stolzl"
                  >
                    Course
                  </Link>
                </NavigationMenuLink>
                {/* <NavigationMenuTrigger className="bg-transparent font-stolzl">
                  Courses{" "}
                  <div className="bg-[#E32420] px-2 py-0.5 uppercase rounded-md ml-2 text-sm text-white">
                    offer
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="md:w-44">
                    <NavigationMenuLink>Coming Soon</NavigationMenuLink>
                  </div>
                </NavigationMenuContent> */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            variant="outline"
            size="lg"
            className="rounded-sm px-5 hidden md:block"
          >
            Login
          </Button>
          <Button
            size="lg"
            variant="linearGradient"
            className="rounded-sm px-5 hidden md:block"
          >
            Register
          </Button>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="rounded-sm size-10 [&_svg:not([class*='size-'])]:size-6"
              >
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={10}
              side="right"
              align="start"
              className="space-y-2 px-2 w-40"
            >
              <DropdownMenuItem
                className="font-medium hover:underline"
                onSelect={() => router.push("/about-us")}
              >
                About Us
              </DropdownMenuItem>
              <DropdownMenuItem
                className="font-medium hover:underline"
                onSelect={() => router.push("/contact-us")}
              >
                Contact Us
              </DropdownMenuItem>
              <DropdownMenuItem
                className="font-medium hover:underline"
                onSelect={() => router.push("/feedback")}
              >
                Feedback Form
              </DropdownMenuItem>
              <DropdownMenuItem
                className="lg:hidden font-medium hover:underline"
                onSelect={() => {}}
              >
                Jobs
              </DropdownMenuItem>
              <DropdownMenuItem
                className="lg:hidden font-medium hover:underline"
                onSelect={() => {}}
              >
                Courses
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="md:hidden">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-sm px-5 w-full"
                >
                  Login
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="md:hidden">
                <Button
                  size="lg"
                  variant="linearGradient"
                  className="rounded-sm px-5 w-full"
                >
                  Register
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
