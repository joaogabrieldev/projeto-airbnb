interface IBenefictProps {
  children: React.ReactNode;
}

const Benefict = ({ children }: IBenefictProps) => {
  return <li className="flex flex-row gap-1">{children}</li>;
};

export default Benefict;
