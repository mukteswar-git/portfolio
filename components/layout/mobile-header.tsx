"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MobileNavigation } from "./sidebar/navigation/mobile-navigation";

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 px-6 backdrop-blur lg:hidden">
      <h1 className="font-heading text-lg font-semibold">Mukteswar</h1>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[320px] p-0">
          <SheetHeader className="border-b px-6 py-5">
            <SheetTitle className="text-lg">Navigation</SheetTitle>
          </SheetHeader>

          <div className="px-4 py-4">
            <MobileNavigation onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
