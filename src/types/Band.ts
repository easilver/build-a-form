import {TicketType} from './TicketType'
export interface Band {
  date: number
  description_blurb: string
  id: string
  imgUrl: string
  location: string
  name: string
  ticketTypes: TicketType[]
}