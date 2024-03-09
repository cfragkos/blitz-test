import { AuthServerPlugin, PrismaStorage, simpleRolesIsAuthorized } from "@blitzjs/auth"
import { setupBlitzServer } from "@blitzjs/next"
import { RpcServerPlugin } from "@blitzjs/rpc"
import db from "db"
import { authConfig } from "./blitz-auth-config"

const { api, getBlitzContext, useAuthenticatedBlitzContext, invoke } = setupBlitzServer({
  plugins: [
    AuthServerPlugin({
      ...authConfig,
      storage: PrismaStorage(db),
      isAuthorized: simpleRolesIsAuthorized,
    }),
    RpcServerPlugin({}),
  ],
})

export { api, getBlitzContext, invoke, useAuthenticatedBlitzContext }
