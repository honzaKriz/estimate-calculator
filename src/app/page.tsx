"use client";
import Nav from "@/components/Nav";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  estimate: z.number(),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const methods = useForm();
  return (
    <main className="flex min-h-screen flex-col p-16">
      <Nav />
      <Card className="bg-white place-self-center">
        <p>This is inside the card component.</p>
        <FormProvider {...methods}>
          <Form {...form}>
            <FormField
              name=""
              render={({ field }) => (
                <FormItem>
                  <Input></Input>
                  <FormLabel>Label for the field</FormLabel>
                  <FormControl></FormControl>
                  <FormDescription>
                    What is your estimate for this task?
                  </FormDescription>
                  <FormMessage>Any error or info messages</FormMessage>
                </FormItem>
              )}
            ></FormField>
          </Form>
        </FormProvider>
      </Card>
    </main>
  );
}
