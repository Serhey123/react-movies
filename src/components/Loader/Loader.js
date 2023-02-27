import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      height={50}
      width={50}
      color="#000"
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
      secondaryColor="#f0"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
}
