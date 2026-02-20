import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[450px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>환자 정보는 어떻게 관리하나요?</AccordionTrigger>
                <AccordionContent>
                    환자 정보는 안전하게 암호화되어 저장되며, 의료법에 따라 엄격하게 관리됩니다.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>예약은 어떻게 하나요?</AccordionTrigger>
                <AccordionContent>
                    온라인 또는 전화로 예약하실 수 있습니다. 예약 시스템을 통해 실시간으로 가능한 시간을 확인할 수 있습니다.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>진료 기록은 어디서 확인하나요?</AccordionTrigger>
                <AccordionContent>
                    마이페이지에서 과거 진료 기록을 모두 확인하실 수 있습니다.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const Multiple: Story = {
    render: () => (
        <Accordion type="multiple" className="w-[450px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>진료 시간</AccordionTrigger>
                <AccordionContent>
                    평일: 오전 9시 - 오후 6시<br />
                    토요일: 오전 9시 - 오후 1시<br />
                    일요일 및 공휴일: 휴진
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>주차 안내</AccordionTrigger>
                <AccordionContent>
                    건물 지하 1층에 무료 주차장이 있습니다. 진료 확인증을 제시하시면 2시간 무료 주차가 가능합니다.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>보험 적용</AccordionTrigger>
                <AccordionContent>
                    대부분의 진료는 건강보험이 적용됩니다. 자세한 사항은 접수 시 문의해주세요.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};
