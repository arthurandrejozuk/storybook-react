import classNames from "classnames";
import Box from "../Box/Box";
import {
    ExclamationCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import Typography from "../Typograph/Typography";
import Button from "../Button/Button";

export type NoticeProps = {
    children?: React.ReactNode;
    type?: "alert" | "success" | "error" | "secondary";
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

// Criamos um padrão para cada alerta
const noticeStyles = {
    secondary: {
        icon: "hidden",
        text: "text-gray-500",
        button: "bg-green-500",
        moreAction: true,
    },
    alert: {
        icon: "text-yellow-500",
        text: "text-yellow-700",
        button: "bg-yellow-500",
        moreAction: false,
    },
    success: {
        icon: "text-green-600",
        text: "text-green-700",
        button: "bg-green-500",
        moreAction: false,
    },
    error: {
        icon: "text-red-500",
        text: "text-red-700",
        button: "bg-red-500",
        moreAction: true,
    },
};

const Notice = ({
    children = "Amet minim mollit non deserunt ullamco est",
    type = "secondary",
    className,
    ...rest
}: NoticeProps) => {
    const styles = noticeStyles[type] ?? noticeStyles.secondary;

    return (
        <Box
            rounded
            className={classNames(
                "flex flex-row items-center justify-between gap-2 p-3",
                className
            )}
            filledBackground
            type={type}
            {...rest}
        >
            <Box
             rounded
            className={classNames(
                "flex flex-row items-center justify-between gap-5 p-3",
                className
            )}
            filledBackground
            type={type}>
                 <ExclamationCircleIcon
                className={classNames("h-7 w-7 shrink-0", styles.icon)}
            />

            <Typography className="text-[20px]" >
                {children}
            </Typography>

                <Button

                type="button"
                aria-label="Fechar aviso"
                className={classNames("ml-auto shrink-0 bg-", styles.button)}
            >
                Action
                </Button>
                {styles.moreAction ?
                <Button
                    
                    type="button"
                    aria-label=""
                    className={classNames("ml-auto shrink-0 bg-gray-400")}
                >
                    Action
                </Button> : 
                <></>
            }
           </Box>
            <XMarkIcon  className="relative h-6 w-6 text-gray-700" />
        </Box>
    );
};

export default Notice;