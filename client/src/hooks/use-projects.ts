import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { z } from "zod";

function parseWithLogging<T>(schema: z.ZodSchema<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path, { credentials: "include" });
      if (!res.ok) {
        throw new Error(`Failed to fetch projects: ${res.statusText}`);
      }
      const data = await res.json();
      return parseWithLogging(api.projects.list.responses[200], data, "projects.list");
    },
  });
}

export function useProject(id: number | null) {
  return useQuery({
    queryKey: [api.projects.get.path, id],
    queryFn: async () => {
      if (!id) return null;
      const url = buildUrl(api.projects.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch project details");
      const data = await res.json();
      return parseWithLogging(api.projects.get.responses[200], data, "projects.get");
    },
    enabled: id !== null,
  });
}
