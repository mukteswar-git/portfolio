import { AvailabilityBadge } from "@/components/common/availability-badge";

export function Credentials() {
  return (
    <div className="space-y-2 text-center">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          Mukteswar Tripathy
        </h1>

        <p className="text-muted-foreground">Full-Stack Developer</p>
      </div>

      <AvailabilityBadge />
    </div>
  );
}
