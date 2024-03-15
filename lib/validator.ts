// import { z } from "zod"
import * as z from 'zod'

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Such a short title? you could do more :)'), 
  
  description: z.string().min(3, 'describe you heart out about the event a little bit more?').max(400, 'Noo, you went emoo, reduce it a little bit'),

  location: z.string().min(3, 'dont worry, u can express a bit more, we wont track you down :)').max(400, 'you really want to be found dont you?'),

  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})