export default function Loading() {
  return (
    <div className="container-page py-10 animate-[fade-in_0.2s_ease-out]">
      <div className="h-10 w-64 skeleton" />
      <div className="mt-3 h-5 w-full max-w-md skeleton" />
      <div className="mt-8 h-11 w-full skeleton" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-soft"
          >
            <div className="flex items-start gap-3">
              <div className="size-14 rounded-full skeleton" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-2/3 skeleton" />
                <div className="h-3 w-5/6 skeleton" />
                <div className="h-3 w-1/2 skeleton" />
              </div>
            </div>
            <div className="mt-4 h-16 skeleton" />
          </div>
        ))}
      </div>
    </div>
  );
}
