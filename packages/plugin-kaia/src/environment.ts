import type { IAgentRuntime } from "@elizaos/core";
import { z } from "zod";

export const kaiascanEnvSchema = z.object({
    KAIASCAN_API_KEY: z.string().min(1, "Kaiascan API key is required"),
});

export type KaiascanConfig = z.infer<typeof kaiascanEnvSchema>;

export async function validateKaiascanConfig(
    runtime: IAgentRuntime
): Promise<KaiascanConfig> {
    try {
        const config = {
            KAIASCAN_API_KEY: runtime.getSetting("KAIASCAN_API_KEY"),
        };

        return kaiascanEnvSchema.parse(config);
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors
                .map((err) => `${err.path.join(".")}: ${err.message}`)
                .join("\n");
            throw new Error(
                `Kaiascan configuration validation failed:\n${errorMessages}`
            );
        }
        throw error;
    }
}
