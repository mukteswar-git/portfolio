import Image from "next/image";

import ProfileImage from "@/app/assets/images/profile.png";

export function ProfilePhoto() {
  return (
    <div className="flex justify-center">
      <div className="rounded-full ring-1 ring-border/70">
        <Image
          src={ProfileImage}
          alt="Mukteswar Tripathy"
          width={180}
          height={180}
          priority
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
