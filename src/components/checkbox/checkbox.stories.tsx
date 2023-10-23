import React from "react";
import type { Story } from "@ladle/react";
import {
    Checkbox,
    CheckboxControl,
    CheckboxLabel,
    type CheckboxProps,
} from '~/components/checkbox'

export const checkbox: Story = (props: CheckboxProps) => {
    return (
        <Checkbox defaultChecked {...props}>
            {(state) => (
                <>
                    <CheckboxControl>
                        {state.isChecked && <CheckIcon />}
                        {state.isIndeterminate && <MinusIcon />}
                    </CheckboxControl>
                    <CheckboxLabel>Label</CheckboxLabel>
                </>
            )}
        </Checkbox>
    )
}

const CheckIcon = () => (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const MinusIcon = () => (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.91675 7H11.0834"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Checkbox"
};