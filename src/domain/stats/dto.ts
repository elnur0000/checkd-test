export type Period = 'week' | 'month' | 'season'

export interface GetStatsByPeriodParamsDto {
  period?: Period
}

export interface GetStatsByPeriodQueryParamsDto {
  weekId?: string
  monthId?: string
}
