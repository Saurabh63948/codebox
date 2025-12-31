import { SignIn } from '@clerk/nextjs'

export default function SSOCallbackPage() {
  return (
    <SignIn
      afterSignInUrl="/"
      afterSignUpUrl="/"
    />
  )
}
