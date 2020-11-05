import { FindOptions, Model } from 'sequelize'

export class SequelizePaginate<
  TInstance extends { excludeCountOptions: string[] },
  TAttributes
> {
  public paginate (Model: Model<TInstance, TAttributes>): void
}

export interface Paginate {
  paginate?: number
  page?: number
}

export interface PaginateResult<TAttributes> {
  docs: TAttributes[]
  pages: number
  total: number
  paginate: number
  page: number
}

export function paginate<
  TInstance extends { excludeCountOptions: string[] },
  TAttributes
> (Model: Model<TInstance, TAttributes>): void
export function pagination<T, TAttributes> (
  params: FindOptions & Paginate
): Promise<TAttributes>
