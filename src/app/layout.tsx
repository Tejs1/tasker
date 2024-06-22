import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Link from "next/link";

export const metadata = {
  title: "Task Manager",
  description: "Simple Task  App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        suppressHydrationWarning
        lang="en"
        className={`${GeistSans.variable}  `}
      >
        <body
          className="flex min-h-screen w-full flex-col items-center p-4"
          suppressHydrationWarning
        >
          <nav className="flex w-full flex-row justify-between">
            <div className="flex flex-row justify-between gap-4">
              <h1>Tasker</h1>
            </div>
            <div className="flex flex-row gap-4">
              <SignedOut>
                <div>
                  <SignInButton />
                </div>
                <div>
                  <SignUpButton />
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
