import Image from "next/image";
import Link from "next/link";

import Button from "../UI/Button";
import Form from "../UI/Form";
import Input from "../UI/Input";

import logo from "@public/assets/logo2x.png";
import searchImg from "@public/assets/search.png";

import styles from "@styles/componentStyles/Header.module.scss";

interface HeaderProps {
    inputData: () => void;

    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;

    value: string;
}

export const HeaderDumb = ({
    inputData,
    handleInputChange,
    value,
}: HeaderProps): JSX.Element => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        inputData();
    };

    return (
        <div className={styles.header}>
            <Link href="/">
                <a className={styles.anchor}>
                    <Image
                        src={logo}
                        alt="mercadolibre"
                        width={50}
                        height={35}
                    />
                </a>
            </Link>

            <Form handlesubmit={handleSubmit}>
                <Input
                    ariaLabel="buscador"
                    id="search"
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    moreClass="ms-3"
                    value={value}
                    onchange={handleInputChange}
                />
                <Button
                    type="submit"
                    moreClass={styles.button}
                    classProp={styles.find}
                >
                    <Image
                        src={searchImg}
                        alt="search"
                        width={15}
                        height={15}
                    ></Image>
                </Button>
            </Form>
        </div>
    );
};
