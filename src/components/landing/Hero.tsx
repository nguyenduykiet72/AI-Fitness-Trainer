import { SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { Calendar, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* GRID BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              <div className="space-y-6">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">AI-Powered Dental Assistant</span>
                </div>
                {/* MAIN HEADER */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your dental
                  </span>
                  <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    answered instantly.
                  </span>
                </h1>
                {/* SUBHEADER */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Chat with our AI-powered dental assistant to get instant, accurate answers to all your dental care
                  questions. Experience personalized dental advice like never before.
                </p>
                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <SignUpButton mode="modal">
                    <Button size={"lg"}>
                      <MicIcon className="mr-2 size-5" />
                      Try voice agent
                    </Button>
                  </SignUpButton>
                  <SignUpButton mode="modal">
                    <Button size={"lg"} variant={"outline"}>
                      <Calendar className="mr-2 size-5" />
                      Book appointment
                    </Button>
                  </SignUpButton>
                </div>
                {/* USER TESTIMONIALS */}
                <div className="pt-8">
                  <div className="flex items-center gap-6">
                    {/* USER AVATARS */}
                    <div className="flex -space-x-3">
                      <Image
                        src="/user01.jpg"
                        alt="User 01"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="/user01.jpg"
                        alt="User 01"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="/user01.jpg"
                        alt="User 01"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="/user01.jpg"
                        alt="User 01"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="/user01.jpg"
                        alt="User 01"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                    </div>

                    {/* RATING AND STATS */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => {
                            return <StarIcon key={star} className="size-4 fill-amber-400 text-amber-400" />;
                          })}
                        </div>
                        <span className="text-sm font-bold text-foreground">5/5</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Trusted by <span className="font-semibold text-foreground">50,000+ patients worldwide</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - HERO IMAGE */}
            <div className="relative lg:pl-8">
              {/* GRADIENT ORBS */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl" />
              <Image
                src="/hero.png"
                alt="DentWise AI Dental Assistant"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
