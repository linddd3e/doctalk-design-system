import type { Meta, StoryObj } from '@storybook/react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './navigation-menu';

const meta = {
    title: 'Components/NavigationMenu',
    component: NavigationMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>진료과</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[400px]">
                            <li>
                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium leading-none">내과</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        일반 내과 진료
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium leading-none">외과</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        외과 수술 및 치료
                                    </p>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>예약</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[400px]">
                            <li>
                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium leading-none">온라인 예약</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        온라인으로 예약하기
                                    </p>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    ),
};
