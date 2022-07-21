import { useState } from "react";
import { useRouter } from "next/router";

export const useForm = (
    initialState: string = ""
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

    const reset = () => {
        setValue(initialState);
    };

    //function to send prop with input value for product listing
    const getInputDataForSearch = () => {
        router.push(`/items?search=${value.replace(" ", "%20")}`);
        reset();
    };

    return [getInputDataForSearch, value, handleInputChange, reset];
};
