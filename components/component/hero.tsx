import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { JSX, SVGProps, Suspense } from "react";
import { SignUpButton, currentUser } from "@clerk/nextjs";
import Script from "next/script";
import { ChefHatIcon } from "lucide-react";
import { UserButtonComp } from "../auth/userButton";

export async function HomeComp() {
  const user = await currentUser();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <ChefHatIcon className="h-6 w-6" />
          <span className="sr-only">RecipeShare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#recipies"
          >
            Recipes
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
            scroll
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
          <UserButtonComp />
        </nav>
      </header>
      <Script
        strategy="afterInteractive"
        src="https://savorsync-status.instatus.com/en/5329dd7e/widget/script.js"
      />
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/hero-stock.jpg"
                width="550"
                priority
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Share Recipes, Discover Flavor!
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join the community that loves cooking as much as you do.
                    Share your recipes and discover new ones.
                  </p>
                </div>
                <div className="flex-col gap-2 min-[400px]:flex-row inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  {!user ? (
                    <SignUpButton redirectUrl="/dashboard">Get started</SignUpButton>
                  ) : (
                    <Link href="/dashboard">Go to dashboard</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          id="recipies"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                Featured Recipes
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What&apos;s Cooking
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our community&apos;s favorite recipes and get inspired
                for your next meal.
              </p>
            </div>
            <div className="grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Doracake</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Recipe 1"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="200"
                    src="/hero-stock.jpg"
                    width="200"
                  />
                  <p className="text-gray-500 dark:text-gray-400">Diabeties</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Stuff</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Recipe 2"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="200"
                    src="/hero-stock.jpg"
                    width="200"
                  />
                  <p className="text-gray-500 dark:text-gray-400">IDK OK?</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Community Loves Us!
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Here&apos;s what some of our members have to say.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Avatar className="w-8 h-8" />
                  <CardTitle>Ben Dover</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">Cool.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar className="w-8 h-8" />
                  <CardTitle>Freda Gomam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Im freeeda gomam.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar className="w-8 h-8" />
                  <CardTitle>Jane Russ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    I love this site!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © RecipeShare. All rights reserved.
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <iframe
            src="https://savorsync-status.instatus.com/embed-status/5329dd7e/light-md"
            width="230"
            height="61"
            frameBorder="0"
            scrolling="no"
            style={{
              border: "none",
            }}
          ></iframe>
        </Suspense>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/tos"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/pp"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
