import * as React from 'react';
import IconSearch from '@icons/icon-search';
import IconCloseRegular from '../../../generated/kenos-icons/icon-close-regular';
import {useFieldProps} from '@patterns/Forms/form-context';
import {IconButton} from '@components/Buttons';
import {TextFieldBaseAutosuggest} from '@components/Input/TextFields/TextFieldBase';
import type {CommonFormFieldProps} from '@components/Input/TextFields/TextFieldBase';
import {useTheme} from '@hooks/hooks';
import {combineRefs} from '@utils/common';
import {createChangeEvent} from '@utils/dom';

export interface SearchFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    getSuggestions?: (value: string) => ReadonlyArray<string>;
}

const SearchField = React.forwardRef<any, SearchFieldProps>(
    (
        {
            disabled,
            error,
            helperText,
            name,
            optional,
            validate,
            onChange,
            onChangeValue,
            onBlur,
            value,
            defaultValue,
            ...rest
        },
        ref
    ) => {
        const theme = useTheme();
        const inputRef = React.useRef<HTMLInputElement>();
        const [searchValue, setSearchValue] = React.useState(defaultValue || '');

        const isControlledByParent = typeof value !== 'undefined';

        const controlledValue = isControlledByParent ? value : searchValue;

        const handleChangeValue = React.useCallback(
            (newValue: string, newRawValue: string) => {
                if (!isControlledByParent) {
                    setSearchValue(newValue);
                }
                onChangeValue?.(newValue, newRawValue);
            },
            [isControlledByParent, onChangeValue]
        );

        const clearInput = React.useCallback(() => {
            handleChangeValue('', '');
            if (inputRef.current) {
                onChange?.(createChangeEvent(inputRef.current, ''));
                inputRef.current.focus();
            }
        }, [handleChangeValue, onChange]);

        const fieldProps = useFieldProps({
            name,
            value: controlledValue,
            defaultValue: undefined,
            processValue: (v: string) => v,
            helperText,
            optional,
            error,
            disabled,
            onBlur,
            validate,
            onChange,
            onChangeValue: handleChangeValue,
        });

        return (
            <TextFieldBaseAutosuggest
                ref={combineRefs(inputRef, ref)}
                startIcon={<IconSearch />}
                endIcon={
                    controlledValue ? (
                        <IconButton
                            size={48}
                            style={{display: 'flex', padding: 12, margin: -12}}
                            aria-label={theme.texts.formSearchClear}
                            onPress={clearInput}
                        >
                            <IconCloseRegular />
                        </IconButton>
                    ) : undefined
                }
                {...rest}
                {...fieldProps}
                type="search"
            />
        );
    }
);

export default SearchField;
