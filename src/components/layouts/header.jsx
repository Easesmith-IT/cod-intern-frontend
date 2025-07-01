import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="shadow-md shadow-black/5 relative z-10">
      <div className="flex py-3 justify-center items-center gap-3 border-b-[1.5px]">
        <div className="flex items-center gap-2">
          <Image src="./clock.svg" width={20} height={20} alt="clock" />
          <p className="font-stolzl text-base">
            Limited Time Offer - Hurry Up!
          </p>
        </div>
        <div className="flex items-center font-stolzl">
          <div className="flex justify-center border w-8 h-8 rounded items-center p-2">
            6
          </div>
          <p className="px-2">:</p>
          <div className="flex justify-center border w-8 h-8 rounded items-center p-2">
            23
          </div>
          <p className="px-2">:</p>
          <div className="flex justify-center border w-8 h-8 rounded items-center p-2">
            59
          </div>
          <p className="px-2">:</p>
          <div className="flex justify-center border w-8 h-8 rounded items-center p-2">
            45
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-between section-container py-2">
        <div className="flex gap-1 items-center">
          <Image src="./logo.svg" width={224} height={65} alt="logo" />
          <Separator orientation="vertical" />
          <Image src="./skill-india.svg" width={201} height={53} alt="logo" />
        </div>
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-stolzl">
                  Jobs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="md:w-40">
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-stolzl">
                  Courses{" "}
                  <div className="bg-[#E32420] px-2 py-0.5 uppercase rounded-md ml-2 text-sm text-white">
                    offer
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="md:w-40">
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="outline" size="lg" className="rounded-sm px-5">
            Login
          </Button>
          <Button
            size="lg"
            variant="linearGradient"
            className="rounded-sm px-5"
          >
            Register
          </Button>
          <Button
            size="icon"
            className="rounded-sm size-10 [&_svg:not([class*='size-'])]:size-6"
          >
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};
