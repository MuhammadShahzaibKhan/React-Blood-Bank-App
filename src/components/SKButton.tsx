interface SKBtnProps {
  name?: string;
  onClick?: any;
  disabled?: boolean;
}

export default function SKButton(props: SKBtnProps) {
  const { name, onClick, disabled } = props;
  return (
    <>
      <div>
        <button className="skBtn w-100" onClick={onClick} disabled={disabled}>
          {name}
        </button>
      </div>
    </>
  );
}
