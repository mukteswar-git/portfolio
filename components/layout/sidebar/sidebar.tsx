import { Credentials } from "./credentials";
import { Navigation } from "./navigation/navigation";
import { ProfilePhoto } from "./profile-photo";
import { SocialLinks } from "./social-links";

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-80 flex-col">
      <div className="flex flex-1 flex-col justify-between py-8">
        <div className="space-y-6">
          <ProfilePhoto />

          <Credentials />

          <Navigation />
        </div>

        <SocialLinks />
      </div>
    </aside>
  );
}
