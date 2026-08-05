export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1">
      <span className="h-2 w-2 rounded-full bg-success" />

      <span className="text-success text-sm font-medium">
        Available for Work
      </span>
    </div>
  );
}
