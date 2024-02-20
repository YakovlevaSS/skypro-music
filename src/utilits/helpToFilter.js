/* eslint-disable import/prefer-default-export */
export function compare(a, b) {
    const dateA = new Date(a.release_date)
    const dateB = new Date(b.release_date)
  
    return dateB - dateA
  }