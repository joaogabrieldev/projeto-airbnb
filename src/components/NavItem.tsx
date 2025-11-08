import Link from "next/link";

interface IProps {
  label: string;
  activeItem: string;
  onClick: () => void;
  defaultTransition: string;
  href: string;
}

const NavItem = ({
  label,
  activeItem,
  defaultTransition,
  href,
  onClick,
}: IProps) => {
  const baseItemStyle = `font-semibold  opacity-50 ${defaultTransition} hover:opacity-100 hover:text-[#FF385C]`;

  function toggleActiveItem(currentItemState: string): string {
    const isActive = currentItemState === label;

    const classesTest = isActive
      ? `opacity-100 text-[#FF385C]`
      : `text-gray-600 ${baseItemStyle} ${defaultTransition}`;

    return classesTest;
  }

  const styleClass = `${toggleActiveItem(activeItem)} ${baseItemStyle}`;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={styleClass}
      style={{
        cursor: "pointer",
      }}
    >
      {label}
    </Link>
  );
};

export default NavItem;
