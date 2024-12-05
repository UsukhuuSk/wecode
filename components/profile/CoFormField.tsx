import { useTranslations } from "next-intl";



export const CoFormField = ({ label, children, isError }: any) => {
  const trnsAcc = useTranslations("quiz");

  return (
    <div>
      <p className={`${isError ? 'text-red-400 rounded-xl' : ''} font-neue mb-2`} >{trnsAcc(label)}</p>
      {children}
    </div>
  );
}