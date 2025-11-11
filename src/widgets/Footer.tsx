import { Figtree } from "next/font/google";
import Link from "next/link";
const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className={`bg-gray-200 px-8 py-7 ${figtree.className}`}>
      <div className="font-semibold">&copy; 2025 Airbnb, Inc.</div>
      <ul className="flex flex-row gap-2 select-none">
        <li className="list-footer">
          <Link href={"#"}>Privacidade</Link>
        </li>
        <li className="list-footer">
          <Link href={"#"}>Termos</Link>
        </li>
        <li className="list-footer">
          <Link href={"#"}>Mapa do site</Link>
        </li>
        <li className="list-footer">
          <Link href={"#"}>Informações da Empresa</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
