import Link from "next/link";
import NavMenu from "./NavMenu";
import "./globals.css";
import AuthProvider from "./AuthProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <div className="container">
            <NavMenu />
            <main>{children}</main>
            <footer>
              <p>
                Created for the{" "}
                <Link href="https://fireship.io">
                  Fireship Next.js 13 Full Course
                </Link>
              </p>
              <ul>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>{" "}
                |
                <li>
                  <Link href={"https://www.youtube.com/@Fireship"}>
                    YouTube
                  </Link>
                </li>{" "}
                |
                <li>
                  <Link href={"/login"}>Source Code</Link>
                </li>{" "}
                |
                <li>
                  <Link href={"https://nextjs.org"}>NextJS Docs</Link>
                </li>
              </ul>
            </footer>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
