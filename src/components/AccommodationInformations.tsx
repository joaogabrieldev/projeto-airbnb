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
      <li className="list-acc-details">{firstInfo}</li>
      <li className="list-acc-details">{secondInfo}</li>
      <li className="list-acc-details">{thirdInfo}</li>
      <li className="list-acc-details">{fourthInfo}</li>
      {fifthInfo?.length !== 0 ? (
        <li className="list-acc-details">{fifthInfo}</li>
      ) : null}
      {sixthInfo?.length !== 0 ? (
        <li className="list-acc-details">{sixthInfo}</li>
      ) : null}
    </ul>
  );
};

export default AccommodationInformation;
