import {
  IconAlarmSmoke,
  IconBrandCarbon,
  IconDesk,
  IconDog,
  IconParking,
  IconPhoto,
  IconPool,
  IconSailboat,
  IconToolsKitchen2,
  IconWifi,
} from "@tabler/icons-react";

import Benefict from "./Benefict";

interface IAccBenefictsProps {
  label: string;
}

const AccommodationBeneficts = () => {
  return (
    <ul className="grid grid-cols-2">
      <Benefict>
        <IconPhoto />
        <span>Vista para as montanhas</span>
      </Benefict>
      <Benefict>
        <IconToolsKitchen2 />
        <span>Cozinha</span>
      </Benefict>
      <Benefict>
        <IconDesk />
        <span>Espaço de trabalho exclusivo</span>
      </Benefict>
    </ul>
  );
};

export default AccommodationBeneficts;
