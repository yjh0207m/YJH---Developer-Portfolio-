import { useState, useEffect } from 'react'

const RETRY_COUNT = 5
const RETRY_DELAY = 4000

export function useFetch(fetchFn, deps = []) {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState((prev) => ({ ...prev, loading: true, error: null }))

    const attempt = (remaining) => {
      fetchFn()
        .then((data) => {
          if (!cancelled) setState({ data, loading: false, error: null })
        })
        .catch((err) => {
          if (cancelled) return
          if (remaining > 0) {
            setTimeout(() => attempt(remaining - 1), RETRY_DELAY)
          } else {
            setState({
              data: null,
              loading: false,
              error: { message: err.message || '데이터를 불러오지 못했습니다.', status: err.status },
            })
          }
        })
    }

    attempt(RETRY_COUNT)

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
