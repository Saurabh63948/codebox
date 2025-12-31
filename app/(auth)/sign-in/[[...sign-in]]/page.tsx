'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 font-game">
      <SignIn.Root afterSignInUrl="/">
        <SignIn.Step
          name="start"
          className="
            w-full max-w-md space-y-6 rounded-xl
            bg-gradient-to-br from-zinc-900 to-black
            border border-green-500/40
            p-8 shadow-[0_0_40px_#22c55e33]
          "
        >
          {/* TITLE */}
          <header className="text-center space-y-2">
            <h1 className="text-green-400 text-lg tracking-widest">
              ENTER THE ARENA
            </h1>
            <p className="text-xs text-green-500/60">
              Login to continue
            </p>
          </header>

          <Clerk.GlobalError className="text-xs text-red-400 text-center" />

          {/* GOOGLE LOGIN */}
          <Clerk.Connection
            name="google"
            className="
              w-full flex items-center justify-center
              rounded-md border border-green-500/40
              bg-black px-4 py-3 text-xs
              text-green-400 hover:bg-green-500/10
              transition
            "
          >
            LOGIN WITH GOOGLE
          </Clerk.Connection>

          {/* DIVIDER */}
          <div className="text-center text-[10px] text-green-500/40">
            OR USE EMAIL ACCESS
          </div>

          {/* EMAIL */}
          <Clerk.Field name="identifier" className="space-y-1">
            <Clerk.Label className="text-xs text-green-400">
              EMAIL
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="
                w-full bg-black border border-green-500/40
                px-3 py-2 text-xs text-green-300
                outline-none focus:border-green-400
              "
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>

          {/* PASSWORD */}
          <Clerk.Field name="password" className="space-y-1">
            <Clerk.Label className="text-xs text-green-400">
              PASSWORD
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="
                w-full bg-black border border-green-500/40
                px-3 py-2 text-xs text-green-300
                outline-none focus:border-green-400
              "
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>

          {/* SUBMIT */}
          <SignIn.Action
            submit
            className="
              w-full rounded-md bg-green-500
              text-black py-3 text-xs
              hover:bg-green-400 transition
            "
          >
            START GAME
          </SignIn.Action>

          {/* FOOTER */}
          <p className="text-center text-[10px] text-green-500/60">
            NEW PLAYER?{' '}
            <Clerk.Link
              navigate="sign-up"
              className="text-green-400 hover:underline"
            >
              CREATE ACCOUNT
            </Clerk.Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
