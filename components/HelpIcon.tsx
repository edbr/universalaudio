"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";

interface HelpIconProps {
  title: string;
  description: string;
}

export function HelpIcon({ title, description }: HelpIconProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="text-muted-foreground hover:text-foreground transition"
          aria-label="Help information"
        >
          <HelpCircle size={18} />
        </button>
      </DialogTrigger>

      <DialogContent className="bg-card border border-border">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="pt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
