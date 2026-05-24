// import "./globals.css";
// import { Inter, Nanum_Myeongjo } from "next/font/google";
// import Providers from "./providers";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const nanum = Nanum_Myeongjo({
//   weight: ["400", "700", "800"],
//   subsets: ["latin"],
//   variable: "--font-nanum",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ru">
//       <Providers>
//         <body className={`${inter.variable} ${nanum.variable}`}>
//         {children}
//       </body>
//       </Providers>
//     </html>
//   );
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}