import { useQuery } from "@tanstack/react-query";
import type { DesignStyle } from "../backend.d";
import { Category } from "../backend.d";
import { useActor } from "./useActor";

export { Category };
export type { DesignStyle };

export function useGetAllDesignStyles() {
  const { actor, isFetching } = useActor();
  return useQuery<DesignStyle[]>({
    queryKey: ["designStyles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllDesignStyles();
    },
    enabled: !!actor && !isFetching,
  });
}
