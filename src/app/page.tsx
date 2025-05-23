import StatusLabel, { Status } from '@/app/components/status-lable';

export default function Home() {
  return (
    <main>
      <h1 className="text-7xl">Home Page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>

      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not-Active</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
