import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonStyles = cva("", {
    variants: {
        variant: {
            primary: "",
            secondary: "bg-primary-300 hover:bg-primary-400 rounded-full px-6 py-4 duration-300",
            tetriary: "",
            "tetriary-reversed": "border py-3 px-5 rounded-full text-white hover:bg-primary-300 duration-300 hover:text-black"
        },
        size: {
            sm: "",
            md: "",
        },
    },
});

export type ButtonStylesProps = VariantProps<typeof buttonStyles>