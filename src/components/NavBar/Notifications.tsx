import { getNotifications, markNotificationAsRead } from '@/api/main/mainAPI';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Bell } from 'lucide-react';

interface Notification {
  id: number;
  message: string;
  title: string;
  isRead: string;
}

export function Notifications() {
  const quertyClient = useQueryClient();

  const { data: notifications, isLoading } = useQuery<Notification[]>({
    queryKey: ['notifications'],
    queryFn: () => getNotifications(),
  });

  const markAsReadMutation = useMutation({
    mutationKey: ['markAsRead'],
    mutationFn: (id: number) => markNotificationAsRead(id),
    onSuccess: () => {
      quertyClient.invalidateQueries(['notifications']);
    },
    onError: () => {},
  });

  function hanleMarkAsRead(id: number) {
    markAsReadMutation.mutate(id);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative">
          <Bell className="h-6 w-6 hover:text-muted-foreground cursor-pointer" />
          <div
            className={`absolute top-0 right-0 w-2 h-2 rounded-full ${notifications?.some(notification => !notification.isRead) ? 'bg-red-500' : ''}`}
          ></div>
        </div>
      </PopoverTrigger>
      <PopoverContent sideOffset={12} className="w-80 left-10">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Notifications</h4>
          </div>
          <div className="h-80 overflow-y-auto flex items-start border-1 rounded-md">
            <div className="flex flex-col p-1 w-full">
              {notifications?.map(notification => (
                <>
                  <div
                    key={notification.id}
                    className={`hover:bg-gray-100 p-2 w-full cursor-pointer ${!notification.isRead ? 'bg-gray-200' : ''}`}
                    onClick={() => {
                      if (!notification.isRead) {
                        hanleMarkAsRead(notification.id);
                      }
                    }}
                  >
                    <h5 className="text-md">{notification.title}</h5>
                    <p className="text-sm">{notification.message}</p>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Notifications;
