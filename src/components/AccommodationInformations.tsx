interface IAccInformationProps {
  firstInfo: string;
  secondInfo: string;
  thirdInfo?: string;
  fourthInfo?: string;
  fifthInfo?: string;
  sixthInfo?: string;
}

const AccommodationInformation = ({
  firstInfo,
  secondInfo,
  thirdInfo,
  fourthInfo,
  fifthInfo,
  sixthInfo,
}: IAccInformationProps) => {
  return (
    <ul className="flex flex-row gap-2 select-none">
      <li className="list-acc-details">{firstInfo}</li>
      <li className="list-acc-details">{secondInfo}</li>
      <li className="list-acc-details">{thirdInfo}</li>
      <li className="list-acc-details">{fourthInfo}</li>
    </ul>
  );
};

export default AccommodationInformation;
