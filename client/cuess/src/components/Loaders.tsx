export function CardSkeleton() {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="skeleton h-40 rounded-xl"></div>
      <div className="skeleton h-4 mt-4 w-3/4 rounded"></div>
      <div className="skeleton h-4 mt-2 w-1/2 rounded"></div>
      <div className="skeleton h-9 mt-4 w-24 rounded-xl"></div>
    </div>
  );
}