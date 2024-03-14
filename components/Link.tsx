import Link from "next/link";

interface HeaderLinkProps {
  text: string;
  href: string;
}
export const HeaderLink = ({ text, href }: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      className="text-md tracking-widest text-black font-extralight uppercase cursor-pointer"
    >
      {text}
    </Link>
  );
};
