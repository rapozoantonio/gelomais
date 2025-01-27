import Preloader from "@/components/Preloader";
import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "GeloMais | %s",
    default: "GeloMais | Fábrica de Gelo em Cubos e Escamas",
  },
  description:
    "A GeloMais é referência na produção de gelo em cubos e escamas feitos com água potável. Fornecemos embalagens de diversos tamanhos para bares, restaurantes, eventos e revendedores em todo o Brasil. Qualidade e entrega pontual garantidas.",
  // Optionally, you can add more metadata fields like open graph or keywords
  openGraph: {
    title: "GeloMais",
    description:
      "Fábrica de gelo em cubos e escamas produzidos com água potável. Qualidade e pontualidade para revendedores, bares, restaurantes e eventos em todo o Brasil.",
    url: "https://www.gelomais.com.br",
    type: "website",
  },
  keywords: ["gelo", "gelo em cubos", "gelo em escamas", "água potável", "GeloMais", "revendedor de gelo"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
