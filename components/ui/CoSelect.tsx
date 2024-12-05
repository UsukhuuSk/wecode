import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "@radix-ui/react-icons";

interface CoSelectProps {
    value?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    items: Array<{ label: string; value: string }>;
}

export const CoSelect: React.FC<CoSelectProps> = ({
    value,
    onChange,
    disabled = false,
    placeholder = "Select an option",
    items,
}) => {
    return (
        <Select.Root value={value} onValueChange={onChange} disabled={disabled}>
            <Select.Trigger
                className={`h-11 bg-[#13032B80] w-full flex justify-between items-center border border-[#484261] rounded-xl px-4  text-nowrap  w  text-white ${disabled ? "border-gray-300 text-gray-400" : "border-gray-500 text-black"
                    }`}
                aria-label="CoSelect"
            >
                <div className="w-4/5 truncate text-left">
                    <Select.Value placeholder={placeholder} />
                </div>
                <Select.Icon>
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content className="bg-[#13032B] border border-[#484261]  rounded-xl shadow-lg">
                    <Select.ScrollUpButton className="flex items-center justify-center py-1">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>

                    <Select.Viewport className="p-2">
                        {items.map(({ label, value }) => (
                            <CoSelectItem key={value} value={value}>
                                {label}
                            </CoSelectItem>
                        ))}
                    </Select.Viewport>

                    <Select.ScrollDownButton className="flex items-center justify-center py-1">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

interface CoSelectItemProps {
    value: string;
    children: React.ReactNode;
}

export const CoSelectItem: React.FC<CoSelectItemProps> = ({ value, children }) => {
    return (
        <Select.Item
            value={value}
            className="flex items-center px-4 py-2  hover:bg-blue-950 focus:bg-slate-900 rounded outline-none cursor-pointer text-sm text-white"
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="ml-auto">
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
};
