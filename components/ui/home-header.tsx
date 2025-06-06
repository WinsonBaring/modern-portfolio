import { ModeToggle } from '@/components/ui/theme-toggle';
import {
    SidebarInset,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { Separator } from '@radix-ui/react-separator';
import { Rocket, Link, Menu } from 'lucide-react';
import { Button } from '../ui/button';

export default function HomeHeader () {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <SidebarTrigger/>
                        {/* <Separator/> */}
                        {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                            <Rocket className="h-4 w-4 text-primary-foreground" />
                        </div> */}
                       
                    </div>

                </div>
            </header>
    );
};