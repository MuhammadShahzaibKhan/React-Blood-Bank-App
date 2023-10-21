interface inputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: any;
}

export default function SKInput(props: inputProps) {
  const { type, placeholder, disabled, onChange} = props;

  return (
    <>
      <input type={type} placeholder={placeholder} onChange={onChange} disabled={disabled}/>
    </>
  );
}
