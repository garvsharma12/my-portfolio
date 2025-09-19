import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ScrollFloat from "./ScrollFloat";
import Stepper, { Step } from "./Stepper";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const defaultRecipient = "garv.sharma1202@gmail.com";

  const submitMessage = async () => {
    // Basic validation
    const n = name.trim();
    const e = email.trim();
    const m = message.trim();
    if (!n || !e || !m) {
      toast({ title: "Please fill all fields", description: "Name, email, and message are required." });
      return false;
    }
    const emailOk = /.+@.+\..+/.test(e);
    if (!emailOk) {
      toast({ title: "Invalid email", description: "Please enter a valid email address." });
      return false;
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
    const subject = `New portfolio message from ${n}`;

    try {
      setIsSubmitting(true);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name: n, email: e, message: m, subject, to: defaultRecipient }),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      // Reset fields
      setName("");
      setEmail("");
      setMessage("");
      return true;
    } catch (_err) {
      // Fallback to mailto if backend fails
      const body = `Name: ${encodeURIComponent(n)}%0D%0AEmail: ${encodeURIComponent(e)}%0D%0A%0D%0A${encodeURIComponent(m)}`;
      window.location.href = `mailto:${defaultRecipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
      if (import.meta.env?.DEV) {
        console.warn('Contact submit failed, using mailto fallback:', _err);
      }
      toast({
        title: "Opening mail client…",
        description: `If it doesn't open, email me at ${defaultRecipient}.`,
      });
      return true; // allow stepper to complete after falling back
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-4 text-center">
          <ScrollFloat
            as="h2"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-3xl md:text-4xl font-bold"
          >
            Get In Touch
          </ScrollFloat>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
          <div className="p-8 rounded-lg shadow-xs overflow-hidden bg-background/30 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <Stepper
              initialStep={1}
              onStepChange={(s) => setCurrentStep(s)}
              onBeforeNext={(from) => {
                if (from === 1) {
                  const ok = name.trim().length > 0;
                  if (!ok) toast({ title: "Name required", description: "Please enter your name to continue." });
                  return ok;
                }
                if (from === 2) {
                  const ok = /.+@.+\..+/.test(email.trim());
                  if (!ok) toast({ title: "Valid email required", description: "Please enter a valid email." });
                  return ok;
                }
                if (from === 3) {
                  const ok = message.trim().length > 0;
                  if (!ok) toast({ title: "Message required", description: "Please write a brief message." });
                  return ok;
                }
                return true;
              }}
              onBeforeComplete={submitMessage}
              nextButtonText={isSubmitting ? "Sending..." : "Next"}
              nextButtonProps={{
                disabled:
                  isSubmitting ||
                  (currentStep === 1 && name.trim().length === 0) ||
                  (currentStep === 2 && !/.+@.+\..+/.test(email.trim())) ||
                  (currentStep === 3 && message.trim().length === 0),
              }}
              backButtonProps={{ disabled: isSubmitting }}
              completeButtonText={isSubmitting ? "Sending..." : "Complete"}
              compact
              disableStepIndicators
            >
              <Step>
                <h4 className="text-xl font-semibold mb-2">Your Name</h4>
                <p className="text-sm text-muted-foreground mb-4">How should I address you?</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Narayan"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </Step>
              <Step>
                <h4 className="text-xl font-semibold mb-2">Your Email</h4>
                <p className="text-sm text-muted-foreground mb-4">Where can I reply?</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </Step>
              <Step>
                <h4 className="text-xl font-semibold mb-2">Your Message</h4>
                <p className="text-sm text-muted-foreground mb-4">What would you like to talk about?</p>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
              </Step>
              <Step>
                <h4 className="text-xl font-semibold mb-3">Review & Send</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Name:</span> {name || "—"}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email:</span> {email || "—"}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Message:</span>
                    <div className="mt-1 whitespace-pre-line bg-background border border-input rounded-md p-3">{message || "—"}</div>
                  </div>
                  <p className="text-muted-foreground pt-2">Press <span className="font-medium">Complete</span> to send your message.</p>
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
      </div>
    </section>
  );
};
