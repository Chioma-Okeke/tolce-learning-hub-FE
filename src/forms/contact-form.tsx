'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Enter a valid email address'),
    message: z.string().min(1, 'Message is required')
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactForm() {
    const [isChecked, setIsChecked] = useState(false)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
    })

    const {
        handleSubmit,
        reset,
        formState: { isDirty },
    } = form

    const onSubmit = async (data: ContactFormValues) => {
        try {
            console.log('Form submitted:', data)
            toast.success("Message sent", {
                description: "You will hear from us soon."
            })
            reset()
        } catch (err) {
            console.error('Failed to submit:', err)
            toast.error("Message not sent", {
                description: 'Failed to send message. Please try again.'
            })
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="xl:flex xl:flex-col xl:justify-center"
            >
                <h1 className="font-semibold text-3xl">Let&apos;s Get in Touch</h1>
                <p className="my-3 text-[#475467]">
                    Our friendly team would love to hear from you
                </p>

                <div className="xs:grid xs:grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="my-4">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="my-4">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="mb-4">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="you@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="my-4">
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Leave us a message" rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex items-center space-x-3 mt-4">
                    <Checkbox
                        checked={isChecked}
                        disabled={!isDirty}
                        onCheckedChange={() => setIsChecked((prev) => !prev)}
                    />
                    <label className="text-sm font-normal">
                        You agree to our friendly{' '}
                        <a href="#" className="underline underline-offset-2 text-[#0020f1]">
                            privacy policy
                        </a>
                    </label>
                </div>

                <Button
                    type="submit"
                    disabled={!isChecked || !isDirty}
                    className={`cursor-pointer bg-[#0020F1] text-white text-center w-full py-4 px-6 rounded-lg mt-8 transition ease-linear`}
                >
                    Send message {isChecked}
                </Button>
            </form>
        </Form>
    )
}
