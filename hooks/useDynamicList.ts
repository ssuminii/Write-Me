import { useCallback } from 'react';

type FieldUpdater<T> = (id: number, field: keyof T, value: string) => void

export function useDynamicList<T extends {id: number}>(
  items:T[], 
  onChange:(updated: T[]) => void, 
  initalItem: Omit<T, 'id'>
) {
  const handleAdd = useCallback(() => {
    onChange([...items, {...initalItem, id: Date.now()} as T])
  }, [items, onChange])

  const handleRemove = useCallback((id: number) => {
    onChange(items.filter(item => item.id !== id))
  }, [items, onChange])

  const handleChange: FieldUpdater<T> = useCallback(
    (id, field, value) => {
      const updated = items.map(item => item.id === id ? {...item, [field]: value} : item)
      onChange(updated)
    }, [items, onChange]
  )

  return {handleAdd, handleRemove, handleChange}
}