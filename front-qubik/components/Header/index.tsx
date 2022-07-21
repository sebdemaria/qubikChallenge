import { HeaderDumb } from "./HeaderDumb";
import { useForm } from "@hooks/useForm";

const Header = (): React.ReactElement => {
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
