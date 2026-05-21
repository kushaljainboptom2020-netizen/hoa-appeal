export function formatDate(isoDate: string): string {
  if (!isoDate) return "[Date of Notice]";
  const parsed = new Date(isoDate + "T00:00:00");
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatCurrency(amount: string): string {
  const num = Number.parseFloat(amount);
  if (Number.isNaN(num)) return amount || "[Fine Amount]";
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function formatToday(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
