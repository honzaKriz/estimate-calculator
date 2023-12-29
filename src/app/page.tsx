"use client";
import Nav from "@/components/Nav";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
    <>
      <AnimatedBackground className="relative max-h-screen blur bg-opacity-100 bg-black h-screen w-full overflow-hidden"></AnimatedBackground>
      <Card
        className="bg-black mt-32 z-1000 absolute left-1/2 top-5 transform -translate-x-1/2 grid col-span-1 gap-4 px-32"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <p className="text-white font-semibold opacity-100">
          Ujisti se, že sis přečetl zadání a akceptační kritéria tvého úkolu.
          Pokud je ti vše jasné, představ si, kolik času ti zabere vývoj řešení
          za ideálního stavu, kdy vše funguje, jak předpokládáš, na ničem se
          nezasekneš, a řešení se ti nevrátí z code review ani testingu.
        </p>
        <FormProvider {...methods}>
          <Form {...form}>
            <FormField
              name=""
              render={({ field }) => (
                <FormItem>
                  <Input></Input>
                  <FormControl></FormControl>
                </FormItem>
              )}
            ></FormField>
          </Form>
        </FormProvider>
        <Button>Další</Button>
      </Card>
    </>
  );
}
