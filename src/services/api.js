const DEFAULT_DELAY = 250

function simulateNetworkDelay(ms = DEFAULT_DELAY) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fetchMock(data, options = {}) {
  const { delay = DEFAULT_DELAY, filter } = options

  await simulateNetworkDelay(delay)

  if (filter) {
    return filter(data)
  }

  return data
}

export async function fetchMockById(collection, id, idKey = 'id') {
  const item = collection.find((entry) => String(entry[idKey]) === String(id))
  if (!item) {
    const error = new Error('Resource not found')
    error.status = 404
    throw error
  }
  return fetchMock(item)
}
