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

  const handleNextButtonClick = () => {
    setCardState((prevState) => prevState + 1);
  };

  const handleBackButtonClick = () => {
    setCardState((prevState) => prevState - 1);
  };

  return (
    <>
      <AnimatedBackground className="relative max-h-screen blur bg-opacity-100 bg-black h-screen w-full overflow-hidden"></AnimatedBackground>
      <Card
        className="bg-black mt-32 z-1000 absolute left-1/2 top-5 transform -translate-x-1/2 grid col-span-1 gap-4 px-32 pt-24"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <Nav>
          {cardState > 1 ? (
            <Button
              className="z-1000 absolute left-4 top-5"
              onClick={handleBackButtonClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 14 4 9 9 4" />
                <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
              </svg>
            </Button>
          ) : null}
        </Nav>
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
            {cardState < 4 ? (
              <FormField
                name=""
                render={({ field }) => (
                  <FormItem>
                    <Input></Input>
                    <FormControl></FormControl>
                  </FormItem>
                )}
              ></FormField>
            ) : null}
          </Form>
        </FormProvider>
        <Button onClick={handleNextButtonClick}>
          {cardState < 3
            ? cardTexts.buttonNext
            : cardState === 3
            ? cardTexts.buttonFinished
            : cardTexts.buttonNewCount}
        </Button>
      </Card>
    </>
  );
};

export default CalcCard;
