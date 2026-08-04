import ReactIcon from "@/app/assets/icons/frontend/react.svg";
import NextjsIcon from "@/app/assets/icons/frontend/nextdotjs.svg";
import TypeScriptIcon from "@/app/assets/icons/frontend/typescript.svg";
import NodejsIcon from "@/app/assets/icons/backend/nodedotjs.svg";
import PostgreSQLIcon from "@/app/assets/icons/database/postgresql.svg";

export const TECH_STACK = [
  {
    name: "React",
    icon: ReactIcon,
    brandColor: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: NextjsIcon,
    brandColor: "#000000",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    brandColor: "#3178C6",
  },
  {
    name: "Node.js",
    icon: NodejsIcon,
    brandColor: "#5FA04E",
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
    brandColor: "#4169E1",
  },
] as const;
