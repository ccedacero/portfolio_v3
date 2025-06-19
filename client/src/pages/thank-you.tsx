import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-md w-full p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Message Sent Successfully!
        </h1>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. I'll get back to you within 24-48 hours.
        </p>
        <Link href="/">
          <Button className="w-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </Card>
    </div>
  );
}