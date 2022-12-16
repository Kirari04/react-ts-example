import React, { FC } from "react";

interface Props {
    title: string;
}

export const Header: FC<Props> = ({ title }) => (
    <header>
        <h1>{title}</h1>
    </header>
);
