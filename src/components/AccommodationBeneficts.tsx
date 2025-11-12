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

// interface IAccBenefictsProps {
//   label: string;
// }

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
      <Benefict>
          <IconPool />
          <span>Piscina privativa</span>
      </Benefict>
      <Benefict>
        <IconBrandCarbon/>
        <span>Alarme de segurança p/ gás</span>
      </Benefict>
      <Benefict>
        <IconSailboat/>
        <span>Vista para águas</span>
      </Benefict>
      <Benefict>
        <IconWifi/>
        <span>Wi-Fi rápido (83 Mbps)</span>
      </Benefict>
      <Benefict>
        <IconParking/>
        <span>Estacionamento incluído</span>
      </Benefict>
      <Benefict>
        <IconParking/>
        <span>Estacionamento incluído</span>
      </Benefict>
      <Benefict>
        <IconDog/>
        <span>Permitindo animais</span>
      </Benefict>
      <Benefict>
        <IconAlarmSmoke/>
        <span>Detector de fumaça</span>
      </Benefict>
    </ul>
  );
};

export default AccommodationBeneficts;
