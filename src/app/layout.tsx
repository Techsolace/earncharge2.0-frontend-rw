import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "EarnCharge - Instant Transactions and Secure Payments",
  description:
    "Recharge is fast and easy to use. So, a user can look for a suitable recharge plan and complete the recharge in just a few clicks. It does not even take a minute. Recharge is 100% safe for making your payments. It offers end-to-end data protection with each prepaid recharge.",
  keywords: [
    "Earn",
    "Recharge",
    "Bills",
    "Payment",
    "Instant",
    "UPI",
    "App",
  ],
  authors: [{ name: "Alperz Team" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.earncharge.in"),
  openGraph: {
    title: "EarnCharge - Instant Transactions and Secure Payments",
    description:
      "Recharge is fast and easy to use. So, a user can look for a suitable recharge plan and complete the recharge in just a few clicks. It does not even take a minute. Recharge is 100% safe for making your payments. It offers end-to-end data protection with each prepaid recharge.",
    url: "https://www.alperzclub.com",
    siteName: "EarnCharge",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Alperz Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EarnCharge - Instant Transactions and Secure Payments",
    description:
      "Recharge is fast and easy to use. So, a user can look for a suitable recharge plan and complete the recharge in just a few clicks. It does not even take a minute. Recharge is 100% safe for making your payments. It offers end-to-end data protection with each prepaid recharge.",
    images: ["banner.jpg"],
    creator: "@earncharge", // Optional: Replace with your actual Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
