"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { usePersistentCountdown } from "@/hooks/usePersistentCountdown";
import { setAuthCookies } from "@/lib/setCookies";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CounterItem, CounterSeperator } from "../counter/counter";
import { Button } from "../ui/button";
import { ProfileAvatar } from "../user-profile/profile-avatar";
import { useEffect } from "react";

export const Header = () => {
  const router = useRouter();
  const { days, hours, minutes, seconds } = usePersistentCountdown();
  const { data: isLoggedIn } = useAuth();
   console.log("isLoggedIn", isLoggedIn);

  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const userInfo = searchParams.get("userInfo");

    if (accessToken && refreshToken && userInfo) {
      setAuthCookies({
        accessToken,
        refreshToken,
        userInfo,
      });
    }
  }, [searchParams, isLoggedIn]);

  return (
    <header className="shadow-md shadow-black/5 z-20 sticky top-0 bg-white">
      {/* {isVisible && ( */}
      <div className="flex flex-col sm:flex-row py-3 justify-center items-center gap-3 border-b-[1.5px]">
        <div className="flex items-center gap-2">
          <Image src="/clock.svg" width={20} height={20} alt="clock" />
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
              src="/logo.svg"
              width={224}
              height={65}
              alt="Logo"
            />
          </Link>
          <Separator orientation="vertical" className="mr-2" />
          <Image
            className="w-16 h-7 sm:w-[100px] sm:h-[33px]"
            src="/skill-india.svg"
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
          {/* <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/courses" className="font-bold font-stolzl">
                    Courses
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              </NavigationMenuList>
              </NavigationMenu> */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/jobs" className="font-bold font-stolzl">
                    Jobs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div className="border-r-2 h-6"></div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href="/courses" className="font-bold font-stolzl">
                    Courses
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {isLoggedIn ? (
            <>
              <NavigationMenu className="hidden lg:block">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link
                        href="/user/my-courses"
                        className="font-bold font-stolzl"
                      >
                        My Courses
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <ProfileAvatar />
            </>
          ) : (
            <>
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm px-5 py-2 hidden md:block"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                size="lg"
                variant="linearGradient"
                className="rounded-sm px-5 py-2 hidden md:block"
                asChild
              >
                <Link href="/sign-up">Register</Link>
              </Button>
            </>
          )}
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
                onSelect={() => router.push("/jobs")}
              >
                Jobs
              </DropdownMenuItem>
              <DropdownMenuItem
                className="lg:hidden font-medium hover:underline"
                onSelect={() => router.push("/courses")}
              >
                Courses
              </DropdownMenuItem>
              <DropdownMenuItem
                className="font-medium hover:underline"
                onSelect={() => router.push("/blogs")}
              >
                Blogs
              </DropdownMenuItem>
              {isLoggedIn ? (
                <DropdownMenuItem
                  className="lg:hidden font-medium hover:underline"
                  onSelect={() => router.push("/user/my-courses")}
                >
                  My Courses
                </DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem asChild className="md:hidden">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-sm px-5 w-full"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="md:hidden">
                    <Button
                      size="lg"
                      variant="linearGradient"
                      className="rounded-sm px-5 w-full"
                    >
                      <Link href="/sign-up">Register</Link>
                    </Button>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
