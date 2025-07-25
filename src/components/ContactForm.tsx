"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <form className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input id="name" name="name" type="text" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <Textarea id="message" name="message" placeholder="Message" rows={4} />
        </div>
        <div>
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </motion.div>
  );
}
