"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
    name: z.string().min(1).trim(),
    isPublic: z.boolean()
})

type FormData = z.infer<typeof formSchema>;

export default function NewRoomPage() {

    const form = useForm<FormData>({
        defaultValues: {
            name: "",
            isPublic: false,
        },
        resolver: zodResolver(formSchema),
    })

    function handleSubmit(data: FormData) {
        console.log(data);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="w-full max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>New Room</CardTitle>
                    <CardDescription>Create a new chat room</CardDescription>
                </CardHeader>

                <form onSubmit={form.handleSubmit(handleSubmit)}></form>
            </Card>
        </div>
    )
}