// Delay function used to simulate API interaction
export function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
