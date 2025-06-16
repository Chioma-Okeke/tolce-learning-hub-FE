"use client"

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const joinUsSchema = z.object({
    email: z.string().email('Please enter a valid email address')
})

export type JoinUsFormValues = z.infer<typeof joinUsSchema>;

export const JoinUs = () => {

    const form = useForm<JoinUsFormValues>({
        resolver: zodResolver(joinUsSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (data: JoinUsFormValues) => {
        console.log(data, "logged data")
        form.reset()
        toast.success("Email sent", {
            description: "You will hear from us soon."
        })
    }

    const { isDirty, isSubmitting } = form.formState

    return (
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between pb-12 ">
            <div className="flex flex-col gap-1 flex-1">
                <h1 className="font-bold text-2xl">Join our newsletter</h1>
                <p className="">
                    Get all the latest TOLCE learning hub news delivered to your
                    inbox.
                </p>
            </div>
            <div className="flex flex-1 lg:justify-end">
                <div className="relative w-full md:w-[486px]">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full flex flex-col gap-2 md:flex-row md:items-end"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email <span className="text-xs text-red-600">*</span></FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your email"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={!isDirty || isSubmitting}>
                                Subscribe
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
