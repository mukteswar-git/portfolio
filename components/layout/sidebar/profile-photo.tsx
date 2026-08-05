import Image from "next/image";

import ProfileImage from "@/app/assets/images/profile.png";

export function ProfilePhoto() {
  return (
    <div className="flex justify-center">
      <div className="overflow-hidden rounded-full ring-1 ring-border/70">
        <Image
          src={ProfileImage}
          alt="Mukteswar Tripathy"
          priority
          width={180}
          height={180}
          className="h-32.5 w-32.5 rounded-full object-cover sm:h-37.5 sm:w-37.5 lg:h-45 lg:w-45"
        />
      </div>
    </div>
  );
}
