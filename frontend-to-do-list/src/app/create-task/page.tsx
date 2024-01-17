import NavigationBar from "@/components/navbar";
import TaskForm from "@/components/task-form"

export default function CreateTask() {
    return(
        <>
        <NavigationBar/>
        <div className="flex h-screen p-5 flex-col items-center justify-center bg-gray-200">
        <TaskForm />
        </div>
        </>
    )
}