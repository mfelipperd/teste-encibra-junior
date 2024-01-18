export interface TaskCardProps {
    task: {
      id: string;
    title: string;
    description: string;
    finished: boolean;
    term: string | null;
    priority: number;
    user?:string
    },
    fetchUserData:() => Promise<void>
  }

export interface TasksListProps{
  title:string
  tipo: boolean
}