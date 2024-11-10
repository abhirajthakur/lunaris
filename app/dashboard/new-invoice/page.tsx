"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewInvoicePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would integrate with your backend
      toast({
        title: "Success",
        description: "Invoice created successfully",
      });
      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create invoice",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Create New Invoice</h1>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="client">Client</Label>
                <Input id="client" placeholder="Client name" required />
              </div>

              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" placeholder="0.00" required />
              </div>

              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" required />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Invoice description" />
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                Create Invoice
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
