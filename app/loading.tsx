export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="animate-pulse">
          <div className="h-8 bg-surface rounded-lg w-3/4 mx-auto mb-6"></div>
          <div className="space-y-3">
            <div className="h-32 bg-surface rounded-lg"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-24 bg-surface rounded-lg"></div>
              <div className="h-24 bg-surface rounded-lg"></div>
            </div>
            <div className="h-16 bg-surface rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
