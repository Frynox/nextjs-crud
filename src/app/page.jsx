import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";
async function loadTask() {
  /*const res = await fetch('http://http://localhost:3000/api/tasks')
  const data = await res.json()

  console.log(data)*/

  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTask();
  console.log(tasks);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
