import AccommodationBeneficts from "@/components/AccommodationBeneficts";
import AccommodationInformation from "@/components/AccommodationInformations";

const AccommodationDetails = () => {
  return (
    <div className="w-full py-4">
      <h3 className="text-xl font-semibold">Espaço inteiro: {}</h3>
      <AccommodationInformation
        firstInfo={"10 hóspedes"}
        secondInfo={"5 quartos"}
        thirdInfo="5 camas"
        fourthInfo="6 banheiros"
        fifthInfo=""
      />
      <h2 className="pt-4 text-xl font-semibold">O que esse lugar oferece?</h2>
      <AccommodationBeneficts />
    </div>
  );
};

export default AccommodationDetails;
