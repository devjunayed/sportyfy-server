/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from 'mongoose'
import { TIncomingSlotData } from './slots.interface'
import { Slot } from './slots.model'
import dayjs from 'dayjs'

const createSlotsIntoDB = async (payload: TIncomingSlotData) => {
  const { dateRange, startTime, endTime, facilities, slotInterval } = payload

  const allSlots = []

  const startDate = dayjs(dateRange[0])
  const endDate = dayjs(dateRange[1])

  for (
    let currentDate = startDate;
    currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day');
    currentDate = currentDate.add(1, 'day')
  ) {
    const dateString = currentDate.format('YYYY-MM-DD')

    for (const facility of facilities) {
      let slotStart = dayjs(`${dateString}T${startTime}`)
      const slotEndLimit = dayjs(`${dateString}T${endTime}`)

      while (slotStart.isBefore(slotEndLimit)) {
        const slotEnd = slotStart.add(slotInterval, 'minute')

        allSlots.push({
          facility: new Types.ObjectId(facility),
          date: dateString,
          startTime: slotStart.format('HH:mm'),
          endTime: slotEnd.format('HH:mm'),
        })
        slotStart = slotEnd;
      }
      
    }
  }

  const result = await Slot.insertMany(allSlots);

  return result;
}

export const SlotService = {
  createSlotsIntoDB,
}
