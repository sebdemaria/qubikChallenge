import { useForm } from "@hooks/useForm";
import { HeaderDumb } from "./HeaderDumb";

const Header = (): JSX.Element => {
    const [getInputDataForSearch, value, handleInputChange] = useForm();

    return (
        <HeaderDumb
            inputData={getInputDataForSearch}
            handleInputChange={handleInputChange}
            value={value}
        />
    );
};

export default Header;
