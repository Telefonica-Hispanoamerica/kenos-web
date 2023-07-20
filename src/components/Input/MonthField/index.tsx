import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useFieldProps} from '@patterns/Forms/form-context';
import IconCalendarRegular from '../../../generated/mistica-icons/icon-calendar-regular';
import {TextFieldBaseAutosuggest} from '@components/Input/TextFields/TextFieldBase';
import type {CommonFormFieldProps} from '@components/Input/TextFields/TextFieldBase';
import {isInputTypeSupported} from '@utils/dom';
import {isServerSide} from '@utils/environment';
import {getLocalYearMonthString} from '@utils/time';

export interface DateFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    min?: Date;
    max?: Date;
}

const ReactDateTimePicker = React.lazy(
    () => import(/* webpackChunkName: "date-time-picker" */ '@components/Input/DateTimePicker')
);

const DateField: React.FC<DateFieldProps> = ({
    disabled,
    error,
    helperText,
    name,
    optional,
    validate: validateProp,
    onChange,
    onChangeValue: onChangeValueProp,
    onBlur,
    value,
    defaultValue,
    min,
    max,
    ...rest
}) => {
    const processValue = (value: string) => value;
    const hasNativePicker = React.useMemo(() => isInputTypeSupported('month'), []);
    const {texts} = useTheme();

    const isInRange = (value: string): boolean => {
        if (min && value && value < getLocalYearMonthString(min)) {
            return false;
        }
        if (max && value && value > getLocalYearMonthString(max)) {
            return false;
        }
        return true;
    };

    const validate = (value: string, rawValue: string) => {
        if (!isInRange(value)) {
            return texts.formDateOutOfRangeError;
        }
        return validateProp?.(value, rawValue);
    };

    const onChangeValue = (value: string, rawValue: string) => {
        if (isInRange(value)) {
            onChangeValueProp?.(value, rawValue);
        }
        // if not in range, onChangeValue is not called
    };

    const fieldProps = useFieldProps({
        name,
        value,
        defaultValue,
        processValue,
        helperText,
        optional,
        error,
        disabled,
        onBlur,
        validate,
        onChange,
        onChangeValue,
    });

    const nativePicker = (
        <TextFieldBaseAutosuggest
            {...rest}
            {...fieldProps}
            min={min ? getLocalYearMonthString(min) : undefined}
            max={max ? getLocalYearMonthString(max) : undefined}
            type="month"
            endIconOverlay={
                <div style={{position: 'absolute', top: 16, right: 16, pointerEvents: 'none'}}>
                    <IconCalendarRegular />
                </div>
            }
        />
    );

    if (hasNativePicker || isServerSide()) {
        return nativePicker;
    }

    return (
        <React.Suspense fallback={nativePicker}>
            <ReactDateTimePicker
                {...rest}
                {...fieldProps}
                optional={optional}
                isValidDate={(currentDate) => isInRange(getLocalYearMonthString(currentDate.toDate()))}
                mode="year-month"
            />
        </React.Suspense>
    );
};

export default DateField;
