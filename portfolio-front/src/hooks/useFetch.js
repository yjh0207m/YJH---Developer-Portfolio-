import { useState, useEffect } from 'react'

export function useFetch(fetchFn, deps = []) {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState((prev) => ({ ...prev, loading: true, error: null }))

    fetchFn()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null })
      })
      .catch((err) => {
        if (!cancelled)
          setState({
            data: null,
            loading: false,
            error: { message: err.message || '데이터를 불러오지 못했습니다.', status: err.status },
          })
      })

    return () => {
      cancelled = true
    }
    // fetchFn 은 deps 변경 시 클로저가 갱신되므로 deps 만 추적
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
