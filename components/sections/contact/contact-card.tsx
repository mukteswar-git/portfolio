type ContactCardProps = {
  title: string;
  value: string;
  href?: string;
};

export function ContactCard({ title, value, href }: ContactCardProps) {
  return (
    <article className="rounded-xl border bg-card p-6">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">{title}</p>

        {href ? (
          <a
            href={href}
            className="font-medium underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:underline"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium">{value}</p>
        )}
      </div>
    </article>
  );
}
