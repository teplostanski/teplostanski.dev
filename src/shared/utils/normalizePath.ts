export function normalizePath(
  path: string,
  leadingSlash: boolean = true,
  trailingSlash: boolean = false,
): string {
  // Нормализация множественных слешей
  path = path.replace(/\/+/g, '/')

  if (leadingSlash) {
    path = path.startsWith('/') ? path : `/${path}`
  } else {
    path = path.startsWith('/') ? path.slice(1) : path
  }

  if (trailingSlash) {
    path = path.endsWith('/') ? path : `${path}/`
  } else {
    path = path.endsWith('/') ? path.slice(0, -1) : path
  }

  return path || '/'
}
