"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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
                <CardContent>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <FieldGroup>
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor={field.name}>
                                            Room Name
                                        </FieldLabel>
                                        <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />
                                        {
                                            fieldState.error && (
                                                <FieldError
                                                    errors={[fieldState.error]} />
                                            )
                                        }
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}