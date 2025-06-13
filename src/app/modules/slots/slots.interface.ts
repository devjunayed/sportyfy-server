import { Types } from "mongoose"

export type TSlot = {
  facility: Types.ObjectId
  date: string
  startTime: string
  endTime : string
  bookedBy: Types.ObjectId | null
  isBooked: boolean
  isBlocked: boolean
}


export type TIncomingSlotData = {
  dateRange:  [string, string],
  startTime: string,
  endTime: string,
  facilities: string[],
  slotInterval: number
}