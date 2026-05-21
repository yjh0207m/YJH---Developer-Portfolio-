import { useState, useMemo } from 'react'

export function usePagination(items = [], perPage = 5) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(items.length / perPage)
  const slice = useMemo(
    () => items.slice((page - 1) * perPage, page * perPage),
    [items, page, perPage]
  )
  return { page, setPage, totalPages, slice }
}
