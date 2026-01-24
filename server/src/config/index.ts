import { getLocalIp } from "../utils/ip";
const HOST = Bun.env.HOST ?? getLocalIp();
const PORT = Bun.env.PORT ?? 80;
export { PORT, HOST };
