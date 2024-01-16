import axios from "axios";
import { BASE_URL } from "~/constants/envs";
import { ACCESS_TOKEN } from "~/constants/tokens";
import { cache } from "~/utils/cache.util";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (initialConfig) => {
  const config = initialConfig;

  if (cache.has(ACCESS_TOKEN)) {
    config.headers["Authorization"] = `Bearer ${cache.getValue(ACCESS_TOKEN)}`;
  }

  return config;
});

export { api };
