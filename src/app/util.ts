export async function fetchFromBaseUrl<T>(endpoint: string): Promise<T> {
  const baseUrl = process.env.BASE_URL ?? "http://localhost:4000";
  const url = `${baseUrl}${endpoint}`; 

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  return response.json();
}
