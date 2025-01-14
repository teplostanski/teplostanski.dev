export const isPrefixPath = (prefixPath: string, pathName: string): boolean => {
  return pathName === prefixPath || pathName === `${prefixPath}/`
}
