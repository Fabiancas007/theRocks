interface TextInputProps {
  label: string;
  onInputChange: (value: string) => void;
  value: string;
  type?: string;
  step?: string;
}
export const TextInput = (props: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onInputChange(event.target.value);
  };
  return (
    <div className="text-input">
    <label>{props.label} *</label>
    <input
      type={props.type}
      value={props.value}
      onChange={handleChange}
      placeholder={`Ingresa ${props.label}`}
      step={props.step}
    />
  </div>
  )
}
