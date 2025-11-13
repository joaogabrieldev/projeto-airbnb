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
    <ul className="flex w-full flex-row gap-2 select-none">
      {firstInfo && <li className="list-acc-details">{firstInfo}</li>}
      {secondInfo && <li className="list-acc-details">{secondInfo}</li>}
      {thirdInfo && <li className="list-acc-details">{thirdInfo}</li>}
      {fourthInfo && <li className="list-acc-details">{fourthInfo}</li>}
      {fifthInfo && <li className="list-acc-details">{fifthInfo}</li>}
      {sixthInfo && <li className="list-acc-details">{sixthInfo}</li>}
    </ul>
  );
};

export default AccommodationInformation;
