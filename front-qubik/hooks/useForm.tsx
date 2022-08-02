import { useRouter } from "next/router";
import { useState } from "react";

export const useForm = (
    initialState = ""
): [
    () => void,
    string,
    React.ChangeEventHandler<HTMLInputElement>,
    () => void
] => {
    const router = useRouter();

    const [value, setValue] = useState<string>(initialState);

    const handleInputChange = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>) => {
        setValue((target as HTMLInputElement).value);
    };

    const reset = (): void => {
        setValue(initialState);
    };

    //function to send prop with input value for product listing
    const getInputDataForSearch = (): void => {
        router.push(`/items?search=${value.replace(" ", "%20")}`);
        reset();
    };

    return [getInputDataForSearch, value, handleInputChange, reset];
};
