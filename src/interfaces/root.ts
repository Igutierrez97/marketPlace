import { Pageable } from "./pageable"
import { Producto } from "./producto"
import { Sort } from "./sort"

export interface Root {
    content: Producto[]
    pageable: Pageable
    last: boolean
    totalElements: number
    totalPages: number
    size: number
    number: number
    sort: Sort
    first: boolean
    numberOfElements: number
    empty: boolean
    error?:string
    status?: number
  }