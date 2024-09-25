"use client";
import UAParser from "ua-parser-js";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import formSchema from "@/description/zod";
import { submitInquiry } from "@/actions/submit";
import { useState } from "react";

const InquiryForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      car: "",
      phone: "",
      agreement: true,
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    if (!data.agreement) {
      return alert("개인 정보 수집/이용 동의를 해야 합니다.");
    }
    const result = await submitInquiry(data);

    if (result.message) {
      alert(result.message);
      form.reset();
      setIsLoading(false);
    }
  };

  const uap = new UAParser();

  return (
    <Form {...form}>
      <form
        id="inquiry-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-12 space-y-8 xl:px-12 scroll-my-60 text-primaryFormText"
      >
        <FormField
          control={form.control}
          name="car"
          render={({ field }) => (
            <FormItem className="flex items-center gap-8">
              <FormLabel className="h-full font-medium !twenty">
                차량명
              </FormLabel>
              <FormControl>
                <Input
                  className="!mt-0"
                  placeholder="차량 모델명을 입력해 주세요"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex items-center gap-8">
              <FormLabel className="h-full font-medium !twenty">
                핸드폰
              </FormLabel>
              <FormControl>
                <Input
                  className="!mt-0"
                  placeholder="010"
                  {...field}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length > 3 && value.length <= 7) {
                      value = `${value.slice(0, 3)}-${value.slice(3)}`;
                    } else if (value.length > 7) {
                      value = `${value.slice(0, 3)}-${value.slice(
                        3,
                        7
                      )}-${value.slice(7, 11)}`;
                    }
                    field.onChange(value.slice(0, 13));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-4">
              <FormControl>
                <Checkbox
                  className="size-4 rounded-none border-black"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-base -translate-y-0.5">
                개인 정보 수집/이용 동의
              </FormLabel>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="!twenty flex items-center mx-auto py-3 xl:pr-8 h-full leading-relaxed xl:leading-none flex-wrap whitespace-pre-line relative hover:-translate-y-2 transition-all duration-300 gap-2"
        >
          30초만에 내차 최고가 시세 조회 Click
          <Image
            src="/img/click.svg"
            className="bg-transparent float-right xl:absolute size-6 right-2 -translate-y-0.5"
            alt="클릭"
            width={24}
            height={24}
          />
        </Button>
      </form>
    </Form>
  );
};

export default InquiryForm;
