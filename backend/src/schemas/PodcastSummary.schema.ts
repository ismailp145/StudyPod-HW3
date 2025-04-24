import { z } from "zod";

export const PodcastSummarySchema = z.object({
  id:        z.number(),
  title:     z.string().min(1),
  textContent: z.string().min(1),
});
