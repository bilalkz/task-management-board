import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import { getPositions } from './multiSuggestData';


export interface IOptionType {
  id: string,
  name: string,
  value: object,
}
type IPositionDto = {
  id: string,
  name: string
}

export const mapToPositionSuggestion = (position: IPositionDto): IOptionType =>
  ({ id: position.id, name: position.name, value: {}})

const AutoSuggestMultiCombo = ({ handleChangeSelect, inputProps, label }: any) => {
  const [positionSuggestions, setPositionSuggestions] = useState<IOptionType[]>([])
  const [selectedPosition, setSelectedPosition] = useState<IOptionType[]>([])

  const handleChange = async (_event: any, value: any, _reason: any) => {
    let suggestions = await getPositions(value)
    if (selectedPosition.length > 0) {
      selectedPosition.forEach(e => {
        suggestions = suggestions.filter(ele => ele.name !== e.name);
      })
    }
    setPositionSuggestions(suggestions.map(mapToPositionSuggestion))
  }

  const checkSelected = (_event: React.ChangeEvent<{}>, value: any) => {
    setSelectedPosition(value)
    handleChangeSelect(value.map((e: IOptionType) => e.id))
  }

  return (
   
      <Autocomplete
        multiple
        id="tags-standard"
        options={positionSuggestions}
        getOptionLabel={(option: IOptionType) => option.name}
        onInputChange={handleChange}
        onChange={checkSelected}
        renderInput={params => (
          <FormControl className="width-100">
            <TextField
              {...params}
              placeholder={label}
              fullWidth
            />
          </FormControl>
        )}
      />
  );
}

export default AutoSuggestMultiCombo;
