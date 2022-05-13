import { SelectHTMLAttributes, useState } from 'react'

export type SelectItemsData = {
  value: string
  label: string
}

import * as S from './styles'

export type SelectProps = {
  onSelectChange?: (value?: string) => void
  label?: string
  initialValue?: string
  disabled?: boolean
  error?: string
  items: SelectItemsData[]
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  label,
  initialValue = '',
  disabled = false,
  error,
  name,
  items,
  onSelectChange,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onSelectChange && onSelectChange(newValue)
  }
  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        >
          <option value="">{initialValue}</option>
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Select
