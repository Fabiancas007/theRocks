import "./SelectInput.css";

interface SelectInputProps{
  label: string;
  options: string[];
  value: string;
  text?: string;
  disabled?: boolean;
  onSelect: (value: string) => void;
}

export const SelectInput = (props: SelectInputProps) => {
  return (
    <div>
      <label>{props.label}</label>
      <select value={props.value} onChange={(e) => props.onSelect(e.target.value)} disabled={props.disabled}>
        <option value="">{props.text}</option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
