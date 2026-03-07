"use client"

interface InputFieldProps {
  label: string
  value: number
  onChange: (value: number) => void
  step?: number
}

export default function InputField({
  label,
  value,
  onChange,
  step = 1
}: InputFieldProps) {

  return (
    <div style={{marginBottom: "16px"}}>

      <label
        style={{
          display: "block",
          fontWeight: 600,
          marginBottom: "6px"
        }}
      >
        {label}
      </label>

      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

    </div>
  )
}