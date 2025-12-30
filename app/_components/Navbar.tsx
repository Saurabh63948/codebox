import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import courses from "./courses"

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-8" >
        {/* COURSES */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-3 p-4 sm:w-[400px] md:w-[500px] lg:w-[600px]">
              {courses.map((item) => (
                <li key={item.id} className="rounded-md p-2 hover:bg-muted">
                  <NavigationMenuLink asChild>
                    <Link href={item.path}>
                      <div>
                        <h2 className="text-sm font-semibold">
                          {item.name}
                        </h2>
                        <p className="text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* PROJECT */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/project">Project</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* PRICING */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* CONTACT */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contact-us">Contact Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
