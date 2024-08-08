export interface IEvents {
  data: IEvent[],
  meta: {
    current_page: number,
    last_page: number,
  }
}

export interface IEvent {
  id: number
  day: string
  discipline_name: string
  discipline_pictogram: string
  name: any
  venue_name: string
  event_name: string
  detailed_event_name: string
  start_date: string
  end_date: string
  status: string
  is_medal_event: number
  is_live: number
  gender_code: string
  competitors: ICompetitor[]
}

export interface ICompetitor {
  country_id: string
  country_flag_url: string
  competitor_name: string
  position: number
  result_position: string
  result_winnerLoserTie: string
  result_mark: string
}
