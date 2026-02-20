import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { Button } from './button';

const meta = {
    title: 'Components/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const form = useForm({
            defaultValues: {
                username: '',
                email: '',
            },
        });

        return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => console.log(data))} className="w-[400px] space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>사용자명</FormLabel>
                                <FormControl>
                                    <Input placeholder="사용자명" {...field} />
                                </FormControl>
                                <FormDescription>
                                    공개 프로필에 표시될 이름입니다
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>이메일</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="example@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">제출</Button>
                </form>
            </Form>
        );
    },
};
