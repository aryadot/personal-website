import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCreateMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const validated = api.messages.create.input.parse(data);
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          // Fallback parsing if backend doesn't perfectly match
          const error = api.messages.create.responses[400].safeParse(errorData);
          throw new Error(error.success ? error.data.message : "Validation failed");
        }
        throw new Error("Failed to send message");
      }
      
      const dataOut = await res.json();
      return api.messages.create.responses[201].parse(dataOut);
    },
    onSuccess: () => {
      toast({
        title: "Transmission successful",
        description: "Your message has been received. I'll process it shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Transmission failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
