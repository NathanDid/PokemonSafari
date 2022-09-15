export async function get<T>(path: string): Promise<T> {
    const apiUrl = 'https://api.app.localhost/api'
    const res = await fetch(`${apiUrl}${path}`, { method: 'GET' })

    if (!res.ok) {
      throw new Error(`GET request to ${path} failed.`);
    }

    return await res.json()
  }