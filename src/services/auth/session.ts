import { changeTenantSvcCaller } from "./change-tenant/change-tenant.svc";
import type { TAuthTokens } from "./token";

export const resolveTenantTokens = async (tokens: TAuthTokens): Promise<TAuthTokens> => {
  try {
    const tenantTokens = await changeTenantSvcCaller.execute(undefined, {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    if (!tenantTokens.accessToken) return tokens;

    return {
      accessToken: tenantTokens.accessToken,
      refreshToken: tenantTokens.refreshToken || tokens.refreshToken,
    };
  } catch {
    return tokens;
  }
}
