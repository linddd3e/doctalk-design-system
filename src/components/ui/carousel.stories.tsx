import type { Meta, StoryObj } from '@storybook/react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './carousel';
import { Card, CardContent } from './card';

const meta = {
    title: 'Components/Carousel',
    component: Carousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    ),
};

export const PatientCards: Story = {
    render: () => (
        <Carousel className="w-full max-w-md">
            <CarouselContent>
                {['김민수', '이영희', '박철수', '정수진'].map((name, index) => (
                    <CarouselItem key={index}>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lg mb-2">{name}</h3>
                                <p className="text-sm text-muted-foreground">환자 ID: P{String(index + 1).padStart(3, '0')}</p>
                                <p className="text-sm text-muted-foreground">나이: {40 + index * 5}세</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    ),
};
