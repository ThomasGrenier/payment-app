export function getChipColor(status: string): string {
  switch (status) {
    case "in_progress":
    case "pending":
      return "warning";
    case "late":
      return "error";
    case "completed":
    case "paid":
      return "success";
    default:
      return "default";
  }
}
