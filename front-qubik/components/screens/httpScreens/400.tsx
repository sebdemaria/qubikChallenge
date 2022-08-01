import Head from "next/head";
import Image from "next/image";
import badRequest from "public/assets/400.png";

import styles from "styles/screenStyles/HttpScreens.module.scss";

export const BadRequest = () => {
    return (
        <>
            <Head>
                <title>Mercadolibre - Error</title>
                <meta name="description" content="Resultado busqueda" />
            </Head>
            <div className="container">
                <div className={styles.div}>
                    <div className={"col-12 " + styles.imgDiv}>
                        <Image
                            src={badRequest}
                            width={"100px"}
                            height={"100px"}
                            alt="not-found"
                        />
                    </div>
                    <div>
                        <h1>Bad Request.</h1>
                    </div>
                </div>
            </div>
        </>
    );
};
