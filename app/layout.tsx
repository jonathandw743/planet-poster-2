import "./global.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <ul>
            <li><Link href="/createsession">create session</Link></li>
            <li><Link href="/joinsession">join session</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
