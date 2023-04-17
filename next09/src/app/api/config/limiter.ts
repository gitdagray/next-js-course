import { RateLimiter } from "limiter"

export const limiter = new RateLimiter({
    tokensPerInterval: 3,
    interval: "min",
    fireImmediately: true,
})