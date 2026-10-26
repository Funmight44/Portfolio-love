export function TechBadges({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
          {t}
        </li>
      ))}
    </ul>
  );
}
