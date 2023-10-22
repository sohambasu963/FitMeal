import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Library,
  Store,
  FlaskConical,
  User,
  Settings,
  Bell,
  CreditCard,
  LogOut,
} from 'lucide-react';

export function Navbar({
  className,
  navigateTo,
  currentComponent,
}: React.HTMLAttributes<HTMLDivElement> & {
  navigateTo: (component: string) => void;
  currentComponent: string;
}) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Home
          </h2>
          <div className="space-y-1">
            <Button
              variant={currentComponent === '/dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => navigateTo('/dashboard')}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={currentComponent === '/meals' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => navigateTo('/meals')}
            >
              <Library className="mr-2 h-4 w-4" />
              Meals
            </Button>
            <Button
              variant={
                currentComponent === '/fitness' ? 'default' : 'ghost'
              }
              className="w-full justify-start"
              onClick={() => navigateTo('/fitness')}
            >
              <Store className="mr-2 h-4 w-4" />
              Fitness
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Account
        </h2>
        <div className="space-y-1">
          <Button
            variant={currentComponent === '/profile' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/profile')}
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button
            variant={currentComponent === '/settings' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/settings')}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button
            variant={currentComponent === '/logout' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => navigateTo('/logout')}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
