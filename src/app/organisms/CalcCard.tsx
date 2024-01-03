import React, { useState } from "react";
import { Button } from "../atoms/button";
import { Card } from "../atoms/card";
import { Input } from "@/app/atoms/input";
import Nav from "../molecules/Nav";
import { FormProvider, useForm } from "react-hook-form";
import cardTexts from "./cardTexts";
import AnimatedBackground from "./AnimatedBackground";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/app/atoms/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  estimate: z.number(),
});

const CalcCard = () => {
  const [cardState, setCardState] = useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const methods = useForm();

  const handleButtonClick = () => {
    setCardState((prevState) => prevState + 1);
  };

  return (
    <>
      <AnimatedBackground className="relative max-h-screen blur bg-opacity-100 bg-black h-screen w-full overflow-hidden"></AnimatedBackground>
      <Card
        className="bg-black mt-32 z-1000 absolute left-1/2 top-5 transform -translate-x-1/2 grid col-span-1 gap-4 px-32 pt-24"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <Nav />
        <p className="text-white font-semibold opacity-100 mb-3">
          {cardState === 1
            ? cardTexts.stepOne
            : cardState === 2
            ? cardTexts.stepTwo
            : cardState === 3
            ? cardTexts.stepThree
            : cardTexts.success}
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
        <Button onClick={handleButtonClick}>Další</Button>
      </Card>
    </>
  );
};

export default CalcCard;
