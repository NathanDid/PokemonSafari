const apiUrl = 'https://api.app.localhost/api'

export async function get<T>(path: string): Promise<T> {
    const res = await fetch(`${apiUrl}${path}`, { method: 'GET' })

    if (!res.ok) {
      throw new Error(`GET request to ${path} failed.`);
    }

    return await res.json()
  }

export async function post<T>(path: string, body: BodyInit): Promise<T> {
    const res = await fetch(`${apiUrl}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ...('string' === typeof body
          ? { 'Content-Type': 'application/json' }
          : null
        )
      },
      body
    })
  
    if (!res.ok) {
      throw new Error(`POST request to ${path} failed.`)
    }
  
    return res.json()
  }