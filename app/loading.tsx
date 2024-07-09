export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className={"flex w-screen m-auto h-full items-center"}>
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );
}
